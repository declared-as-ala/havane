import puppeteer from 'puppeteer';
import fs from 'fs';

// Get URL from command line argument or use default
const FACEBOOK_URL = process.argv[2] || 'https://www.facebook.com/havanepoitiers';

// Helper function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeFacebookPage(url) {
  console.log('Starting Facebook scraper...');
  console.log(`Target page: ${url}`);
  
  const browser = await puppeteer.launch({
    headless: false, // Set to true for production
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Set user agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    console.log('Navigating to Facebook page...');
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });

    // Wait for content to load
    console.log('Waiting for page content to load...');
    await delay(5000);

    // Scroll to load more posts
    console.log('Scrolling to load posts...');
    await autoScroll(page);

    // Extract posts data
    console.log('Extracting posts...');
    const posts = await page.evaluate(() => {
      const postsData = [];
      const seenPosts = new Set(); // To avoid duplicates
      
      // Facebook posts are typically in divs with specific data attributes
      const postElements = document.querySelectorAll('[data-pagelet*="FeedUnit"], [role="article"]');
      
      postElements.forEach((post, index) => {
        try {
          // Extract text content first to create a unique identifier
          const textElements = post.querySelectorAll('[data-ad-preview="message"], [data-testid="post_message"], span[dir="auto"]');
          const textParts = Array.from(textElements)
            .map(el => el.textContent?.trim())
            .filter(text => text && text.length > 0);
          const postText = textParts.join(' ').substring(0, 100); // First 100 chars as ID
          
          // Skip if we've seen this post before
          if (seenPosts.has(postText)) {
            return;
          }
          seenPosts.add(postText);

          const postData = {
            id: postsData.length + 1,
            text: postText,
            images: [],
            videos: [],
            timestamp: ''
          };

          // Extract images - look for multiple sources
          const imgElements = post.querySelectorAll('img[src*="scontent"], img[data-src*="scontent"], img[src*="fbcdn"], img[data-src*="fbcdn"]');
          imgElements.forEach(img => {
            let imgSrc = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
            if (imgSrc) {
              // Decode HTML entities
              imgSrc = imgSrc.replace(/&amp;/g, '&');
              
              // Filter out profile pictures and avatars
              if (!imgSrc.includes('profile') && 
                  !imgSrc.includes('avatar') && 
                  !imgSrc.includes('sticker') &&
                  !imgSrc.includes('emoji') &&
                  imgSrc.includes('scontent')) {
                
                // Keep the full URL with all parameters (needed for authentication)
                let fullImgSrc = imgSrc;
                
                // Try to get higher resolution by modifying size parameters
                // Facebook CDN URLs: try to request larger size
                if (fullImgSrc.includes('&w=') || fullImgSrc.includes('?w=')) {
                  // Replace width with larger value (2048 is often max)
                  fullImgSrc = fullImgSrc.replace(/[?&]w=\d+/g, '&w=2048');
                } else if (fullImgSrc.includes('&s=') || fullImgSrc.includes('?s=')) {
                  // For some formats, remove size parameter to get original
                  fullImgSrc = fullImgSrc.replace(/[?&]s=\d+/g, '');
                }
                
                // Try to find the actual image link in parent anchor (might lead to full-size)
                const parentLink = img.closest('a[href*="photo"], a[href*="photo.php"], a[href*="/photos/"]');
                if (parentLink) {
                  const href = parentLink.getAttribute('href');
                  if (href) {
                    // Store both the direct image URL and the photo page link
                    const photoLink = href.startsWith('http') ? href : 'https://www.facebook.com' + href;
                    // Use the direct image URL but note we have a photo link
                    // The photo link can be used to navigate and get full-size later
                  }
                }
                
                // Store the image URL with all parameters intact
                if (!postData.images.includes(fullImgSrc)) {
                  postData.images.push(fullImgSrc);
                }
              }
            }
          });

          // Extract videos - improved selectors
          const videoElements = post.querySelectorAll('video, [data-video-id], video source');
          videoElements.forEach(video => {
            let videoSrc = video.src || 
                          video.getAttribute('data-video-src') || 
                          video.getAttribute('src') ||
                          video.getAttribute('data-src');
            
            if (videoSrc && videoSrc.includes('video')) {
              videoSrc = videoSrc.replace(/&amp;/g, '&');
              if (!postData.videos.includes(videoSrc)) {
                postData.videos.push(videoSrc);
              }
            }
          });

          // Look for video links
          const videoLinks = post.querySelectorAll('a[href*="/videos/"], a[href*="video.php"]');
          videoLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !postData.videos.includes(href)) {
              postData.videos.push(href.startsWith('http') ? href : 'https://www.facebook.com' + href);
            }
          });

          // Extract timestamp
          const timeElement = post.querySelector('a[href*="/posts/"], a[href*="/videos/"], abbr[data-utime], a[role="link"][aria-label*="ago"]');
          if (timeElement) {
            postData.timestamp = timeElement.textContent?.trim() || 
                                timeElement.getAttribute('title') || 
                                timeElement.getAttribute('aria-label') || '';
          }

          // Only add post if it has content
          if (postData.text || postData.images.length > 0 || postData.videos.length > 0) {
            postsData.push(postData);
          }
        } catch (error) {
          console.error(`Error processing post ${index}:`, error);
        }
      });

      return postsData;
    });

    console.log(`Found ${posts.length} posts`);

    // Save results to JSON file
    const output = {
      page: url,
      scrapedAt: new Date().toISOString(),
      totalPosts: posts.length,
      posts: posts
    };

    fs.writeFileSync('scraped_data.json', JSON.stringify(output, null, 2));
    console.log('Data saved to scraped_data.json');

    // Download images
    if (posts.some(post => post.images.length > 0)) {
      console.log('Downloading images...');
      await downloadImages(posts, page);
    }

    // Download videos
    if (posts.some(post => post.videos.length > 0)) {
      console.log('Downloading videos...');
      await downloadVideos(posts, page);
    }

    return output;

  } catch (error) {
    console.error('Error during scraping:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function downloadImages(posts, page) {
  const imagesDir = './images';
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const post of posts) {
    for (let i = 0; i < post.images.length; i++) {
      try {
        const imageUrl = post.images[i];
        console.log(`Downloading image ${i + 1} from post ${post.id}...`);
        
        // Use browser context to fetch image (with cookies/headers)
        const imageData = await page.evaluate(async (url) => {
          try {
            const response = await fetch(url, {
              credentials: 'include',
              referrer: 'https://www.facebook.com/'
            });
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}`);
            }
            
            const blob = await response.blob();
            const reader = new FileReader();
            
            return new Promise((resolve, reject) => {
              reader.onloadend = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
              };
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          } catch (error) {
            return null;
          }
        }, imageUrl);

        if (imageData) {
          const buffer = Buffer.from(imageData, 'base64');
          const extension = imageUrl.includes('.png') ? 'png' : 
                           imageUrl.includes('.gif') ? 'gif' : 'jpg';
          const filename = `post_${post.id}_image_${i + 1}.${extension}`;
          fs.writeFileSync(`${imagesDir}/${filename}`, buffer);
          console.log(`✓ Downloaded: ${filename}`);
        } else {
          console.log(`✗ Failed to download image from post ${post.id}`);
        }
        
        await delay(1500); // Delay between downloads
      } catch (error) {
        console.error(`Error downloading image from post ${post.id}: ${error.message}`);
      }
    }
  }
}

async function downloadVideos(posts, page) {
  const videosDir = './videos';
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
  }

  // Store original page URL
  const originalUrl = page.url();

  for (const post of posts) {
    for (let i = 0; i < post.videos.length; i++) {
      try {
        const videoUrl = post.videos[i];
        console.log(`Downloading video ${i + 1} from post ${post.id}...`);
        
        // For video links, try to navigate and extract actual video source
        if (videoUrl.includes('/videos/') || videoUrl.includes('video.php')) {
          // Navigate to video page to get actual video URL
          try {
            await page.goto(videoUrl, { waitUntil: 'networkidle2', timeout: 30000 });
            await delay(3000);
            
            const actualVideoUrl = await page.evaluate(() => {
              const video = document.querySelector('video source, video[src]');
              if (video) {
                return video.src || video.getAttribute('src');
              }
              return null;
            });
            
            if (actualVideoUrl) {
              const videoData = await page.evaluate(async (url) => {
                try {
                  const response = await fetch(url, {
                    credentials: 'include',
                    referrer: 'https://www.facebook.com/'
                  });
                  
                  if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                  }
                  
                  const blob = await response.blob();
                  const reader = new FileReader();
                  
                  return new Promise((resolve, reject) => {
                    reader.onloadend = () => {
                      const base64 = reader.result.split(',')[1];
                      resolve(base64);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                  });
                } catch (error) {
                  return null;
                }
              }, actualVideoUrl);
              
              if (videoData) {
                const buffer = Buffer.from(videoData, 'base64');
                const filename = `post_${post.id}_video_${i + 1}.mp4`;
                fs.writeFileSync(`${videosDir}/${filename}`, buffer);
                console.log(`✓ Downloaded: ${filename}`);
              }
            }
            
            // Navigate back to original page
            await page.goto(originalUrl, { waitUntil: 'networkidle2', timeout: 30000 });
            await delay(2000);
          } catch (error) {
            console.error(`Error processing video URL from post ${post.id}: ${error.message}`);
            // Try to navigate back even on error
            try {
              await page.goto(originalUrl, { waitUntil: 'networkidle2', timeout: 30000 });
            } catch (e) {
              // Ignore navigation errors
            }
          }
        } else {
          // Direct video URL
          const videoData = await page.evaluate(async (url) => {
            try {
              const response = await fetch(url, {
                credentials: 'include',
                referrer: 'https://www.facebook.com/'
              });
              
              if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
              }
              
              const blob = await response.blob();
              const reader = new FileReader();
              
              return new Promise((resolve, reject) => {
                reader.onloadend = () => {
                  const base64 = reader.result.split(',')[1];
                  resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
              });
            } catch (error) {
              return null;
            }
          }, videoUrl);
          
          if (videoData) {
            const buffer = Buffer.from(videoData, 'base64');
            const filename = `post_${post.id}_video_${i + 1}.mp4`;
            fs.writeFileSync(`${videosDir}/${filename}`, buffer);
            console.log(`✓ Downloaded: ${filename}`);
          }
        }
        
        await delay(3000); // Longer delay for videos
      } catch (error) {
        console.error(`Error downloading video from post ${post.id}: ${error.message}`);
      }
    }
  }
}

// Run the scraper
scrapeFacebookPage(FACEBOOK_URL)
  .then((data) => {
    console.log('\n=== Scraping Complete ===');
    console.log(`Total posts scraped: ${data.totalPosts}`);
    console.log(`Posts with images: ${data.posts.filter(p => p.images.length > 0).length}`);
    console.log(`Posts with videos: ${data.posts.filter(p => p.videos.length > 0).length}`);
  })
  .catch((error) => {
    console.error('Scraping failed:', error);
    process.exit(1);
  });

# Havane Poitiers - Mode Masculine

Website for Havane Poitiers, a men's fashion boutique in Poitiers, France. This site displays products and posts scraped from the Facebook page.

## Features

- Modern React + Vite application
- Responsive design with Tailwind CSS
- Product catalog with images from Facebook
- Shopping cart functionality
- Multiple pages: Home, Products, Promotions, About, Contact

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to Vercel

This project is configured for Vercel deployment:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository: `declared-as-ala/havane`
   - Vercel will automatically detect the Vite configuration

2. **Build Settings (auto-detected):**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy:**
   - Vercel will automatically deploy on every push to the `main` branch
   - Your site will be live at `https://your-project.vercel.app`

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Data files (posts.ts)
│   │   └── context/        # React context (Cart)
│   ├── styles/             # CSS files
│   └── main.tsx            # Entry point
├── scraper.js              # Facebook scraper script
├── vercel.json             # Vercel configuration
└── package.json
```

## Data Source

Product data is scraped from the Facebook page: https://www.facebook.com/havanepoitiers

To update the data, run the scraper:
```bash
node scraper.js
```

## License

Private project for Havane Poitiers.

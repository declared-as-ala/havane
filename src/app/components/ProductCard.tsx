import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Post } from '@/app/data/posts';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import { useState } from 'react';

interface ProductCardProps {
  post: Post;
  index?: number;
}

export const ProductCard = ({ post, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(post);
    toast.success('Article ajouté au panier');
  };

  const handleImageClick = (e: React.MouseEvent) => {
    if (post.images.length > 1) {
      e.preventDefault();
      setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-neutral-100 cursor-pointer" onClick={handleImageClick}>
        <motion.img
          key={currentImageIndex}
          src={post.images[currentImageIndex]}
          alt={post.text}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        />
        {post.category && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-neutral-900">
            {post.category}
          </div>
        )}
        {post.images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-neutral-900">
            {currentImageIndex + 1}/{post.images.length}
          </div>
        )}
        
        {/* Quick Add Button */}
        <motion.button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 bg-neutral-900 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-neutral-500 mb-2">{post.timestamp}</p>
        <h3 className="text-neutral-900 font-medium mb-3 line-clamp-2 leading-relaxed">
          {post.text}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-semibold text-neutral-900">
            {post.price?.toFixed(2)}€
          </span>
          <motion.button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-neutral-900 text-white px-6 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-medium">Ajouter</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

import { motion } from 'motion/react';
import { Tag, TrendingDown } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';
import { posts } from '@/app/data/posts';

export const Promotions = () => {
  const promoCategories = ['Soldes', 'Cadeaux'];
  const promoPosts = posts.filter((post) => promoCategories.includes(post.category || ''));

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6"
          >
            <Tag className="w-4 h-4" />
            <span className="text-sm font-medium">Offres Exceptionnelles</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Promotions & Soldes</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Profitez de nos meilleures offres sur une sélection d'articles de qualité
          </p>
        </motion.div>

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingDown className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">2ème DÉMARQUE</h2>
              </div>
              <p className="text-lg md:text-xl opacity-90">
                Jusqu'à -50% sur une sélection d'articles
              </p>
            </div>
            <div className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-2xl">
              -50%
            </div>
          </div>
        </motion.div>

        {/* Promoted Products */}
        {promoPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {promoPosts.map((post, index) => (
              <ProductCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-neutral-500">Aucune promotion en cours pour le moment.</p>
            <p className="text-neutral-400 mt-2">Revenez bientôt pour découvrir nos offres !</p>
          </div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-neutral-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-4">Restez informé de nos promotions</h3>
          <p className="text-neutral-600 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir en exclusivité nos offres spéciales et être le premier informé de nos soldes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            />
            <motion.button
              className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              S'inscrire
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Tag, Heart } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';
import { posts } from '@/app/data/posts';

export const Home = () => {
  const featuredPosts = posts.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Nouvelle Collection 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              L'Élégance<br />Masculine
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez l'excellence de la mode masculine au cœur de Poitiers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products">
                <motion.button
                  className="flex items-center space-x-2 bg-white text-neutral-900 px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explorer la Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/promotions">
                <motion.button
                  className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tag className="w-5 h-5" />
                  <span>Voir les Promotions</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Qualité Premium',
                description: 'Sélection rigoureuse de marques de luxe et créateurs reconnus',
              },
              {
                icon: Heart,
                title: 'Service Personnalisé',
                description: 'Conseils d\'experts pour un style qui vous ressemble',
              },
              {
                icon: Tag,
                title: 'Prix Exclusifs',
                description: 'Promotions régulières et offres réservées à nos clients',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-neutral-900 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Collection Vedette</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Découvrez notre sélection de pièces exceptionnelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <ProductCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <motion.button
                className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Voir Toute la Collection</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visitez Notre Boutique
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              17 Rue des Cordeliers, 86000 Poitiers<br />
              Découvrez nos collections dans un cadre chaleureux
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-neutral-900 px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous Contacter
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

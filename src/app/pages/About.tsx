import { motion } from 'motion/react';
import { Store, Users, Award, Heart } from 'lucide-react';
import logoImage from 'figma:asset/2209120c02de48047f47195fbde1648d6ec685c9.png';

export const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Sélection rigoureuse de marques prestigieuses et créateurs reconnus pour leur savoir-faire exceptionnel.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Une équipe passionnée qui partage son amour de la mode et du style avec chaque client.',
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Accompagnement personnalisé et conseils d\'experts pour révéler votre style unique.',
    },
    {
      icon: Store,
      title: 'Expérience',
      description: 'Un espace accueillant au cœur de Poitiers où se mêlent tradition et modernité.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <img src={logoImage} alt="Havane Poitiers" className="h-16 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre Histoire</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Havane Poitiers est bien plus qu'une boutique de mode masculine. C'est un lieu où l'élégance rencontre le caractère, où chaque pièce raconte une histoire.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">L'Élégance au Cœur de Poitiers</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Située au 17 Rue des Cordeliers, notre boutique est devenue une référence incontournable pour les hommes en quête de style et de qualité. Nous croyons que chaque homme mérite de se sentir confiant et élégant, quel que soit l'occasion.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Notre sélection soigneusement choisie comprend des marques internationales de renom telles que BOSS, K-way, et bien d'autres, garantissant à nos clients un accès aux dernières tendances et aux classiques intemporels.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Nous sommes fiers d'offrir non seulement des vêtements de qualité exceptionnelle, mais également une expérience d'achat personnalisée où chaque client reçoit l'attention et les conseils qu'il mérite.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-neutral-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
                  alt="Boutique Havane"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Marques Partenaires</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes marques pour vous offrir le meilleur de la mode masculine
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['BOSS', 'K-way', 'Boss Jeans'].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-neutral-800"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

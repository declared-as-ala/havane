import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { Link } from 'react-router';
import { useState } from 'react';
import { toast } from 'sonner';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Commande enregistrée ! Nous vous contacterons bientôt.');
    clearCart();
    setShowCheckout(false);
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <ShoppingBag className="w-24 h-24 text-neutral-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Votre panier est vide</h2>
            <p className="text-neutral-600 mb-8">
              Découvrez notre collection et ajoutez vos articles préférés
            </p>
            <Link to="/products">
              <motion.button
                className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvrir la Collection</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/products" className="inline-flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>Continuer les achats</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Mon Panier</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex gap-6">
                  <img
                    src={item.images[0]}
                    alt={item.text}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg line-clamp-2">{item.text}</h3>
                        {item.category && (
                          <p className="text-sm text-neutral-500">{item.category}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xl font-semibold">
                        {((item.price || 0) * item.quantity).toFixed(2)}€
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm sticky top-32"
            >
              <h2 className="text-2xl font-bold mb-6">Résumé</h2>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-neutral-200">
                <div className="flex justify-between text-neutral-600">
                  <span>Sous-total</span>
                  <span>{getTotalPrice().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Livraison</span>
                  <span className="text-green-600 font-medium">Gratuite</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>{getTotalPrice().toFixed(2)}€</span>
              </div>

              {!showCheckout ? (
                <>
                  <motion.button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-neutral-900 text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors font-medium mb-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Commander
                  </motion.button>
                  <button
                    onClick={clearCart}
                    className="w-full text-red-600 hover:text-red-700 py-2 font-medium"
                  >
                    Vider le panier
                  </button>
                </>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <textarea
                    placeholder="Adresse de livraison"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Confirmer la commande
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="w-full text-neutral-600 hover:text-neutral-900 py-2"
                  >
                    Annuler
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from 'figma:asset/2209120c02de48047f47195fbde1648d6ec685c9.png';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <img src={logoImage} alt="Havane Poitiers" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm leading-relaxed">
              Boutique de mode masculine haut de gamme au cœur de Poitiers. Style, élégance et qualité depuis toujours.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-white transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>17 Rue des Cordeliers<br />86000 Poitiers, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+33 (0)5 49 XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contact@havane-poitiers.fr</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Horaires</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lundi - Samedi</p>
                  <p className="text-neutral-400">10h00 - 19h00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p>Dimanche</p>
                  <p className="text-neutral-400">Fermé</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Havane Poitiers. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

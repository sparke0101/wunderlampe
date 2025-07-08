import React from 'react';
import { MapPin, Clock, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/1000134193-removebg-preview.png" 
                alt="Wunder Lampe Logo" 
                className="w-8 h-8 brightness-110" 
              />
              <span className="text-2xl font-bold text-gold">Wunder Lampe</span>
              <span className="text-2xl font-display font-bold text-gold">Wunder Lampe</span>
            </div>
            <p className="text-light-gray font-body leading-relaxed">
              Experience the perfect blend of premium shisha, exquisite cocktails, and luxurious atmosphere in the heart of the city.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-body font-semibold text-gold flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{t('openingHours')}</span>
            </h3>
            <div className="space-y-2 text-light-gray font-body">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-white">4:00 PM - 2:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Weekend:</span>
                <span className="text-white">4:00 PM - 4:00 AM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-body font-semibold text-gold flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{t('contact')}</span>
            </h3>
            <div className="space-y-3 text-light-gray font-body">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Hauptstraße 123, 12345 Berlin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@wunderlampe.de</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-body font-semibold text-gold">{t('newsletter')}</h3>
            <p className="text-light-gray font-body text-sm">
              Stay updated with our latest offers and events
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="flex-1 px-4 py-2 bg-gray-900 border border-gold/30 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
              />
              <button className="px-4 py-2 bg-gold text-black font-body font-medium rounded-r-lg hover:bg-gold-light transition-all duration-300">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gold font-body font-medium">{t('followUs')}:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-light-gray font-body text-sm">
              © 2024 Wunder Lampe. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
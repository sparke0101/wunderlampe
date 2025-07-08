import React from 'react';
import { MapPin, Clock, Mail, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 border-t border-gold/20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/1000134193-removebg-preview.png" 
                alt="Wunder Lampe Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 brightness-110" 
              />
              <span className="text-xl sm:text-2xl font-bold text-gold">Wunder Lampe</span>
            </div>
            <p className="text-sm sm:text-base text-light-gray font-body leading-relaxed">
              Experience the perfect blend of premium shisha, exquisite cocktails, and luxurious atmosphere in the heart of the city.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-body font-semibold text-gold flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{t('openingHours')}</span>
            </h3>
            <div className="space-y-2 text-sm sm:text-base text-light-gray font-body">
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
            <h3 className="text-lg sm:text-xl font-body font-semibold text-gold flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{t('contact')}</span>
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-light-gray font-body">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Eisenbahnstraße 98, 04315 Leipzig</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+4915788818885" className="hover:text-gold transition-colors">+49 1578 8818885</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info.wunderlampe@gmail.com" className="hover:text-gold transition-colors">info.wunderlampe@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-body font-semibold text-gold">{t('newsletter')}</h3>
            <p className="text-light-gray font-body text-xs sm:text-sm">
              Stay updated with our latest offers and events
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm sm:text-base"
              />
              <button className="px-3 sm:px-4 py-2 sm:py-3 bg-gold text-black font-body font-medium rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gold-light transition-all duration-300 text-sm sm:text-base active:scale-95">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/20">
          {/* WhatsApp Group Section */}
          <div className="mb-6 sm:mb-8 text-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8 max-w-md mx-auto">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gold mb-3 sm:mb-4">Join Our Community</h3>
              <p className="text-sm sm:text-base text-light-gray font-body mb-4 sm:mb-6">
                Connect with fellow shisha enthusiasts and stay updated with exclusive offers
              </p>
              
              <p className="text-sm sm:text-base text-light-gray font-body mb-4 sm:mb-6">
                Be part of our exclusive community where we share special offers, events, and connect with fellow enthusiasts.
              </p>
              
              <a
                href="https://chat.whatsapp.com/H9dk1mjz0rB2d2MInEoivU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-body font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-600/30 active:scale-95 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-center">Join Our WhatsApp Community</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <span className="text-sm sm:text-base text-gold font-body font-medium">{t('followUs')}:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/shishabar.wunderlampe?igsh=a3F0N3lqOW9ua3Fl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300 p-2"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-light-gray font-body text-xs sm:text-sm">
              © 2025 Wunder Lampe. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
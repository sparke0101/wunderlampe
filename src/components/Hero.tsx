import React from 'react';
import { ArrowRight, Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[url('/WhatsApp%20Image%202025-07-08%20at%203.36.54%20AM.jpeg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-cyan rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-pink rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-gold rounded-full animate-pulse opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/1000134193-removebg-preview.png" 
            alt="Wunder Lampe Logo" 
            className="w-16 h-16 mx-auto mb-4 animate-pulse brightness-110" 
          />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gold mb-4 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-soft-blue-white font-body font-light mb-6 animate-fade-in-delay">
            {t('heroTagline')}
          </p>
        </div>

        <p className="text-lg md:text-xl text-light-gray font-body mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
          {t('heroDescription')}
        </p>

        {/* Primary CTA - View Menu */}
        <div className="mb-12 animate-fade-in-delay-3">
          <button
            onClick={() => onPageChange('menu')}
            className="group w-full sm:w-auto px-12 py-5 bg-gold text-black font-body font-bold text-xl rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold/50 flex items-center justify-center space-x-3 hover:bg-gold-light mb-4"
          >
            <MenuIcon className="w-6 h-6" />
            <span>{t('viewMenu')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => onPageChange('reservation')}
            className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gold text-white font-body font-semibold text-lg rounded-xl hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>{t('makeReservation')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Quick Menu Preview */}
      <div className="relative z-10 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900/80 backdrop-blur-md border border-gold/30 rounded-2xl p-6">
            <h3 className="text-2xl font-display font-bold text-gold mb-6 text-center">Quick Menu Preview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Shisha', price: '13€', image: '/close-up-hookah-vaping_23-2149297187.jpg' },
                { name: 'Cocktails', price: '8.90€', image: '/viski-glass-with-orange-cocktail-with-oranges-zest_140725-8680.jpg' },
                { name: 'Longdrinks', price: '7.50€', image: '/WhatsApp%20Image%202025-07-08%20at%203.36.54%20AM.jpeg' },
                { name: 'Bottles', price: '90€', image: '/1000134193-removebg-preview.png' }
              ].map((item, index) => (
                <div 
                  key={index}
                  onClick={() => onPageChange('menu')}
                  className="bg-gray-800/60 rounded-xl p-4 text-center cursor-pointer hover:bg-gold/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-white font-body font-semibold text-lg mb-1">{item.name}</h4>
                  <p className="text-gold font-body font-bold">from {item.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => onPageChange('menu')}
                className="text-gold hover:text-gold-light font-body font-medium text-lg transition-colors duration-300"
              >
                View Full Menu →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-gold to-transparent rounded-full" />
      </div>
    </section>
  );
}
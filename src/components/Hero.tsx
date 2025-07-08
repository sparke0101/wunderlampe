import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold mb-4 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-2xl md:text-3xl text-neon-cyan font-light mb-6 animate-fade-in-delay">
            {t('heroTagline')}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
          {t('heroDescription')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={() => onPageChange('menu')}
            className="group px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 flex items-center space-x-2"
          >
            <span>{t('viewMenu')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => onPageChange('reservation')}
            className="group px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center space-x-2"
          >
            <span>{t('makeReservation')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-gold to-transparent rounded-full" />
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Menu as MenuIcon, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'menu', label: t('menu') },
    { id: 'reservation', label: t('reservation') },
    { id: 'contact', label: t('contact') },
  ];

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <img 
              src="/1000134193-removebg-preview.png" 
              alt="Wunder Lampe Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 group-hover:brightness-125 transition-all duration-300" 
            />
            <span className="text-xl sm:text-2xl font-display font-bold text-gold group-hover:text-soft-blue-white transition-colors duration-300">
              Wunder Lampe
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-base lg:text-lg font-body font-medium transition-all duration-300 hover:text-gold relative group ${
                  currentPage === item.id ? 'text-gold' : 'text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left transition-transform duration-300 ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-gold transition-colors duration-300 p-2"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-gray-950/98 backdrop-blur-md border border-gold/20 rounded-lg shadow-xl z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm transition-colors duration-300 flex items-center space-x-2 ${
                        language === lang.code 
                          ? 'text-gold bg-gold/10' 
                          : 'text-white hover:text-gold hover:bg-gold/5'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gold/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-2 text-lg font-body font-medium transition-colors duration-300 rounded-lg ${
                    currentPage === item.id ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
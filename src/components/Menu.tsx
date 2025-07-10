import React, { useState } from 'react';
import { Wine, Coffee, Beer, Martini, Droplets, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('shisha');

  const categories = [
    { 
      id: 'shisha', 
      label: t('shisha'), 
      icon: () => (
        <img 
          src="/1000134193-removebg-preview.png" 
          alt="Shisha" 
          className="w-5 h-5 brightness-110" 
        />
      ),
      image: '/hookah-lounge-bar-table-relaxation-habit_482257-9588.jpg'
    },
    { 
      id: 'cocktails', 
      label: t('cocktails'), 
      icon: Martini,
      image: '/fresh-cocktails-wooden-table-with-leafs-generative-ai_188544-12374.jpg'
    },
    { 
      id: 'longdrinks', 
      label: t('longdrinks'), 
      icon: Martini,
      image: '/set-classic-cold-alcoholic-cocktails-white-russian-bramble-whiskey-sour-negroni_400928-290.jpg'
    },
    { id: 'softdrinks', label: t('softdrinks'), icon: Droplets },
    { id: 'hotDrinks', label: t('hotDrinks'), icon: Coffee },
    { id: 'beer', label: t('beer'), icon: Beer },
    { id: 'nonAlcoholicCocktails', label: t('nonAlcoholicCocktails'), icon: Martini },
    { id: 'shots', label: t('shots'), icon: Flame },
    { id: 'wine', label: t('wine'), icon: Wine },
    { id: 'bottles', label: t('bottles'), icon: Wine },
    { id: 'whiskys', label: t('whiskys'), icon: Flame }
  ];

  const menuItems = {
    nonAlcoholicCocktails: [
      { name: 'Mosquito', price: '7,50 €', description: 'Limetten, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Mosquito (Erdbeer)', price: '7,50 €', description: 'Erdbeeren, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Mosquito (Mango)', price: '7,50 €', description: 'Mango, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Mosquito (Maracuja)', price: '7,50 €', description: 'Maracuja, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Mosquito (Melone)', price: '7,50 €', description: 'Melone, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Mosquito (Kiwi)', price: '7,50 €', description: 'Kiwi, Zuckersirup, Limettensaft, Minze, Soda' },
      { name: 'Ipanema', price: '7,50 €', description: 'Limetten, Zuckersirup, Soda' },
      { name: 'Ipanema (Erdbeer)', price: '7,50 €', description: 'Erdbeeren, Zuckersirup, Soda' },
      { name: 'Ipanema (Mango)', price: '7,50 €', description: 'Mango, Zuckersirup, Soda' },
      { name: 'Ipanema (Maracuja)', price: '7,50 €', description: 'Maracuja, Zuckersirup, Soda' },
      { name: 'Ipanema (Melone)', price: '7,50 €', description: 'Melone, Zuckersirup, Soda' },
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-body font-medium transition-all duration-300 text-sm sm:text-base md:text-lg active:scale-95 ${
                    activeCategory === category.id
                      ? 'bg-gold text-black shadow-lg shadow-gold/30 scale-105'
                      : 'bg-gray-900 text-light-gray hover:bg-gold/20 hover:text-gold border border-gold/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-xl p-4 sm:p-6 hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 transform hover:-translate-y-2 active:scale-95"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
                <h3 className="text-lg sm:text-xl font-body font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight flex-1 min-w-0">
                  {item.name}
                </h3>
                <span className="text-sm sm:text-base font-body font-bold text-gold bg-gold/10 px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-light-gray font-body group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    shisha: [
      { name: 'Classic Shisha', price: '13,00 €', description: 'Traditional tobacco blend with premium charcoal' },
      { name: 'Fruit Mix', price: '15,00 €', description: 'Fresh fruit flavors - Apple, Orange, Grape' },
      { name: 'Mint Fresh', price: '14,00 €', description: 'Cool mint with ice tips for extra freshness' },
      { name: 'Double Apple', price: '14,50 €', description: 'Classic Middle Eastern double apple flavor' },
      { name: 'Tropical Paradise', price: '16,00 €', description: 'Mango, Pineapple, Coconut blend' },
      { name: 'Berry Blast', price: '15,50 €', description: 'Mixed berries with a hint of vanilla' },
      { name: 'Premium Gold', price: '18,00 €', description: 'Luxury tobacco blend with gold leaf' },
      { name: 'Chocolate Dream', price: '16,50 €', description: 'Rich chocolate with coffee notes' }
    ],
    cocktails: [
      { name: 'Mojito', price: '8,90 €', description: 'White rum, lime, mint, sugar, soda water' },
      { name: 'Caipirinha', price: '8,50 €', description: 'Cachaça, lime, brown sugar' },
      { name: 'Piña Colada', price: '9,50 €', description: 'White rum, coconut cream, pineapple juice' },
      { name: 'Cosmopolitan', price: '9,00 €', description: 'Vodka, cranberry juice, lime, triple sec' },
      { name: 'Margarita', price: '8,90 €', description: 'Tequila, lime juice, triple sec, salt rim' },
      { name: 'Long Island Iced Tea', price: '10,50 €', description: 'Five spirits, cola, lemon juice' },
      { name: 'Sex on the Beach', price: '9,20 €', description: 'Vodka, peach schnapps, cranberry, pineapple' },
      { name: 'Blue Lagoon', price: '8,80 €', description: 'Vodka, blue curaçao, lemonade' }
    ],
    longdrinks: [
      { name: 'Vodka Lemon', price: '7,50 €', description: 'Premium vodka with fresh lemon juice' },
      { name: 'Gin Tonic', price: '7,80 €', description: 'London Dry Gin with tonic water and lime' },
      { name: 'Rum Cola', price: '7,20 €', description: 'White or dark rum with cola and lime' },
      { name: 'Whiskey Ginger', price: '8,00 €', description: 'Bourbon whiskey with ginger ale' },
      { name: 'Vodka Orange', price: '7,50 €', description: 'Premium vodka with fresh orange juice' },
      { name: 'Aperol Spritz', price: '8,50 €', description: 'Aperol, prosecco, soda water, orange' },
      { name: 'Moscow Mule', price: '8,90 €', description: 'Vodka, ginger beer, lime juice' },
      { name: 'Dark & Stormy', price: '8,20 €', description: 'Dark rum, ginger beer, lime' }
    ],
    softdrinks: [
      { name: 'Coca Cola', price: '3,50 €', description: 'Classic Coca Cola 0.33l' },
      { name: 'Sprite', price: '3,50 €', description: 'Lemon-lime soda 0.33l' },
      { name: 'Fanta Orange', price: '3,50 €', description: 'Orange flavored soda 0.33l' },
      { name: 'Red Bull', price: '4,50 €', description: 'Energy drink 0.25l' },
      { name: 'Fresh Orange Juice', price: '4,00 €', description: 'Freshly squeezed orange juice 0.3l' },
      { name: 'Apple Juice', price: '3,80 €', description: 'Pure apple juice 0.3l' },
      { name: 'Sparkling Water', price: '2,50 €', description: 'San Pellegrino 0.5l' },
      { name: 'Still Water', price: '2,00 €', description: 'Evian natural water 0.5l' }
    ],
    hotDrinks: [
      { name: 'Espresso', price: '2,50 €', description: 'Strong Italian espresso' },
      { name: 'Cappuccino', price: '3,50 €', description: 'Espresso with steamed milk foam' },
      { name: 'Latte Macchiato', price: '4,00 €', description: 'Layered coffee with steamed milk' },
      { name: 'Turkish Coffee', price: '3,00 €', description: 'Traditional Turkish coffee' },
      { name: 'Green Tea', price: '3,20 €', description: 'Premium green tea selection' },
      { name: 'Black Tea', price: '3,00 €', description: 'Earl Grey or English Breakfast' },
      { name: 'Mint Tea', price: '3,50 €', description: 'Fresh mint tea, Moroccan style' },
      { name: 'Hot Chocolate', price: '4,50 €', description: 'Rich Belgian hot chocolate' }
    ],
    beer: [
      { name: 'Pilsner Draft', price: '4,50 €', description: 'Fresh draft beer 0.5l' },
      { name: 'Wheat Beer', price: '4,80 €', description: 'German Weissbier 0.5l' },
      { name: 'Corona', price: '5,00 €', description: 'Mexican beer with lime 0.33l' },
      { name: 'Heineken', price: '4,50 €', description: 'Dutch premium lager 0.33l' },
      { name: 'Guinness', price: '5,50 €', description: 'Irish stout 0.44l' },
      { name: 'Erdinger', price: '5,20 €', description: 'German wheat beer 0.5l' },
      { name: 'Beck\'s', price: '4,20 €', description: 'German pilsner 0.33l' },
      { name: 'Stella Artois', price: '4,80 €', description: 'Belgian premium lager 0.33l' }
    ],
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
      { name: 'Ipanema (Melone)', price: '7,50 €', description: 'Melone, Zuckersirup, Soda' }
    ],
    shots: [
      { name: 'Tequila Shot', price: '4,00 €', description: 'Premium tequila with salt and lime' },
      { name: 'Vodka Shot', price: '3,50 €', description: 'Premium vodka, ice cold' },
      { name: 'Jägermeister', price: '4,50 €', description: 'German herbal liqueur' },
      { name: 'Sambuca', price: '4,20 €', description: 'Italian anise liqueur' },
      { name: 'Fireball', price: '4,80 €', description: 'Cinnamon whiskey shot' },
      { name: 'B52', price: '5,50 €', description: 'Layered shot: Kahlúa, Baileys, Grand Marnier' },
      { name: 'Lemon Drop', price: '4,50 €', description: 'Vodka, lemon juice, sugar rim' },
      { name: 'Green Fairy', price: '5,00 €', description: 'Absinthe with sugar cube' }
    ],
    wine: [
      { name: 'House Red Wine', price: '5,50 €', description: 'Italian red wine 0.2l' },
      { name: 'House White Wine', price: '5,50 €', description: 'German white wine 0.2l' },
      { name: 'Prosecco', price: '6,50 €', description: 'Italian sparkling wine 0.2l' },
      { name: 'Chianti Classico', price: '8,00 €', description: 'Tuscan red wine 0.2l' },
      { name: 'Pinot Grigio', price: '7,50 €', description: 'Italian white wine 0.2l' },
      { name: 'Rosé', price: '6,80 €', description: 'French rosé wine 0.2l' },
      { name: 'Champagne', price: '12,00 €', description: 'French champagne 0.2l' },
      { name: 'Riesling', price: '7,00 €', description: 'German white wine 0.2l' }
    ],
    bottles: [
      { name: 'Grey Goose Vodka', price: '90,00 €', description: 'Premium French vodka 0.7l' },
      { name: 'Hennessy VS', price: '120,00 €', description: 'French cognac 0.7l' },
      { name: 'Macallan 12', price: '180,00 €', description: 'Single malt Scotch whisky 0.7l' },
      { name: 'Dom Pérignon', price: '250,00 €', description: 'Vintage champagne 0.75l' },
      { name: 'Beluga Noble', price: '110,00 €', description: 'Russian premium vodka 0.7l' },
      { name: 'Rémy Martin XO', price: '200,00 €', description: 'Premium cognac 0.7l' },
      { name: 'Johnnie Walker Blue', price: '160,00 €', description: 'Blended Scotch whisky 0.7l' },
      { name: 'Cristal Champagne', price: '300,00 €', description: 'Luxury champagne 0.75l' }
    ],
    whiskys: [
      { name: 'Jack Daniel\'s', price: '8,50 €', description: 'Tennessee whiskey 4cl' },
      { name: 'Jameson', price: '8,00 €', description: 'Irish whiskey 4cl' },
      { name: 'Glenfiddich 12', price: '12,00 €', description: 'Single malt Scotch 4cl' },
      { name: 'Macallan 12', price: '15,00 €', description: 'Single malt Scotch 4cl' },
      { name: 'Johnnie Walker Black', price: '10,00 €', description: 'Blended Scotch 4cl' },
      { name: 'Chivas Regal 12', price: '11,00 €', description: 'Blended Scotch 4cl' },
      { name: 'Lagavulin 16', price: '18,00 €', description: 'Islay single malt 4cl' },
      { name: 'Hibiki Harmony', price: '20,00 €', description: 'Japanese whisky 4cl' }
    ]
  };

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {activeCategory && categories.find(c => c.id === activeCategory)?.image && (
          <div className="relative mb-8 sm:mb-12">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={categories.find(c => c.id === activeCategory)?.image}
                  alt={categories.find(c => c.id === activeCategory)?.label}
                  className="w-full h-full object-cover"
                />
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
          {menuItems[activeCategory]?.map((item, index) => (
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
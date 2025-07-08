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
    { id: 'whiskys', label: t('whiskys'), icon: Flame },
  ];

  // Sample menu items for each category
  const menuItems = {
    softdrinks: [
      { name: 'Wasser still/Mineral 0,2l', price: '2,50 €', description: 'Stilles oder Mineralwasser' },
      { name: 'Cola 0,2l', price: '3,50 €', description: 'Klassische Cola' },
      { name: 'Cola Light/Zero 0,2l', price: '3,50 €', description: 'Kalorienfreie Cola' },
      { name: 'Fanta 0,2l', price: '3,50 €', description: 'Orangenlimonade' },
      { name: 'Fanta Exotic/blau 0,33l', price: '3,50 €', description: 'Exotische Fanta Varianten' },
      { name: 'Sprite 0,2l', price: '3,50 €', description: 'Zitronenlimonade' },
      { name: 'Ginger Ale 0,2l', price: '3,50 €', description: 'Ingwerlimonade' },
      { name: 'Tonic Water 0,2l', price: '3,50 €', description: 'Klassisches Tonic Water' },
      { name: 'Bitter Lemon 0,2l', price: '3,50 €', description: 'Bittere Zitronenlimonade' },
      { name: 'Moloko 0,33l', price: '3,50 €', description: 'Energy Drink' },
      { name: 'Schwarze Dose 0,33l', price: '3,50 €', description: 'Premium Energy Drink' },
      { name: 'Red Bull (versch. Sorten) 0,33l', price: '3,50 €', description: 'Energy Drink in verschiedenen Geschmacksrichtungen' },
      { name: 'Club Mate 0,5l', price: '4,00 €', description: 'Koffeinhaltige Limonade' },
      { name: 'Saft/Nektar (versch. Sorten) 0,4l', price: '3,50 €', description: 'Verschiedene Fruchtsäfte und Nektare' },
      { name: 'alle Säfte als Schorle 0,4l', price: '3,50 €', description: 'Fruchtsäfte mit Mineralwasser gemischt' },
      { name: 'KiBa 0,4l', price: '3,50 €', description: 'Kirsch-Bananen-Saft' },
      { name: 'Eistee 0,4l', price: '3,50 €', description: 'Erfrischender Eistee' },
      { name: 'Arizona Eistee 0,5l', price: '4,50 €', description: 'Premium Eistee aus Arizona' },
      { name: 'Gurken Limonade', price: '4,50 €', description: 'Erfrischende Gurkenlimonade' },
      { name: 'Wassermelone Limo', price: '4,50 €', description: 'Süße Wassermelonenlimonade' },
      { name: 'Maracuja Limos', price: '4,50 €', description: 'Exotische Maracuja-Limonade' },
    ],
    hotDrinks: [
      { name: 'Tee (verschiedene Sorten)', price: '2,90 €', description: 'Auswahl verschiedener Teesorten' },
      { name: 'Kaffee', price: '2,80 €', description: 'Frisch gebrühter Kaffee' },
      { name: 'Espresso einfach', price: '2,40 €', description: 'Klassischer italienischer Espresso' },
      { name: 'Doppelter Espresso', price: '3,20 €', description: 'Doppelte Portion Espresso' },
      { name: 'Espresso Macchiato', price: '2,90 €', description: 'Espresso mit einem Hauch Milchschaum' },
      { name: 'Milchkaffee', price: '3,40 €', description: 'Kaffee mit warmer Milch' },
      { name: 'Eiskaffee', price: '3,50 €', description: 'Kalter Kaffee mit Eis und Sahne' },
      { name: 'Latte Macchiato', price: '3,80 €', description: 'Geschichteter Milchkaffee' },
      { name: 'Heiße Schokolade', price: '3,50 €', description: 'Cremige heiße Schokolade' },
      { name: 'Heiße Schokolade mit Sahne', price: '3,90 €', description: 'Heiße Schokolade mit frischer Sahne' },
    ],
    beer: [
      { name: 'Radler/Diesel', price: '3,80 €', description: 'Bier mit Limonade gemischt' },
      { name: 'Ur-Krostitzer', price: '3,50 €', description: 'Traditionelles deutsches Bier' },
      { name: 'Becks', price: '3,50 €', description: 'Klassisches deutsches Pilsener' },
      { name: 'Becks Ice/Lemons', price: '3,50 €', description: 'Erfrischende Becks Varianten' },
      { name: 'Mixery/Mixery Energy', price: '3,50 €', description: 'Bier-Mix-Getränk mit Energy' },
      { name: 'Heineken', price: '3,80 €', description: 'Premium holländisches Bier' },
      { name: 'Corona', price: '4,80 €', description: 'Mexikanisches Bier mit Limette' },
      { name: 'Desperados', price: '4,80 €', description: 'Bier mit Tequila-Geschmack' },
      { name: 'Mexikaner', price: '4,80 €', description: 'Mexikanisches Bier' },
      { name: 'Radeberger 0,5l', price: '4,00 €', description: 'Sächsisches Premium Pilsener' },
      { name: 'Krombacher', price: '4,00 €', description: 'Deutsches Premium Pilsener' },
      { name: 'Helles Bananen-, Cola Weizen', price: '4,00 €', description: 'Weißbier mit Bananen- oder Cola-Geschmack' },
      { name: 'Alkoholfreies Bier', price: '4,00 €', description: 'Bier ohne Alkohol' },
    ],
    longdrinks: [
      { name: 'Campari Orange', price: '7,50 €', description: 'Campari mit Orangensaft' },
      { name: 'Malibu Ananas/Maracuja/Apfel', price: '7,50 €', description: 'Malibu mit verschiedenen Fruchtsäften' },
      { name: 'Likör 43 (mit Milch)', price: '7,50 €', description: 'Spanischer Likör mit Milch' },
      { name: 'Gin Tonic / Sprite', price: '8,00 €', description: 'Gin mit Tonic Water oder Sprite' },
      { name: 'Bacardi Cola/ Sprite', price: '7,50 €', description: 'Bacardi Rum mit Cola oder Sprite' },
      { name: 'Bacardi Razz (mit Sprite)', price: '8,00 €', description: 'Bacardi Razz mit Sprite' },
      { name: 'Captain Cola', price: '7,50 €', description: 'Captain Morgan mit Cola' },
      { name: 'Captain Red Bull', price: '8,50 €', description: 'Captain Morgan mit Red Bull' },
      { name: 'Jacky Cola', price: '8,00 €', description: 'Jack Daniels mit Cola' },
      { name: 'Jacky Red Bull', price: '8,50 €', description: 'Jack Daniels mit Red Bull' },
      { name: 'Beam Cola', price: '7,50 €', description: 'Jim Beam mit Cola' },
      { name: 'Jägermeister Cola', price: '7,50 €', description: 'Jägermeister mit Cola' },
      { name: 'Jägermeister Ginger Ale', price: '7,50 €', description: 'Jägermeister mit Ginger Ale' },
      { name: 'Jägermeister Maracuja', price: '7,50 €', description: 'Jägermeister mit Maracuja-Saft' },
      { name: 'Jägermeister Red Bull', price: '8,50 €', description: 'Jägermeister mit Red Bull' },
      { name: 'Moscow Mule', price: '8,00 €', description: 'Vodka mit Ginger Beer und Limette' },
      { name: 'Vodka Cola', price: '7,50 €', description: 'Vodka mit Cola' },
      { name: 'Vodka Schwarze Dose', price: '8,50 €', description: 'Vodka mit Schwarze Dose Energy' },
      { name: 'Vodka Lemon', price: '7,50 €', description: 'Vodka mit Zitronensaft' },
      { name: 'Vodka Sprite', price: '7,50 €', description: 'Vodka mit Sprite' },
      { name: 'Vodka Ginger Ale', price: '7,50 €', description: 'Vodka mit Ginger Ale' },
      { name: 'Vodka Moloko', price: '8,50 €', description: 'Vodka mit Moloko Energy' },
      { name: 'Vodka Apfel/Orange/Maracuja', price: '7,50 €', description: 'Vodka mit verschiedenen Fruchtsäften' },
      { name: 'Vodka Red Bull (vers. Sorten)', price: '8,50 €', description: 'Vodka mit Red Bull in verschiedenen Geschmacksrichtungen' },
      { name: 'Cuba Libre', price: '8,00 €', description: 'Rum mit Cola und Limette' },
      { name: 'Lillet Berry', price: '7,50 €', description: 'Lillet mit Beeren und Tonic' },
      { name: 'Aperol Spritz', price: '7,50 €', description: 'Aperol mit Prosecco und Soda' },
    ],
    cocktails: [
      { name: 'Caipirinha', price: '8,90 €', description: 'Limetten, Zuckersirup, Bacardi' },
      { name: 'Caipirinha (Mango)', price: '8,90 €', description: 'Mango, Zuckersirup, Bacardi' },
      { name: 'Caipirinha (Maracuja)', price: '8,90 €', description: 'Maracuja, Zuckersirup, Bacardi' },
      { name: 'Caipirinha (Erdbeer)', price: '8,90 €', description: 'Erdbeeren, Zuckersirup, Bacardi' },
      { name: 'Caipirinha (Kiwi)', price: '8,90 €', description: 'Kiwi, Zuckersirup, Bacardi' },
      { name: 'Mojito', price: '8,90 €', description: 'Limetten, Zuckersirup, frische Minze, Bacardi/Havana, Soda' },
      { name: 'Mojito (Mango)', price: '8,90 €', description: 'Mango, frische Minze, Bacardi/Havana, Soda' },
      { name: 'Mojito (Maracuja)', price: '8,90 €', description: 'Maracuja, frische Minze, Bacardi/Havana, Soda' },
      { name: 'Mojito (Erdbeer)', price: '8,90 €', description: 'Erdbeeren, frische Minze, Bacardi/Havana, Soda' },
      { name: 'Mojito (Kiwi)', price: '8,90 €', description: 'Kiwi, frische Minze, Bacardi/Havana, Soda' },
      { name: 'Sex on the Beach', price: '8,90 €', description: 'Vodka, Peach Schnapps, Cranberry, Ananas' },
      { name: 'Tequila Sunrise', price: '8,90 €', description: 'Tequila, Orangensaft, Grenadine' },
      { name: 'Pina Colada', price: '8,90 €', description: 'Rum, Kokoscreme, Ananassaft' },
      { name: 'Swimming Pool', price: '8,90 €', description: 'Havanna/Bacardi, Kokossirup, Sahne, Ananas, Maracuja, Blue Curaçao' },
      { name: 'Daiquiri', price: '8,90 €', description: 'Bacardi, frischer Limettensaft, Zuckersirup' },
      { name: 'Long Island Ice Tea', price: '8,90 €', description: 'Vodka, Bacardi, Gin, Tequila, Cointreau, Zuckersirup, frischer Zitronensaft, Cola' },
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
      { name: 'Ipanema (Melone)', price: '7,50 €', description: 'Melone, Zuckersirup, Soda' },
      { name: 'Ipanema (Kiwi)', price: '7,50 €', description: 'Kiwi, Zuckersirup, Soda' },
      { name: 'Pina Colada (alkoholfrei)', price: '7,50 €', description: 'Ananassaft, Kokossirup, Milch' },
      { name: 'Swimming Pool (alkoholfrei)', price: '7,50 €', description: 'Kokossirup, Sahne, Ananas, Maracuja, Blue Curaçao' },
      { name: 'Hausgemachte Cocktails', price: '8,90 €', description: 'Spezielle hausgemachte alkoholfreie Kreationen' },
      { name: 'Frische Obstsäfte', price: '4,90 €', description: 'Täglich frisch gepresste Obstsäfte' },
      { name: 'Obstsalat', price: '5,50 €', description: 'Frischer gemischter Obstsalat' },
    ],
    shots: [
      { name: 'Vodka', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Premium Vodka' },
      { name: 'Luft', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Luft Shot' },
      { name: 'Minzlikör ', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Erfrischender Minzlikör' },
      { name: 'Dos Mas', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Dos Mas Tequila' },
      { name: 'Jägermeister', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Deutscher Kräuterlikör' },
      { name: 'Kirschlikör', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Süßer Kirschlikör' },
      { name: 'Apfellikör', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Fruchtiger Apfellikör' },
      { name: 'B52', price: '5,50 €', description: 'Layered Shot - Kahlúa, Bailey\'s, Grand Marnier' },
      { name: 'Stroh 80', price: '5,00 €', description: 'Österreichischer Rum mit 80% Alkohol' },
      { name: 'Tequila Silber', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Silberner Tequila' },
      { name: 'Tequila Gold', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Goldener Tequila' },
      { name: 'Feigling', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Feigenlikör' },
      { name: 'Malibu', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Kokosrum' },
      { name: 'Gisela', price: '3,00 € / 4,00 €', description: '2cl / 4cl - Gisela Shot' },
    ],
    wine: [
      { name: 'Wein', price: '4,50 €', description: 'Klassischer Hauswein' },
      { name: 'Rotwein', price: '4,50 €', description: 'Trockener Rotwein' },
      { name: 'Rotweinschorle', price: '4,00 €', description: 'Rotwein mit Mineralwasser' },
      { name: 'Lambrusco Süß', price: '4,00 €', description: 'Süßer italienischer Perlwein' },
      { name: 'Weißwein', price: '4,50 €', description: 'Trockener Weißwein' },
      { name: 'Weißwein Süß', price: '4,00 €', description: 'Lieblicher Weißwein' },
      { name: 'Weißwein mit Sprite', price: '5,00 €', description: 'Weißwein mit Sprite gemischt' },
      { name: 'Sommerschorle', price: '5,50 €', description: 'Erfrischende Weinschorle für den Sommer' },
      { name: 'Sekt Trocken/Halbtrocken 0,11l', price: '4,50 €', description: 'Deutscher Sekt in kleiner Portion' },
      { name: 'Hugo', price: '6,50 €', description: 'Prosecco mit Holunderblütensirup, Minze und Limette' },
    ],
    shisha: [
      { name: 'Lemon Chill', price: '13€', description: 'Erfrischende Zitrone mit kühlem Menthol' },
      { name: 'Ringle Rangle', price: '13€', description: 'Exotische Fruchtmischung' },
      { name: 'Watermelon Chill', price: '13€', description: 'Süße Wassermelone mit Minze' },
      { name: 'Blue (Blueberry)', price: '13€', description: 'Intensive Blaubeere' },
      { name: 'Cinderella', price: '13€', description: 'Märchenhafte Fruchtkomposition' },
      { name: 'Vampires Night', price: '13€', description: 'Mystische dunkle Beeren' },
      { name: 'Berlin Nights', price: '13€', description: 'Berliner Spezialität' },
      { name: 'African Queen', price: '13€', description: 'Exotische afrikanische Früchte' },
      { name: 'Love 66', price: '13€', description: 'Romantische Beerenmischung' },
      { name: 'The Double Crunch (Doppelapfel)', price: '13€', description: 'Doppelt intensiver Apfelgeschmack' },
      { name: 'Red Island', price: '13€', description: 'Tropische rote Früchte' },
      { name: 'Wunderlampe Spezial', price: '13€', description: 'Unsere Hauskreation - einzigartig und geheimnisvoll' },
    ],
    bottles: [
      { name: 'Three Sixty (mit 6 Red Bull)', price: '90,00 €', description: 'Premium Vodka mit 6 Red Bull Energy Drinks' },
      { name: 'Absolut (mit 6 Red Bull)', price: '90,00 €', description: 'Absolut Vodka mit 6 Red Bull Energy Drinks' },
      { name: 'Jägermeister (mit 6 Red Bull)', price: '90,00 €', description: 'Jägermeister Kräuterlikör mit 6 Red Bull Energy Drinks' },
      { name: 'Jack Daniels (mit 2 Cola Flaschen)', price: '110,00 €', description: 'Jack Daniels Whiskey mit 2 Cola Flaschen' },
      { name: 'Red Label (mit 2 Cola Flaschen)', price: '110,00 €', description: 'Johnnie Walker Red Label mit 2 Cola Flaschen' },
      { name: 'Moët', price: '120,00 €', description: 'Moët & Chandon Champagner' },
      { name: 'Belvedere (mit 6 Red Bull)', price: '130,00 €', description: 'Belvedere Premium Vodka mit 6 Red Bull Energy Drinks' },
      { name: 'Grey Goose (mit 6 Red Bull)', price: '130,00 €', description: 'Grey Goose Premium Vodka mit 6 Red Bull Energy Drinks' },
    ],
    whiskys: [
      { name: 'Hennessy 4cl', price: '8,50 €', description: 'Premium französischer Cognac' },
      { name: 'Chivas Regal 4cl', price: '8,50 €', description: 'Schottischer Blended Whisky' },
      { name: 'Ballantines 4cl', price: '6,50 €', description: 'Schottischer Blended Whisky' },
      { name: 'Red Label 4cl', price: '6,50 €', description: 'Johnnie Walker Red Label Whisky' },
      { name: 'Jack Daniels 4cl', price: '6,50 €', description: 'Tennessee Whiskey aus Amerika' },
    ],
  };

  const currentItems = menuItems[activeCategory as keyof typeof menuItems] || menuItems.shisha;
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="min-h-screen bg-gray-950 py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gold mb-4">
            {t('menu')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-light-gray font-body max-w-2xl mx-auto px-2">
            Discover our premium selection of cocktails, shisha, and fine beverages
          </p>
        </div>

        {/* Category Header Image */}
        {currentCategory?.image && (
          <div className="mb-6 sm:mb-8">
            <div className="relative h-40 sm:h-48 md:h-64 rounded-2xl overflow-hidden">
              <img 
                src={currentCategory.image} 
                alt={currentCategory.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                  {currentCategory.label}
                </h3>
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
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-body font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight flex-1 pr-2">
                  {item.name}
                </h3>
                <span className="text-lg sm:text-xl md:text-2xl font-body font-bold text-gold bg-gold/10 px-2 sm:px-3 py-1 rounded-full flex-shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-light-gray font-body group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {item.description}
              </p>
              <div className="flex justify-end">
                <button className="text-gold hover:text-gold-light transition-colors duration-300 font-body font-medium text-sm sm:text-base md:text-lg py-2 px-3 rounded-lg hover:bg-gold/10 active:scale-95">
                  Order Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
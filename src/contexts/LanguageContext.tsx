import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    home: 'Startseite',
    menu: 'Menu',
    reservation: 'Reservierung',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Wunder Lampe',
    heroTagline: 'Wo Rauch auf Raffinesse trifft',
    heroDescription: 'Erleben Sie die perfekte Mischung aus Premium-Shisha, exquisiten Cocktails und luxuriöser Atmosphäre',
    
    // Menu Categories
    softdrinks: 'Softdrinks',
    hotDrinks: 'Heiße Getränke',
    beer: 'Bier',
    longdrinks: 'Longdrinks',
    cocktails: 'Cocktails',
    nonAlcoholicCocktails: 'Alkoholfreie Cocktails',
    shots: 'Shots',
    wine: 'Wein',
    bottles: 'Flaschen',
    whiskys: 'Whiskys',
    shisha: 'Shisha',
    
    // Footer
    openingHours: 'Öffnungszeiten',
    address: 'Adresse',
    followUs: 'Folgen Sie uns',
    newsletter: 'Newsletter',
    newsletterPlaceholder: 'E-Mail-Adresse eingeben',
    subscribe: 'Abonnieren',
    
    // Common
    price: 'Preis',
    viewMenu: 'Menu',
    makeReservation: 'Reservierung',
  },
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    reservation: 'Reservation',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Wunder Lampe',
    heroTagline: 'Where Smoke Meets Sophistication',
    heroDescription: 'Experience the perfect blend of premium shisha, exquisite cocktails, and luxurious atmosphere',
    
    // Menu Categories
    softdrinks: 'Soft Drinks',
    hotDrinks: 'Hot Drinks',
    beer: 'Beer',
    longdrinks: 'Long Drinks',
    cocktails: 'Cocktails',
    nonAlcoholicCocktails: 'Non-Alcoholic Cocktails',
    shots: 'Shots',
    wine: 'Wine',
    bottles: 'Bottles',
    whiskys: 'Whiskys',
    shisha: 'Shisha',
    
    // Footer
    openingHours: 'Opening Hours',
    address: 'Address',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    newsletterPlaceholder: 'Enter email address',
    subscribe: 'Subscribe',
    
    // Common
    price: 'Price',
    viewMenu: 'Menu',
    makeReservation: 'Make Reservation',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    menu: 'Menu',
    reservation: 'الحجز',
    location: 'الموقع',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'وندر لامبه',
    heroTagline: 'حيث يلتقي الدخان بالرقي',
    heroDescription: 'اختبر المزيج المثالي من الشيشة الفاخرة والكوكتيلات الرائعة والأجواء الفاخرة',
    
    // Menu Categories
    softdrinks: 'المشروبات الغازية',
    hotDrinks: 'المشروبات الساخنة',
    beer: 'البيرة',
    longdrinks: 'المشروبات الطويلة',
    cocktails: 'الكوكتيلات',
    nonAlcoholicCocktails: 'الكوكتيلات غير الكحولية',
    shots: 'الشوتس',
    wine: 'النبيذ',
    bottles: 'الزجاجات',
    whiskys: 'الويسكي',
    shisha: 'الشيشة',
    
    // Footer
    openingHours: 'ساعات العمل',
    address: 'العنوان',
    followUs: 'تابعنا',
    newsletter: 'النشرة الإخبارية',
    newsletterPlaceholder: 'أدخل عنوان البريد الإلكتروني',
    subscribe: 'اشترك',
    
    // Common
    price: 'السعر',
    viewMenu: 'Menu',
    makeReservation: 'احجز الآن',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');
  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = 'ltr';
  }, [isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
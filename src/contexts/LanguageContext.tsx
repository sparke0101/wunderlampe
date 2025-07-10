import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'ar';

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
    heroTitle: 'Wunderlampe',
    heroTagline: 'Wo Rauch auf Raffinesse trifft',
    heroDescription: 'Erleben Sie die perfekte Mischung aus Premium-Shisha, exquisiten Cocktails und luxuriöser Atmosphäre',
    quickMenuPreview: 'Quick Menu Preview',
    viewFullMenu: 'View Full Menu →',
    
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
    menuDescription: 'Entdecken Sie unsere Premium-Auswahl an Cocktails, Shishas und erlesenen Getränken',
    
    // Contact Page
    contactDescription: 'Kontaktieren Sie uns für Reservierungen, Veranstaltungen oder sonstige Anfragen',
    takeContact: 'Nehmen Sie Kontakt auf',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    businessHours: 'Geschäftszeiten',
    availableDuringHours: 'Verfügbar während der Geschäftszeiten',
    replyWithin24: 'Wir antworten innerhalb von 24 Stunden',
    mondayFriday: 'Montag-Freitag: 4:00 PM - 2:00 AM',
    weekend: 'Wochenende: 4:00 PM - 4:00 AM',
    specialServices: 'Special Services',
    privateEvents: 'Private Events & Parties',
    corporateEvents: 'Corporate Events',
    birthdayParties: 'Birthday Celebrations',
    vipService: 'VIP Table Service',
    catering: 'Catering Services',
    sendMessage: 'Send us a Message',
    messageSentSuccess: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
    messageSentError: 'Failed to send message. Please try again.',
    name: 'Name',
    yourFullName: 'Your full name',
    yourEmail: 'your@email.com',
    yourPhone: 'Your phone number',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    subjectReservation: 'Reservation',
    subjectEvent: 'Private Event',
    subjectFeedback: 'Feedback',
    subjectOther: 'Other',
    message: 'Message',
    tellUsHow: 'Tell us how we can help you...',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    required: '*',
    
    // Reservation Page
    reservationDescription: 'Reserve your table for an unforgettable evening at Wunderlampe',
    reservationSentSuccess: 'Reservation request sent successfully!',
    reservationSentSuccessDesc: 'We will contact you shortly to confirm your reservation.',
    reservationSentError: 'Failed to send reservation. Please try again.',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    enterEmail: 'Enter your email',
    enterPhone: 'Enter your phone number',
    numberOfGuests: 'Number of Guests',
    guest: 'Guest',
    guests: 'Guests',
    date: 'Date',
    time: 'Time',
    selectTime: 'Select time',
    specialRequests: 'Special Requests (Optional)',
    specialRequestsPlaceholder: 'Any special requests or notes...',
    confirmReservation: 'Confirm Reservation',
    whatToExpect: 'What to Expect',
    contactWithin2Hours: 'We\'ll contact you within 2 hours',
    confirmationEmail: 'Confirmation email sent',
    enjoyEvening: 'Enjoy your evening!',
    
    // Footer
    openingHours: 'Öffnungszeiten',
    footerDescription: 'Erleben Sie die perfekte Mischung aus Premium-Shisha, erlesenen Cocktails und luxuriöser Atmosphäre im Herzen der Stadt.',
    mondayFridayHours: 'Montag-Freitag:',
    mondayFridayTime: '4:00 PM - 2:00 AM',
    weekendHours: 'Wochenende:',
    weekendTime: '4:00 PM - 4:00 AM',
    followUs: 'Folgen Sie uns',
    newsletter: 'Newsletter',
    newsletterDescription: 'Bleiben Sie über unsere neuesten Angebote und Veranstaltungen auf dem Laufenden',
    newsletterPlaceholder: 'E-Mail-Adresse eingeben',
    subscribe: 'Abonnieren',
    joinCommunity: 'Join Our Community',
    communityDescription: 'Vernetzen Sie sich mit anderen Shisha-Fans und erhalten Sie exklusive Angebote.',
    communityDescriptionLong: 'Werden Sie Teil unserer exklusiven Community. Wir teilen Sonderangebote und Events und vernetzen uns mit anderen Shisha-Fans.',
    joinWhatsApp: 'Join Our WhatsApp Community',
    allRightsReserved: '© 2025 Wunderlampe. All rights reserved.',
    loadingExperience: 'Loading your experience...',
    
    // Common
    price: 'Preis',
    viewMenu: 'Menu',
    makeReservation: 'Reservierung',
    from: 'from',
  },
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    reservation: 'Reservation',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Wunderlampe',
    heroTagline: 'Where Smoke Meets Sophistication',
    heroDescription: 'Experience the perfect blend of premium shisha, exquisite cocktails, and luxurious atmosphere',
    quickMenuPreview: 'Quick Menu Preview',
    viewFullMenu: 'View Full Menu →',
    
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
    menuDescription: 'Discover our premium selection of cocktails, shishas and exquisite beverages',
    
    // Contact Page
    contactDescription: 'Contact us for reservations, events or any other inquiries',
    takeContact: 'Get in Touch',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    businessHours: 'Business Hours',
    availableDuringHours: 'Available during business hours',
    replyWithin24: 'We reply within 24 hours',
    mondayFriday: 'Monday-Friday: 4:00 PM - 2:00 AM',
    weekend: 'Weekend: 4:00 PM - 4:00 AM',
    specialServices: 'Special Services',
    privateEvents: 'Private Events & Parties',
    corporateEvents: 'Corporate Events',
    birthdayParties: 'Birthday Celebrations',
    vipService: 'VIP Table Service',
    catering: 'Catering Services',
    sendMessage: 'Send us a Message',
    messageSentSuccess: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
    messageSentError: 'Failed to send message. Please try again.',
    name: 'Name',
    yourFullName: 'Your full name',
    yourEmail: 'your@email.com',
    yourPhone: 'Your phone number',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    subjectReservation: 'Reservation',
    subjectEvent: 'Private Event',
    subjectFeedback: 'Feedback',
    subjectOther: 'Other',
    message: 'Message',
    tellUsHow: 'Tell us how we can help you...',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    required: '*',
    
    // Reservation Page
    reservationDescription: 'Reserve your table for an unforgettable evening at Wunderlampe',
    reservationSentSuccess: 'Reservation request sent successfully!',
    reservationSentSuccessDesc: 'We will contact you shortly to confirm your reservation.',
    reservationSentError: 'Failed to send reservation. Please try again.',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    enterEmail: 'Enter your email',
    enterPhone: 'Enter your phone number',
    numberOfGuests: 'Number of Guests',
    guest: 'Guest',
    guests: 'Guests',
    date: 'Date',
    time: 'Time',
    selectTime: 'Select time',
    specialRequests: 'Special Requests (Optional)',
    specialRequestsPlaceholder: 'Any special requests or notes...',
    confirmReservation: 'Confirm Reservation',
    whatToExpect: 'What to Expect',
    contactWithin2Hours: 'We\'ll contact you within 2 hours',
    confirmationEmail: 'Confirmation email sent',
    enjoyEvening: 'Enjoy your evening!',
    
    // Footer
    openingHours: 'Opening Hours',
    footerDescription: 'Experience the perfect blend of premium shisha, exquisite cocktails and luxurious atmosphere in the heart of the city.',
    mondayFridayHours: 'Monday-Friday:',
    mondayFridayTime: '4:00 PM - 2:00 AM',
    weekendHours: 'Weekend:',
    weekendTime: '4:00 PM - 4:00 AM',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    newsletterDescription: 'Stay updated on our latest offers and events',
    newsletterPlaceholder: 'Enter email address',
    subscribe: 'Subscribe',
    joinCommunity: 'Join Our Community',
    communityDescription: 'Connect with other shisha fans and receive exclusive offers.',
    communityDescriptionLong: 'Become part of our exclusive community. We share special offers and events and connect with other shisha fans.',
    joinWhatsApp: 'Join Our WhatsApp Community',
    allRightsReserved: '© 2025 Wunderlampe. All rights reserved.',
    loadingExperience: 'Loading your experience...',
    
    // Common
    price: 'Price',
    viewMenu: 'Menu',
    makeReservation: 'Make Reservation',
    from: 'from',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    menu: 'Menu',
    reservation: 'الحجز',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'وندر لامبه',
    heroTagline: 'حيث يلتقي الدخان بالرقي',
    heroDescription: 'اختبر المزيج المثالي من الشيشة الفاخرة والكوكتيلات الرائعة والأجواء الفاخرة',
    quickMenuPreview: 'معاينة القائمة السريعة',
    viewFullMenu: 'عرض القائمة الكاملة ←',
    
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
    menuDescription: 'اكتشف مجموعتنا المتميزة من الكوكتيلات والشيشة والمشروبات الفاخرة',
    
    // Contact Page
    contactDescription: 'اتصل بنا للحجوزات أو الفعاليات أو أي استفسارات أخرى',
    takeContact: 'تواصل معنا',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    businessHours: 'ساعات العمل',
    availableDuringHours: 'متاح خلال ساعات العمل',
    replyWithin24: 'نرد خلال 24 ساعة',
    mondayFriday: 'الاثنين-الجمعة: 4:00 PM - 2:00 AM',
    weekend: 'عطلة نهاية الأسبوع: 4:00 PM - 4:00 AM',
    specialServices: 'خدمات خاصة',
    privateEvents: 'الفعاليات الخاصة والحفلات',
    corporateEvents: 'فعاليات الشركات',
    birthdayParties: 'احتفالات أعياد الميلاد',
    vipService: 'خدمة الطاولة المميزة',
    catering: 'خدمات التموين',
    sendMessage: 'أرسل لنا رسالة',
    messageSentSuccess: 'تم إرسال رسالتك بنجاح! سنتواصل معك خلال 24 ساعة.',
    messageSentError: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    name: 'الاسم',
    yourFullName: 'اسمك الكامل',
    yourEmail: 'your@email.com',
    yourPhone: 'رقم هاتفك',
    subject: 'الموضوع',
    selectSubject: 'اختر موضوعاً',
    subjectReservation: 'حجز',
    subjectEvent: 'فعالية خاصة',
    subjectFeedback: 'تعليقات',
    subjectOther: 'أخرى',
    message: 'الرسالة',
    tellUsHow: 'أخبرنا كيف يمكننا مساعدتك...',
    sending: 'جاري الإرسال...',
    sendMessage: 'إرسال الرسالة',
    required: '*',
    
    // Reservation Page
    reservationDescription: 'احجز طاولتك لأمسية لا تُنسى في وندر لامبه',
    reservationSentSuccess: 'تم إرسال طلب الحجز بنجاح!',
    reservationSentSuccessDesc: 'سنتواصل معك قريباً لتأكيد حجزك.',
    reservationSentError: 'فشل في إرسال الحجز. يرجى المحاولة مرة أخرى.',
    fullName: 'الاسم الكامل',
    enterFullName: 'أدخل اسمك الكامل',
    enterEmail: 'أدخل بريدك الإلكتروني',
    enterPhone: 'أدخل رقم هاتفك',
    numberOfGuests: 'عدد الضيوف',
    guest: 'ضيف',
    guests: 'ضيوف',
    date: 'التاريخ',
    time: 'الوقت',
    selectTime: 'اختر الوقت',
    specialRequests: 'طلبات خاصة (اختياري)',
    specialRequestsPlaceholder: 'أي طلبات خاصة أو ملاحظات...',
    confirmReservation: 'تأكيد الحجز',
    whatToExpected: 'ما يمكن توقعه',
    contactWithin2Hours: 'سنتواصل معك خلال ساعتين',
    confirmationEmail: 'تم إرسال بريد التأكيد',
    enjoyEvening: 'استمتع بأمسيتك!',
    
    // Footer
    openingHours: 'ساعات العمل',
    footerDescription: 'اختبر المزيج المثالي من الشيشة الفاخرة والكوكتيلات الرائعة والأجواء الفاخرة في قلب المدينة.',
    mondayFridayHours: 'الاثنين-الجمعة:',
    mondayFridayTime: '4:00 PM - 2:00 AM',
    weekendHours: 'عطلة نهاية الأسبوع:',
    weekendTime: '4:00 PM - 4:00 AM',
    followUs: 'تابعنا',
    newsletter: 'النشرة الإخبارية',
    newsletterDescription: 'ابق على اطلاع بأحدث عروضنا وفعالياتنا',
    newsletterPlaceholder: 'أدخل عنوان البريد الإلكتروني',
    subscribe: 'اشترك',
    joinCommunity: 'انضم إلى مجتمعنا',
    communityDescription: 'تواصل مع محبي الشيشة الآخرين واحصل على عروض حصرية.',
    communityDescriptionLong: 'كن جزءاً من مجتمعنا الحصري. نشارك العروض الخاصة والفعاليات ونتواصل مع محبي الشيشة الآخرين.',
    joinWhatsApp: 'انضم إلى مجتمع الواتساب',
    allRightsReserved: '© 2025 وندر لامبه. جميع الحقوق محفوظة.',
    loadingExperience: 'جاري تحميل تجربتك...',
    
    // Common
    price: 'السعر',
    viewMenu: 'Menu',
    makeReservation: 'احجز الآن',
    from: 'من',
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
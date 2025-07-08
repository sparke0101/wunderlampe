import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ReservationPage from './pages/ReservationPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onPageChange={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'reservation':
        return <ReservationPage />;
      case 'location':
        return <LocationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="pt-16">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
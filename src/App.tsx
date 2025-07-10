import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'reservation':
        return <ReservationPage />;
      default:
        return (
          <>
            <Hero />
            <Menu />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
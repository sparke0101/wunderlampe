import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <div className="text-center px-4">
        <div className="relative">
          <img 
            src="/1000134193-removebg-preview.png" 
            alt="Wunder Lampe Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 animate-pulse brightness-110" 
          />
          <div className="absolute inset-0 rounded-full border-4 border-gold/20 border-t-gold animate-spin"></div>
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-gold mb-2">Wunder Lampe</h2>
        <p className="text-sm sm:text-base text-light-gray font-body">Loading your experience...</p>
      </div>
    </div>
  );
}
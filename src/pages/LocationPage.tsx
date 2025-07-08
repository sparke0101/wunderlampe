import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LocationPage() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gold mb-4">
            {t('location')}
          </h2>
          <p className="text-xl text-light-gray font-body max-w-2xl mx-auto">
            Visit us in the heart of Berlin for an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-8">
              <h3 className="text-3xl font-display font-bold text-gold mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>Visit Us</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-body font-semibold">Address</h4>
                    <p className="text-light-gray font-body">Hauptstraße 123<br />12345 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-body font-semibold">Phone</h4>
                    <p className="text-light-gray font-body">+49 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-body font-semibold">Email</h4>
                    <p className="text-light-gray font-body">info@wunderlampe.de</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-body font-semibold">Opening Hours</h4>
                    <div className="text-light-gray font-body space-y-1">
                      <p>Monday - Thursday: 6:00 PM - 2:00 AM</p>
                      <p>Friday - Saturday: 6:00 PM - 3:00 AM</p>
                      <p>Sunday: 6:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-8 flex items-center space-x-2 px-6 py-3 bg-gold text-black font-body font-semibold rounded-lg hover:bg-gold-light transition-all duration-300">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Transportation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-gold mb-6">Getting Here</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-body font-semibold mb-2">By Public Transport</h4>
                  <p className="text-light-gray font-body">
                    U-Bahn: U6 line, Hallesches Tor station (5 min walk)<br />
                    S-Bahn: S1, S2, S25 lines, Anhalter Bahnhof (7 min walk)<br />
                    Bus: Lines 248, M41 stop at Gitschiner Straße
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-body font-semibold mb-2">By Car</h4>
                  <p className="text-light-gray font-body">
                    Parking available on nearby streets<br />
                    Parkhaus Potsdamer Platz (10 min walk)
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-body font-semibold mb-2">By Taxi/Uber</h4>
                  <p className="text-light-gray font-body">
                    Drop-off available directly in front of the venue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gold mb-6">Location Map</h3>
            
            {/* Placeholder for map - in a real application, you would integrate with Google Maps or similar */}
            <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center border border-gold/20">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-light-gray font-body">Interactive map will be displayed here</p>
                <p className="text-gray-500 font-body text-sm mt-2">Hauptstraße 123, 12345 Berlin</p>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mt-8">
              <h4 className="text-white font-body font-semibold mb-4">Nearby Landmarks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="text-gold font-body font-medium">Potsdamer Platz</h5>
                  <p className="text-light-gray font-body text-sm">8 min walk</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="text-gold font-body font-medium">Brandenburg Gate</h5>
                  <p className="text-light-gray font-body text-sm">15 min walk</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="text-gold font-body font-medium">Checkpoint Charlie</h5>
                  <p className="text-light-gray font-body text-sm">12 min walk</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="text-gold font-body font-medium">Mall of Berlin</h5>
                  <p className="text-light-gray font-body text-sm">10 min walk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
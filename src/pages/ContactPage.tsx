import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 mb-4">
            {t('contact')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for reservations, events, or any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Phone</h4>
                    <p className="text-gray-400">+49 (0) 123 456 789</p>
                    <p className="text-gray-500 text-sm">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email</h4>
                    <p className="text-gray-400">info@wunderlampe.de</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Address</h4>
                    <p className="text-gray-400">Hauptstraße 123<br />12345 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Business Hours</h4>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Thursday: 6:00 PM - 2:00 AM</p>
                      <p>Friday - Saturday: 6:00 PM - 3:00 AM</p>
                      <p>Sunday: 6:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gold mb-6">Special Services</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Private Events & Parties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Corporate Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Birthday Celebrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">VIP Table Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Catering Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gold font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gold font-medium mb-2">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation</option>
                    <option value="event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gold font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
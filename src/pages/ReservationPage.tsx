import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ReservationPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 mb-4">
            {t('makeReservation')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table for an unforgettable evening at Wunder Lampe
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-8 shadow-xl shadow-gold/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gold font-medium mb-2 flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300"
                >
                  <option value="">Select time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="22:30">10:30 PM</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gold font-medium mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Any special requests or notes..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
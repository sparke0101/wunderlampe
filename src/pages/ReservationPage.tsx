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
    <section className="min-h-screen bg-gray-950 py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold mb-4">
            {t('makeReservation')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-light-gray font-body max-w-2xl mx-auto px-2">
            Reserve your table for an unforgettable evening at Wunder Lampe
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl shadow-gold/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Users className="w-4 h-4" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Clock className="w-4 h-4" />
                  <span>Time</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                >
                  <option value="">Select time</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
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
                  <option value="23:00">11:00 PM</option>
                  <option value="23:30">11:30 PM</option>
                  <option value="00:00">12:00 AM</option>
                  <option value="00:30">12:30 AM</option>
                  <option value="01:00">1:00 AM</option>
                  <option value="01:30">1:30 AM</option>
                  <option value="02:00">2:00 AM</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base resize-none"
                placeholder="Any special requests or notes..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gold text-black font-body font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:bg-gold-light active:scale-95 text-base sm:text-lg"
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
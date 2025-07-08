import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ReservationPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send reservation');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
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
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div className="text-green-100 text-sm sm:text-base">
                <p className="font-semibold">Reservation request sent successfully!</p>
                <p>We will contact you shortly to confirm your reservation.</p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-100 text-sm sm:text-base">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <User className="w-4 h-4" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4" />
                  <span>Email *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Phone className="w-4 h-4" />
                  <span>Phone *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Users className="w-4 h-4" />
                  <span>Number of Guests *</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  disabled={isSubmitting}
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
                  <span>Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  disabled={isSubmitting}
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gold font-body font-medium mb-2 flex items-center space-x-2 text-sm sm:text-base">
                  <Clock className="w-4 h-4" />
                  <span>Time *</span>
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                  disabled={isSubmitting}
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
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base resize-none"
                placeholder="Any special requests or notes..."
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gold text-black font-body font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:bg-gold-light active:scale-95 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Confirm Reservation'}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gold mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-light-gray font-body text-sm sm:text-base">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">1</span>
                </div>
                <p>We'll contact you within 2 hours</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">2</span>
                </div>
                <p>Confirmation email sent</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">3</span>
                </div>
                <p>Enjoy your evening!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
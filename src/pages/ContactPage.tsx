import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-contact', {
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
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
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
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold mb-4">
            {t('contact')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-light-gray font-body max-w-2xl mx-auto px-2">
            Kontaktieren Sie uns für Reservierungen, Veranstaltungen oder sonstige Anfragen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-4 sm:mb-6">Nehmen Sie Kontakt auf</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-body font-semibold text-base sm:text-lg">Phone</h4>
                    <a href="tel:+4915788818885" className="text-light-gray font-body hover:text-gold transition-colors text-sm sm:text-base">+49 1578 8818885</a>
                    <p className="text-gray-500 font-body text-xs sm:text-sm">Verfügbar während der Geschäftszeiten</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-body font-semibold text-base sm:text-lg">Email</h4>
                    <a href="mailto:info.wunderlampe@gmail.com" className="text-light-gray font-body hover:text-gold transition-colors text-sm sm:text-base break-all">info.wunderlampe@gmail.com</a>
                    <p className="text-gray-500 font-body text-xs sm:text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-body font-semibold text-base sm:text-lg">Address</h4>
                    <p className="text-light-gray font-body text-sm sm:text-base">Eisenbahnstraße 98<br />04315 Leipzig, Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-body font-semibold text-base sm:text-lg">Business Hours</h4>
                    <div className="text-light-gray font-body space-y-1 text-sm sm:text-base">
                      <p>Montag-Freitag: 4:00 PM - 2:00 AM</p>
                      <p>Wochenende: 4:00 PM - 4:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gold mb-4 sm:mb-6">Special Services</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-light-gray font-body text-sm sm:text-base">Private Events & Parties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-light-gray font-body text-sm sm:text-base">Corporate Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-light-gray font-body text-sm sm:text-base">Birthday Celebrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-light-gray font-body text-sm sm:text-base">VIP Table Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-light-gray font-body text-sm sm:text-base">Catering Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-4 sm:mb-6">Send us a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-100 text-sm sm:text-base">Your message has been sent successfully! We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-100 text-sm sm:text-base">{errorMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base"
                    disabled={isSubmitting}
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
                <label className="block text-gold font-body font-medium mb-2 text-sm sm:text-base">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 text-sm sm:text-base resize-none"
                  placeholder="Tell us how we can help you..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gold text-black font-body font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 flex items-center justify-center space-x-2 hover:bg-gold-light active:scale-95 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
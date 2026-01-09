import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { BookingFormData } from '../types';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    days: 1,
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `مرحبا، طلب حجز:%0aاسمي: ${formData.fullName}%0aهاتف: ${formData.phone}%0aأيام: ${formData.days}%0aضيوف: ${formData.guests}.%0aشقق الحسيمة.`;
    const whatsappUrl = `https://wa.me/212676025001?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-brand-blue p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-1">نموذج الحجز المباشر</h2>
            <p className="text-blue-100 font-english text-sm">Direct Booking Form</p>
          </div>
          
          <div className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-right bg-gray-50 focus:bg-white"
                  placeholder="أدخل اسمك الكريم"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-right">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-right placeholder:text-right bg-gray-50 focus:bg-white"
                  placeholder="06XXXXXXXX"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="days" className="block text-gray-700 font-bold mb-2 text-right">
                    عدد الأيام
                  </label>
                  <input
                    type="number"
                    id="days"
                    name="days"
                    min="1"
                    required
                    value={formData.days}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-center bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-bold mb-2 text-right">
                    عدد الضيوف
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-center bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 mt-4"
              >
                <span className="text-lg">تأكيد الحجز عبر واتساب</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
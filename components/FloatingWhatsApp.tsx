import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/212676025001?text=مرحبا، أريد معلومات عن شقق الحسيمة.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-green text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        تواصل معنا
      </span>
    </a>
  );
};
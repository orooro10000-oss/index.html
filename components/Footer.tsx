import React from 'react';
import { MapPin, Phone, Copyright } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-brand-blue" />
            <span>الحسيمة - Al Hoceima, Morocco</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-brand-green" />
            <a href="tel:0676025001" className="hover:text-white transition-colors">0676025001</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Copyright size={14} />
          <span>2026 شقق الحسيمة. جميع الحقوق محفوظة.</span>
        </div>
      </div>
    </footer>
  );
};
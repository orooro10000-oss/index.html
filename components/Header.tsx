import React, { useState } from 'react';
import { Menu, X, Home, Star, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'الرئيسية', href: '#home', icon: <Home className="w-4 h-4 ml-2" /> },
    { name: 'المميزات', href: '#features', icon: <Star className="w-4 h-4 ml-2" /> },
    { name: 'اتصل بنا', href: '#contact', icon: <Phone className="w-4 h-4 ml-2" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-blue tracking-tighter flex items-center">
            <span className="ml-2">شقق الحسيمة</span>
            <span className="text-sm font-normal text-gray-500 font-english hidden sm:inline-block">Al Hoceima Apts</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-reverse space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue font-medium transition-colors duration-200 flex items-center px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-brand-blue focus:outline-none p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-fadeIn">
            <ul className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-gray-700 hover:text-brand-blue hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200"
                  >
                    {item.icon}
                    <span className="text-lg">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
import React from 'react';
import { BedDouble, Waves, ShieldCheck, Car } from 'lucide-react';
import { Feature } from '../types';

export const Features: React.FC = () => {
  const featuresList: Feature[] = [
    {
      id: 1,
      icon: <BedDouble className="w-10 h-10 text-brand-blue" />,
      titleAr: 'غرف مريحة',
      titleEn: 'Comfortable Rooms',
    },
    {
      id: 2,
      icon: <Waves className="w-10 h-10 text-brand-blue" />,
      titleAr: 'إطلالة على البحر',
      titleEn: 'Sea View',
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-10 h-10 text-brand-blue" />,
      titleAr: 'أمان 24/7',
      titleEn: '24/7 Security',
    },
    {
      id: 4,
      icon: <Car className="w-10 h-10 text-brand-blue" />,
      titleAr: 'مواقف سيارات',
      titleEn: 'Private Parking',
    },
  ];

  return (
    <section id="features" className="py-12 bg-brand-light border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">مميزات الشقق</h2>
          <p className="text-gray-500 font-english">Our Features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-gray-100 flex flex-col items-center"
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.titleAr}</h3>
              <p className="text-gray-500 font-english text-sm">{feature.titleEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
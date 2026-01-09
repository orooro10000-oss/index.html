import React, { useState } from 'react';

export const Hero: React.FC = () => {
  // Using high-quality Unsplash images that match your description
  // because local file uploads are not accessible in this preview environment.
  const images = [
    {
      src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "صالون عصري مع أريكة فيروزية"
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-b0346efee539?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "غرفة النوم بفرش أزرق ومريح"
    },
    {
      src: "https://images.unsplash.com/photo-1628624747186-a941c72f6111?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "مدخل المنزل والنباتات"
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "المطبخ والرواق"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section id="home" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
              شقق مفروشة للكراء <br/>
              <span className="text-brand-blue">في مدينة الحسيمة</span>
            </h1>
            <p className="text-xl text-gray-500 font-english border-b border-gray-100 pb-4">
              Luxury Apartments for Rent in Al Hoceima
            </p>
            
            <div className="text-gray-600 leading-relaxed text-lg space-y-4">
              <p>
                استمتع بإقامة استثنائية في شققنا المصممة بعناية لتوفير أقصى درجات الراحة. ديكورات عصرية، ألوان هادئة مستوحاة من البحر، وتجهيزات متكاملة تلبي كافة احتياجاتك.
              </p>
              <p>
                الشقة مجهزة بصالون مريح، غرف نوم بفرش فاخر، مطبخ مجهز، وفضاءات نظيفة ومرتبة لضمان عطلة لا تُنسى لك ولعائلتك.
              </p>
              
              <ul className="space-y-2 mt-4 text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                  تصميم داخلي أنيق ومريح
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                  نظافة فائقة وتعقيم دوري
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                  موقع هادئ وقريب من المرافق
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
              >
                احجز موعدك الآن
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            {/* Main Large Image Display */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-4 h-[350px] md:h-[450px] transition-all duration-300">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-full object-cover animate-fadeIn"
                key={selectedImage.src} // Force re-render for animation
              />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
               {images.map((img, index) => (
                 <div 
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-lg overflow-hidden h-20 md:h-24 shadow-sm border-2 cursor-pointer transition-all duration-200 ${selectedImage.src === img.src ? 'border-brand-blue ring-2 ring-blue-100' : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'}`}
                 >
                   <img 
                    src={img.src} 
                    className="w-full h-full object-cover" 
                    alt={img.alt} 
                   />
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
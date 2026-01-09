import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
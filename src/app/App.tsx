import React from 'react';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Visionary } from './components/Visionary';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white w-full overflow-x-hidden">
      <Hero />
      <Products />
      <Visionary />
      <AboutUs />
      <Footer />
    </div>
  );
}
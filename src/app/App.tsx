import React from 'react';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Visionary } from './components/Visionary';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white w-full overflow-x-hidden">
      {/* Skip-to-content link for accessibility & SEO */}
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:bg-[#E60000] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
      >
        Skip to main content
      </a>

      <header>
        <Hero />
      </header>

      <main id="main-content">
        <Products />
        <Visionary />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
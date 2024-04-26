import React from 'react';

import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import OfferSwiper from '@/components/Modules/OfferSwiper/OfferSwiper';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <About />
      <OfferSwiper />
    </main>
  );
}

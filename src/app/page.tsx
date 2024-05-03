import React from 'react';

import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import OfferSwiper from '@/components/Modules/OfferSwiper/OfferSwiper';
import Career from '@/sections/Career/Career';
import Gallery from '@/sections/Gallery/Gallery';
import Contacts from '@/sections/Contacts/Contacts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OfferSwiper />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}

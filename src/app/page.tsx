import React from 'react';

import Header from '@/components/header/Header';
import Hero from '@/sections/hero/Hero';
import About from '@/sections/about/About';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <About />
    </main>
  );
}

import React from 'react';

import Header from '@/components/header/Header';
import Hero from '@/sections/hero/Hero';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
      </div>
    </main>
  );
}

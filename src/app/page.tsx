import React from 'react';

import Head from 'next/head';

import { Container } from './components/Container';

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-xl text-gray-900">Carp Travel</h1>
      </Container>
    </main>
  );
}

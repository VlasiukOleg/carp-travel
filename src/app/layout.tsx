import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ogImage from './opengraph-image.jpg';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carp Travel',
  description: 'Uncover CarpathiansSecrets',
  metadataBase: new URL('https://carptravel-kappa.vercel.app/'),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

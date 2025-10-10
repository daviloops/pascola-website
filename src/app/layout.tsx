import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/app/components/Footer';

import './globals.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Pascola restaurant',
  description: 'Traditional mexican food restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

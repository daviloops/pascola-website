import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

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
  title: 'Desayunos regionales Mayo Yoreme en Culiacán | Restaurante Pascola',
  description:
    'Pascola es un restaurante en Sinaloa con desayunos regionales y especialidad en cocina indígena Mayo Yoreme. Visítanos y saborea el norte.',
  keywords: [
    'restaurante en Culiacán',
    'desayunos regionales',
    'cocina Mayo Yoreme',
    'restaurante sinaloense',
    'comida tradicional Sinaloa',
  ],
  openGraph: {
    title: 'Restaurante Pascola | Desayunos regionales Mayo Yoreme en Culiacán',
    description:
      'Pascola es un restaurante en Sinaloa con desayunos regionales y especialidad en cocina indígena Mayo Yoreme. Visítanos y saborea el norte.',
    url: 'https://www.pascolarestaurante.mx',
    siteName: 'Restaurante Pascola',
    images: [
      {
        url: 'https://www.pascolarestaurante.mx/images/hero/restaurante-pascola.webp',
        width: 1920,
        height: 1440,
        alt: 'Desayuno tradicional Mayo Yoreme en Pascola',
      },
    ],
    locale: 'es_MX',

    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurante Pascola | Desayunos regionales Mayo Yoreme en Culiacán',
    description:
      'Pascola es un restaurante en Sinaloa con desayunos regionales y especialidad en cocina indígena Mayo Yoreme. Visítanos y saborea el norte.',
    images: ['https://www.pascolarestaurante.mx/images/hero/restaurante-pascola.webp'],
  },
  metadataBase: new URL('https://www.pascolarestaurante.mx'),
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
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

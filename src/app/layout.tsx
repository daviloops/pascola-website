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
  title: 'Desayunos tradicionales mexicanos en Culiacán | Restaurante Pascola',
  description:
    'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
  keywords: [
    'comida mexicana', // mas de 10,000
    'comida mexicana tradicional', // mas de 1,000
    'restaurantes de comida mexicana', // mas de 100
    'restaurante familiar', // mas de 100
    'comida sinaloense', // mas de 100
    'desayunos tradicionales',
    'desayunos tradicionales mexicanos',
    'restaurante en culiacan',
    'desayunos en culiacan',
    'restaurante de desayunos',
    'restaurantes de desayunos en culiacan',
    'comida indigena',
    'comida indígena',
    'comida indígena mexicana',
    'comida indígena de mexico',
    'mayo yoreme',
    'comida mayo yoreme',
    'restaurante sinaloense',
    'restaurante pascola culiacan', // sin revisar aun
    'pascola horario', // sin revisar aun
    'desayunos regionales', // no definido si es buena
  ],
  openGraph: {
    title: 'Restaurante Pascola | Desayunos tradicionales mexicanos en Culiacán',
    description:
      'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
    url: 'https://www.pascolarestaurante.mx',
    siteName: 'Restaurante Pascola',
    images: [
      {
        url: 'https://www.pascolarestaurante.mx/images/hero/restaurante-pascola.webp',
        width: 1920,
        height: 1440,
        alt: 'Desayuno tradicional mexicano en el restaurante Pascola',
      },
    ],
    locale: 'es_MX',

    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurante Pascola | Desayunos tradicionales mexicanos en Culiacán',
    description:
      'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
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

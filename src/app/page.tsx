import React from 'react';
import { Restaurant, WithContext } from 'schema-dts';

import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Gallery } from '@/app/components/Gallery';
import { Location } from '@/app/components/Location';
import { Facilities } from '@/app/components/Facilities';

import { SITE_URL } from '@/lib/constants';

// TODO clean
// import SuscriptionModal from '@/components/molecules/SuscriptionModal';

const jsonLd: WithContext<Restaurant> = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Pascola',
  description:
    'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
  url: SITE_URL,
  telephone: '+526673239767',
  // TODO: add more images
  image: [
    `${SITE_URL}/images/hero/restaurante-pascola.webp`,
    `${SITE_URL}/images/facilities/palapa-con-mesas.webp`,
    `${SITE_URL}/images/facilities/area-privada.webp`,
    `${SITE_URL}/images/facilities/palapa-y-exterior.webp`,
    `${SITE_URL}/images/facilities/area-descanso-con-techumbre.webp`,
    `${SITE_URL}/images/facilities/area-ninos.webp`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Blvd. Rotarismo 1835, Desarrollo Urbano Tres Ríos',
    addressLocality: 'Culiacán',
    addressRegion: 'Sinaloa',
    postalCode: '80020',
    addressCountry: 'MX',
  },
  openingHours: ['Mo-Fr 06:30-13:30', 'Sa-Su 07:00-14:00'],
  servesCuisine: [
    'Sinaloense',
    'Mexican',
    'Indigenous mexican',
    'Mayo Yoreme',
    'Tradicional',
    'Regional',
  ],
  priceRange: '$100-200',
  // TODO: upgrade
  hasMenu: `${SITE_URL}/menu-pascola.pdf`,
  acceptsReservations: 'https://wa.me/526673239767',
  paymentAccepted: 'Cash, Debit Card, Credit Card',
  currenciesAccepted: 'MXN, USD',
  // TODO: automate
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '723',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Culiacán, Sinaloa',
  },
  brand: {
    '@type': 'Brand',
    name: 'Pascola',
  },
  // TODO: upgrade
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+526673239767',
    contactType: 'Customer Service',
    areaServed: 'MX',
    availableLanguage: ['Spanish'],
  },
  email: 'restaurante.pascola@gmail.com',
  foundingDate: '2013-12-12',
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
  logo: `${SITE_URL}/images/hero/logo.svg`,
  // TODO: upgrade
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Menu',
      name: 'Menú de desayunos',
      url: `${SITE_URL}/menu-pascola.pdf`,
    },
    priceCurrency: 'MXN',
  },
  hasMap: 'https://maps.app.goo.gl/z1kxANL49a1LysUN7',
  latitude: 24.8217093,
  longitude: -107.4077027,
  publicAccess: true,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': SITE_URL,
  },
  // TODO: add more
  sameAs: [
    'https://www.facebook.com/pascolacln',
    'https://www.instagram.com/pascolacln',
    'https://www.google.com/maps/place/Restaurant+Regional+PASCOLA/@24.8217955,-107.4078471,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcda0cd9b9352b:0x53aa48dca84b506!8m2!3d24.8217955!4d-107.4078471!16s%2Fg%2F11b7q1ydml',
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Hero />
      <About />
      <Gallery />
      <Location />
      <Facilities />
      {/* // TODO clean and also from styles */}
      {/* <section className={styles['suscription-section']}>
        <div className={styles['suscription-raices-container']}>
          <Image alt="raices del pueblo" src="/images/raices-del-pueblo-yellow.svg" width="300" height="600" />
        </div>
        <div className={styles['red-symbol-container']}>
          <Image alt="simbolo rojo" src="/images/symbol-red.svg" width="420" height="420" />
        </div>
        <div className={styles['tusimmabewaa-container']}>
          <Image alt="tusim mabewwa" src="/images/tusim-mabewwa.svg" width="420" height="420" />
        </div>
        <div className={styles['juyaania-suscription-container']}>
          <Image alt="juya ania" src="/images/juya-ania.svg" width="420" height="420" />
        </div>
        <div className={styles['suscription-content']}>
          <SuscriptionModal />
        </div>
      </section> */}
    </main>
  );
}

import { Restaurant, WithContext } from 'schema-dts';

import { SITE_URL } from '@/lib/constants';

export const RestaurantData: WithContext<Restaurant> = {
  '@context': 'https://schema.org',
  '@id': `${SITE_URL}/#restaurant`,
  '@type': 'Restaurant',
  name: 'Pascola',
  description:
    'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
  url: SITE_URL,
  telephone: '+526673239767',
  // TODO: add more images
  image: [
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/hero/restaurante-pascola.webp`,
      caption: 'Restaurante Pascola con un platillo de comida en el centro',
      height: '2304',
      width: '3072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/facilities/palapa-con-mesas.webp`,
      caption: 'Mesas bajo la palapa principal',
      height: '715',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/facilities/area-privada.webp`,
      caption: 'Area privada para comer y eventos',
      height: '804',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/facilities/area-ninos.webp`,
      caption: 'Area de niños con juegos',
      height: '971',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/chilaquiles-en-salsa-roja-con-pollo.webp`,
      caption: 'Chilaquiles en salsa roja con pollo',
      height: '863',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/combinacion-chibba.webp`,
      caption: 'Combinacion chibba',
      height: '2304',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/minipanques.webp`,
      caption: 'Minipanques',
      height: '904',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/enchiladas-rojas-con-pollo.webp`,
      caption: 'Enchiladas rojas con pollo',
      height: '998',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/combinacion-mochicahui.webp`,
      caption: 'Combinacion mochicahui',
      height: '890',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/gallina-pinta.webp`,
      caption: 'Gallina pinta',
      height: '977',
      width: '1072',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/estrellados-montaditos-en-mole-pascola.webp`,
      caption: 'Estrellados montaditos en mole pascola',
      height: '915',
      width: '1072',
    },
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
    ratingValue: '4.6',
    reviewCount: '723',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Culiacán, Sinaloa',
  },
  brand: {
    '@type': 'Brand',
    name: 'Pascola',
    logo: `${SITE_URL}/images/hero/logo.webp`,
    url: SITE_URL,
  },
  // TODO: upgrade
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+526673239767',
    contactType: ['Customer Service', 'Reservations'],
    areaServed: 'MX',
    availableLanguage: ['es'],
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
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Menu',
        name: 'Menú de desayunos',
        url: `${SITE_URL}/menu-pascola.pdf`,
      },
      priceCurrency: 'MXN',
    },
    {
      '@type': 'Offer',
      name: 'Servicio de eventos privados',
      description:
        'Servicio completo de organización de eventos privados, incluyendo el espacio, la comida y el personal.',
      url: SITE_URL,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
  ],
  hasMap: 'https://maps.app.goo.gl/z1kxANL49a1LysUN7',
  latitude: 24.8217093,
  longitude: -107.4077027,
  publicAccess: true,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
  },
  // TODO: add more
  sameAs: [
    'https://www.facebook.com/pascolacln',
    'https://www.instagram.com/pascolacln',
    'https://www.google.com/maps/place/Restaurant+Regional+PASCOLA/@24.8217955,-107.4078471,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcda0cd9b9352b:0x53aa48dca84b506!8m2!3d24.8217955!4d-107.4078471!16s%2Fg%2F11b7q1ydml',
  ],
};

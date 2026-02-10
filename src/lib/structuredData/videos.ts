import { SITE_URL } from '@/lib/constants';

export const RestaurantVideo = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${SITE_URL}/#restaurant-video`,
  name: 'Recorrido por el restaurante Pascola',
  description:
    'Descubre el ambiente, los platillos y la experiencia completa que ofrece el restaurante Pascola en Culiacán. Te invitamos a vivirlo.',
  thumbnailUrl: [`${SITE_URL}/videos/poster_pascola.png`],
  uploadDate: '2026-02-10T13:00:00-07:00',
  duration: 'PT22S',
  contentUrl: `${SITE_URL}/videos/pascola.mp4`,
  embedUrl: `${SITE_URL}`,
  inLanguage: 'es-MX',
  publisher: { '@id': `${SITE_URL}/#restaurant` },
  creator: { '@id': `${SITE_URL}/#restaurant` },
  productionCompany: { '@id': `${SITE_URL}/#restaurant` },
  genre: ['Video promocional', 'Recorrido del restaurante'],
  keywords: [
    'Pascola restaurante',
    'gastronomía',
    'turismo',
    'recorrido del restaurante',
    'restaurante en Culiacán',
    'comida mexicana',
    'desayunos tradicionales',
    'desayunos regionales',
    'comida sinaloense',
    'mayo yoreme',
  ],
  isFamilyFriendly: true,
  // TODO: include video clips
  // "hasPart": {
  //   "@type": "Clip",
  //   "name": "Vista del comedor principal",
  //   "startOffset": 0,
  //   "endOffset": 15,
  //   "url": `${SITE_URL}/videos/pascola.mp4`
  // },
  potentialAction: {
    '@type': 'WatchAction',
    target: `${SITE_URL}`,
    name: 'Ver recorrido',
  },
};

export const RestaurantVideo2 = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${SITE_URL}/#restaurant-video-2`,
  name: 'Segundo recorrido por el restaurante Pascola',
  description:
    'Descubre el ambiente, los platillos y la experiencia completa que ofrece el restaurante Pascola en Culiacán. Te invitamos a vivirlo.',
  thumbnailUrl: [`${SITE_URL}/videos/poster_pascola.png`],
  uploadDate: '2026-02-10T13:00:00-07:00',
  duration: 'PT32S',
  contentUrl: `${SITE_URL}/videos/pascola.mp4`,
  embedUrl: `${SITE_URL}`,
  inLanguage: 'es-MX',
  publisher: { '@id': `${SITE_URL}/#restaurant` },
  creator: { '@id': `${SITE_URL}/#restaurant` },
  productionCompany: { '@id': `${SITE_URL}/#restaurant` },
  genre: ['Video promocional', 'Recorrido del restaurante'],
  keywords: [
    'Pascola restaurante',
    'gastronomía',
    'turismo',
    'recorrido del restaurante',
    'restaurante en Culiacán',
    'comida mexicana',
    'desayunos tradicionales',
    'desayunos regionales',
    'comida sinaloense',
    'mayo yoreme',
  ],
  isFamilyFriendly: true,
  // TODO: include video clips
  // "hasPart": {
  //   "@type": "Clip",
  //   "name": "Vista del comedor principal",
  //   "startOffset": 0,
  //   "endOffset": 15,
  //   "url": `${SITE_URL}/videos/pascola.mp4`
  // },
  potentialAction: {
    '@type': 'WatchAction',
    target: `${SITE_URL}`,
    name: 'Ver recorrido',
  },
};

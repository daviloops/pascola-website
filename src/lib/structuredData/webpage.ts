import { WebPage, WithContext } from 'schema-dts';
import { SITE_URL } from '@/lib/constants';

export const WebPageData: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@id': `${SITE_URL}/#webpage`,
  '@type': 'WebPage',
  name: 'Restaurante Pascola | Desayunos regionales en Culiacán',
  inLanguage: 'es',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#restaurant` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/hero/restaurante-pascola.webp`,
  },
  description:
    'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
  isFamilyFriendly: true,
  image: `${SITE_URL}/images/hero/restaurante-pascola.webp`,
  mainEntity: { '@id': `${SITE_URL}/#restaurant` },
  potentialAction: [
    {
      '@type': 'ReadAction',
      name: 'Ver página del restaurant',
      target: SITE_URL,
    },
  ],
  url: SITE_URL,
};

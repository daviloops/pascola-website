import { WebSite, WithContext } from 'schema-dts';
import { SITE_URL } from '@/lib/constants';

export const WebSiteData: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@id': `${SITE_URL}/#website`,
  '@type': 'WebSite',
  name: 'Pascola',
  inLanguage: 'es',
  description:
    'Restaurante familiar en Culiacán que ofrece desayunos regionales típicos de Sinaloa. Saborea la cocina indígena Mayo Yoreme.',
  isFamilyFriendly: true,
  image: `${SITE_URL}/images/hero/restaurante-pascola.webp`,
  sameAs: [
    'https://www.instagram.com/pascolacln',
    'https://www.facebook.com/pascolacln',
    'https://www.google.com/maps/place/Restaurant+Regional+PASCOLA/@24.8217955,-107.4078471,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcda0cd9b9352b:0x53aa48dca84b506!8m2!3d24.8217955!4d-107.4078471!16s%2Fg%2F11b7q1ydml',
  ],
  about: { '@id': `${SITE_URL}/#restaurant` },
  potentialAction: [
    {
      '@type': 'ViewAction',
      name: 'Ver menú',
      target: `${SITE_URL}/menu-pascola.pdf`,
    },
    {
      '@type': 'OrderAction',
      name: 'Ordenar comida',
      target: 'https://wa.me/526673239767',
    },
    {
      '@type': 'ReserveAction',
      name: 'Reservar evento',
      target: 'https://wa.me/526673239767',
    },
    {
      '@type': 'ViewAction',
      name: 'Ver ubicación en Google Maps',
      target:
        'https://www.google.com/maps/place/Restaurant+Regional+PASCOLA/@24.8217955,-107.4078471,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcda0cd9b9352b:0x53aa48dca84b506!8m2!3d24.8217955!4d-107.4078471!16s%2Fg%2F11b7q1ydml',
    },
    {
      '@type': 'CommunicateAction',
      name: 'Contactar por WhatsApp',
      target: 'https://wa.me/526673239767',
    },
    {
      '@type': 'CommunicateAction',
      name: 'Llamar por teléfono',
      target: 'tel:+526673239767',
    },
    {
      '@type': 'CommunicateAction',
      name: 'Enviar correo electrónico',
      target: 'mailto:restaurante.pascola@gmail.com',
    },
    {
      '@type': 'InteractAction',
      name: 'Visitar Instagram',
      target: 'https://www.instagram.com/pascolacln',
    },
    {
      '@type': 'InteractAction',
      name: 'Visitar Facebook',
      target: 'https://www.facebook.com/pascolacln',
    },
  ],
  url: SITE_URL,
};

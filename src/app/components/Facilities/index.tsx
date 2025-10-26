import { EmblaOptionsType } from 'embla-carousel';

import { EmblaCarousel } from './EmblaCarousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    imageSrc: '/images/facilities/palapa-con-mesas.webp',
    altText: 'mesas bajo la palapa principal',
    sizes: '(max-width: 640px) 404px, (max-width: 768px) 450px, (max-width: 1024px) 500px, 666px',
    width: 600, // forced to fit, real value is 720
    height: 450, // forced to fit, real value is 480
  },
  {
    imageSrc: '/images/facilities/area-privada.webp',
    altText: 'area privada para comer y eventos',
    sizes:
      '(max-width: 640px) 324px, (max-width: 768px) 368px, (max-width: 1024px) 416px, (max-width: 1280px) 384px, (max-width: 1536px) 444px, 488px',
    width: 600,
    height: 450,
  },
  {
    imageSrc: '/images/facilities/palapa-y-exterior.webp',
    altText: 'mesas bajo la palapa principal y jardín exterior',
    sizes:
      '(max-width: 640px) 324px, (max-width: 768px) 368px, (max-width: 1024px) 416px, (max-width: 1280px) 384px, (max-width: 1536px) 444px, 488px',
    width: 600,
    height: 450,
  },
  {
    imageSrc: '/images/facilities/area-descanso-con-techumbre.webp',
    altText: 'area de descanso con sillas y decoraciones bajo un techumbre de madera',
    sizes:
      '(max-width: 640px) 324px, (max-width: 768px) 368px, (max-width: 1024px) 416px, (max-width: 1280px) 384px, (max-width: 1536px) 444px, 488px',
    width: 600,
    height: 450,
  },
  {
    imageSrc: '/images/facilities/area-ninos.webp',
    altText: 'area de niños con juegos',
    sizes: '(max-width: 640px) 298px, (max-width: 768px) 332px, (max-width: 1024px) 368px, 492px',
    width: 600,
    height: 450, // forced to fit, real value is 543
  },
];

const Facilities = () => {
  return (
    <section className="flex items-center justify-center bg-[#EDE4DF] pt-15 pb-19 sm:pt-16 sm:pb-20 md:pt-18 md:pb-21 lg:pt-25 lg:pb-30">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export { Facilities };

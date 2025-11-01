import { EmblaCarousel } from '@/components/EmblaCarousel';

import { SLIDES } from './slides';
import { AUTOPLAY_OPTIONS, OPTIONS } from './config';

const Gallery = () => {
  return (
    <section className="relative bg-[#EAA63A] py-28">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} autoplayOptions={AUTOPLAY_OPTIONS} />
    </section>
  );
};

export { Gallery };

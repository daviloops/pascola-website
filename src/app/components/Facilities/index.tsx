import { EmblaCarousel } from '@/components/EmblaCarousel';

import { SLIDES } from './slides';
import { AUTOPLAY_OPTIONS, OPTIONS } from './config';

const Facilities = () => {
  return (
    <section className="flex items-center justify-center bg-[#EDE4DF] pt-15 pb-19 sm:pt-16 sm:pb-20 md:pt-18 md:pb-21 lg:pt-25 lg:pb-30">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} autoplayOptions={AUTOPLAY_OPTIONS} />
    </section>
  );
};

export { Facilities };

import { EmblaCarousel } from '@/app/components/Facilities/EmblaCarousel';
import { VideoModal } from '@/components/VideoModal';

import { SLIDES } from './slides';
import { AUTOPLAY_OPTIONS, OPTIONS } from './config';

const Facilities = () => {
  return (
    <section className="flex items-center justify-center gap-12 bg-[#EDE4DF] px-12 pt-15 pb-19 max-lg:flex-col sm:gap-14 sm:pt-16 sm:pb-20 md:gap-18 md:pt-18 md:pb-21 lg:gap-8 lg:pt-25 lg:pb-28">
      <div className="w-full max-lg:order-2 max-lg:max-w-[444] lg:w-1/4">
        <VideoModal
          webmSrc="/videos/pascola.webm"
          mp4Src="/videos/pascola.mp4"
          posterSrc="/videos/poster_pascola.png"
          posterAlt="Pascola restaurante"
          posterYOffset={40}
        />
      </div>
      <div className="w-full max-lg:order-1 lg:w-2/4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} autoplayOptions={AUTOPLAY_OPTIONS} />
      </div>
      <div className="w-full max-lg:order-3 max-lg:max-w-[444] lg:w-1/4">
        <VideoModal
          webmSrc="/videos/pascola2.webm"
          mp4Src="/videos/pascola2.mp4"
          posterSrc="/videos/poster_pascola2.png"
          posterAlt="Pascola restaurante"
          posterYOffset={15}
        />
      </div>
    </section>
  );
};

export { Facilities };

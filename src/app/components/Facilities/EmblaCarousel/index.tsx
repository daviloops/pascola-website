'use client';

import React from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { AutoplayOptionsType } from 'embla-carousel-autoplay';

type Slide = {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, autoplayOptions } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options, [
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: autoplayOptions?.delay || 3000,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    }),
  ]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

  const slideSpace = 32;

  const slideSize = 324;
  const slideSizeSm = 368;
  const slideSizeMd = 436;
  const slideSizeLg = 444;
  const slideSizeXl = 496;
  const slideSize2xl = 536;

  const cSize = slideSize + slideSpace;
  const cSizeSm = slideSizeSm + slideSpace;
  const cSizeMd = slideSizeMd + slideSpace;
  const cSizeLg = slideSizeLg + slideSpace;
  const cSizeXl = slideSizeXl + slideSpace;
  const cSize2xl = slideSize2xl + slideSpace;

  return (
    <section
      className={`embla lw-[${cSize}] sm:w-[${cSizeSm}] md:w-[${cSizeMd}] lg:w-[${cSizeLg}] xl:w-[${cSizeXl}] 2xl:w-[${cSize2xl}]`}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ imageSrc, altText, width, height }: Slide, index) => (
            <div className="embla__slide flex-[0_0_100%]" key={index}>
              <div className="embla__slide__number h-[243] sm:h-[276] md:h-[327] lg:h-[333] xl:h-[372] 2xl:h-[402]">
                <div
                  className={`relative aspect-${width}/${height} h-[243] w-[324] sm:h-[276] sm:w-[368] md:h-[327] md:w-[436] lg:h-[333] lg:w-[444] xl:h-[372] xl:w-[496] 2xl:h-[402] 2xl:w-[536]`}
                >
                  <Image
                    className="embla__slide__img h-[243] object-cover sm:h-[276] md:h-[327] lg:h-[333] xl:h-[372] 2xl:h-[402]"
                    src={imageSrc}
                    alt={altText}
                    sizes="(max-width: 640px) 324px, (max-width: 768px) 368px, (max-width: 1024px) 436px, (max-width: 1280px) 444px, (max-width: 1536px) 496px, 536px"
                    fill
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EmblaCarousel };

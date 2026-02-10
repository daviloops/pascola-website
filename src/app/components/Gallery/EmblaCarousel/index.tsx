'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { AutoplayOptionsType } from 'embla-carousel-autoplay';

import './embla.css';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

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
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: autoplayOptions?.delay || 3000,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    }),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  // TODO: define 3 variables for carousel
  // --slide-height: 19rem;
  // --slide-spacing: 1rem;
  // --slide-size: 55%;

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ imageSrc, altText, width, height }: Slide, index) => (
            <div
              className="embla__slide flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_38%]"
              key={index}
            >
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
    </div>
  );
};

export { EmblaCarousel };

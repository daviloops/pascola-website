'use client';

import Image from 'next/image';

import { Section } from '@/app/components/Section';
import { MenuButton } from '@/app/components/Hero/MenuButton';

const Hero = () => {
  return (
    <Section id="hero" className="relative flex min-h-dvh justify-center pt-6">
      <Image
        alt="restaurante Pascola con un platillo de comida en el centro"
        src="/images/hero/restaurante-pascola.webp"
        fill
        className="bg-[#D94E41] object-cover max-sm:object-top"
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-[36] px-12 pb-14 text-center sm:gap-[52]">
        <div className="relative h-[188.96] w-[300] sm:h-[290.4] sm:w-[462]">
          <Image
            alt="logo"
            src="/images/hero/logo.webp"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 264px, 462px"
          />
        </div>
        <div className="max-w-[240] sm:max-w-[410]">
          <h1 className="text-[1.125rem] text-[#ffffff] sm:text-[1.56rem]">
            Sabores únicos que te transportarán a la tradición del pueblo
          </h1>
        </div>
        <div className={`join join-horizontal z-10 gap-4 max-sm:absolute max-sm:bottom-6 sm:gap-8`}>
          <MenuButton
            className="join-item"
            href="/menu-pascola.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menú
          </MenuButton>
          <MenuButton className="join-item" href="https://wa.me/526673239767">
            Ordenar
          </MenuButton>
          <MenuButton className="join-item" href="https://wa.me/526673239767">
            Eventos
          </MenuButton>
        </div>
      </div>
    </Section>
  );
};

export { Hero };

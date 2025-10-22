import Image from 'next/image';

import { Section } from '@/app/components/Section';
import { MenuButton } from '@/app/components/Hero/MenuButton';

const Hero = () => {
  return (
    <Section className="relative flex h-dvh justify-center">
      <Image
        priority
        alt="restaurante Pascola con un platillo de comida en el centro"
        src="/images/restaurante_pascola1.webp"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-[10] flex flex-col items-center justify-center gap-[36] px-[3rem] text-center sm:gap-[52]">
        <div className="relative h-[166] w-[264] sm:h-[290.4] sm:w-[462]">
          <Image priority alt="logo" src="/images/logo.svg" fill className="object-cover" />
        </div>
        <div className="join join-vertical sm:join-horizontal gap-4 sm:gap-8">
          <MenuButton
            className="join-item"
            href="/menu-dic-24.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menú
          </MenuButton>
          <MenuButton className="join-item" href="tel:+526673239767">
            Ordenar
          </MenuButton>
          <MenuButton className="join-item" href="tel:+526673239767">
            Eventos
          </MenuButton>
        </div>
        <div className="max-w-[240] sm:max-w-[410]">
          <h1 className="text-[1.125rem] text-[#ffffff] sm:text-[1.56rem]">
            Sabores únicos que te transportarán a la tradición del pueblo
          </h1>
        </div>
      </div>
    </Section>
  );
};

export { Hero };

import Image from 'next/image';

import { Section } from '@/app/components/Section';

const Hero = () => {
  return (
    <Section className="relative flex h-dvh justify-center">
      <Image
        priority
        alt="estanque con una flor"
        src="/images/estanque.png"
        fill
        className="object-cover"
      />
      <div className="relative z-[1] flex flex-col items-center justify-center gap-[36] px-[3rem] text-center sm:gap-[52]">
        <div className="relative h-[166] w-[264] sm:h-[290.4] sm:w-[462]">
          <Image priority alt="logo" src="/images/logo.svg" fill className="object-cover" />
        </div>
        <div className="max-w-[240] sm:max-w-[410]">
          <h1 className="text-[1.125rem] text-[#ffffff] sm:text-[1.56rem]">
            Sabores únicos que te transportarán a la tradición del pueblo.
          </h1>
        </div>
      </div>
    </Section>
  );
};

export { Hero };

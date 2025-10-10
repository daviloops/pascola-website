import React from 'react';
import Image from 'next/image';

import { Section } from '@/app/components/Section';

// TODO clean
// import SuscriptionModal from '@/components/molecules/SuscriptionModal';

export default function Home() {
  return (
    <main>
      <Section className="relative flex h-dvh justify-center">
        <Image
          priority
          alt="estanque"
          src="/images/fondo.png"
          fill
          className="absolute object-cover"
        />
        <div className="relative z-[1] flex flex-col items-center justify-center gap-[36] px-[3rem] text-center sm:gap-[52]">
          <div className="relative h-[166] w-[264] sm:h-[290.4] sm:w-[462]">
            <Image priority alt="logo" src="/images/logo.svg" fill className="object-cover" />
          </div>
          <div className="max-w-[240] sm:max-w-[410]">
            <p className="text-[1.125rem] text-[#ffffff] sm:text-[1.56rem]">
              Sabores únicos que te transportarán a la tradición del pueblo.
            </p>
          </div>
        </div>
      </Section>
      <section className="relative flex h-[480] justify-center overflow-visible bg-[#D94E41] pt-[4.5rem] text-center text-[#ffffff] sm:h-[900] sm:pt-[7.9rem] lg:h-[531] lg:items-center lg:pt-0">
        <div className="absolute top-[32] left-[2dvw] min-[1111]:left-[5dvw] sm:top-[444] sm:left-[20dvw] lg:top-[161] lg:left-[2dvw] xl:left-[10dvw]">
          <div className="absolute top-[300] left-[58] sm:top-[0] sm:left-[19]">
            <div className="relative h-[88] w-[88] sm:h-[174] sm:w-[174]">
              <Image
                alt="raices del pueblo"
                src="/images/raices-del-pueblo.svg"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute top-[374] left-[49] sm:top-[148] sm:left-[0]">
            <div className="relative h-[57] w-[73] sm:h-[113.97] sm:w-[146]">
              <Image alt="juya ania" src="/images/juya-ania.svg" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="z-[1] mb-[3rem]">
          <div className="mb-7">
            <h1 className="text-[1.75rem] font-bold sm:text-[2.5rem]">Raíces del Pueblo</h1>
          </div>
          <div className="max-w-[19rem] sm:max-w-[39rem]">
            <p className="text-[1.125rem] sm:text-[1.5rem]">
              En Pascola Restaurante, nuestro compromiso es llevar a tus sentidos una experiencia
              gastronómica única, en la cual la tradición y el sabor se entrelacen para
              transportarte a las raíces de la cocina sinaloense.
            </p>
          </div>
        </div>
        <div className="absolute right-2 bottom-[-34] z-100 sm:bottom-[-86] lg:bottom-[-100]">
          <div className="relative h-[176] w-[176] sm:h-[444] sm:w-[444] lg:h-[510] lg:w-[510]">
            <Image alt="danzante" src="/images/danzante.svg" fill className="object-contain" />
          </div>
        </div>
      </section>
      <Section className="relative bg-[#EAA63A]">
        <div className="flex"></div>
        <div className="min-h-40"></div>
      </Section>
      <section className="flex flex-col justify-between bg-[#EDE4DF] lg:flex-row">
        <div className="z-[1] mx-[2rem] my-[3.75rem] flex flex-wrap gap-[3.75rem] sm:mt-[5.15rem] sm:ml-[3rem] lg:flex-col">
          <div className="flex flex-col gap-[12] sm:gap-[16]">
            <h2 className="text-[1.5rem] font-bold sm:text-[1.875rem]">UBICACIÓN</h2>
            <div className="w-[276] sm:w-[21rem]">
              <p className="text-[1.25rem] sm:text-[1.50rem]">
                Blvd. Rotarismo 1835, Desarrollo Urbano Tres Ríos, 80020, Culiacán Rosales, Sin.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12] sm:gap-[16]">
            <h2 className="text-[1.5rem] font-bold sm:text-[1.875rem]">HORARIOS</h2>
            <div className="max-w-none sm:w-[26rem] lg:w-[220]">
              <p className="text-[1.25rem] sm:text-[1.50rem]">
                Lunes a Viernes: 7:00 AM - 1:30 PM <br></br>
                Sábado y Domingo: 7:30 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="relative aspect-[375/340] w-full lg:w-[639]">
          <Image alt="location" src="/images/location.svg" fill className="object-contain" />
        </div>
      </section>
      {/* // TODO clean and also from styles */}
      {/* <section className={styles['suscription-section']}>
        <div className={styles['suscription-raices-container']}>
          <Image alt="raices del pueblo" src="/images/raices-del-pueblo-yellow.svg" width="300" height="600" />
        </div>
        <div className={styles['red-symbol-container']}>
          <Image alt="simbolo rojo" src="/images/symbol-red.svg" width="420" height="420" />
        </div>
        <div className={styles['tusimmabewaa-container']}>
          <Image alt="tusim mabewwa" src="/images/tusim-mabewwa.svg" width="420" height="420" />
        </div>
        <div className={styles['juyaania-suscription-container']}>
          <Image alt="juya ania" src="/images/juya-ania.svg" width="420" height="420" />
        </div>
        <div className={styles['suscription-content']}>
          <SuscriptionModal />
        </div>
      </section> */}
    </main>
  );
}

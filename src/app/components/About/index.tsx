import Image from 'next/image';

const About = () => {
  return (
    <section className="relative flex h-[480] justify-center overflow-visible bg-[#D94E41] pt-18 text-center text-[#ffffff] sm:h-[900] sm:pt-[7.9rem] lg:h-[531] lg:items-center lg:pt-0">
      <div className="absolute top-[32] left-[2dvw] min-[1111]:left-[5dvw] sm:top-[444] sm:left-[20dvw] lg:top-[161] lg:left-[2dvw] xl:left-[10dvw]">
        <div className="absolute top-[300] left-[58] sm:top-0 sm:left-[19]">
          <div className="relative h-[88] w-[88] sm:h-[174] sm:w-[174]">
            <Image
              alt="raices del pueblo"
              src="/images/about/raices-del-pueblo.svg"
              unoptimized
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute top-[374] left-[49] sm:top-[148] sm:left-0">
          <div className="relative h-[57] w-[73] sm:h-[113.97] sm:w-[146]">
            <Image
              alt="juya ania"
              src="/images/about/juya-ania.svg"
              unoptimized
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="z-1 mb-12">
        <div className="mb-7">
          <h2 className="text-[1.75rem] font-bold sm:text-[2.5rem]">Raíces del Pueblo</h2>
        </div>
        <div className="max-w-76 sm:max-w-156">
          <p className="text-[1.125rem] sm:text-[1.5rem]">
            En Pascola Restaurante, nuestro compromiso es llevar a tus sentidos una experiencia
            gastronómica única, en la cual la tradición y el sabor se entrelacen para transportarte
            a las raíces de la cocina sinaloense.
          </p>
        </div>
      </div>
      <div className="absolute right-2 bottom-[-34] z-100 sm:bottom-[-86] lg:bottom-[-100]">
        <div className="relative h-[176] w-[176] sm:h-[444] sm:w-[444] lg:h-[510] lg:w-[510]">
          <Image
            alt="danzante"
            src="/images/about/danzante.svg"
            unoptimized
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export { About };

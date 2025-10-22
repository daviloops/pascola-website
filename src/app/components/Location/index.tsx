import Image from 'next/image';

const Location = () => {
  return (
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
          <div className="w-[11rem] min-[408]:w-[26rem] min-[1150]:w-[26rem] lg:max-[1150]:w-[13rem]">
            <p className="text-[1.25rem] sm:text-[1.50rem]">
              Lunes a Viernes: 7:00 AM - 1:30 PM <br></br>
              Sábado y Domingo: 7:30 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="relative aspect-[375/340] w-full lg:w-[639]">
        <Image
          alt="mapa de ubicación"
          src="/images/location/mapa-ubicacion.svg"
          unoptimized
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export { Location };

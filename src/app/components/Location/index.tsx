import Image from 'next/image';

const Location = () => {
  return (
    <section className="flex flex-col justify-between bg-[#EDE4DF] lg:flex-row">
      <div className="z-1 mx-8 my-15 flex flex-wrap gap-15 sm:mt-[5.15rem] sm:ml-12">
        <div className="flex flex-col gap-[12] sm:gap-[16]">
          <h2 className="text-[1.5rem] font-bold text-black sm:text-[1.875rem]">UBICACIÓN</h2>
          <div className="w-[276] sm:w-84">
            <p className="text-[1.25rem] text-black sm:text-[1.25rem]">
              Blvd. Rotarismo 1835, Desarrollo Urbano Tres Ríos, 80020, Culiacán Rosales, Sin.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[12] sm:gap-[16]">
          <h2 className="text-[1.5rem] font-bold text-black sm:text-[1.875rem]">HORARIOS</h2>
          <div className="w-44 min-[408]:w-104 min-[1150]:w-90 lg:max-[1150]:w-52">
            <p className="text-[1.25rem] text-black sm:text-[1.25rem]">
              Lunes a Viernes: 7:00 AM - 1:30 PM <br></br>
              Sábado y Domingo: 7:30 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="relative aspect-375/340 w-full lg:w-[500]">
        <Image
          alt="mapa de ubicación"
          src="/images/location/mapa-ubicacion.webp"
          unoptimized
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 500px, 100vw"
        />
      </div>
    </section>
  );
};

export { Location };

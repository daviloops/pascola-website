import Image from 'next/image';

import LocationPinIcon from '../../../../public/icons/location-pin.svg';

const googleMapsLinkProps = {
  href: 'https://maps.app.goo.gl/Xy29xwBizaMpBrSD8',
  target: '_blank',
  rel: 'noopener noreferrer',
  ariaLabel: 'Abrir en Google Maps',
};

const Location = () => {
  return (
    <section className="flex flex-col justify-between bg-[#EDE4DF] lg:flex-row">
      <div className="z-1 mx-8 my-15 flex flex-wrap gap-15 sm:mt-[5.15rem] sm:ml-12">
        <div className="flex flex-col gap-[12] sm:gap-[16]">
          <h2 className="text-[1.5rem] font-bold text-black sm:text-[1.875rem]">UBICACIÓN</h2>
          <div className="w-[276] sm:w-84">
            <a
              className="group text-[1.25rem] text-black hover:text-gray-600 sm:text-[1.25rem]"
              {...googleMapsLinkProps}
            >
              Blvd. Rotarismo 1835, Desarrollo Urbano Tres Ríos, 80020, Culiacán Rosales, Sin.
              <LocationPinIcon className="invisible inline-block h-[20] w-[20] group-hover:visible group-hover:fill-gray-500" />
            </a>
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
      <div className="group relative aspect-375/340 w-full lg:w-[500]">
        <Image
          alt="mapa de ubicación"
          src="/images/location/mapa-ubicacion.webp"
          unoptimized
          fill
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-103 group-hover:opacity-92 group-active:scale-98"
          sizes="(min-width: 1024px) 500px, 100vw"
        />
        <a
          className="absolute inset-0 z-2 cursor-pointer bg-transparent"
          {...googleMapsLinkProps}
        />
      </div>
    </section>
  );
};

export { Location };

import Image from 'next/image';

import { MenuButton } from '@/components/MenuButton';

const Events = () => {
  return (
    <section className="sm:items-normal relative flex items-center justify-center">
      <div className="relative h-full w-full">
        <picture>
          <source
            srcSet="/images/events/evento-salon-grande_(desktop).webp"
            media="(min-width:640px)"
          />
          <Image
            alt="montaje de las mesas del salon grande con platos y manteles"
            src="/images/events/evento-salon-grande_(mobile).webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
          <div className="absolute inset-0 bg-black opacity-20" />
        </picture>
      </div>

      <div className="absolute z-1 flex flex-col items-center justify-center gap-[20] sm:top-[30%] sm:mx-4 sm:gap-[24] md:top-[57%] lg:top-[58%] xl:top-[60%]">
        <div className="flex flex-col items-center justify-center gap-[12] sm:gap-[16]">
          <div>
            <h2 className="text-[24px] font-bold text-white sm:text-[30px]">
              Celebra con nosotros
            </h2>
          </div>
          <div>
            <p className="max-w-[319] text-center text-[18px] text-white sm:max-w-[868] sm:text-[24px]">
              En Pascola nos encargamos del espacio, la comida y cada detalle de tus eventos. Tú
              solo disfruta.
            </p>
          </div>
        </div>
        <div>
          <MenuButton href="https://wa.me/526673239767">Reservar mi evento</MenuButton>
        </div>
      </div>
    </section>
  );
};

export { Events };

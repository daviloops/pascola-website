import Image from 'next/image';

import { MenuButton } from '../Hero/MenuButton';

const Events = () => {
  return (
    <section className="relative flex h-dvh items-center justify-center px-7">
      <Image
        alt="montaje de las mesas del salon grande con platos y manteles"
        src="/images/events/montaje-salon-grande.webp"
        fill
        className="object-cover bg-blend-darken"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#463933] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[#463933] opacity-30"></div>

      <div className="z-1 flex flex-col items-center justify-center gap-[24]">
        <div>
          <h2 className="text-[24px] font-bold text-white sm:text-[30px]">Celebra con nosotros</h2>
        </div>
        <div>
          <p className="max-w-[319] text-center text-[18px] text-white sm:max-w-[868] sm:text-[24px]">
            En Pascola nos encargamos del espacio, la comida y cada detalle de tus eventos. Tu sólo
            disfruta.
          </p>
        </div>
        <div>
          <MenuButton href="https://wa.me/526673239767">Reservar</MenuButton>
        </div>
      </div>
    </section>
  );
};

export { Events };

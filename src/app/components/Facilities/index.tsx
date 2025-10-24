import Image from 'next/image';

import { Section } from '../Section';

// TODO: refactor
// const facilityImages = [
//   {
//     src: "/images/facilities/palapa-con-mesas.webp",
//     alt: "mesas bajo la palapa principal",
//     width: 1920,
//     height: 1280,
//   },
// ];

const Facilities = () => {
  return (
    <Section className="flex items-center justify-center bg-[#EDE4DF] pt-15 pb-19 sm:pt-16 sm:pb-20 md:pt-18 md:pb-21 lg:pt-25 lg:pb-30">
      <div className="relative flex w-full flex-col overflow-x-hidden sm:max-w-[612] md:max-w-[693] lg:max-w-[960]">
        <div className="carousel carousel-center rounded-box space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-10">
          <div id="item1" className="carousel-item">
            <div className="relative aspect-1920/1280 h-[200] min-[500]:h-[269] sm:h-[300] md:h-[333] lg:h-[444]">
              <Image
                alt="mesas bajo la palapa principal"
                src="/images/facilities/palapa-con-mesas.webp"
                fill
                sizes="(max-width: 640px) 404px, (max-width: 768px) 450px, (max-width: 1024px) 500px, 666px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div id="item2" className="carousel-item">
            <div className="relative aspect-1920/1440 h-[200] min-[500]:h-[269] sm:h-[300] md:h-[333] lg:h-[444]">
              <Image
                alt="mesas bajo la palapa principal y jardín exterior"
                src="/images/facilities/palapa-y-exterior.webp"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 768px) 400px, (max-width: 1024px) 444px, 592px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div id="item3" className="carousel-item">
            <div className="relative aspect-4608/3456 h-[200] min-[500]:h-[269] sm:h-[300] md:h-[333] lg:h-[444]">
              <Image
                alt="area privada para comer y eventos"
                src="/images/facilities/area-privada.webp"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 768px) 400px, (max-width: 1024px) 444px, 592px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div id="item4" className="carousel-item">
            <div className="relative aspect-1920/1440 h-[200] min-[500]:h-[269] sm:h-[300] md:h-[333] lg:h-[444]">
              <Image
                alt="area de descanso con sillas y decoraciones bajo un techumbre de madera"
                src="/images/facilities/area-descanso-con-techumbre.webp"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 768px) 400px, (max-width: 1024px) 444px, 592px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div id="item5" className="carousel-item">
            <div className="relative aspect-3816/3456 h-[200] min-[500]:h-[269] sm:h-[300] md:h-[333] lg:h-[444]">
              <Image
                alt="area de niños con juegos"
                src="/images/facilities/area-ninos.webp"
                fill
                sizes="(max-width: 640px) 298px, (max-width: 768px) 332px, (max-width: 1024px) 368px, 492px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
          <a href="#item5" className="btn btn-xs">5</a>
        </div> */}
      </div>
    </Section>
  );
};

export { Facilities };

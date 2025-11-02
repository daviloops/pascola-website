import React from 'react';

import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Gallery } from '@/app/components/Gallery';
import { Events } from '@/app/components/Events';
import { Location } from '@/app/components/Location';
import { Facilities } from '@/app/components/Facilities';

import { RestaurantData } from '@/lib/structuredData/restaurant';
import { WebSiteData } from '@/lib/structuredData/website';
import { WebPageData } from '@/lib/structuredData/webpage';

// TODO clean
// import SuscriptionModal from '@/components/molecules/SuscriptionModal';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(RestaurantData).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WebSiteData).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WebPageData).replace(/</g, '\\u003c'),
        }}
      />
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Location />
      <Facilities />
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

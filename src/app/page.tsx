import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// TODO clean
// import SuscriptionModal from '@/components/molecules/SuscriptionModal';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles['home-section']}>
        <Image priority alt="fondo" src="/images/fondo.png" fill={true} className={styles['home-background-image']} />
        <div className={styles['logo-container']}>
          <Image priority alt="logo" src="/images/logo.svg" width="468" height="468" />
          <p className={styles['logo-text']}>Sabores únicos que te transportarán a la tradición del pueblo.</p>
        </div>
      </section>
      <section className={styles['about-section']}>
        <div className={styles['raicesdelpueblo-container']}>
          <Image alt="raices del pueblo" src="/images/raices-del-pueblo.svg" width="420" height="420" />
        </div>
        <div className={styles['juyaania-container']}>
          <Image alt="juya ania" src="/images/juya-ania.svg" width="250" height="250" />
        </div>
        <div className={styles['about-content']}>
          <h1 className={styles['about-title']}>Raíces del Pueblo</h1>
          <p className={styles['about-text']}>
            En Pascola Restaurante, nuestro compromiso es llevar a tus sentidos una experiencia gastronómica única, en la cual la tradición y el sabor se entrelacen para transportarte a las raíces de la cocina sinaloense. 
          </p>
        </div>
        <div className={styles['danzante-container']}>
          <Image alt="danzante" src="/images/danzante.svg" width="531" height="531" />
        </div>
      </section>
      <section className={styles['location-section']}>
        <div className={styles['location-container']}>
          <div>
            <h1 className={styles['location-title']}>UBICACIÓN</h1>
            <p className={clsx(styles['location-text'], styles['address-text'])}>
              Blvd. Rotarismo 1835,
              Desarrollo Urbano Tres Ríos, 80020
              Culiacán Rosales, Sin.
            </p>
          </div>
          <div>
            <h1 className={styles['location-title']}>HORARIOS</h1>
            <p className={styles['location-text']}>
              Lunes a Viernes: 7:00 AM - 1:30 PM <br></br>
              Sábado y Domingo: 7:30 AM - 2:00 PM
            </p>
          </div>
        </div>
        <div className={styles['locationImageContainer']}>
          <Image alt="location" src="/images/location.svg" width="603" height="500" />
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
  )
}

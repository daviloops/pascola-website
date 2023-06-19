import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import SuscriptionModal from '@/components/molecules/SuscriptionModal';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.homeSection}>
        {/* // Todo: optimize image import */}
        <div className={styles.logoContainer}>
          <Image priority alt="logo" src="/images/logo.svg" width="468" height="468" />
          <p className={styles.logoText}>Sabores únicos que te transportarán a la tradición del pueblo.</p>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.raicesDelPuebloContainer}>
          <Image alt="raices del pueblo" src="/images/raices-del-pueblo.svg" width="420" height="420" />
        </div>
        <div className={styles.juyaAniaContainer}>
          <Image alt="juya ania" src="/images/juya-ania.svg" width="250" height="250" />
        </div>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>Raíces del Pueblo</h1>
          <p className={styles.aboutText}>
            En Pascola Restaurante, nuestro compromiso es llevar a tus sentidos una experiencia gastronómica única, en la cual la tradición y el sabor se entrelacen para transportarte a las raíces de la cocina sinaloense. 
          </p>
        </div>
        <div className={styles.danzanteContainer}>
          <Image alt="danzante" src="/images/danzante.svg" width="531" height="531" />
        </div>
      </section>
      <section className={styles.locationSection}>
        <div className={styles.locationContainer}>
          <div>
            <h1 className={styles.locationTitle}>UBICACIÓN</h1>
            <p className={clsx(styles.locationText, styles.addressText)}>
              Blvd. Rotarismo 1835,
              Desarrollo Urbano Tres Ríos, 80020
              Culiacán Rosales, Sin.
            </p>
          </div>
          <div>
            <h1 className={styles.locationTitle}>HORARIOS</h1>
            <p className={styles.locationText}>
              Lunes a Viernes: 7:00 AM - 1:30 PM <br></br>
              Sábado y Domingo: 7:30 AM - 2:00 PM
            </p>
          </div>
        </div>
        <div className={styles.locationImageContainer}>
          <Image alt="location" src="/images/location.svg" width="603" height="500" />
        </div>
      </section>
      <section className={styles.suscriptionSection}>
        <div className={styles.suscriptionRaicesContainer}>
          <Image alt="raices del pueblo" src="/images/raices-del-pueblo-yellow.svg" width="300" height="600" />
        </div>
        <div className={styles.redSymbolContainer}>
          <Image alt="simbolo rojo" src="/images/symbol-red.svg" width="420" height="420" />
        </div>
        <div className={styles.tusimmabewaaContainer}>
          <Image alt="tusim mabewwa" src="/images/tusim-mabewwa.svg" width="420" height="420" />
        </div>
        <div className={styles.juyaAniaSuscriptionContainer}>
          <Image alt="juya ania" src="/images/juya-ania.svg" width="420" height="420" />
        </div>
        <div className={styles.suscriptionContent}>
          <SuscriptionModal />
        </div>
      </section>
    </main>
  )
}

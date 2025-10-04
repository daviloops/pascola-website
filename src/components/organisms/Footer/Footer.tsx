
import SocialMedia from './molecules/SocialMedia';
import ContactList from './molecules/ContactList';

import styles from './styles.module.scss';

import type { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles['footer']}>
      <h1 className={styles['footer-title']}>CONTACTO</h1>
      <SocialMedia />
      <ContactList />
    </footer>
  );
};

export default Footer;
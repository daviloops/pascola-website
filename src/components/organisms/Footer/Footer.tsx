
import SocialMedia from './molecules/SocialMedia';
import ContactList from './molecules/ContactList';

import styles from './styles.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footerTitle}>CONTACTO</h1>
      <SocialMedia />
      <ContactList />
    </footer>
  );
};

export default Footer;
import styles from './styles.module.scss';

const ContactLink = ({ children, ...props } : { children: React.ReactNode, href?: string, onClick?: any }) => {
  return (
    <a className={styles.footerLink} {...props}>{children}</a>
  );
};

export default ContactLink;
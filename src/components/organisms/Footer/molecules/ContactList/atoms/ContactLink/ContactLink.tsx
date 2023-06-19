import styles from './styles.module.scss';

const ContactLink = ({ children, ...props } : { children: string}) => {
  return (
    <a className={styles.footerLink} {...props}>{ children }</a>
  );
};

export default ContactLink;
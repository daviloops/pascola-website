import styles from './styles.module.scss';

const SuscriptionInputLabel = () => {
  return (
    <label htmlFor="email" className={styles.inputLabel}>Para recibir promos exclusivas deja tu correo:</label>
  );
};

export default SuscriptionInputLabel;
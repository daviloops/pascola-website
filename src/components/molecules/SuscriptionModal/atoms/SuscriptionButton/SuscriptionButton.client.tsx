'use client';
import styles from './styles.module.scss';

const SuscriptionButton = ({ email } : { email: string }) => {
  return (
    <button type="submit" disabled={!email} className={styles.button}>
      Enviar
    </button>
  );
};

export default SuscriptionButton;
'use client';
import React from 'react';

import styles from './styles.module.scss';

const SuscriptionInput = ({ ...props }) => {
  return (
    <input type="email" id="email" name="email" placeholder="Correo electrónico" className={styles.input} {...props} />
  );
};

export default SuscriptionInput;
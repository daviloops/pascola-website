'use client';
import React, { useState, SyntheticEvent } from 'react';

import SuscriptionInputLabel from './atoms/SuscriptionInputLabel';
import SuscriptionInput from './atoms/SuscriptionInput';
import SuscriptionButton from './atoms/SuscriptionButton';

import styles from './styles.module.scss';

const SuscriptionModal = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      const val = e.target[0].value;
      console.log('val', val);
    } catch(e) {
      console.error(e);
    }
  };

  const handleChange = (e: any): void => setEmail(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <SuscriptionInputLabel />
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <SuscriptionInput value={email} onChange={handleChange} />
        </div>
        <SuscriptionButton email={email} />
      </div>
    </form>
  );
};

export default SuscriptionModal;
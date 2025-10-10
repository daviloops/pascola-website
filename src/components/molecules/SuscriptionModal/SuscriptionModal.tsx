'use client';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import SuscriptionInputLabel from './atoms/SuscriptionInputLabel';
import SuscriptionInput from './atoms/SuscriptionInput';
// TODO clean
// import SuscriptionButton from './atoms/SuscriptionButton';

import request from '@/utils/request';
import styles from './styles.module.scss';

const SuscriptionModal = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const val = e.target[0].value;

    setLoading(true);
    request('/suscriptions', { method: 'POST', body: { email: val } })
      .then(() => enqueueSnackbar('Suscripción con éxito', { variant: 'success' }))
      .catch((error) => {
        console.error(error);
        enqueueSnackbar('Ha habido un error en la sucripción', { variant: 'error' });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: any): void => setEmail(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <SuscriptionInputLabel />
      <div className={styles.container}>
        <div className={styles['input-container']}>
          <SuscriptionInput value={email} onChange={handleChange} />
        </div>
        {/* // TODO add suscription button  */}
        {loading}
        {/* <SuscriptionButton loading={loading} email={email} /> */}
      </div>
    </form>
  );
};

export default SuscriptionModal;

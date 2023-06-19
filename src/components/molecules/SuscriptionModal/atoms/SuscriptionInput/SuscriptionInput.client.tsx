'use client';
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from './styles.module.scss';

const SuscriptionInput = ({ ...props }) => {
  return (
    // <Box
    //   component="form"
    //   // noValidate
    // >
    //   <TextField type="email" id="email" name="email" variant="outlined" className={styles.input} {...props} />
    // </Box>
    <input type="email" id="email" name="email" placeholder="Correo electrónico" className={styles.input} {...props} />
  );
};

export default SuscriptionInput;
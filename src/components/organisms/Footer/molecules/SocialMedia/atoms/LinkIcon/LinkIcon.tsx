'use client';
import React, { cloneElement, type JSX } from 'react';
import styles from './styles.module.scss';

const LinkIcon = ({ icon, ...props }: { icon: React.ReactElement<any>, href: string }): JSX.Element => {
  return (
    <a target="_blank" rel="noreferrer noopener" className={styles['footer-icon-link']} {...props}>
      {icon && cloneElement(icon, { className: styles['footer-icon'] })}
    </a>
  );
};

export default LinkIcon;
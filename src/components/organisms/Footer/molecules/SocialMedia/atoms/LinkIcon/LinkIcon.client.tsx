'use client';
import React, { cloneElement } from 'react';
import styles from './styles.module.scss';

const LinkIcon = ({ icon, ...props }: { icon: React.ReactElement, href: string }): JSX.Element => {
  return (
    <a target="_blank" rel="noreferrer noopener" className={styles['footer-icon-link']} {...props}>
      {icon && cloneElement(icon, { className: styles['footer-icon'] })}
    </a>
  );
};

export default LinkIcon;
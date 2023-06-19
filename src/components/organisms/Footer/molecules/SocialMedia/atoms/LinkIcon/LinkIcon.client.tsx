'use client';
import React, { cloneElement } from 'react';
import styles from './styles.module.scss';

const LinkIcon = ({ icon, ...props }: { icon: React.ReactElement }): JSX.Element => {
  return (
    <a target="_blank" rel="noreferrer noopener" className={styles.footerIconLink} {...props}>
      {icon && cloneElement(icon, { className: styles.footerIcon })}
    </a>
  );
};

export default LinkIcon;
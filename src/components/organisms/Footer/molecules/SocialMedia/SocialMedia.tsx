'use client';
import { Facebook, Instagram, Mail, MessageCircleMore  } from 'lucide-react';


import LinkIcon from './atoms/LinkIcon';

import styles from './styles.module.scss';

import type { JSX } from "react";

const SocialMedia = (): JSX.Element => {
  return (
    <div className={styles['media-icons']}>
      <LinkIcon href="https://www.facebook.com/pascolacln" icon={<Facebook />} />
      <LinkIcon href="https://www.instagram.com/pascolacln/" icon={<Instagram />} />
      <LinkIcon href="mailto:john@example.com" icon={<Mail />} />
      <LinkIcon href="https://api.whatsapp.com/send?phone=15551234567" icon={<MessageCircleMore />} />
    </div>
  );
};

export default SocialMedia;
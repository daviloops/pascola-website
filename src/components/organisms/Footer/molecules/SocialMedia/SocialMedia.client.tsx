'use client';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import LinkIcon from './atoms/LinkIcon';

import styles from './styles.module.scss';

const SocialMedia = (): JSX.Element => {
  return (
    <div className={styles['media-icons']}>
      <LinkIcon href="https://www.facebook.com/pascolacln" icon={<FacebookIcon />} />
      <LinkIcon href="https://www.instagram.com/pascolacln/" icon={<InstagramIcon />} />
      <LinkIcon href="mailto:john@example.com" icon={<MailOutlinedIcon />} />
      <LinkIcon href="https://api.whatsapp.com/send?phone=15551234567" icon={<WhatsAppIcon />} />
    </div>
  );
};

export default SocialMedia;
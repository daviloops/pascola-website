import type { JSX } from 'react';

import LinkIcon from './LinkIcon';
import WhatsappIcon from '../../../../../public/icons/whatsapp.svg';
import FacebookIcon from '../../../../../public/icons/facebook.svg';
import InstagramIcon from '../../../../../public/icons/instagram.svg';

const SocialMedia = (): JSX.Element => {
  return (
    <div className="flex gap-[24] sm:gap-[28]">
      <LinkIcon
        href="https://www.facebook.com/pascolacln"
        icon={<FacebookIcon />}
        aria-label="Facebook"
        title="Facebook"
      />
      <LinkIcon
        href="https://www.instagram.com/pascolacln"
        icon={<InstagramIcon />}
        aria-label="Instagram"
        title="Instagram"
      />
      <LinkIcon
        href="https://wa.me/526673239767"
        icon={<WhatsappIcon />}
        aria-label="WhatsApp"
        title="WhatsApp"
      />
    </div>
  );
};

export default SocialMedia;

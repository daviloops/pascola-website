import type { JSX } from 'react';
import { Facebook, Instagram, MessageCircleMore } from 'lucide-react';

import LinkIcon from './LinkIcon';

const SocialMedia = (): JSX.Element => {
  return (
    <div className="flex gap-[18]">
      <LinkIcon
        href="https://www.facebook.com/pascolacln"
        icon={<Facebook />}
        aria-label="Facebook"
        title="Facebook"
      />
      <LinkIcon
        href="https://www.instagram.com/pascolacln"
        icon={<Instagram />}
        aria-label="Instagram"
        title="Instagram"
      />
      <LinkIcon
        href="https://api.whatsapp.com/send?phone=15551234567"
        icon={<MessageCircleMore />}
        aria-label="WhatsApp"
        title="WhatsApp"
      />
    </div>
  );
};

export default SocialMedia;

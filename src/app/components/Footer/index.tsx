import clsx from 'clsx';
import type { HTMLAttributes, JSX } from 'react';

import SocialMedia from './SocialMedia';
import ContactList from './ContactList';

const Footer = ({ className, ...props }: HTMLAttributes<HTMLElement>): JSX.Element => {
  return (
    <footer
      className={clsx(
        'flex flex-col items-center justify-center gap-[24] bg-[#3F7364] py-[3.625rem]',
        className
      )}
      {...props}
    >
      <h2 className="text-[1.5rem] font-bold sm:text-[1.875rem]">CONTACTO</h2>
      <SocialMedia />
      <ContactList />
      <p className="text-[0.75rem] sm:text-[0.875rem]">DERECHOS RESERVADOS</p>
    </footer>
  );
};

export default Footer;

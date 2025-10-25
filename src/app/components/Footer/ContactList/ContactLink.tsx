'use client';

import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

const ContactLink = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={clsx(
        'text-[1.25rem] text-gray-100 no-underline hover:scale-[1.01] hover:text-white active:scale-[0.99] active:text-[#CFE0DC] sm:text-[1.5rem]',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default ContactLink;

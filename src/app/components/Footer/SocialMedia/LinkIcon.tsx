'use client';

import React, { AnchorHTMLAttributes, cloneElement, ReactElement, type JSX } from 'react';

interface LinkIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactElement<any>;
}

const LinkIcon = ({ icon, ...props }: LinkIconProps): JSX.Element => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className="text-[#000] no-underline transition duration-200 ease-in-out hover:scale-[1.1] hover:text-[#fff] active:scale-[1] active:text-[#fff]"
      {...props}
    >
      {icon &&
        cloneElement(icon, {
          className: 'w-[32] h-[32] sm:w-[38] sm:h-[38]',
        })}
    </a>
  );
};

export default LinkIcon;

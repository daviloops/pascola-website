import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

const MenuButton = ({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={clsx(
        'btn btn-neutral btn-outline min-w-[160] rounded-2xl border-2 bg-[#D9D9D9] font-bold text-black hover:bg-black hover:text-[#D9D9D9] active:bg-[#272727] active:text-[#D9D9D9]',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export { MenuButton };

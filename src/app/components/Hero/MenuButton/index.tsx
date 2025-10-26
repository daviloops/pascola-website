import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

const MenuButton = ({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <div className="min-w-[160]">
      <a
        className={clsx(
          'btn btn-neutral btn-outline w-full rounded-2xl border bg-[#D9D9D9] text-[18px] font-bold text-black hover:bg-black hover:text-[#D9D9D9] active:bg-[#272727] active:text-[#D9D9D9]',
          className
        )}
        {...props}
      >
        {children}
      </a>
    </div>
  );
};

export { MenuButton };

import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

const MenuButton = ({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <div className="min-w-[80] min-[368px]:min-w-[100] sm:min-w-[120]">
      <a
        className={clsx(
          'btn btn-neutral btn-outline h-[36] w-full rounded-2xl border bg-[#D9D9D9] text-base font-bold text-black hover:bg-black hover:text-[#D9D9D9] active:bg-[#272727] active:text-[#D9D9D9] sm:h-[40] sm:text-lg',
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

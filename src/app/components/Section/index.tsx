import clsx from 'clsx';
import { HTMLAttributes } from 'react';

function Section({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={clsx('px-2', className)} {...props}></section>;
}

export { Section };

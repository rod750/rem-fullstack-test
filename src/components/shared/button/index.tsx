import clsx from 'clsx';
import * as React from 'react';

type ButtonProps = React.PropsWithChildren<{ translucent?: boolean }> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function Button({
  children,
  translucent = false,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={clsx(
        'min-w-[120px] cursor-pointer rounded-full px-2 py-1 text-center text-sm font-bold text-white',
        translucent ? 'bg-[#00000050]' : 'bg-[#3B7FD3]'
      )}
    >
      {children}
    </a>
  );
}

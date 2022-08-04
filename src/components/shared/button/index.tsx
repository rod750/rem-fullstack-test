import * as React from 'react';

export function Button({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <a
      {...props}
      className='min-w-[120px] cursor-pointer rounded-full bg-[#3B7FD3] px-2 py-1 text-center text-sm font-bold text-white'
    >
      {children}
    </a>
  );
}

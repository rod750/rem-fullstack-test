import * as React from 'react';

export function Navbar({ title }: { title: string }) {
  return (
    <div className='w-100 h-10 bg-[#D53B47]'>
      <span className='text-white'>{title}</span>
    </div>
  );
}

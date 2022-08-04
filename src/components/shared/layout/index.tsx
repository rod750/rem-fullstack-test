import * as React from 'react';

import { Navbar } from '@/components/shared/navbar';

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className='h-100 w-100'>
      <Navbar title=''></Navbar>
      <div className='container mx-auto'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

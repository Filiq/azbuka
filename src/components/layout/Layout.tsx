import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='py-5'>{children}</div>;
}

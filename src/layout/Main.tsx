import React from 'react';
import type { ReactNode } from 'react';
import Copyright from '@/components/copyright/Copyright';
import { Header } from './Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className='w-full text-gray-700 antialiased'>
    {props.meta}

    <div className='mx-auto'>
      <Header />

      <div className='max-w-screen-md'>
        <div className='content py-5 text-xl'>{props.children}</div>
      </div>

      <Copyright />
    </div>
  </div>
);

export { Main };

import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div className='bg-slate-500 p-5'>
    <div className='max-w-screen-md'>
      <ul className='flex flex-wrap text-xl'>
        <li className='mr-6'>
          <Link href='/' className='border-none text-gray-700 hover:text-gray-900'>
            Home
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/about/' className='border-none text-gray-700 hover:text-gray-900'>
            About
          </Link>
        </li>
        <li className='mr-6'>
          <a
            className='border-none text-gray-700 hover:text-gray-900'
            href='https://github.com/ixartz/Next-js-Boilerplate'>
            GitHub
          </a>
        </li>
        <li className='mr-6'>
          <Link href='/blog/' className='border-none text-gray-700 hover:text-gray-900'>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export { Header };

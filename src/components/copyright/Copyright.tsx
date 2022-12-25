import React from 'react';
import { AppConfig } from '@/AppConfig';

const Copyright = () => {
  return (
    <div className='border-t border-gray-300 py-8 text-center text-sm'>
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Built with{' '}
      <span role='img' aria-label='Love'>
        ♥
      </span>{' '}
      by <a href='https://asolace.me/'>Asolace</a> | Jack He.
    </div>
  );
};

export default Copyright;

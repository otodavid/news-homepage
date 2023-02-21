import React from 'react';

const Attribution = () => {
  return (
    <div class='bg-grayish-blue-300 text-grayish-blue-100 text-center px-4 py-4'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        rel='noreferrer'
        target='_blank'
        className='text-soft-orange hover:text-soft-red'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.frontendmentor.io/profile/oloruntomiojo'
        rel='noreferrer'
        target='_blank'
        className='text-soft-orange hover:text-soft-red'
      >
        David Ojo
      </a>
      .
    </div>
  );
};

export default Attribution;

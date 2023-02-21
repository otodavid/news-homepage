import Link from 'next/link';
import React from 'react';

const NewsItem = ({ title, content }) => {
  return (
    <div className='text-off-white py-7 first:pt-5 border-b border-b-grayish-blue-200 last:border-b-0'>
      <h4 className='text-xl font-bold pb-2'>
        <Link
          href={'/'}
          className='text-grayish-blue-100 hover:text-soft-orange'
        >
          {title}
        </Link>
      </h4>
      <p className='text-grayish-blue-200 leading-[1.65rem]'>{content}</p>
    </div>
  );
};

export default NewsItem;

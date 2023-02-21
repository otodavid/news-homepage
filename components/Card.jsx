import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ id, image, title, content }) => {
  return (
    <div className='grid grid-cols-[100px_1fr] gap-6'>
      {/* Card Image */}
      <div className='relative overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          sizes='99vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Card content */}
      <div>
        <h3 className='text-grayish-blue-100 text-[2rem] font-bold leading-none'>
          {id}
        </h3>
        <h4 className='text-grayish-blue-300 text-lg font-extrabold pt-3 pb-1.5'>
          <Link href={'/'} className='hover:text-soft-red'>
            {title}
          </Link>
        </h4>
        <p className='text-grayish-blue-200 leading-[1.6rem]'>{content}</p>
      </div>
    </div>
  );
};

export default Card;

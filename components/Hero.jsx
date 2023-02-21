import Image from 'next/image';
import React from 'react';
import HeroPic from '../public/assets/images/image-web-3-mobile.jpg';
import HeroPic2 from '../public/assets/images/image-web-3-desktop.jpg';

const Hero = () => {
  return (
    <div className='md:max-lg:col-span-2'>
      <div className='pb-5 md:pb-10 lg:pb-0'>
        {/* Hero Image */}
        <div className='py-3 md:py-0'>
          <Image
            src={HeroPic}
            priority
            alt='Web 3 picture'
            className='sm:hidden'
          />
          <Image
            src={HeroPic2}
            priority
            alt='Web 3 picture'
            className='hidden sm:block'
          />
        </div>

        {/* Hero Content */}
        <div className='py-3 sm:max-lg:text-center md:py-8 lg:grid lg:grid-cols-2 lg:gap-x-8 2xl:pb-0 2xl:pt-4'>
          <h2 className='text-[2.5rem] leading-10 font-extrabold md:row-span-2 md:text-5xl md:leading-none md:self-center lg:max-w-[9ch] xl:text-[3.5rem]'>
            The Bright Future of Web 3.0?
          </h2>
          <p className='py-4 leading-[1.6rem] text-grayish-blue-200 sm:max-lg:max-w-prose sm:max-lg:mx-auto'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className='uppercase tracking-[0.25em] bg-soft-red py-3 px-8 my-3 text-off-white font-bold md:w-fit hover:bg-grayish-blue-300'>
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

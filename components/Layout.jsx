import React from 'react';
import Header from './Header';
import Head from 'next/head';
import Attribution from '@components/Attribution';

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Head>
        <title key='title'>News | Home</title>
        <meta
          name='description'
          content={'Frontend mentor news homepage challenge'}
          key='description'
        />
        <meta
          key='viewport'
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='px-4 py-1 max-w-screen-3xl mx-auto md:px-8 md:py-4 lg:px-12 lg:py-10 xl:px-20 2xl:px-[10.5rem] 2xl:py-16'>
        <Header />

        <div>{children}</div>
      </div>
      <Attribution />
    </div>
  );
};

export default Layout;

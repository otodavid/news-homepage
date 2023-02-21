import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Googlel Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700', '800'],
});

const Portal = ({ open, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  const portalContent = open ? (
    <div className={`${inter.variable}`}>{children}</div>
  ) : null;

  if (isMounted) {
    return createPortal(portalContent, document.querySelector('#portal-root'));
  }

  return null;
};

export default Portal;

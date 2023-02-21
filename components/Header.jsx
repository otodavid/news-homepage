import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import Portal from './Portal';
import Image from 'next/image';
import logo from '../public/assets/icons/logo.svg';
import MenuIcon from '../public/assets/icons/icon-menu.svg';
import DesktopMenu from './DesktopMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    const bodyElement = document.querySelector('body');

    if (isMenuOpen) {
      bodyElement.style.height = '100vh';
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.height = 'auto';
      bodyElement.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className='w-full flex items-center justify-between py-3.5 2xl:py-5'>
      <Link href='/'>
        <div className='relative w-11 h-11 md:w-14 2xl:w-16'>
          <Image
            src={logo}
            alt='Website logo'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Link>

      <div>
        <div className='hidden md:block'>
          <DesktopMenu />
        </div>

        <button
          className='block md:hidden'
          onClick={toggleMenu}
          ref={menuButtonRef}
          aria-controls='main-menu'
          aria-expanded='false'
        >
          <span className='sr-only'>Main Menu</span>
          <Image src={MenuIcon} width={40} alt='Menu Button' />
        </button>

        <Portal open={isMenuOpen}>
          <MobileMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            triggerRef={menuButtonRef}
          />
        </Portal>
      </div>
    </header>
  );
};

export default Header;

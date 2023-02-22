import Link from 'next/link';
import { useFocusTrap } from '@hooks/useFocusTrap';
import closeIcon from '../public/assets/icons/icon-menu-close.svg';
import Image from 'next/image';
import { useEffect } from 'react';

const NAV_ITEMS = [
  ['home', '/home'],
  ['new', '/new'],
  ['popular', '/popular'],
  ['trending', '/trending'],
  ['categories', '/categories'],
];

const MobileMenu = ({ isMenuOpen, toggleMenu, triggerRef }) => {
  const modalRef = useFocusTrap(isMenuOpen, triggerRef);

  useEffect(() => {
    const closeMenuOnEscape = (e) => {
      if (e.key === 'Escape') {
        toggleMenu();
      }
    };

    window.addEventListener('keydown', closeMenuOnEscape);

    return () => closeMenuOnEscape;
  }, [isMenuOpen, toggleMenu]);

  return (
    <div className={`overflow-hidden`} role='dialog' aria-modal='true'>
      {/* sidebar backdrop */}
      <div
        role={'presentation'}
        aria-hidden='true'
        className={`fixed inset-0 bg-grayish-blue-300 opacity-50 transition-opacity duration-300 overflow-hidden ${
          isMenuOpen
            ? 'transition-opacity duration-300 opacity-50'
            : 'opacity-0'
        }  `}
        onClick={() => toggleMenu()}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[68.5%] h-full bg-white px-3 py-7 animation-slideOutRight overflow-hidden ${
          isMenuOpen ? 'animate-slideInRight' : 'animate-slideOutRight'
        }`}
        ref={modalRef}
      >
        <button
          aria-controls='main-menu'
          aria-expanded='true'
          onClick={toggleMenu}
          className='block ml-auto mr-2'
        >
          <span className='sr-only'>Close Main Menu</span>
          <Image src={closeIcon} alt='Close menu button' />
        </button>

        <nav aria-label='main-menu'>
          <ul id='main-menu' className='px-3 pt-[4.5rem]'>
            {NAV_ITEMS.map(([title, url], index) => (
              <li className='py-1.5' key={title}>
                <Link
                  href={`/`}
                  className='capitalize py-1 block text-lg tracking-wide font-sans'
                  onClick={() => toggleMenu()}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

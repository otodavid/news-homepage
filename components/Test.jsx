import Link from 'next/link';
import CloseIcon from './icons/CloseIcon';
import { useFocusTrap } from '@hooks/useFocusTrap';

const NAV_ITEMS = [
  ['home', '/home'],
  ['new', '/new'],
  ['popular', '/popular'],
  ['trending', '/trending'],
  ['categories', '/categories'],
];

const Test = ({ isMenuOpen, toggleMenu }) => {
  const modalRef = useFocusTrap(isMenuOpen);

  return (
    <div className='font-sans overflow-hidden'>
      {/* sidebar backdrop */}
      <div
        role={'presentation'}
        className={`fixed inset-0 bg-[rgba(0,0,0,.7)] transition-opacity duration-300 overflow-hidden test ${
          isMenuOpen
            ? 'transition-opacity duration-300 opacity-100'
            : 'opacity-100'
        }  `}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[68.5%] h-full bg-white px-3 py-5 animation-slideOutRight overflow-hidden ${
          isMenuOpen ? 'animate-slideInRight' : 'animate-slideOutRight'
        }`}
        ref={modalRef}
      >
        <button
          aria-controls='main-menu'
          aria-expanded='true'
          onClick={toggleMenu}
          className='block ml-auto'
        >
          <span className='sr-only'>Close Main Menu</span>
          <CloseIcon className={`fill-slate-900`} aria-hidden='true' />
        </button>

        <nav role='navigation' aria-label='main-menu'>
          <ul id='main-menu' className='px-3 pt-16'>
            {NAV_ITEMS.map(([title, url], index) => (
              <li className='py-1.5' key={title}>
                <Link
                  href={`${url}`}
                  className='capitalize py-1 block text-lg tracking-wide'
                  //   ref={
                  //     index === NAV_ITEMS.length - 1 ? lastFocusableElement : null
                  //   }
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

export default Test;

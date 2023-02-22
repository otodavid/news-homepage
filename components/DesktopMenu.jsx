import Link from 'next/link';

const NAV_ITEMS = [
  ['home', '/home'],
  ['new', '/new'],
  ['popular', '/popular'],
  ['trending', '/trending'],
  ['categories', '/categories'],
];

const DesktopMenu = () => {
  return (
    <nav aria-label='main-menu' className='flex'>
      <ul id='main-menu' className='flex gap-8'>
        {NAV_ITEMS.map(([title, url]) => (
          <li className='' key={title}>
            <Link
              href={`/`}
              className='capitalize block tracking-wide text-grayish-blue-200 text-base hover:text-soft-red'
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;

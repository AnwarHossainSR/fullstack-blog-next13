import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/images/logo.svg';
import WhiteLogo from '@/public/images/white-logo.svg';
import { myLoader } from '@/utils/all';

import Container from './container';

export default function Navbar() {
  const leftMenu = [
    {
      label: 'Home',

      href: '/',
      external: false,
    },

    {
      label: 'About',

      href: '/about',
      external: false,
    },

    {
      label: 'Contact',

      href: '/contact',
      external: false,
    },
  ];

  const rightMenu = [
    {
      label: 'Archive',
      href: '/archive',
      external: false,
    },

    {
      label: 'Github',

      href: 'https://github.com/web3templates/stablo',

      external: true,
    },

    {
      label: 'Download',

      href: 'https://web3templates.com/templates/stablo-minimal-blog-template',

      external: true,
    },
  ];

  const mobileMenu = [...leftMenu, ...rightMenu];

  return (
    <Container>
      <nav>
        <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
          <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
            {leftMenu.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-between w-full md:w-auto">
            <Link href="/" className="w-28 dark:hidden">
              <Image src={Logo} alt="logo" loader={myLoader} width="100" />
            </Link>

            <Link href="/" className="hidden w-28 dark:block">
              <Image src={WhiteLogo} alt="logo" loader={myLoader} />
            </Link>

            <div className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
            {rightMenu.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
          {mobileMenu.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
}

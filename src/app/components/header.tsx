'use client';
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [resized, setResized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpened(false);
      }
      if (window.innerWidth < 1024) {
        setResized(true);
      } else {
        setResized(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SignedIn>
      <div
        className={`header ${
          !menuOpened
            ? 'lg:w-[40%] w-[6rem] h-full md:h-full sm:h-full min-h-[4rem]' 
            : 'w-full h-[100vh] lg:h-[100vh]' 
        } bg-gray-700 transition-all duration-500  flex justify-start 
               lg:justify-around items-center ${!menuOpened ? 'rounded-br-xl' : 'rounded-none'}`}
      >
        <button
          onClick={() => setMenuOpened((prev) => !prev)}
          className={`absolute flex lg:hidden w-[10%] h-[50%] flex-col justify-around min-w-[4rem] max-w-[4.5rem] max-h-16 left-2.5 
                        ${resized ? 'top-6' : 'top-auto bottom-auto'}
                        transition-all duration-1000`}
        >
          <div
            className={`w-full bg-white h-[10%] rounded-xl transition-all duration-500 ${
              menuOpened ? 'rotate-45 translate-y-5' : ''
            }`}
          ></div>
          <div
            className={`w-full bg-white h-[10%] rounded-xl transition-all duration-500 ${
              menuOpened ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-full bg-white h-[10%] rounded-xl transition-all duration-500 ${
              menuOpened ? '-rotate-45 -translate-y-5' : ''
            }`}
          ></div>
        </button>

        <Link
          href="/"
          className="relative text-1.5xl md:text-2xl lg:text-3xl xl:text-4xl 
                rounded-b-xl w-[50%] h-full justify-center items-center after:content-[''] 
                after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] 
                after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out 
                after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 
                hover:after:-translate-x-1/2 hidden lg:flex"
        >
          Strona Główna
        </Link>

        <a
          href="/#"
          className="relative text-1.5xl md:text-2xl lg:text-3xl xl:text-4xl 
                rounded-b-xl w-[50%] h-full justify-center items-center after:content-[''] after:absolute after:w-[1em] 
                after:h-[0.15em] after:bg-gray-500 lg:after:bottom-[0.7em] md:after:bottom-[0.8em] after:left-1/2 after:-translate-x-1/2 after:transition-all 
                after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 
                hover:after:-translate-x-1/2 hidden lg:flex"
        >
          Regulamin
        </a>
      </div>
      <h1 className='text-black'>{menuOpened ? 'True' : 'false'}</h1>
    </SignedIn>
  );
};

export default Header;

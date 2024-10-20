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
            ? 'lg:w-[50%] w-[6rem] h-full md:h-full sm:h-full min-h-[4rem]'
            : 'w-full h-[100vh] lg:h-[100vh]'
        } bg-gray-700 transition-all duration-500 flex justify-start lg:justify-around items-center ${
          !menuOpened ? 'rounded-br-xl' : 'rounded-none'
        } relative
         ${resized ? "flex-start flex-col pt-[20%]" : ""}`}
      >
        <button
          onClick={() => setMenuOpened((prev) => !prev)}
          className={`absolute flex w-[10%] h-[50%] flex-col justify-around min-w-[4rem] max-w-[4.5rem] max-h-16 transition-all duration-500
            ${menuOpened ? 'left-2.5 top-2.5' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} ${resized ? "flex" : "hidden"} 
          `}
          style={{ transition: menuOpened ? 'none' : 'all 0.5s ease' }}
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
          className={`
                relative text-1xl md:text-1xl lg:text-2xl xl:text-3xl 
                rounded-b-xl w-[50%] h-full justify-center items-center after:content-[''] 
                after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] 
                after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out 
                after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 
                hover:after:-translate-x-1/2 hidden lg:flex`}
        >
          Strona Główna
        </Link>

        {resized && (
          <Link
            href="/"
            className={` 
              text-3xl bg-gray-600 w-[100%] h-[15%] 
              justify-center items-center transition-all duration-500 ease-in-out 
              transform ${
                menuOpened ? 'opacity-100 h-[15%] translate-x-0' : 'opacity-0 h-0 -translate-x-full'
              } 
              hover:bg-gray-800 flex`}
          >
            Strona Główna
          </Link>
        )}

        <a
          href="/#"
          className="relative text-1xl md:text-1xl lg:text-2xl xl:text-3xl 
                rounded-b-xl w-[50%] h-full justify-center items-center after:content-[''] 
                after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] 
                after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out 
                after:rounded-full hover:after:w-[3em] hover:after:bg-[#fdee30] hover:after:left-1/2 
                hover:after:-translate-x-1/2 hidden lg:flex "
        >
          Regulamin
        </a>
        {resized && (
                    <a
                    href="#"
                    className={` 
                      text-3xl bg-gray-600 w-[100%] h-[15%] 
                      justify-center items-center transition-all duration-500 ease-in-out 
                      transform ${
                        menuOpened ? 'opacity-100 h-[15%] translate-x-0' : 'opacity-0 h-0 -translate-x-full'
                      } 
                      hover:bg-gray-800 flex`}
                  >
                    Regulamin
                  </a>
        )}



        <Link
          href="/"
          className={`
                relative text-1xl md:text-1xl lg:text-2xl xl:text-3xl 
                rounded-b-xl w-[50%] h-full justify-center items-center after:content-[''] 
                after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] 
                after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out 
                after:rounded-full hover:after:w-[2em] hover:after:bg-[#fdee30] hover:after:left-1/2 
                hover:after:-translate-x-1/2 hidden lg:flex`}
        >
          Profile
        </Link>

        {resized && (
          <Link
            href="/"
            className={` 
              text-3xl  bg-gray-600 w-[100%] h-[15%] 
              justify-center items-center transition-all duration-500 ease-in-out 
              transform ${
                menuOpened ? 'opacity-100 h-[15%] translate-x-0' : 'opacity-0 h-0 -translate-x-full'
              } 
              hover:bg-gray-800 flex `}
          >
            Profile
          </Link>
        )}


      </div>

      <h1 className="text-black">{menuOpened ? 'True' : 'false'} resized: {resized ? "true" : "false"}</h1>
    </SignedIn>
  );
};

export default Header;

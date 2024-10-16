'use client'
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { useState } from "react";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    
    return (
        <SignedIn>
            <div className={`${menuOpened ? 'lg:w-[40%] w-[6rem]'  :  'w-full'}  transition-all duration-500 min-w-[6rem] h-full flex justify-start lg:justify-around items-center bg-[#494854] ${menuOpened ? "rounded-br-xl" : "rounded-none"}`}>   

                <button 
                    onClick={() => setMenuOpened((prev) => !prev)} 
                    className={`relative flex lg:hidden w-[20%] h-[50%] flex-col justify-around min-w-[4rem] max-w-[4.5rem] ${menuOpened ? 'ml-4' : 'mx-auto'}`}
                >
                    <div className="w-full bg-white h-[10%] rounded-xl"></div>
                    <div className="w-full bg-white h-[10%] rounded-xl"></div>
                    <div className="w-full bg-white h-[10%] rounded-xl"></div>
                </button>

                <Link href="/" className="relative text-1.5xl md:text-2xl lg:text-3xl xl:text-4xl rounded-b-xl w-[50%] h-full flex justify-center items-center after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2 hidden lg:flex">
                    Strona Główna
                </Link>

                <a href="/#" className="relative text-1.5xl md:text-2xl lg:text-3xl xl:text-4xl rounded-b-xl w-[50%] h-full flex justify-center items-center after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[0.7em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2 hidden lg:flex">
                    Regulamin
                </a>

            </div>
        </SignedIn>
    );
}

export default Header;

"use client";

import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        // Automatically close the menu if header size changes to big
        if (!menuOpen) return;
        const handleResize = () => {
            if (window.innerWidth >= 640) { // Adjust this value based on your breakpoints
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    return (
        <SignedIn>
            <div className={`flex items-center bg-[#494854] p-4 rounded-br-xl transition-all duration-300 ${menuOpen ? 'w-48' : 'w-full'}`}>
                <div className={`hidden sm:flex w-full justify-around items-center transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-100'}`}>
                    <Link 
                        href="/" 
                        className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-b-xl after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[-0.3em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2"
                    >
                        Strona Główna
                    </Link>
                    <a 
                        href="/#" 
                        className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-b-xl after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[-0.3em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2"
                    >
                        Regulamin
                    </a>
                </div>
                <div className="flex sm:hidden items-center relative">
                    <button
                        className="text-2xl focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div
                        className={`absolute top-full left-0 w-48 bg-[#494854] flex flex-col items-start p-4 space-y-4 transition-max-height duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <Link 
                            href="/" 
                            className="relative text-xl w-full text-left py-2 hover:bg-gray-700 after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[-0.3em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2"
                        >
                            Strona Główna
                        </Link>
                        <a 
                            href="/#" 
                            className="relative text-xl w-full text-left py-2 hover:bg-gray-700 after:content-[''] after:absolute after:w-[1em] after:h-[0.15em] after:bg-gray-500 after:bottom-[-0.3em] after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:ease-in-out after:rounded-full hover:after:w-[5em] hover:after:bg-[#fdee30] hover:after:left-1/2 hover:after:-translate-x-1/2"
                        >
                            Regulamin
                        </a>
                    </div>
                </div>
            </div>
        </SignedIn>
    );
}

export default Header;

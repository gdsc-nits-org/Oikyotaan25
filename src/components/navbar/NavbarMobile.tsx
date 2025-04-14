'use client';

import { useState } from 'react';
import Link from 'next/link'; 

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[90px] md:hidden bg-[#7D2E2E] text-white z-50 font-custom-script">
      {/* Left Logo */}
      <div className="absolute left-4 w-[50px] h-[32px] bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744127526/m8fz3kfdgf3wabfx2ak7.png)] bg-contain bg-no-repeat" />

      {/* Central Decoration */}
      <div className="absolute left-6 top-10 transform -translate-y-1/2 flex items-center gap-4">
        <div className="flex flex-col-reverse items-center ml-[2rem] justify-center"> 
          <img
            src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744125791/v5xjkjkn1jbwn628artx.png"
            alt="Cultural Motif"
            className="w-[80px] h-[48px] mt-[-1rem]"
          />
          <img
            src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744126091/uy5knxz37ossww6qprev.png"
            alt="Butterfly Element"
            className="h-[32px] w-[32px] ml-[3rem]"
          />
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-4 top-8 z-50 p-2" // Changed z-60 to z-50
      >
        {isOpen ? (
          // Close Icon
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-[90px] right-0 w-[200px] h-[calc(100vh-100px)] bg-[#7D2E2E] transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744481059/thkohufsewxw9qseepil.png)] bg-cover overflow-y-auto`}
      >
        {/* Tribal borders */}
        <div className="absolute top-0 left-0 w-4 h-full bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744480785/i2hctblwgh8c7sc6khgw.png)] bg-repeat-y" />
        <div className="absolute top-0 right-0 w-4 h-full bg-[url(https://res.cloudinary.com/dffke2hbp/image/upload/v1744480785/i2hctblwgh8c7sc6khgw.png)] bg-repeat-y" />

        {/* Menu items with separators */}
        <ul className="flex font-aprillia flex-col items-center justify-center h-full py-8 space-y-6">
          {['Home', 'Artist', 'Events', 'Gallery', 'Team'].map((item, index) => (
            <li key={item} className="w-full text-center">
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-3xl text-white font-greatvibes hover:text-yellow-300 transition-colors"
              >
                {item}
              </Link>
              {index < 4 && (
                <div className="mx-auto w-3/4 border-t-2 border-dotted border-yellow-400" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Lower Design Element */}
      <div>
        <img
          src="https://res.cloudinary.com/dffke2hbp/image/upload/v1744479949/plvel13qlitys7beujni.png"
          alt="Design Lower"
          className='mt-[4.9rem] sm:mt-[4.6rem] w-full'
        />
      </div>
    </nav>
  );
}

export default NavbarMobile;

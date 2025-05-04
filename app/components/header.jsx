'use client';
import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container animate-gradient-slide bg-gradient-to-r from-blue-900 to-black">

      <div className='py-5 flex justify-between items-center'>
        <h1 className='text-3xl text-white font-bold'>Lab.UZ</h1>

        {/* Hamburger Icon for mobile */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiOutlineX className='text-white w-8 h-8' />
            ) : (
              <HiOutlineMenu className='text-white w-8 h-8' />
            )}
          </button>
        </div>

        {/* Menu for desktop */}
        <div className='hidden sm:flex gap-7'>
          <p className='text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400'>
            About
          </p>
          <p className='text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400'>
            Contact Us
          </p>
          <p className='text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400'>
            Community
          </p>
        </div>

        {/* Buttons for desktop (hidden on mobile) */}
        <div className='hidden sm:flex gap-5'>
          <button className='bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500 hover:scale-105'>
            Log In
          </button>
          <button className='bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500 hover:scale-105'>
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only on mobile, and opens from the left to the right with smooth transition) */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:hidden bg-blue-950 opacity-95 p-5 flex flex-col gap-5 absolute top-0 left-0 w-64 h-full transition-transform transform duration-7000 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className='text-3xl text-white font-bold'>Lab.UZ</h1>
         <div className='-mx-6 border-t-2 border-white'></div>
        <p className='text-xl text-white cursor-pointer hover:text-blue-400'>
          About
        </p>
        <p className='text-xl text-white cursor-pointer hover:text-blue-400'>
          Contact Us
        </p>
        <p className='text-xl text-white cursor-pointer hover:text-blue-400'>
          Community
        </p>

        {/* Buttons for mobile (shown inside the menu on mobile) */}
        <div className='flex flex-col gap-3'>
          <button className=' bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500'>
            Log In
          </button>
          <button className='bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500'>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

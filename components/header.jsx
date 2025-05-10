"use client";
import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import SignIn from "./modals/sign-in/page";
import SignUp from "./modals/sign-up/page";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openSignInModal = () => {
    setIsModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  return (
    <nav className="container animate-gradient-slide bg-gradient-to-r from-blue-900 to-black">
      <div className="py-5 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Lab.UZ</h1>
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiOutlineX className="text-white w-8 h-8" />
            ) : (
              <HiOutlineMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Menu for desktop */}
        <div className="hidden sm:flex gap-7">
          <Link href="/about">
            <p className="text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400">
              Contact Us
            </p>
          </Link>
          <Link href="/why">
            <p className="text-xl text-white cursor-pointer transition hover:scale-110 duration-300 hover:text-blue-400">
              Community
            </p>
          </Link>
        </div>

        {/* Buttons for desktop */}
        <div className="hidden sm:flex gap-5">
          <button
            className="bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500 hover:scale-105"
            onClick={openSignInModal}
          >
            Login
          </button>
          <button
            className="bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500 hover:scale-105"
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden bg-blue-950 opacity-95 p-5 flex flex-col gap-5 absolute top-0 left-0 w-64 h-full transition-transform transform duration-7000 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-white font-bold">Lab.UZ</h1>
          <button onClick={toggleMenu}>
            <HiOutlineX className="text-white w-8 h-8" />
          </button>
        </div>
        <div className="-mx-6 border-t-2 border-white my-4"></div>
        <Link href="/about">
          <p className="text-xl text-white cursor-pointer hover:text-blue-400">
            About
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-xl text-white cursor-pointer hover:text-blue-400">
            Contact Us
          </p>
        </Link>
        <Link href="/why">
          <p className="text-xl text-white cursor-pointer hover:text-blue-400">
            Community
          </p>
        </Link>

        {/* Buttons for mobile */}
        <div className="flex flex-col gap-3 mt-5">
          <button
            className="bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500"
            onClick={openSignInModal}
          >
            Login
          </button>
          <button
            className="bg-blue-600 px-4 py-1 rounded-lg text-white transition duration-300 hover:bg-blue-500"
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Modals */}
      <SignIn isOpen={isModalOpen} onClose={closeSignInModal} openSignUp={openSignUpModal} />
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUpModal} />
    </nav>
  );
};

export default Header;

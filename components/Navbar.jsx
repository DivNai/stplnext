import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex items-center justify-between bg-transparent absolute z-20">
      {/* Logo (top left corner) */}
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center">
          {/* Logo Image */}
          <img
            src="/assets/logo2.png"
            alt="StepLoop Logo"
            className="h-10 w-auto mr-2"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
        <li className="hover:text-indigo-400 ">
          Home 
        </li>
        <li className="hover:text-indigo-400 ">
          About 
        </li>
        <li className="hover:text-indigo-400 ">
          Services 
        </li>
        <li className="hover:text-indigo-400 ">
          Pages 
        </li>
        <li className="hover:text-indigo-400 ">Contact</li>
      </ul>

      {/* Mobile Hamburger and Buttons */}
      <div className="flex items-center gap-4">
        {/* Search and Notification icons hidden on mobile */}
        <button className="hidden md:inline">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={10} cy={10} r={8} stroke="#fff" />
            <line x1="16" y1="16" x2="22" y2="22" stroke="#fff" />
          </svg>
        </button>
        <button className="hidden md:inline">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={15} cy={13} r={6} stroke="#fff" />
            <circle cx={19.5} cy={10.5} r={2.5} stroke="#fff" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Get Started Button */}
        {/* <button className="ml-4 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-xl px-4 sm:px-6 py-2 text-white font-semibold transition hover:opacity-90 whitespace-nowrap">
          GET STARTED &rarr;
        </button> */}
      </div>

      {/* Mobile menu dropdown (optional, toggle with menuOpen) */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4 md:hidden font-semibold z-30">
          <li className="hover:text-indigo-400 cursor-pointer">
            Home <span className="ml-1">&#9662;</span>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            About <span className="ml-1">&#9662;</span>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            Services <span className="ml-1">&#9662;</span>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">
            Pages <span className="ml-1">&#9662;</span>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

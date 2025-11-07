"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to make navbar translucent
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo (Left Side) */}
        <div className="flex items-center">
          <a href=" " className="flex items-center">
            <img
              src="/assets/logo2.png"
              alt="StepLoop Logo"
              className="h-10 w-auto mr-2"
            />
          </a>
        </div>

        {/* Center Menu (Desktop) */}
        <ul className="hidden md:flex items-center justify-center flex-1 gap-10 text-white font-semibold">
          <li className="hover:text-indigo-400 cursor-pointer">Home</li>
          <li className="hover:text-indigo-400 cursor-pointer">About</li>
          <li className="hover:text-indigo-400 cursor-pointer">Services</li>
          <li className="hover:text-indigo-400 cursor-pointer">Pages</li>
          <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger Button (Right Side on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul
          className={`md:hidden absolute top-full left-0 w-full text-white flex flex-col items-center py-4 space-y-4 font-semibold z-40 transition-all duration-500 ${
            scrolled
              ? "bg-black/50 backdrop-blur-lg"
              : "bg-black"
          }`}
        >
          <li className="hover:text-indigo-400 cursor-pointer">Home</li>
          <li className="hover:text-indigo-400 cursor-pointer">About</li>
          <li className="hover:text-indigo-400 cursor-pointer">Services</li>
          <li className="hover:text-indigo-400 cursor-pointer">Pages</li>
          <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

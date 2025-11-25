"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/Aboutus/about" },
  { name: "Services", href: "/Testimonials/Testimonial" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/50 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">

        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo-crop.png"
            alt="StepLoop Logo"
            className="h-10 w-auto mr-2"
          />
        </Link>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex items-center gap-10 text-white font-semibold mx-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Join Us Button (Right) */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white border border-indigo-400 rounded-md group">
              <span className="absolute left-0 top-0 h-full w-0 bg-indigo-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10">Join Us</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={handleMenuClick}>
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul
          className={`md:hidden w-full absolute top-full left-0 py-4 text-white font-semibold flex flex-col items-center gap-6 transition-all ${
            scrolled ? "bg-black/30 backdrop-blur-lg" : "bg-black"
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="hover:text-indigo-400 text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

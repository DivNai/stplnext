"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const services = [
  { name: "SAP Services", href: "/Testimonials/Testimonial#SAP-Services" },
  { name: "SAP Solutions", href: "/Testimonials/Testimonial#SAP-Solutions" },
  { name: "Mobile Development", href: "/Testimonials/Testimonial#Mobile-Development" },
  { name: "Web Development", href: "/Testimonials/Testimonial#Web-Development" },
  { name: "Training and Recruitment", href: "/Testimonials/Testimonial#Training-and-Recruitment" },
  { name: "Custom Software Development", href: "/Testimonials/Testimonial#Custom-Software-Development" },
  { name: "Cloud Technologies", href: "/Testimonials/Testimonial#Cloud-Technologies" },
  { name: "AI & ML Solutions", href: "/Testimonials/Testimonial#AI-&-ML-Solutions" },
];

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/Aboutus/about" },
  { name: "Services", href: "/Testimonials/Testimonial", hasDropdown: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef(null); // for delay

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150); // 150ms delay
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/50 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo-crop.png"
            alt="Logo"
            className="h-10 w-auto mr-2"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl border border-indigo-500/20 overflow-hidden">
                      <ul className="py-2">
                        {services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              className="block px-4 py-3 hover:bg-indigo-600/30 text-sm transition-colors"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Join Us Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white border border-indigo-400 rounded-md group">
              <span className="absolute left-0 top-0 h-full w-0 bg-indigo-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10">Join Us</span>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden w-full absolute top-full left-0 py-4 text-white font-semibold flex flex-col items-center transition-all ${
            scrolled ? "bg-black/30 backdrop-blur-lg" : "bg-black"
          }`}
        >
          <ul className="w-full flex flex-col items-center gap-4">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleMobileServices}
                      className="hover:text-indigo-400 text-lg flex items-center justify-center gap-2 w-full"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <ul className="mt-3 mb-2 space-y-2 bg-black/40 py-3 rounded-lg">
                        {services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              onClick={closeMenu}
                              className="block hover:text-indigo-400 text-base py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="hover:text-indigo-400 text-lg block"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Join Us Button */}
          <div className="mt-6">
            <Link href="/contact" onClick={closeMenu}>
              <button className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-semibold text-white border border-indigo-400 rounded-md group">
                <span className="absolute left-0 top-0 h-full w-0 bg-indigo-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                <span className="relative z-10">Join Us</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

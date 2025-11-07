"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLenis } from "@/utils/SmoothScrolling"; // Update with the correct path

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis(); // Access the shared Lenis instance

  // Smooth scrolling function using Lenis
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0); // Scroll to the top using Lenis
    }
  };

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      // Check if window is defined
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          pointerEvents: isVisible ? "auto" : "none",
        }}
        className="fixed bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-[#E35B28] text-white flex items-center justify-center shadow-lg z-50"
      >
        <button
          onClick={scrollToTop}
          className="w-full h-full flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;

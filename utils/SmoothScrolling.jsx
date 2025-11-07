"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Create a context
const LenisContext = createContext(null);

// Custom provider component
export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null); // Use state to manage Lenis instance

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2, // Set the duration for smooth scroll (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional easing function
    });

    // Lenis animation frame handler for smooth scrolling
    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    // Start animation frame for Lenis
    requestAnimationFrame(raf);
    setLenis(lenisInstance); // Set the Lenis instance in state

    return () => {
      lenisInstance.stop(); // Stop Lenis instance when the provider unmounts
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

// Custom hook to use Lenis
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (context === null) {
    return;
  }
  return context;
};

"use client";

import { useEffect, useState } from "react";
import { easeIn, easeOut } from "framer-motion";

export const NavmenuSlide = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easeIn },
  },
};

export const NavItemslide = {
  initial: { y: 160, opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  }),
  exit: (i) => ({
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  }),
};

export const navbarVariants = {
  enter: {
    transition: { duration: 0.3, ease: easeIn },
  },
  exit: {
    transition: { duration: 0.3, ease: easeIn },
  },
};

// NavbarItemVariants with client-side document access
export const useNavbarItemVariants = () => {
  const [textColor, setTextColor] = useState("#000"); // Default color

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const computedStyle = window.getComputedStyle(root);
      const headingColor = computedStyle.getPropertyValue("--headingColor");
      setTextColor(headingColor);
    }
  }, []);

  return {
    enter: {
      color: textColor,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      color: textColor,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

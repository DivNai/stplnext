"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLenis } from "@/utils/SmoothScrolling"; // Import your Lenis context

const ScrollAnimation = ({ children, speed = 0.17, speed2 = speed }) => {
  const elementRef = useRef(null);
  const lenis = useLenis(); // Get the Lenis instance from context
  const [currentSpeed, setCurrentSpeed] = useState(speed); // State to manage speed dynamically

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 768) {
        // Use speed2 when window width is below 768px
        setCurrentSpeed(speed2);
      } else {
        // Use the default speed when window width is above 768px
        setCurrentSpeed(speed);
      }
    };

    // Run the function on component mount and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, [speed, speed2]); // Re-run when either speed or speed2 prop changes

  useEffect(() => {
    if (!lenis) return; // Ensure Lenis is available

    const scroll = (time) => {
      lenis.raf(time);

      if (elementRef.current) {
        const scrollY = lenis.scroll; // Get current scroll position

        // Translate only in the Y direction based on current speed
        const translateValue = `translateY(${scrollY * currentSpeed}px)`;

        elementRef.current.style.transform = translateValue;
      }

      requestAnimationFrame(scroll);
    };

    // Start the animation frame loop
    requestAnimationFrame(scroll);

    return () => {
      // Any necessary cleanup if needed
    };
  }, [lenis, currentSpeed]); // Add dependencies including currentSpeed

  return (
    <div ref={elementRef} className="min-h-full">
      {children}
    </div>
  );
};

export default ScrollAnimation;

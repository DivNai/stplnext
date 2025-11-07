"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Marquee = ({ benefits, mul = 1, duration = 10 }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  console.log(isMobile);
  useEffect(() => {
    // Call handleResize once on mount to set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only on mount/unmount

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className={`flex gap-6 ${
          isMobile ? "flex-row gap-3 " : "flex-col"
        } w-full`}
        animate={
          isMobile
            ? { x: ["0%", "-400%"] } // Animate horizontally for mobile
            : { y: ["0%", "-100%"] } // Animate vertically for desktop
        }
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
        style={{ display: "flex" }}
      >
        {/* Duplicate the content for smooth looping */}
        {[...benefits, ...benefits].map((card, index) => (
          <div
            key={`${card.id}-${index}`} // Unique key for each item
            className="flex flex-col md:gap-4 items-center justify-center bg-white rounded-3xl"
            style={{
              minWidth:  "250px", // Small width for mobile, larger for desktop
              minHeight: isMobile ? "150px" : "280px", // Small height for mobile, larger for desktop
              padding: isMobile ? "0.5rem" : "2rem", // Smaller padding on mobile
            }}
          >
            <div className="flex flex-col gap-2 items-start justify-start">
              <span className="text-xl">{card.icon}</span>
              <h2 className="md:font-bold text-xl md:text-3xl  md:tracking-wide text-black">
                {card.heading}
              </h2>
            </div>
            <p className="text-gray-700 text-[.8rem] md:text-base lg:text-lg">
              {card.content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

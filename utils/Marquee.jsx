"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Marquee = ({ benefits, mul = 1, duration = 10, className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024); // Mobile & tablet responsiveness
  };

  useEffect(() => {
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className={`flex ${
          isMobile ? "flex-row gap-4" : "flex-col gap-6"
        } w-full`}
        animate={
          isMobile
            ? { x: ["0%", "-200%"] } // Horizontal scroll for mobile/tablet
            : { y: ["0%", "-100%"] } // Vertical scroll for desktop
        }
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Smooth infinite loop duplication */}
        {[...benefits, ...benefits].map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="
              bg-white shadow-sm rounded-2xl
              flex flex-col justify-between 
              border border-gray-100
              transition-all
            "
            style={{
              minWidth: isMobile ? "210px" : "100%",
              minHeight: isMobile ? "150px" : "250px",
              padding: isMobile ? "0.75rem" : "1.5rem",
            }}
          >
            {/* Icon + Heading */}
            <div className="flex flex-col gap-2">
              <span className="text-lg md:text-xl">{card.icon}</span>

              <h2 className="
                text-sm md:text-lg lg:text-xl 
                font-semibold text-gray-900
              ">
                {card.heading}
              </h2>
            </div>

            {/* Content */}
            <p
              className="
                text-[0.7rem] 
                md:text-sm 
                lg:text-base
                text-gray-700 mt-2
              "
            >
              {card.content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

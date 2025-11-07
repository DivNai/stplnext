"use client";

import { motion, easeIn } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

exports.CustomButton = function ({ children }) {
  const [joinUsHover, setJoinUsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect window size to determine if it's mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's sm breakpoint (768px)
    };

    handleResize(); // Check size on initial render
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <motion.div
        className="flex justify-center items-center relative bg-white rounded-3xl px-8 md:px-12 py-2 overflow-hidden cursor-pointer"
        onMouseEnter={() => setJoinUsHover(true)}
        onMouseLeave={() => setJoinUsHover(false)}
      >
        <motion.div
          animate={{
            scale: joinUsHover ? 45 : 1,
          }}
          transition={{
            ease: easeIn,
            duration: 0.3,
          }}
          className="w-[10px] h-[10px] hidden md:block bg-[#E35B28] rounded-full absolute left-[22px]"
        ></motion.div>

        <motion.div
          animate={{
            color: joinUsHover ? "white" : "black",
            x: joinUsHover ? (isMobile ? 8 : -8) : isMobile ? 0 : 8, // Conditional x based on mobile or desktop
          }}
          className="font-semibold"
        >
          <p className="whitespace-nowrap md:text-base text-xs">{children}</p>
        </motion.div>

        <motion.div
          animate={{ x: joinUsHover ? 0 : 24 }}
          className="absolute md:flex hidden items-center right-[22px]"
        >
          <FaArrowAltCircleDown
            className="text-white"
            style={{
              backgroundColor: "transparent",
            }}
            width="60px"
            height="60px"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

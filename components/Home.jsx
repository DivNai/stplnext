"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  /* ---------- Typewriter Scroll-Triggered Logic ---------- */
  const fullText = `Driven by expertise  
  Defined by innovation `;

  const [displayedText, setDisplayedText] = useState("");
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let index = 0;
          setDisplayedText("");

          const typing = setInterval(() => {
            setDisplayedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(typing);
          }, 50);
        }
      },
      { threshold: 0.4 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={homeRef}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] 
      flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* ---------- BACKGROUND VIDEO ---------- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/hero.mp4" // replace with your video file
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* ---------- Main Content ---------- */}
      <div className="relative z-20 text-left max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl pl-2 sm:pl-6 md:pl-10">
        {/* Typewriter Heading */}
        <motion.h1
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-extrabold leading-snug mb-3 whitespace-pre-line drop-shadow-xl"
        >
          {displayedText}
        </motion.h1>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-md drop-shadow">
          Delivering cutting-edge IT, digital, and technology services to drive 
          strategic innovation and business growth.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/Aboutus/about")}
          className="inline-block bg-gradient-to-r from-indigo-500 to-blue-400 
          text-white text-sm sm:text-base px-5 sm:px-7 md:px-8 py-2 sm:py-3 rounded-lg 
          shadow-md hover:opacity-90 transition"
        >
          WHO WE ARE →
        </motion.button>
      </div>
    </div>
  );
};

export default Home;

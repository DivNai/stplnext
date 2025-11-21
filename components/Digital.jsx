"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemFadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Digital = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] flex items-center overflow-hidden pt-[60px] md:pt-[70px]">
      {/* Background Video */}
      <video
        src="/assets/bg-digital.mp4"   
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-[#0A1533]/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 flex flex-col justify-center"
      >
        <motion.h1
          variants={itemFadeLeft}
          className="text-white font-extrabold text-2xl md:text-4xl leading-snug mb-6 text-left drop-shadow-xl"
        >
          Transform your digital vision
          <br /> with expert IT consulting.
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="text-[#d4ddf5] text-base md:text-lg max-w-lg mb-8 text-left drop-shadow-md"
        >
          We deliver customized IT strategies to optimize operations, improve
          security, and drive results—using modern technology designed to scale
          with your business.
        </motion.p>

        {/* Center Button */}
        <motion.div variants={itemFadeUp} className="flex justify-start w-full">
          <button
            onClick={handleContactClick}
            className="bg-[#9aa7d8] hover:bg-blue-800 transition px-5 py-2 text-white font-semibold rounded-md shadow-md text-sm"
          >
            Contact Us →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Digital;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ for navigation in Next.js 13+

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemFadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Digital = () => {
  const router = useRouter(); // ✅ router hook

  const handleContactClick = () => {
    // Navigate to Contact page route (pages/contact.jsx)
    router.push("/contact");
  };

  return (
    <section className="relative w-full min-h-[500px] flex items-center bg-[#112049]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img src="/assets/sapsolu.jpg" alt="Hero background" className="w-full h-full object-cover"style={{ filter: "brightness(0.45)" }} />
        <div className="absolute inset-0 bg-[#112049] opacity-65" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="relative z-10 max-w-5xl mx-auto px-8 py-24 flex flex-col justify-center items-start text-left"
      >
        <motion.span
          variants={itemFadeLeft}
          className="uppercase tracking-widest text-[#98A3D1] font-semibold text-sm mb-6 block"
        >
          Bring your ideas
        </motion.span>

        <motion.h1
          variants={itemFadeLeft}
          className="text-white font-extrabold text-5xl md:text-6xl leading-tight mb-8 text-left"
        >
          Transform your digital
          <br /> vision into reality with expert IT consulting.
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="text-[#c9d1e7] text-lg max-w-xl mb-10 text-left"
        >
          Our team delivers customized, innovative IT strategies to help you optimize operations, improve security, and drive meaningful results. We partner closely with your business, using the latest technologies to ensure scalable solutions that grow with you and keep you ahead of industry changes.
        </motion.p>

        {/* ✅ Contact Us Button with animation and navigation */}
        <motion.button
          variants={itemFadeUp}
          whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #2563eb60" }}
          onClick={handleContactClick}
          className="inline-block bg-[#98A3D1] hover:bg-blue-800 transition px-5 py-2 text-white font-bold rounded-md shadow-md text-sm"
        >
          Contact Us <span className="ml-1">→</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Digital;

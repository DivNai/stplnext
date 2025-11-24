"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// ==================== SERVICE DATA ====================
const cards = [
  {
    image: "/assets/meetingroom3.jpg",
    title: "Customized IT Solutions",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Deliver tailored IT consulting services that enhance operational efficiency and accelerate growth, aligned perfectly with unique business needs.",
  },
  {
    image: "/assets/meetingroom1.jpg",
    title: "Comprehensive SAP Services",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description:
      "Provide end-to-end SAP solutions, from consultation to optimization, ensuring seamless, efficient, and scalable SAP system operations.",
  },
  {
    image: "/assets/meetingroom2.jpg",
    title: "Sustainable Success",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description:
      "Focus on measurable outcomes through scalable, precise project execution that drives impactful and lasting business growth.",
  },
];

// ==================== SERVICE CARD ====================
const ServiceCard = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.05 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        />

        {/* Dark Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        {/* ICON */}
        <motion.div animate={{ y: isHovered ? -6 : 0 }} transition={{ duration: 0.4 }}>
          <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl">
            <div className="text-white">{card.icon}</div>
          </div>
        </motion.div>

        {/* TEXT */}
        <div className="space-y-4">
          <motion.h3
            animate={{ y: isHovered ? -6 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-white leading-tight"
          >
            {card.title}
          </motion.h3>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <p className="text-white/90 text-base">{card.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function WideServiceCards() {
  return (
    <section className="w-full min-h-screen bg-[#F3F4F6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow-md">
            Our Services
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A0F1F] leading-tight">
            Let us Bring Your<br />Vision to Life
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business with our cutting-edge solutions
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
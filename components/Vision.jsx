"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Card data
const cards = [
  {
    image: "/assets/meetingroom3.jpg",
    title: "Customized IT Solutions",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect
          x="6"
          y="6"
          width="12"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path stroke="currentColor" strokeWidth="2" d="M4 18h16" />
      </svg>
    ),
    hiddenText:
      "Deliver tailored IT consulting services that enhance operational efficiency and accelerate growth, aligned perfectly with unique business needs.",
  },
  {
    image: "/assets/meetingroom1.jpg",
    title: "Comprehensive SAP Services",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="7"
          width="16"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path stroke="currentColor" strokeWidth="2" d="M9 3v4m6-4v4" />
      </svg>
    ),
    hiddenText:
      "Provide end-to-end SAP solutions, from consultation to optimization, ensuring seamless, efficient, and scalable SAP system operations.",
  },
  {
    image: "/assets/meetingroom2.jpg",
    title: "Sustainable Success",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path stroke="currentColor" strokeWidth="2" d="M12 3v2m0 14v2" />
      </svg>
    ),
    hiddenText:
      "Focus on measurable outcomes through scalable, precise project execution that drives impactful and lasting business growth.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WideServiceCard = ({ image, title, icon, hiddenText, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden shadow-lg bg-white text-black flex flex-col cursor-pointer group"
    >
      {/* Background Image with opacity transition */}
      <motion.div className="relative w-full h-64 md:h-96">
        <motion.div
          animate={{ opacity: hovered ? 0.75 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Hover Triangles */}
      {hovered && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-2/5 h-2/5"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              background:
                "linear-gradient(135deg, rgba(30,64,175,0.85), rgba(67,56,202,0.87), rgba(91,33,182,0.9))",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute bottom-0 right-0 w-2/5 h-2/5"
            style={{
              clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
              background:
                "linear-gradient(-45deg, rgba(91,33,182,0.9), rgba(67,56,202,0.87), rgba(30,64,175,0.85))",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}

      {/* Hidden Text - Full width, centered */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full px-6 py-4 text-center text-base text-black font-medium  z-30"
      >
        {hovered && hiddenText}
      </motion.div>

      {/* Icon and Title */}
      <motion.div
        animate={{
          y: hovered ? -50 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full z-20 text-center text-white"
      >
        <div className="flex justify-center items-center rounded-full bg-[#6246ea] w-16 h-16 mb-4 shadow-lg">
          {icon}
        </div>
        <motion.h3
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -10 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-semibold text-white drop-shadow"
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default function WideServiceCards() {
  return (
    <section className="w-full bg-[#f3f6fb] py-16 px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-900 mb-10"
      >
        Let's Bring Your <br /> Vision to Life!
      </motion.h2>

      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <WideServiceCard key={card.title} index={i} {...card} />
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

// Smooth triangle animation
const triangleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServiceCard = ({ icon, title, description, image }) => (
  <motion.div
    className="relative h-full overflow-hidden bg-[#f3f6fb] min-h-[320px] flex flex-col justify-between group rounded-none cursor-pointer"
    initial="rest"
    whileHover="hover"
    animate="rest"
    variants={{
      rest: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
      hover: {
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        transition: { duration: 0.4 },
      },
    }}
  >
    {/* Background image + triangles */}
    <motion.div
      className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Top-left triangle */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        variants={triangleVariants}
        initial="hidden"
        whileInView="visible"
      />

      {/* Bottom-right triangle */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        variants={triangleVariants}
        initial="hidden"
        whileInView="visible"
      />
    </motion.div>

    {/* Overlay for hover darkening effect */}
    <div className="absolute inset-0 z-[1] bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

    {/* Content section (always above all backgrounds) */}
    <div className="relative z-[2] flex flex-col justify-between h-full p-6">
      {/* Icon */}
      <div className="mb-4">{icon}</div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-lg text-black group-hover:text-white transition-colors duration-500">
            {description}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;

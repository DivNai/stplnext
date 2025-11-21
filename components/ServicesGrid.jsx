"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Simple icons
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;

// Service Card Component
const ServiceCard = ({ title, description, icon, image, link, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      className="relative bg-[#f3f6fb] p-8 h-full flex flex-col justify-between overflow-hidden cursor-pointer block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 150)}
    >
      {/* Overlay Container - Using transform for GPU acceleration */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Background Image with faster fade */}
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}

        {/* Top-left Triangle with slide-in animation */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ 
            x: isHovered ? 0 : "-100%", 
            y: isHovered ? 0 : "-100%" 
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom-right Triangle with slide-in animation */}
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          initial={{ x: "100%", y: "100%" }}
          animate={{ 
            x: isHovered ? 0 : "100%", 
            y: isHovered ? 0 : "100%" 
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Icon with bounce animation on hover */}
      <motion.div 
        className="relative z-20 mb-4"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? [0, -5, 5, 0] : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        {icon}
      </motion.div>

      {/* Text Content with smooth color transition */}
      <motion.div
        className="relative z-20"
        animate={{ 
          color: isHovered ? "#ffffff" : "#000000"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.h3 
          className="text-xl font-semibold mb-2"
          animate={{ 
            y: isHovered ? -2 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-base"
          animate={{ 
            y: isHovered ? -2 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Subtle shadow overlay for depth */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.a>
  );
};

// Services Data
const servicesData = [
  {
    title: "SAP SOLUTION & SERVICES",
    description:
      "Integrated software for optimizing business operations with expert implementation SAP systems.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "MOBILE & WEB DEVELOPMENT",
    description:
      "Building high-performance mobile and web applications tailored to your business needs.",
    icon: <CloudIcon />,
    image: "/assets/service2.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "TRAININGS",
    description:
      "We empower organizations with skilled talent through targeted IT and business training and effective recruitment services.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "We develop custom software that fits your unique needs and integrates smoothly with your systems.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
    link: "/Testimonials/Testimonial",
  },
];

// Services Grid
const ServicesGrid = () => (
  <section className="w-full bg-white border-b border-gray-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;
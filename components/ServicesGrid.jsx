"use client";

import React from "react";
import { motion } from "framer-motion";

// Simple Icons
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;

// Hover Variants for Framer Motion
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.15 },
  },
};

const overlayVariants = {
  hover: { opacity: 1 },
  initial: { opacity: 0 },
};

const imageVariants = {
  hover: { opacity: 0.7 },
  initial: { opacity: 0 },
};

const textVariants = {
  hover: { color: "#ffffff", y: -3 },
  initial: { color: "#000000", y: 0 },
};

const iconVariants = {
  hover: { scale: 1.1, rotate: [0, -5, 5, 0] },
  initial: { scale: 1, rotate: 0 },
};

// Service Card Component
const ServiceCard = ({ title, description, icon, image, link, index }) => {
  return (
    <motion.a
      href={link}
      className="relative bg-[#f3f6fb] p-8 h-full flex flex-col justify-between overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      custom={index}
      whileHover="hover"
    >
      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        variants={overlayVariants}
        transition={{ duration: 0.25 }}
      >
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            variants={imageVariants}
            transition={{ duration: 0.25 }}
          />
        )}

        {/* Decorative Triangles */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 to-violet-600"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          animate={{ x: "-100%", y: "-100%" }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 to-violet-600"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          animate={{ x: "100%", y: "100%" }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Icon */}
      <motion.div className="relative z-20 mb-4" variants={iconVariants}>
        {icon}
      </motion.div>

      {/* Text */}
      <motion.div className="relative z-20">
        <motion.h3
          className="text-xl font-semibold mb-2"
          variants={textVariants}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-base leading-relaxed"
          variants={textVariants}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.a>
  );
};

// Services Data
const servicesData = [
  {
    title: "SAP SOLUTION & SERVICES",
    description:
      "Integrated enterprise-wide SAP solutions designed to optimize and scale business operations.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "MOBILE & WEB DEVELOPMENT",
    description:
      "High-performance mobile and web applications built for speed, scalability, and modern user experiences.",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "TRAININGS",
    description:
      "Empowering teams with industry-ready skills through specialized IT and business training programs.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Tailored software solutions designed to align perfectly with your business workflows and goals.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
    link: "/Testimonials/Testimonial",
  },
];

// Grid Component
const ServicesGrid = () => (
  <section className="w-full bg-white border-b border-gray-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;

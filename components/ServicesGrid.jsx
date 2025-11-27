"use client";

import React from "react";
import { motion } from "framer-motion";

// Icons
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;

// Animation Variants
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
  hover: { scale: 1.02, transition: { duration: 0.15 } },
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

const imageVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 0.7 },
};

const textVariants = {
  initial: { color: "#000000", y: 0 },
  hover: { color: "#ffffff", y: -3 },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: [0, -5, 5, 0] },
};

// Service Card Component
const ServiceCard = ({ title, description, icon, image, index }) => {
  const anchor = `/Testimonials/Testimonial#${title.split(" ").join("-")}`;

  return (
    <motion.a
      href={anchor}
      className="relative bg-[#f3f6fb] h-full flex flex-col justify-between overflow-hidden cursor-pointer"
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
      <motion.div className="relative z-20 mb-3 p-4" variants={iconVariants}>
        {icon}
      </motion.div>

      {/* Text Section */}
      <motion.div className="relative z-20 p-4">
        <motion.h3
          className="text-lg font-semibold mb-1"
          variants={textVariants}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-sm leading-relaxed"
          variants={textVariants}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.a>
  );
};

// Services
const servicesData = [
  {
    title: "SAP Innovation",
    description:
      "Driving intelligent transformation through SAP-powered innovation.Empowering businesses to operate smarter, faster, and with greater precision.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
  },
  {
    title: "Mobile and Web Development",
    description:
      "High-performance mobile applications engineered for speed and reliability.Built to deliver seamless, intuitive, and exceptional user experiences.",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
  },
  {
    title: "Training and Recruitment",
    description:
      "Empowering teams with practical IT and business training to strengthen performance and enable sustained organizational success.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "Designed to enhance efficiency, accelerate growth, and enable smarter operations.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
  },
];

// Grid Component
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
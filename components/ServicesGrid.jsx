"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Icons
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;
const InfrastructureIcon = () => <span className="text-3xl">🌐</span>;
const SupportIcon = () => <span className="text-3xl">🛠️</span>;

// Animation Variants
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
  hover: { scale: 1.02 },
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
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

// Service Card Component
const ServiceCard = ({ title, description, icon, image, index }) => {
  const router = useRouter();

  const handleClick = () => {
    const id = title.split(" ").join("-");

    // Store the section ID temporarily
    sessionStorage.setItem("scrollToSection", id);

    // Navigate to Testimonials page
    router.push("/Testimonials/Testimonial");
  };

  return (
    <motion.div
      onClick={handleClick}
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
      >
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            variants={imageVariants}
          />
        )}
      </motion.div>

      {/* Icon */}
      <motion.div className="relative z-20 mb-3 p-4" variants={iconVariants}>
        {icon}
      </motion.div>

      {/* Text */}
      <motion.div className="relative z-20 p-3">
        <motion.h3 className="text-lg font-semibold mb-1" variants={textVariants}>
          {title}
        </motion.h3>
        <motion.p className="text-xs" variants={textVariants}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Services Data
const servicesData = [
  {
    title: "SAP Innovation",
    description:
      "Driving intelligent transformation through SAP-powered innovation. Empowering businesses to operate smarter and faster.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
  },
  {
    title: "Mobile and Web Development",
    description:
      "High-performance mobile and web applications built for speed, scalability, and world-class user experience.",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
  },
  {
    title: "Training and Recruitment",
    description:
      "Upskilling teams with IT and business training designed to improve capability and organizational performance.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions engineered to streamline operations, boost efficiency, and support business growth.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
  },
  {
    title: "Cloud Engineering",
    description:
      "Building secure, scalable cloud infrastructures with seamless migration, optimization, and automation.",
    icon: <InfrastructureIcon />,
    image: "/assets/cloud.jpg",
  },
  {
    title: "IT Support & DevOps",
    description:
      "Reliable IT support combined with automated CI/CD pipelines for faster, efficient, and stable deployments.",
    icon: <SupportIcon />,
    image: "/assets/Ai.jpg",
  },
];

const ServicesGrid = () => (
  <section className="w-full bg-white border-b border-gray-300">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;

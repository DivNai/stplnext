"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Icons
const TechIcon = () => <span className="text-4xl">🖥️</span>;
const CloudIcon = () => <span className="text-4xl">☁️</span>;
const SoftwareIcon = () => <span className="text-4xl">⚙️</span>;
const ProcessIcon = () => <span className="text-4xl">💼</span>;
const InfrastructureIcon = () => <span className="text-4xl">🌐</span>;
const SupportIcon = () => <span className="text-4xl">🛠️</span>;

// Animations
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
  hover: { scale: 1.03 },
};

const overlayVariants = { initial: { opacity: 0 }, hover: { opacity: 1 } };
const imageVariants = { initial: { opacity: 0 }, hover: { opacity: 0.65 } };
const textVariants = {
  initial: { color: "#000", y: 0 },
  hover: { color: "#fff", y: -2 },
};
const iconVariants = { initial: { scale: 1 }, hover: { scale: 1.08 } };

// Services
const servicesData = [
  {
    id: "SAP-Innovation",
    title: "SAP Innovation",
    description:"Transforming enterprises through innovative SAP technologies that unlock efficiency, agility, and sustainable growth.SAP-driven innovation for intelligent business transformation.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
  },
  {
    id: "Mobile-and-Web-Development",
    title: "Mobile and Web Development",
    description:
      "Building robust mobile and web solutions that deliver exceptional performance and seamless scalability.Delivering fast, reliable experiences that grow .",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
  },
  {
    id: "Training-and-Recruitment",
    title: "Training and Recruitment",
    description:
      "Empower your workforce with targeted IT and business training programs that enhance skills and drive organizational performance to achieve excellence",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
  },
  {
    id: "Custom-Software-Development",
    title: "Custom Software Development",
    description:
      "Tailored software that transforms complexity into simplicity. We engineer custom solutions that streamline operations and empower team to work smarter.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
  },
  {
    id: "Cloud Technologies",
    title: "Cloud Technologies",
    description:
      "Deploy robust cloud environments with advanced automation and enterprise-grade security.Our scalable solutions leverage leading platforms to deliver high performance..",
    icon: <InfrastructureIcon />,
    image: "/assets/cloud.jpg",
  },
  {
    id: "AI-and-ML-Solutions",
    title: "AI and ML Solutions",
    description:"Transform operations with AI solutions engineered for real-world business impact. From predictive analytics and intelligent chatbots, we build scalable AI systems that enhance decision-making.",
    icon: <SupportIcon />,
    image: "/assets/Ai.jpg",
  },
];

// Card Component
const ServiceCard = ({ id, title, description, icon, image, index }) => {
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("scrollToSection", id);
    router.push("/Testimonials/Testimonial#${id}");
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={index}
      className="
        relative cursor-pointer bg-[#f3f6fb]
        flex flex-col justify-between
        h-full p-5 overflow-hidden 
      "
    >
      {/* Hover Image Overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        variants={overlayVariants}
      >
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
        />
      </motion.div>

      {/* Icon */}
      <motion.div
        className="z-20 mb-4 flex justify-center items-center"
        variants={iconVariants}
      >
        {icon}
      </motion.div>

      {/* Text */}
      <motion.div className="z-20 text-center" variants={textVariants}>
        <motion.h3
          className="text-[15px] font-semibold leading-tight mb-1"
          variants={textVariants}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-[11px] leading-snug"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Services Grid
const ServicesGrid = () => (
  <section className="w-full bg-white border-b border-gray-300">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;

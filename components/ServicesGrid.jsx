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

const overlayVariants = { initial: { opacity: 0 }, hover: { opacity: 1 } };
const imageVariants = { initial: { opacity: 0 }, hover: { opacity: 0.7 } };
const textVariants = {
  initial: { color: "#000", y: 0 },
  hover: { color: "#fff", y: -3 },
};
const iconVariants = { initial: { scale: 1 }, hover: { scale: 1.1 } };

// *** IMPORTANT — IDs must match EXACTLY with Testimonial.jsx ***
const servicesData = [
  {
    id: "SAP-Innovation",
    title: "SAP Innovation",
    description:
      "Driving intelligent transformation through SAP-powered innovation.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
  },
  {
    id: "Mobile-and-Web-Development",
    title: "Mobile and Web Development",
    description:
      "High-performance mobile and web applications built for scalability.",
    icon: <CloudIcon />,
    image: "/assets/mobile dev.jpg",
  },
  {
    id: "Training-and-Recruitment",
    title: "Training and Recruitment",
    description:
      "Upskilling teams with IT and business training for better performance.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
  },
  {
    id: "Custom-Software-Development",
    title: "Custom Software Development",
    description:
      "Tailored software solutions engineered to streamline operations.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
  },
  {
    id: "Cloud-Engineering",
    title: "Cloud Engineering",
    description:
      "Secure, scalable cloud infrastructures with automation systems.",
    icon: <InfrastructureIcon />,
    image: "/assets/cloud.jpg",
  },
  {
    id: "IT-Support-&-DevOps",
    title: "IT Support & DevOps",
    description:
      "CI/CD pipelines and stable infrastructure with 24/7 support.",
    icon: <SupportIcon />,
    image: "/assets/Ai.jpg",
  },
];

// Service Card Component
const ServiceCard = ({ id, title, description, icon, image, index }) => {
  const router = useRouter();

  const handleClick = () => {
    // Save the id inside sessionStorage
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

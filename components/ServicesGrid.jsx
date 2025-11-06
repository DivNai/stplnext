"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Emoji icons (replace with lucide or react-icons if you prefer)
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;

// Service Card Component
const ServiceCard = ({ title, description, icon, image, link }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href={link}>
      <motion.div
        className="relative bg-[#f3f6fb] p-8 h-full flex flex-col justify-between overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Background Image */}
          {image && (
            <motion.img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: hovered ? 0.7 : 0 }}
              transition={{ duration: 0.25 }}
            />
          )}

          {/* Top-left Triangle */}
          <div
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          ></div>

          {/* Bottom-right Triangle */}
          <div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600"
            style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          ></div>
        </motion.div>

        {/* Icon */}
        <div className="relative z-20 mb-4">{icon}</div>

        {/* Text */}
        <div className="relative z-20 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base text-black group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

// Data for each service
const servicesData = [
  {
    title: "SAP SOLUTIONS",
    description: "Integrated software for optimizing business operations efficiently.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "SAP SERVICES",
    description: "Expert implementation, customization and support for SAP systems.",
    icon: <CloudIcon />,
    image: "/assets/service2.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "TRAININGS",
    description: "Customized programs to upskill teams in modern technologies and practices.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "Talent acquisition tailored to IT and business needs.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
    link: "/Testimonials/Testimonial",
  },
];

// Services Grid Section
const ServicesGrid = () => (
  <section className="w-full bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;

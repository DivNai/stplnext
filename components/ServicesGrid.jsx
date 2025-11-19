"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Simple icons
const TechIcon = () => <span className="text-3xl">🖥️</span>;
const CloudIcon = () => <span className="text-3xl">☁️</span>;
const SoftwareIcon = () => <span className="text-3xl">⚙️</span>;
const ProcessIcon = () => <span className="text-3xl">💼</span>;

// Service Card Component
const ServiceCard = ({ title, description, icon, image, link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href={link}>
      <motion.div
        className="relative bg-[#f3f6fb] p-8 h-full flex flex-col justify-between overflow-hidden cursor-pointer group 
        hover:shadow-xl transition-all duration-100 ease-out"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setTimeout(() => setIsActive(false), 120)}
      >
        {/* Smooth Hover/Tap Overlay */}
        <div
          className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-100 ease-out 
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          {/* Background Image */}
          {image && (
            <img
              src={image}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ease-out 
              ${isActive ? "opacity-70" : "opacity-0 group-hover:opacity-70"}`}
            />
          )}

          {/* Top-left Triangle */}
          <div
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          {/* Bottom-right Triangle */}
          <div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600"
            style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          />
        </div>

        {/* Icon */}
        <div className="relative z-20 mb-4">{icon}</div>

        {/* Text Content */}
        <div
          className={`relative z-20 transition-colors duration-100 ease-out 
          ${isActive ? "text-white" : "text-black group-hover:text-white"}`}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-base">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

// Services Data
const servicesData = [
  {
    title: "SAP SOLUTIONS",
    description:
      "Integrated software for optimizing business operations efficiently.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "SAP SERVICES",
    description:
      "Expert implementation, customization and support for SAP systems.",
    icon: <CloudIcon />,
    image: "/assets/service2.jpg",
    link: "/Testimonials/Testimonial",
  },
  {
    title: "TRAININGS",
    description:
      "Customized programs to upskill teams in modern technologies and practices.",
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

// Services Grid
const ServicesGrid = () => (
  <section className="w-full bg-white border-b border-gray-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;

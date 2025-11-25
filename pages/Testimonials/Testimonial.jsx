"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ====================== SERVICES DATA ======================
const services = [
  {
    title: "SAP Services",
    text: "StepLoops Technology Pvt. Ltd. offers end-to-end SAP services that streamline and scale your enterprise operations. We begin with an in-depth consultation to assess your current systems and design a tailored SAP strategy. Our team manages the full implementation with minimal disruption and continues to provide ongoing maintenance, updates, and optimization to keep your environment secure and efficient. With experienced SAP professionals, we help you overcome complex challenges, enhance performance, and maximize the value of your SAP investment.",
    image: "/assets/meetingroom2.jpg",
  },
  {
    title: "SAP Solutions",
    text: "Our SAP Solutions are thoughtfully designed to simplify your business processes, boost operational efficiency, and support long-term strategic growth. Every organization has its own set of challenges and objectives, which is why we provide fully customized SAP services tailored to your unique requirements. Our certified SAP consultants bring extensive industry expertise and work closely with your team to implement solutions that align with your goals.",
    image: "/assets/meetingroom3.jpg",
  },
  {
    title: "Mobile Development",
    text: "Our Mobile Development services focus on delivering high-quality, custom mobile applications that cater to the diverse needs of your audience. We use the latest technologies and frameworks to develop functional, engaging, and user-friendly apps.",
    image: "/assets/mobile dev.jpg",
  },
  {
    title: "Web Development",
    text: "We build websites that convert visitors into customers. Our expertise combines design with powerful functionality — creating fast, responsive, and intuitive web experiences.",
    image: "/assets/web dev.jpg",
  },
  {
    title: "Training and Recruitment",
    text: "Our Training and Recruitment services empower your organization with the right skills and talent. We offer industry-focused training programs and ensure strategic recruitment aligned with your needs.",
    image: "/assets/training1.jpg",
  },
  {
    title: "Custom Software Development",
    text: "Our Custom Software Development services build tailored solutions that integrate seamlessly with your existing systems, ensuring high performance and long-term scalability.",
    image: "/assets/custon soft_dev.jpg",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* TOP BANNER */}
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/meetingroom2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/80 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide"
          >
            SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Empowering innovation through technology and design
          </motion.p>
        </div>
      </section>

      {/* SERVICES SECTIONS */}
      <section className="py-16 sm:py-20 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 space-y-20">

          {services.map((service, index) => (
            <motion.div
              id={service.title.split(" ").join("-")}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`scroll-mt-28 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                  {expanded[index]
                    ? service.text
                    : service.text.split(" ").slice(0, 40).join(" ") + "..."}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toggleExpand(index)}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  {expanded[index] ? "Show Less" : "Learn More"}
                </motion.button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
                  <Image
                    src="/assets/world-map-light.svg"
                    alt="Background Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}

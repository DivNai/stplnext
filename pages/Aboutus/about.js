"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ---------------------------- Animation Variants --------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ----------------------------- Image Container ----------------------------- */
const ImageContainer = () => (
  <motion.div
    className="relative w-full h-[600px] lg:h-[700px] bg-[#f3f6fb] overflow-hidden rounded-3xl"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Background Map Dots */}
    <div
      className="absolute inset-0 bg-center bg-no-repeat opacity-30"
      style={{
        backgroundImage: "url(/assets/global-map-dots.svg)",
        backgroundSize: "cover",
      }}
    />

    {/* Top Right Image */}
    <div className="absolute top-0 right-0 w-[80%] h-[55%] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/assets/navbar3.jpg"
        alt="Team member discussing work"
        fill
        className="object-cover"
        priority
        unoptimized
      />
    </div>

    {/* Bottom Left Image */}
    <div className="absolute bottom-0 left-0 w-[80%] h-[55%] rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src="/assets/navbar4.jpg"
        alt="Team collaboration at desk"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  </motion.div>
);

/* ----------------------------- Content Section ----------------------------- */
const ContentContainer = () => (
  <motion.div
    className="space-y-8 bg-[#f3f6fb]"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="space-y-4">
      <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
        WHO WE BRING
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Exclusive Technology to Provide IT Solutions & Services
      </h1>
      <p className="text-lg text-gray-600 max-w-lg">
        We have over 20+ years of experience in all stages of software design,
        development, maintenance, and support.
      </p>
    </motion.div>

    {/* Services List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
      {[
        "IT Professional Services",
        "Application Development",
        "Managed IT Services",
        "Maintenance & Support",
      ].map((service, i) => (
        <motion.p key={i} variants={itemVariants} className="flex items-center">
          <span className="text-indigo-500 mr-2">✓</span> {service}
        </motion.p>
      ))}
    </div>

    <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-lg pt-4">
      Our teams harness the power of data, artificial intelligence, and
      automation to achieve your business goals efficiently.
    </motion.p>

    {/* CTA Button */}
    <motion.button
      variants={itemVariants}
      className="flex items-center justify-center px-8 py-3 text-white font-medium rounded-lg 
        bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 
        transition-all duration-300 shadow-lg shadow-indigo-500/50"
    >
      MORE ABOUT US <ChevronRight className="ml-2 w-5 h-5" />
    </motion.button>
  </motion.div>
);

/* ------------------------------ Hero Component ----------------------------- */
const HeroComponent = () => (
  <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f3f6fb]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
      <div className="lg:col-span-6">
        <ContentContainer />
      </div>
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <ImageContainer />
      </div>
    </div>
  </section>
);

/* ------------------------------- About Page -------------------------------- */
export default function About() {
  return (
    <div className="text-black min-h-screen flex flex-col w-full bg-[#f3f6fb]">
      <Navbar />

      <main className="flex flex-col flex-grow items-center">
        {/* ===== BANNER SECTION ===== */}
        <section className="relative w-full h-[350px] md:h-[450px] flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/building2.jpg"
              alt="Office Banner"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Banner Text */}
          <div className="relative z-10 text-white px-4">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold"
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* ===== ABOUT US CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-left px-8 py-12"
        >
          <h2 className="text-3xl font-bold mb-4 font-serif">About Us</h2>
          <p className="mb-3">
            We are committed to delivering tailored IT solutions that empower
            businesses in the digital era. With a team of seasoned technology
            experts, we partner with companies to solve unique challenges.
          </p>
          <p className="mb-3">
            Our expertise spans strategic consulting, system integration,
            software development, and cloud transformation across multiple
            industries.
          </p>
          <p className="mb-3">
            Our mission is to help businesses embrace technology to streamline
            operations and achieve sustainable growth.
          </p>
          <p className="mb-3">
            We follow a customer-centric approach, working closely to ensure
            every solution is future-proof and value-driven.
          </p>
        </motion.div>

        {/* ===== FOUNDERS SECTION ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-16 mb-16 px-8 max-w-5xl"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              name: "Mr. Joginder Prasad Gupta",
              role: "Co-founder",
              img: "/assets/founder1.jpg",
            },
            {
              name: "Mrs. Anjali Gupta",
              role: "Co-founder",
              img: "/assets/founder2.jpg",
            },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-48 h-48 relative overflow-hidden rounded-md shadow-md">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.name}</h3>
              <p className="text-gray-700">{f.role}</p>
            </div>
          ))}
        </motion.div>

        {/* ===== HERO SECTION ===== */}
        <HeroComponent />
      </main>

      <Footer />
    </div>
  );
}

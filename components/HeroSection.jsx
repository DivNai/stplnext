"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ▶️ IMAGE BLOCK — Visible ONLY on Desktop (lg+)
const ImageContainer = () => (
  <motion.div
    className="relative hidden lg:block w-full h-[500px] bg-[#f3f6fb] overflow-hidden rounded-3xl"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="absolute inset-0 z-0 bg-[#f3f6fb]" />

    {/* Top Image */}
    <div className="absolute top-0 right-0 w-[70%] h-[52%] rounded-xl overflow-hidden shadow-lg">
      <Image
        src="/assets/navbar3.jpg"
        alt="Team member discussing work"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Bottom Image */}
    <div className="absolute bottom-0 left-0 w-[70%] h-[52%] rounded-xl overflow-hidden shadow-xl">
      <Image
        src="/assets/navbar4.jpg"
        alt="Team collaboration at desk"
        fill
        className="object-cover"
      />
    </div>
  </motion.div>
);

// ▶️ CONTENT BLOCK
const ContentContainer = () => (
  <motion.div
    className="space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="space-y-4">
      <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
        Who We Bring
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Exclusive Technology to Provide IT Solutions & Services
      </h1>

      <p className="text-lg text-gray-600 max-w-lg">
        Crafting, launching, and supporting software that drives your business forward.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
      {[
        "IT Professional Services",
        "Application Development",
        "Managed IT Services",
        "Maintenance & Support",
      ].map((text, i) => (
        <motion.p
          key={i}
          variants={itemVariants}
          className="flex items-center text-base"
        >
          <span className="text-indigo-500 mr-2">✓</span> {text}
        </motion.p>
      ))}
    </div>

    <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-lg pt-4">
      Our teams know how to harness the power of data, AI, modernising core,
      optimising and automating operations to achieve your business goals.
    </motion.p>

    <motion.div variants={itemVariants} className="pt-4">
      {/* <button
        className="flex items-center px-8 py-3 text-white font-medium rounded-lg 
        bg-gradient-to-r from-indigo-500 to-fuchsia-500 
        hover:from-indigo-600 hover:to-fuchsia-600 
        transition-all duration-300 shadow-lg shadow-indigo-500/50"
      >
        MORE ABOUT US <ChevronRight className="ml-2 w-5 h-5" />
      </button> */}
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-[#f3f6fb] px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ContentContainer />

        {/* Right Images (Desktop Only) */}
        <ImageContainer />
      </div>
    </section>
  );
}

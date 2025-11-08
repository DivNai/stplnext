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

const ImageContainer = () => (
  <motion.div
    className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Decorative background */}
    <div className="absolute inset-0 z-0 bg-[#f3f6fb]" />

    {/* Top image */}
    <div className="absolute top-0 right-0 w-[85%] md:w-[70%] lg:w-[75%] h-[55%] z-20 rounded-3xl overflow-hidden shadow-xl">
      <Image
        src="/assets/navbar3.jpg"
        alt="Team member discussing work"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 80vw, 30vw"
        unoptimized
      />
    </div>

    {/* Bottom image */}
    <div className="absolute bottom-0 left-0 translate-x-[5%] translate-y-[5%] w-[85%] md:w-[70%] lg:w-[75%] h-[55%] z-30 rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src="/assets/navbar4.jpg"
        alt="Team collaboration at desk"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 80vw, 35vw"
        unoptimized
      />
    </div>
  </motion.div>
);

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
        We have over 20+ years of experience in all stages of software design,
        development, maintenance, and support.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> IT Professional Services
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Application Development
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Managed IT Services
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Maintenance & Support
      </motion.p>
    </div>

    <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-lg pt-4">
      Our teams know how to harness the power of data, artificial intelligence,
      modernising core, optimising and automating operations to achieve your
      business goals.
    </motion.p>

    <motion.div variants={itemVariants} className="pt-4">
      <button
        className="flex items-center px-8 py-3 text-white font-medium rounded-lg 
        bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 
        transition-all duration-300 shadow-lg shadow-indigo-500/50"
      >
        MORE ABOUT US <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-[#f3f6fb] px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ContentContainer />
        {/* Right Image */}
        <ImageContainer />
      </div>
    </section>
  );
}

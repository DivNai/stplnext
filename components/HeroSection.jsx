"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* ---------------------------------------------------
   ▶️ ANIMATION VARIANTS
--------------------------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ---------------------------------------------------
   ▶️ IMAGE BLOCK — Desktop Only
--------------------------------------------------- */
const ImageContainer = () => (
  <motion.div
    className="relative hidden lg:block w-full h-[520px] bg-[#eef1f7] overflow-hidden rounded-3xl shadow-xl"
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
  >
    <div className="absolute inset-0 bg-[#eef1f7]" />

    {/* Top Image */}
    <div className="absolute top-0 right-0 w-[68%] h-[52%] rounded-xl overflow-hidden shadow-md">
      <Image
        src="/assets/navbar3.jpg"
        alt="Technology team brainstorming"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Bottom Image */}
    <div className="absolute bottom-0 left-0 w-[68%] h-[52%] rounded-xl overflow-hidden shadow-lg">
      <Image
        src="/assets/navbar4.jpg"
        alt="Developers collaborating on project"
        fill
        className="object-cover"
      />
    </div>
  </motion.div>
);

/* ---------------------------------------------------
   ▶️ CONTENT BLOCK (Updated with Left-Aligned Pointers)
--------------------------------------------------- */
const ContentContainer = () => (
  <motion.div
    className="space-y-10"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Heading */}
    <motion.div variants={itemVariants} className="space-y-4">
      <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
        IT Solutions We Deliver:
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        We design, develop, deploy, and support modern technology solutions
        that accelerate your digital transformation.
      </p>
    </motion.div>

    {/* Service Groups */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">

      {/* GROUP 1 — IT Professional Services */}
      <div className="space-y-4">
        <motion.h3
          variants={itemVariants}
          className="font-bold text-xl text-indigo-600"
        >
          IT Consulting & Solutions
        </motion.h3>

        {[
          "Software Development: Build custom software, web apps, and mobile apps.",
          "Cloud Computing: Migrate businesses to the cloud and manage scalable cloud infrastructure.",
          "Cybersecurity: Protect systems with security tools, threat detection, and incident response.",
          "IT Consulting: Guide businesses on tech strategies, upgrades, data management, and adopting new technologies like AI or blockchain.",
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className="flex items-start gap-2 text-base text-left"
          >
            <span className="text-indigo-600 text-lg leading-5">✓</span>
            <span className="leading-5">{text}</span>
          </motion.p>
        ))}
      </div>

      {/* GROUP 2 — Support & Management */}
      <div className="space-y-4">
        <motion.h3
          variants={itemVariants}
          className="font-bold text-xl text-indigo-600"
        >
          Support & Management Services
        </motion.h3>

        {[
          "Managed IT Support: Provide remote/on-site support, monitoring, maintenance, and help desk services.",
          "Data Management & Analytics: Manage databases, backups, dashboards, and business intelligence tools.",
          "DevOps: Automate CI/CD pipelines and streamline development and IT operations for faster delivery.",
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className="flex items-start gap-2 text-base text-left"
          >
            <span className="text-indigo-600 text-lg leading-5">✓</span>
            <span className="leading-5">{text}</span>
          </motion.p>
        ))}
      </div>
    </div>

    {/* Footer Text */}
    <motion.p
      variants={itemVariants}
      className="text-gray-500 max-w-xl text-sm pt-2"
    >
      We combine industry expertise with modern technology stacks to deliver
      secure, scalable, and impactful IT solutions.
    </motion.p>
  </motion.div>
);

/* ---------------------------------------------------
   ▶️ MAIN COMPONENT
--------------------------------------------------- */
export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-[#f3f6fb] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ContentContainer />
        <ImageContainer />
      </div>
    </section>
  );
}

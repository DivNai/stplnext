// Enhanced About Page with richer design, animations, and founders with name-only display

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurBenefits from "../../components/OurBenefits";
import { ChevronRight } from "lucide-react";

/* -------------------------------- Animations -------------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------------------- Decorative Divider ---------------------------- */
const SectionDivider = () => (
  <div className="w-full flex justify-center my-12">
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full"></div>
  </div>
);

/* --------------------------- Animated Highlight Box -------------------------- */
const HighlightBox = ({ title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl shadow-md bg-white border border-indigo-100 hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-indigo-700 text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

/* ---------------------------- Image Container ---------------------------- */
const ImageContainer = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative w-full h-[380px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-[#f3f6fb]"
  >
    <div
      className="absolute inset-0 opacity-20"
      style={{ backgroundImage: "url(/assets/global-map-dots.svg)", backgroundSize: "cover" }}
    />

    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-4 right-4 w-[68%] h-[48%] rounded-xl overflow-hidden shadow-md"
    >
      <Image src="/assets/navbar3.jpg" alt="Team" fill className="object-cover" />
    </motion.div>

    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      className="absolute bottom-4 left-4 w-[68%] h-[48%] rounded-xl overflow-hidden shadow-md"
    >
      <Image src="/assets/navbar4.jpg" alt="Collaboration" fill className="object-cover" />
    </motion.div>
  </motion.div>
);

/* --------------------------- Content Container --------------------------- */
const ContentContainer = () => (
  <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
    <motion.div variants={fadeInUp} className="space-y-3">
      <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
        Who We Bring
      </span>
      <h1 className="text-4xl font-bold text-gray-900 leading-tight">
        Delivering Premium
        <span className="text-indigo-600"> IT Solutions & Services</span>
      </h1>
      <p className="text-gray-600 leading-relaxed max-w-lg">
        Over 20+ years of industry leadership delivering modern IT solutions,
        software development, and digital transformation.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
      {["IT Professional Services", "Application Development", "Managed IT Services", "Maintenance & Support"].map((service, i) => (
        <motion.p key={i} variants={fadeInUp} className="flex items-center gap-2">
          <span className="text-indigo-600 text-lg">✓</span> {service}
        </motion.p>
      ))}
    </div>

    <motion.button
      variants={fadeInUp}
      className="flex items-center justify-center px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 shadow-lg"
    >
      More About Us <ChevronRight className="ml-2 w-5 h-5" />
    </motion.button>
  </motion.div>
);

/* --------------------------- Hero Section --------------------------- */
const HeroSection = () => (
  <section className="relative min-h-[60vh] flex items-center px-6 py-16 bg-[#f3f6fb]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center w-full">
      <div className="lg:col-span-6">
        <ContentContainer />
      </div>
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <ImageContainer />
      </div>
    </div>
  </section>
);

/* ----------------------------- About Page ----------------------------- */
export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#f3f6fb] text-black flex flex-col">
      <Navbar />

      <motion.main initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col flex-grow items-center">
        {/* Banner */}
        <section className="relative w-full h-[260px] md:h-[360px] flex items-center justify-center text-center overflow-hidden">
          <Image src="/assets/building2.jpg" alt="Office Banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-xl"
          >
            About Us
          </motion.h1>
        </section>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl px-8 py-12 space-y-6 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-indigo-700 tracking-tight">Who We Are</h2>

          <p>
            We deliver future-ready IT solutions that empower businesses to grow, innovate,
            and scale in the digital-first era.
          </p>
          <p>
            With expertise in cloud, AI, automation, cybersecurity, and system integration,
            we craft technology that aligns with your long-term goals.
          </p>
          <p>
            Our mission is to transform businesses with strategic IT consulting and modern,
            sustainable solutions.
          </p>
        </motion.div>

        <SectionDivider />

        {/* Highlight Boxes */}
        <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl">
          <HighlightBox title="20+ Years Experience" desc="Building reliable digital ecosystems for global businesses." />
          <HighlightBox title="Trusted Technology Partner" desc="Delivering scalable and customer-focused solutions." />
          <HighlightBox title="Future-Driven Vision" desc="We combine innovation with business strategy to create impact." />
        </div>

        <SectionDivider />

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-10 justify-center mb-16 px-8 max-w-4xl text-center"
          viewport={{ once: true }}
        >
          {["Mr. Joginder Prasad Gupta - Co-founder", "Mrs. Anjali Gupta - Co-founder"].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl bg-white shadow-md border border-indigo-100 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <HeroSection />
        <OurBenefits />
      </motion.main>

      <Footer />
    </div>
  );
}

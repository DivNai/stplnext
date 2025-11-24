"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import HeroSection from "../components/HeroSection";
import WorkingProcess from "../components/WorkingProcess";
import ServicesGrid from "../components/ServicesGrid";
import Review from "../components/Review";
import Digital from "../components/Digital";
import Footer from "../components/Footer";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r 
        from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* All Components Load Instantly */}
      <main className="flex flex-col space-y-0">

        <section id="home">
          <Home />
        </section>

        <section id="services">
          <ServicesGrid />
        </section>

        <section id="about">
          <HeroSection />
        </section>

        <section id="digital">
          <Digital />
        </section>

        <section id="reviews">
          <Review />
        </section>

        <section id="process">
          <WorkingProcess />
        </section>

      </main>

      <Footer />
      <BackToTopButton scrollYProgress={scrollYProgress} />

    </div>
  );
}

// -----------------------------------------------------------
// Modern Floating Back To Top Button
// -----------------------------------------------------------
function BackToTopButton({ scrollYProgress }) {
  const opacity = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <motion.button
      style={{ opacity }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-4
      backdrop-blur-xl bg-white/10 border border-white/20
      rounded-full shadow-lg hover:shadow-purple-500/40
      hover:scale-110 active:scale-95 transition-all
      flex items-center justify-center"
      aria-label="Back to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7M12 5v14" />
      </svg>
    </motion.button>
  );
}

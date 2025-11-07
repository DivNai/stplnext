"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router"; // ✅ Import router for navigation

const images = ["/assets/building2.jpg", "/assets/homepage1.jpg"];

const getVariants = (dir, type) =>
  dir === 0
    ? type === "enter"
      ? {
          initial: { opacity: 0, x: -120, scale: 1.1 },
          animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 2, ease: [0.4, 0.5, 0.2, 1] },
          },
          exit: {},
        }
      : {
          initial: {},
          animate: {},
          exit: {
            opacity: 0,
            x: 120,
            scale: 0.98,
            transition: { duration: 2, ease: [0.4, 0.5, 0.2, 1] },
          },
        }
    : type === "enter"
    ? {
        initial: { opacity: 0, y: 120, scale: 1.1 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 2, ease: [0.4, 0.5, 0.2, 1] },
        },
        exit: {},
      }
    : {
        initial: {},
        animate: {},
        exit: {
          opacity: 0,
          y: -120,
          scale: 0.98,
          transition: { duration: 2, ease: [0.4, 0.5, 0.2, 1] },
        },
      };

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState(0);
  const router = useRouter(); // ✅ initialize router

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((old) => (old === 0 ? 1 : 0));
      setDirection((old) => (old === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Animate old image out */}
      <AnimatePresence>
        {prev !== null && prev !== current && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${images[prev]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial="animate"
            animate="animate"
            exit="exit"
            variants={getVariants(direction, "exit")}
            onAnimationComplete={() => setPrev(null)}
          />
        )}
      </AnimatePresence>

      {/* Animate new image in */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        variants={getVariants(direction, "enter")}
        initial="initial"
        animate="animate"
        exit="exit"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          BRIGHT MINDS,
          BOLDER
          <br />
          INNOVATIONS.
        </h1>
        <p className="text-white text-md md:text-lg mb-8 drop-shadow">
          We empower businesses across industries with modern IT, tech services,
          and digital experiences to achieve their goals.
        </p>

        {/* ✅ Button now routes to /aboutus/about */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/Aboutus/about")}
          className="inline-block bg-gradient-to-r from-indigo-500 to-blue-400 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          WHO WE ARE &rarr;
        </motion.button>
      </div>
    </div>
  );
};

export default Home;

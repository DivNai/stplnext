"use client";
import { motion } from "framer-motion";
import React from "react";

const MotionH2 = ({ children, variants, className, viewport }) => {
  return (
    <motion.h2
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.h2>
  );
};

export default MotionH2;

"use client";
import { motion } from "framer-motion";
import React from "react";

const MotionH1 = ({ children, variants, className, viewport }) => {
  return (
    <motion.h1
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default MotionH1;

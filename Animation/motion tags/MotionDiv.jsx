"use client";
import { motion } from "framer-motion";
import React from "react";

const MotionDiv = ({ children, variants, className, viewport }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;

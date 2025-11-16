"use client";

import { motion } from "framer-motion";
import React from "react";
const MotionP = ({ children, variants, className, viewport }) => {
  return (
    <motion.p
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default MotionP;

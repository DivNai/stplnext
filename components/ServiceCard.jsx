import React from 'react';
import { motion } from 'framer-motion';

const triangleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 0.95, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServiceCard = ({ icon, title, description, image }) => (
  <motion.div
    className="relative h-full overflow-hidden bg-[#f3f6fb] min-h-[320px] flex flex-col justify-between group rounded-none"
    initial="rest"
    whileHover="hover"
    animate="rest"
    transition={{ type: 'tween', duration: 0.3 }}
    style={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
    variants={{
      rest: { boxShadow: '0 0 0 rgba(0,0,0,0)' },
      hover: { boxShadow: '0 0 20px rgba(0,0,0,0.3)', transition: { duration: 0.3 } },
    }}
  >
    {/* Icon */}
    <div className="z-20 p-6 relative">
      <span>{icon}</span>
    </div>

    {/* Main content */}
    <div className="z-20 p-6 pt-0 flex flex-col justify-end h-full relative">
      <h3 className="text-2xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-lg text-neutral-600 transition-colors duration-300 group-hover:text-white">
          {description}
        </p>
      )}
    </div>

    {/* Hover image and animated gradients */}
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 opacity-0"
      variants={{
        rest: { opacity: 0, transition: { duration: 0.5 } },
        hover: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* The image (fades in) */}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Animated top-left colored triangle */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={triangleVariants}
      />

      {/* Animated bottom-right colored triangle */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600"
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={triangleVariants}
      />
    </motion.div>
  </motion.div>
);

export default ServiceCard;

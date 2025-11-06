import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    image: "/assets/meetingroom3.jpg",
    title: "Customized IT Solutions",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
        <path stroke="currentColor" strokeWidth="2" d="M4 18h16" />
      </svg>
    ),
    hiddenText: "Deliver tailored IT consulting services that enhance operational efficiency and accelerate growth, aligned perfectly with unique business needs.",
  },
  {
    image: "/assets/meetingroom1.jpg",
    title: "Comprehensive SAP Services",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path stroke="currentColor" strokeWidth="2" d="M9 3v4m6-4v4" />
      </svg>
    ),
    hiddenText: "Provide end-to-end SAP solutions, from consultation to optimization, ensuring seamless, efficient, and scalable SAP system operations.",
  },
  {
    image: "/assets/meetingroom2.jpg",
    title: "Sustainable Success",
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path stroke="currentColor" strokeWidth="2" d="M12 3v2m0 14v2" />
      </svg>
    ),
    hiddenText: "Focus on measurable outcomes through scalable, precise project execution that drives impactful and lasting business growth.",
  },
];

const triangleVariants = {
  initial: { opacity: 0, scale: 0.7 },
  animate: {
    opacity: 0.85,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

function WideServiceCard({ image, title, icon, hiddenText }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 md:h-96 object-cover"
        animate={{ opacity: hovered ? 0.7 : 1 }}
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="pointer-events-none absolute inset-0 z-10"
          >
            {/* Gradient triangles */}
            <motion.div
              className="absolute top-0 left-0 w-2/5 h-2/5"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                background:
                  "linear-gradient(135deg, rgba(30,64,175,0.85), rgba(67,56,202,0.87), rgba(91,33,182,0.90))",
                zIndex: 20,
              }}
              variants={triangleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
            <motion.div
              className="absolute bottom-0 right-0 w-2/5 h-2/5"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                background:
                  "linear-gradient(-45deg, rgba(91,33,182,0.90), rgba(67,56,202,0.87), rgba(30,64,175,0.85))",
                zIndex: 20,
              }}
              variants={triangleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
            {/* Hidden text */}
            <motion.div
              className="absolute bottom-8 left-0 w-full px-6 flex justify-center z-30 flex-col items-center text-black text-center text-sm max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }}
              exit={{ opacity: 0, y: 40, transition: { duration: 0.2 } }}
            >
              {hiddenText}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading and Icon */}
      <motion.div
        className="flex flex-col items-center absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full px-4 z-20"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center rounded-full bg-[#6246ea] w-16 h-16 mb-4 shadow-lg">
          {icon}
        </div>
        <motion.h3
          animate={{ color: hovered ? "#000" : "#fff" }}
          className="text-xl font-semibold text-center drop-shadow"
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

export default function WideServiceCards() {
  return (
    <div className="w-full bg-[#f3f6fb] flex flex-col items-center py-12 px-2">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Let's Bring Your <br />
        Vision to Life!
      </h2>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
        {cards.map((card) => (
          <WideServiceCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

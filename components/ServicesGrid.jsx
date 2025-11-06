import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechIcon = () => (
  <svg width="48" height="48">
    <text x="24" y="28" fontSize="20" fill="#8E6CF6" textAnchor="middle">🖥️</text>
  </svg>
);
const CloudIcon = () => (
  <svg width="48" height="48">
    <text x="24" y="28" fontSize="20" fill="#8E6CF6" textAnchor="middle">☁️</text>
  </svg>
);
const SoftwareIcon = () => (
  <svg width="48" height="48">
    <text x="24" y="28" fontSize="20" fill="#8E6CF6" textAnchor="middle">⚙️</text>
  </svg>
);
const ProcessIcon = () => (
  <svg width="48" height="48">
    <text x="24" y="28" fontSize="20" fill="#8E6CF6" textAnchor="middle">💼</text>
  </svg>
);

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

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  isHighlighted,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative p-8 bg-[#f3f6fb] rounded-none shadow-md flex flex-col justify-between min-h-[220px] overflow-hidden transition-all hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {isHighlighted && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.2 } },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
              className="pointer-events-none absolute inset-0 z-10"
              style={{ background: "rgba(38,48,84,0.32)" }}
            >
              {/* Image overlay */}
              <motion.img
                src={image}
                alt={title}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              {/* Top-left darker gradient triangle */}
              <motion.div
                className="absolute top-0 left-0 w-2/5 h-2/5"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  background: "linear-gradient(135deg, rgba(30,64,175,0.85), rgba(67,56,202,0.87), rgba(91,33,182,0.90))",
                  zIndex: 2,
                }}
                variants={triangleVariants}
              />
              {/* Bottom-right darker gradient triangle */}
              <motion.div
                className="absolute bottom-0 right-0 w-2/5 h-2/5"
                style={{
                  clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                  background: "linear-gradient(-45deg, rgba(91,33,182,0.90), rgba(67,56,202,0.87), rgba(30,64,175,0.85))",
                  zIndex: 2,
                }}
                variants={triangleVariants}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {/* Icon */}
      <div
        className="relative z-20 mb-4"
        style={{ position: "relative", top: "-16px", left: "-16px" }}
      >
        {icon}
      </div>
      {/* Title and description */}
      <div className={`relative z-20 transition-colors duration-600 text-black
        ${hovered && isHighlighted ? "text-black" : "text-white"}`}>
        <h3 className={`text-xl font-semibold mb-2 text-black`}>
          {title}
        </h3>
        <p className={`text-base text-black`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const servicesData = [
  {
    title: "SAP SOLUTIONS",
    description: "Integrated software for optimizing business operations efficiently.",
    icon: <TechIcon />,
    image: "/assets/service1.jpg",
    isHighlighted: true,
  },
  {
    title: "SAP SERVICES",
    description: "Expert implementation ,customization and support for SAP system.",
    icon: <CloudIcon />,
    image: "/assets/service2.jpg",
    isHighlighted: true,
  },
  {
    title: "TRAININGS",
    description: "Customized programs to upskill teams in modern technologies.",
    icon: <SoftwareIcon />,
    image: "/assets/service3.jpg",
    isHighlighted: true,
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "Talent acquisition tailored to it and business needs.",
    icon: <ProcessIcon />,
    image: "/assets/service4.jpg",
    isHighlighted: true,
  },
];

const ServicesGrid = () => (
  <section className="w-full bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      <ServiceCard {...servicesData[0]} />
      <ServiceCard {...servicesData[1]} />
      <ServiceCard {...servicesData[2]} />
      <ServiceCard {...servicesData[3]} />
    </div>
  </section>
);

export default ServicesGrid;

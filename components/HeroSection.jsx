// components/HeroSection.js
'use client'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Example icon library

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for children
      delayChildren: 0.2,   // Delay the start of children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ImageContainer = () => (
  // Updated: Removed dark mode class from the main container here to use the light color
  <motion.div 
    className="relative w-full h-full min-h-[450px] lg:min-h-0 bg-[#f3f6fb] overflow-hidden" 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Dotted Global Map Background */}
    <div className="absolute inset-0 z-0 opacity-5">
      <div className="absolute inset-0 bg-[#f3f6fb] bg-center bg-no-repeat opacity-50"
           style={{ 
             backgroundImage: 'url(/path/to/global-map-dots.svg)', // Replace with your dotted map SVG
             backgroundSize: '120%', 
             backgroundPosition: 'center',
             borderRadius: '2rem'
           }}
      />
    </div>

    {/* Top Right Image - Overlaps the bottom image */}
    <div className="absolute top-0 right-0 w-[80%] md:w-[65%] lg:w-[75%] h-[55%] z-20 
                    rounded-[2rem] overflow-hidden shadow-xl">
      <Image
        src="/assets/img6.webp" // Replace with your image
        alt="Team member discussing work"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
    </div>

    {/* Bottom Left Image - Slightly recessed */}
    <div className="absolute bottom-0 left-0 translate-x-[5%] translate-y-[5%] w-[80%] md:w-[65%] lg:w-[75%] h-[55%] z-30 
                    rounded-[2rem] overflow-hidden shadow-2xl">
      <Image
        src="/assets/img4.jpg" // Replace with your image
        alt="Team collaboration at desk"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  </motion.div>
);

const ContentContainer = () => (
  <motion.div 
    className="lg:col-span-6 space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Header and Subtitle */}
    <motion.div variants={itemVariants} className="space-y-4">
      <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
        WHO WE BRING
      </span>
      {/* Updated: Adjusted text color for light background */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
        Exclusive Technology to Provide IT Solutions & Services
      </h1>
       {/* Updated: Adjusted text color for light background */}
      <p className="text-lg text-gray-600 max-w-lg">
        We have over 20+ years of experience in all stages of software design, development, maintenance, and support.
      </p>
    </motion.div>

    {/* Services List */}
    {/* Updated: Adjusted text color for light background */}
    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> IT Professional services
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Application Development services
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Managed IT services
      </motion.p>
      <motion.p variants={itemVariants} className="flex items-center text-base">
        <span className="text-indigo-500 mr-2">✓</span> Maintenance And Support
      </motion.p>
    </div>

    {/* Mission Statement */}
    {/* Updated: Adjusted text color for light background */}
    <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-lg pt-4">
      Our teams know how to harness the power of data, artificial intelligence, modernising core, optimising and automating operations to achieve your business goals.
    </motion.p>

    {/* CTA and Signature */}
    <div className="flex items-center space-x-8 pt-4">
      <motion.button 
        variants={itemVariants} 
        className="flex items-center justify-center px-8 py-3 text-white font-medium rounded-lg 
                   bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 
                   transition-all duration-300 shadow-lg shadow-indigo-500/50"
        aria-label="More about us"
      >
        MORE ABOUT US <ChevronRight className="ml-2 w-5 h-5" />
      </motion.button>
      
      
    </div>
  </motion.div>
);

export default function HeroSection() {
  return (
    // Updated: Changed background color to the specified hex value
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f3f6fb]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column (Content) */}
        <ContentContainer />

        {/* Right Column (Visuals) */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <ImageContainer />
        </div>
      </div>
    </section>
  );
}
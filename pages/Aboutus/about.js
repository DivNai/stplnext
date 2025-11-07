// File: CombinedComponent.js (Rename the file accordingly)
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react"; // Make sure to install lucide-react
import Navbar from "../../components/Navbar"; // Assuming this path is correct
import Footer from "../../components/Footer"; // Assuming this path is correct

/* -------------------------------------------------------------------------- */
/* HERO COMPONENT HELPERS (Defined outside the main export)                   */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ImageContainer = () => (
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
        src="/assets/img6.webp"
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
        src="/assets/img4.jpg"
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
    className="lg:col-span-6 space-y-8 bg-[#f3f6fb]" 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Header and Subtitle */}
    <motion.div variants={itemVariants} className="space-y-4">
      <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
        WHO WE BRING
      </span>
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
        Exclusive Technology to Provide IT Solutions & Services
      </h1>
      <p className="text-lg text-gray-600 max-w-lg">
        We have over 20+ years of experience in all stages of software design, development, maintenance, and support.
      </p>
    </motion.div>

    {/* Services List */}
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

const HeroComponent = () => (
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

/* -------------------------------------------------------------------------- */
/* MAIN EXPORT: ABOUT PAGE (Includes Navbar and Footer)                       */
/* -------------------------------------------------------------------------- */

export default function About() {
  return (
    // Removed `items-center` from the outermost div to prevent horizontal centering of the Footer
    <div className="text-black min-h-screen flex flex-col w-full bd-[#f3f6fb] "> 
        
      {/* GLOBAL NAVBAR (Always full width) */}
      <Navbar />

      {/* MAIN CONTENT WRAPPER: Now uses mx-auto to center content */}
      <main className="flex flex-col w-full flex-grow items-center">
        
        {/* 1. ORIGINAL ABOUT CONTENT (Banner, Text, Founders) - Renders First */}
        {/* Content now sits within a w-full wrapper for background, and text content uses max-w-5xl/mx-auto internally */}
        <div className="w-full bg-[#f3f6fb]  flex flex-col items-center">
          {/* Banner Section */}
          <div className="relative w-full h-[300px]">
            <Image
              src="/assets/building2.jpg"
              alt="Office Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* About Us Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl w-full text-left px-8 py-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-serif">About Us</h2>
            <p className="mb-3">
              We are committed to driving innovation and delivering tailored IT
              solutions that empower businesses to succeed in the digital age. With
              a team of seasoned experts in technology and consulting, we partner
              with companies of all sizes to provide solutions that meet their
              unique needs.
            </p>
            <p className="mb-3">
              From strategic consulting and system integration to software
              development and cloud services, our expertise spans a wide range of
              industries, allowing us to craft scalable and cost-effective solutions
              that align with your business goals.
            </p>
            <p className="mb-3">
              Our mission is to help businesses embrace the potential of technology
              to streamline their operations, improve productivity, and achieve
              sustainable growth.
            </p>
            <p className="mb-3">
              We pride ourselves on our customer-centric approach, working closely
              with you to understand your challenges and opportunities.
            </p>
            <p>
              This collaborative method ensures that we deliver customized solutions
              that not only solve your current issues but also future-proof your
              organization against upcoming technological trends.
            </p>
          </motion.div>

          {/* Founders Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            // Added max-w-5xl w-full mx-auto to Founders section for better centering logic
            className="flex flex-wrap justify-center gap-16 mb-16 px-8 max-w-5xl w-full mx-auto"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Founder 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative overflow-hidden rounded-md shadow-md">
                <Image
                  src="/assets/founder1.jpg"
                  alt="Mr. Joginder Prasad Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">
                Mr. Joginder Prasad Gupta
              </h3>
              <p className="text-gray-700">co founder</p>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative overflow-hidden rounded-md shadow-md">
                <Image
                  src="/assets/founder2.jpg"
                  alt="Mrs. Anjali Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">Mrs. Anjali Gupta</h3>
              <p className="text-gray-700">co founder</p>
            </div>
          </motion.div>
        </div>
        
        {/* 2. HERO SECTION - Renders Last (Already designed to be full width/centered) */}
        <HeroComponent />
      </main>

      {/* GLOBAL FOOTER (Now assumes full width because the parent div does not restrict it) */}
      <Footer />
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

// Replace with your image URLs or import statements
const topImage = "/assets/brain.jpg"; // top right image
const bottomImage = "/assets/img4.jpeg"; // lower left image

const HeroSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-20 bg-[#f3f6fb] grid grid-cols-1    md:grid-cols-2 gap-12 items-center">
    {/* Left Section */}
    <div>
      <span className="uppercase text-blue-600 font-semibold tracking-wide mb-5 block">
        {/* Who We Bring */}
      </span>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Let's Bring Your Vision to Life!
      </h1>
      <p className="text-lg text-gray-600 mb-5">
        Launch Your IT Project with Expert Consulting - Custom Solutions, SAP Services, and Digital Transformation Support.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-lg text-gray-600 gap-2 mb-6">
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-gray-600 text-xl mr-2">✓</span>
            IT Professional services
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 text-xl mr-2">✓</span>
            Managed IT services
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-gray-600 text-xl mr-2">✓</span>
            Application Development
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 text-xl mr-2">✓</span>
            Launch Your IT Project with Expert Consulting.
          </li>
        </ul>
      </div>
      <p className="text-base text-gray-600 mb-7">
        Ready to start your next big project? Our team of IT consultants and development experts are here to help you turn your ideas into reality. Whether you need custom software solutions, digital transformation strategies, or expert SAP consulting,
        we're just one step away from making it happen. Book a project today and let's discuss how we can meet your specific needs. Fill out the form below, and one of our specialists will get in touch with you to start planning your success.
      </p>
      
      <div className="flex items-center gap-2 mt-3">
        {/* <span className="font-dancing-script text-2xl text-purple-700">Stephen</span> */}
        {/* <span className="text-base text-gray-500">Co, Founder</span> */}
      </div>
    </div>
    {/* Right Section: Overlapping Images */}
    <div className="relative min-h-[360px] flex items-center justify-center">
      {/* Top Image - animated fade-in, grayscale, rounded corners */}
      <motion.img
        src={topImage}
        alt="Team working"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-0 right-0 w-64 h-64 object-cover rounded-[2.5rem] border-4 border-white shadow-xl grayscale"
      />
      {/* Bottom Image - animated, normal color, rounded corners, higher z-index */}
      <motion.img
        src={bottomImage}
        alt="Meeting"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 w-72 h-64 object-cover rounded-[2.5rem] border-4 border-white shadow-xl"
      />
    </div>
  </section>
);

export default HeroSection;

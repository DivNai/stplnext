import Marquee from "../utils/Marquee";
import React from "react";
import {
  FaMobileAlt,
  FaCode,
  FaBook,
  FaUsers,
  FaTools,
  FaCloud,
} from "react-icons/fa";
import MotionH1 from "../Animation/motion tags/MotionH1";
import MotionP from "../Animation/motion tags/MotionP";

const OurBenefits = () => {
  const marqueeRow1 = [
    { id: 1, icon: <FaTools />, heading: "Expert SAP Services", content: "Optimize your SAP systems with our certified consultants." },
    { id: 2, icon: <FaCloud />, heading: "Tailored SAP Solutions", content: "Custom SAP solutions to fit your unique business processes." },
    { id: 3, icon: <FaMobileAlt />, heading: "Mobile Development", content: "User-friendly mobile apps for iOS and Android platforms." },
    { id: 4, icon: <FaCode />, heading: "Comprehensive Web Development", content: "Robust and responsive websites tailored to your business goals." },
    { id: 5, icon: <FaBook />, heading: "Training and Recruitment", content: "Professional IT training and recruitment services to build a skilled workforce." },
  ];

  const marqueeRow2 = [
    { id: 6, icon: <FaUsers />, heading: "Custom Software Development", content: "Software solutions built from scratch to meet your specific requirements." },
    { id: 7, icon: <FaCloud />, heading: "Digital Transformation", content: "Implementing the latest technologies to improve processes and efficiency." },
    { id: 8, icon: <FaUsers />, heading: "Dedicated Team Support", content: "Full-time commitment and continuous collaboration for your projects." },
    { id: 9, icon: <FaTools />, heading: "Secure and Fast Communication", content: "Real-time, secure communication to keep you updated on progress." },
    { id: 10, icon: <FaCode />, heading: "End-to-End Project Management", content: "From consultation to delivery, ongoing support for success." },
  ];

  const textAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
    viewport: { once: true, amount: "all" },
  };

  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-12 justify-center mt-10 mb-32 items-center px-4 md:px-14">

      {/* LEFT (Desktop) / TOP (Mobile) — TEXT */}
      <div className="w-full md:w-1/2 text-black space-y-5 order-2 md:order-1">

        <MotionH1
          variants={textAnimation}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold leading-snug text-indigo-600"
        >
          Empowering Your Business with Expert Guidance
        </MotionH1>

        <MotionP
          variants={textAnimation}
          viewport={{ once: true }}
          className="text-sm md:text-lg text-gray-700 leading-relaxed"
        >
          Partnering with us gives you access to expert SAP services, mobile
          and web development, custom software solutions, and dedicated
          recruitment support—strategically tailored to accelerate your
          business growth.
        </MotionP>

        <MotionP
          variants={textAnimation}
          viewport={{ once: true }}
          className="text-sm md:text-lg text-gray-700 leading-relaxed"
        >
          With reliable communication and end-to-end project management, we
          ensure your digital transformation journey is seamless, efficient,
          and impactful.
        </MotionP>

      </div>

      {/* RIGHT (Desktop) / BOTTOM (Mobile) — MARQUEE */}
      <div
        className="
          w-full md:w-1/2
          flex flex-col lg:flex-row 
          gap-6
          md:h-[520px]
          h-[380px]
          overflow-hidden
          order-1 md:order-2
        "
      >
        <Marquee
          benefits={marqueeRow1}
          mul="-1"
          duration="55"
          className="text-xs md:text-sm"
        />

        <Marquee
          benefits={marqueeRow2}
          mul="-1"
          duration="45"
          className="text-xs md:text-sm"
        />
      </div>

    </div>
  );
};

export default OurBenefits;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ====================== SERVICE DATA ======================
const services = [
  {
    title: "SAP Services",
    text: "At StepLoops Technology Pvt Ltd, our SAP Services are designed to support every aspect of your enterprise resource planning needs, ensuring that your SAP environment operates seamlessly and effectively. Our services encompass a wide range of solutions, starting from initial consultation where we assess your current systems and identify areas for improvement. We then move on to system design, where we develop a comprehensive strategy that addresses your unique business requirements. Our team manages the entire implementation process, ensuring a smooth transition to SAP systems while minimizing disruptions to your daily operations. Post-implementation, we provide ongoing maintenance and optimization services to ensure that your SAP environment remains up-to-date and continues to deliver optimal performance. Our experts are well-versed in tackling complex challenges and are dedicated to enhancing the scalability and efficiency of your SAP systems. From initial consultation and system design to ongoing maintenance and optimization, we provide end-to-end support for your SAP environment. Trust us to be your dedicated partner in maximizing the value of your SAP investment and ensuring your systems operate at peak efficiency.",
    image: "/assets/meetingroom2.jpg",
  },
  {
    title: "SAP Solutions",
    text: "Our SAP Solutions are meticulously crafted to streamline your business processes, enhance operational efficiency, and drive strategic growth. We understand that each organization has unique needs, which is why we offer a range of SAP services tailored to fit your specific requirements. Our certified SAP consultants bring a wealth of experience to the table, working collaboratively with your team to integrate SAP solutions that not only meet but exceed your expectations. This comprehensive approach allows us to deliver systems that provide greater visibility into your operations, improve control over processes, and offer the agility needed to adapt to ever-changing market conditions.",
    image: "/assets/meetingroom3.jpg",
  },
  {
    title: "Mobile Development",
    text: "Our Mobile Development services are focused on delivering high-quality, custom mobile applications that cater to the diverse needs of your audience. We understand the importance of having a strong mobile presence in today’s digital landscape, which is why we employ the latest technologies and frameworks to develop apps that are not only functional but also engaging and user-friendly. Our development process includes rigorous testing to ensure that the final product is reliable, performs well under various conditions, and provides a seamless user experience.",
    image: "/assets/robotic-hand.jpg",
  },
  {
    title: "Web Development",
    text: "Our Web Development services are dedicated to creating highly functional, aesthetically pleasing, and responsive websites that enhance your online presence and drive user engagement. We offer a comprehensive range of web development solutions, including front-end development that focuses on intuitive and visually appealing interfaces, and back-end development that ensures robust performance and seamless integration with your existing systems.",
    image: "/assets/server-room.jpg",
  },
  {
    title: "Training and Recruitment",
    text: "Our Training and Recruitment services are designed to empower your organization with the skills and talent necessary for achieving success in a competitive market. We offer training programs that cover essential IT and business topics, ensuring your team is equipped with the latest skills. Our recruitment process ensures you get candidates who align with your project needs and company culture.",
    image: "/assets/marketing.jpg",
  },
  {
    title: "Custom Software Development",
    text: "Our Custom Software Development services are tailored to create bespoke solutions that address your organization’s specific needs and challenges. We specialize in designing and developing software applications that integrate seamlessly with your existing systems, providing a high level of functionality and performance.",
    image: "/assets/consulting.jpg",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ====================== TOP BANNER ====================== */}
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/meetingroom2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/80 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide"
          >
            SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Empowering innovation through technology and design
          </motion.p>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section className="py-16 sm:py-20 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                  {expanded[index]
                    ? service.text
                    : service.text.split(" ").slice(0, 40).join(" ") + "..."}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toggleExpand(index)}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  {expanded[index] ? "Show Less" : "Learn More"}
                </motion.button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
                  <Image
                    src="/assets/world-map-light.svg"
                    alt="Background Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

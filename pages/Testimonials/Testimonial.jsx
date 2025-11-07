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
    text: "At StepLoops Technology Pvt Ltd, our SAP Services are designed to support every aspect of your enterprise resource planning needs, ensuring that your SAP environment operates seamlessly and effectively. Our services encompass a wide range of solutions, starting from initial consultation where we assess your current systems and identify areas for improvement. We then move on to system design, where we develop a comprehensive strategy that addresses your unique business requirements. Our team manages the entire implementation process, ensuring a smooth transition to SAP systems while minimizing disruptions to your daily operations. Post-implementation, we provide ongoing maintenance and optimization services to ensure that your SAP environment remains up-to-date and continues to deliver optimal performance. Our experts are well-versed in tackling complex challenges and are dedicated to enhancing the scalability and efficiency of your SAP systems. From initial consultation and system design to ongoing maintenance and optimization, we provide end-to-end support for your SAP environment. Our experts leverage their deep industry knowledge to address complex challenges and deliver solutions that enhance performance and scalability. Trust us to be your dedicated partner in maximizing the value of your SAP investment and ensuring your systems operate at peak efficiency.",
    image: "/assets/meetingroom2.jpg",
  },
  {
    title: "SAP Solutions",
    text: "Our SAP Solutions are meticulously crafted to streamline your business processes, enhance operational efficiency, and drive strategic growth. We understand that each organization has unique needs, which is why we offer a range of SAP services tailored to fit your specific requirements. Our certified SAP consultants bring a wealth of experience to the table, working collaboratively with your team to integrate SAP solutions that not only meet but exceed your expectations. This comprehensive approach allows us to deliver systems that provide greater visibility into your operations, improve control over processes, and offer the agility needed to adapt to ever-changing market conditions. We offer comprehensive SAP services, including implementation, customization, and support, tailored to meet the specific needs of your organization. Our team of certified SAP consultants works closely with you to ensure a seamless integration of SAP systems, enabling you to harness the full potential of your data and drive strategic decision-making. With our SAP Solutions, you can achieve greater visibility, control, and agility in your business operations.",
    image: "/assets/meetingroom3.jpg",
  },
  {
    title: "Mobile Development",
    text: "Our Mobile Development services are focused on delivering high-quality, custom mobile applications that cater to the diverse needs of your audience. We understand the importance of having a strong mobile presence in today’s digital landscape, which is why we employ the latest technologies and frameworks to develop apps that are not only functional but also engaging and user-friendly. Our development process includes rigorous testing to ensure that the final product is reliable, performs well under various conditions, and provides a seamless user experience. By choosing our Mobile Development services, you can be confident that your app will stand out in the crowded market, driving user engagement and supporting your business objectives. We specialize in developing custom mobile solutions for both iOS and Android platforms, using the latest technologies and frameworks to deliver high-performance apps. Whether you need a native, hybrid, or cross-platform application, our team ensures a seamless user experience and robust functionality. We work closely with you to understand your vision and build mobile solutions that drive business growth and meet your strategic objectives.",
    image: "/assets/robotic-hand.jpg",
  },
  {
    title: "Web Development",
    text: "Our Web Development services are dedicated to creating highly functional, aesthetically pleasing, and responsive websites that enhance your online presence and drive user engagement. We offer a comprehensive range of web development solutions, including front-end development that focuses on creating intuitive and visually appealing interfaces, and back-end development that ensures robust performance and seamless integration with your existing systems. Our team also specializes in developing content management systems (CMS) that allow you to easily manage and update your website content, as well as e-commerce platforms designed to provide a secure and user-friendly shopping experience. From the initial design phase to the final launch, we work closely with you to align our development efforts with your business goals and deliver a website that not only meets but exceeds your expectations. We offer a full suite of web development solutions, including front-end and back-end development, content management systems, and e-commerce platforms. Our team employs the latest technologies and best practices to ensure your website performs optimally across all devices and browsers. From concept to launch, we provide end-to-end web development services that align with your business goals and deliver a superior user experience.",
    image: "/assets/server-room.jpg",
  },
  {
    title: "Training and Recruitment",
    text: "Our Training and Recruitment services are designed to empower your organization with the skills and talent necessary for achieving success in a competitive market. We offer a wide range of training programs that cover essential IT and business topics, ensuring that your team is well-equipped with the latest knowledge and skills required to excel. We employ a rigorous recruitment process to ensure that we match you with candidates who possess the skills, experience, and attitude necessary to drive your projects forward. By partnering with us for your training and recruitment needs, you benefit from a holistic approach that enhances your team's capabilities and supports your organization's growth and innovation. Our training programs cover a range of IT and business topics, designed to enhance your employees' capabilities and keep them updated with the latest industry trends. Additionally, our recruitment services focus on finding the right talent to meet your specific needs, ensuring you have the expertise required to drive your projects forward. Partner with us to build a strong, knowledgeable team that supports your company's growth and innovation.",
    image: "/assets/marketing.jpg",
  },
  {
    title: "Custom Software Development",
    text: "Our Custom Software Development services are tailored to create bespoke solutions that address your organization’s specific needs and challenges. We specialize in designing and developing software applications that integrate seamlessly with your existing systems, providing a high level of functionality and performance. Our development process begins with a detailed consultation to understand your business requirements, followed by the creation of a detailed project plan that outlines the scope, timeline, and deliverables. Our team of experienced developers uses the latest technologies and best practices to build scalable, secure, and efficient software solutions that are tailored to your unique needs. Throughout the development cycle, we ensure regular communication and feedback to align our efforts with your expectations and make necessary adjustments. We design and develop bespoke software applications that integrate seamlessly with your existing systems and workflows. Our approach involves a thorough understanding of your needs, followed by the creation of scalable, secure, and efficient software solutions.",
    image: "/assets/consulting.jpg",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ====================== TOP BANNER ====================== */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/meetingroom2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/80 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-wide"
          >
            SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 mt-4 text-lg"
          >
            Empowering innovation through technology and design
          </motion.p>
        </div>
      </section>

      {/* ====================== SERVICE SECTIONS ====================== */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 lg:px-16 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="object-cover w-full h-[400px]"
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

              {/* Text Section */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {expanded[index]
                    ? service.text
                    : service.text.split(" ").slice(0, 40).join(" ") + "..."}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toggleExpand(index)}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  {expanded[index] ? "Show Less" : "Learn More"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

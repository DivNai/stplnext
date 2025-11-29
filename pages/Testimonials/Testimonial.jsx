"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ====================== SERVICES DATA ======================
const services = [
  {
    id: "SAP-Services",
    title: "SAP Services",
    text: "StepLoops Technology Pvt. Ltd. simplifies and expands your business operations with end-to-end SAP services. To evaluate your existing systems and create a customized SAP strategy, we start with a thorough consultation. To keep your environment safe and effective, our team continues to provide regular maintenance, updates, and optimization while managing the entire implementation with the least amount of disturbance. We assist you in overcoming difficult obstacles, improving performance, and optimizing the return on your SAP investment with the assistance of skilled SAP specialists.",
    image: "/assets/sapsolu.jpg",
  },
  {
    id: "SAP-Solutions",
    title: "SAP Solutions",
    text: "We carefully design our SAP Solutions to make your business processes easier, improve operational efficiency, and help your business grow strategically over the long term. Every business has its own problems and goals. That's why we offer fully customized SAP services that meet your specific needs.Our certified SAP consultants bring extensive industry expertise and work closely with your team to implement solutions that not only align with your goals but also elevate your business performance.  Through this collaborative and comprehensive approach, we deliver systems that enhance visibility across your operations, strengthen process control, and enable the agility needed to stay competitive in a rapidly evolving market.",
    image: "/assets/sapjpg.jpg",
  },
  {
    id: "Mobile-Development",
    title: "Mobile Development",
    text: "Delivering top-notch, unique mobile applications that meet the various demands of your audience is the main goal of our mobile development services. We use the newest frameworks and technologies to create apps that are not only useful but also entertaining and easy to use because we recognize how important it is to have a strong mobile presence in today's digital world. To make sure the finished product is dependable, functions well under a variety of circumstances, and offers a flawless user experience, our development process involves extensive testing.",
    image: "/assets/mobile dev.jpg",
  },
  {
    id: "Web-Development",
    title: "Web Development",
    text: "Build a powerful digital foundation with web solutions designed for impact and performance. Our web development services combine strategic design thinking with advanced technical execution to create websites that engage visitors and accelerate conversions. We develop responsive, mobile-first platforms that deliver flawless experiences across all devices and screen sizes, while maintaining blazing-fast performance and rock-solid security. From initial concept to launch and beyond, we focus on creating intuitive user journeys, implementing conversion-optimized layouts, and building scalable architectures that grow with your business. Partner with us to transform your website from a digital placeholder into a strategic asset that generates leads, builds credibility, and drives sustained business success.",
    image: "/assets/web dev.jpg",
  },
  {
    id: "Training-and-Recruitment",
    title: "Training and Recruitment",
    text: "Build exceptional teams through our integrated Training and Recruitment solutions. Our industry-aligned training programs equip your workforce with in-demand skills, fostering continuous learning and professional development that directly impacts business performance. On the recruitment front, we employ a strategic approach to talent acquisition, leveraging extensive networks and rigorous assessment processes to identify candidates who excel both technically and culturally. We understand that the right people and the right skills are fundamental to success, which is why we partner closely with you to understand your unique challenges and growth objectives. From upskilling existing teams to sourcing specialized talent, we deliver comprehensive workforce solutions that fuel organizational excellence and sustainable growth.",
    image: "/assets/training1.jpg",
  },
  {
    id: "Custom-Software-Development",
    title: "Custom Software Development",
    text: "We build bespoke software solutions engineered to solve your unique business challenges. Our expert team delivers high-performance applications that integrate seamlessly with your existing systems, driving efficiency and scalability.Our Approach:Starting with an in-depth consultation, we gain a comprehensive understanding of your requirements and objectives. We then develop a clear project roadmap outlining scope, timelines, and deliverables. Using cutting-edge technologies and industry best practices, our experienced developers create secure, scalable solutions tailored precisely to your needs.Continuous Collaboration:Throughout the development cycle, we maintain open communication and incorporate your feedback at every stage. This ensures our solutions not only meet your current requirements but are built to evolve with your business, delivering lasting value and competitive advantage.",
    image: "/assets/custon soft_dev.jpg",
  },
   {
    id: "Cloud-Technologies",
    title: "Cloud Technologies",
    text: "Transform your business with scalable, secure cloud solutions that drive efficiency and innovation. We deliver end-to-end cloud services—from strategy and migration to management and optimization—leveraging leading platforms like AWS, Azure, and Google Cloud.Our Approach:We start by assessing your current infrastructure and business goals, then design a tailored cloud strategy that aligns with your needs. Our expert team ensures seamless migration with minimal disruption, implementing robust security measures and optimizing performance at every stage.Scalable Solutions, Lasting Value:Whether you need public, private, or hybrid cloud environments, we build flexible infrastructures that integrate smoothly with your existing systems. Our solutions reduce operational costs, enhance collaboration, and provide the agility to scale on demand—empowering your organization to focus on growth while we manage the complexity.",
    image: "/assets/cloud.jpg",
  },
   {id: "AI-&-ML-Solutions",
    title: "AI & ML Solutions",
    text: "Harness the power of artificial intelligence to unlock new opportunities, automate complex processes, and gain actionable insights from your data. Our AI solutions transform how you work, enabling smarter decision-making and sustainable competitive advantage.Our Approach:We begin by identifying high-impact use cases aligned with your business objectives. Our AI specialists then design and deploy custom solutions using advanced machine learning, natural language processing, and computer vision technologies. From predictive analytics and intelligent automation to chatbots and recommendation engines, we build AI systems tailored to your specific challenges.Intelligent Innovation, Measurable ResultsOur solutions integrate seamlessly with your existing infrastructure, turning raw data into strategic assets. We ensure responsible AI implementation with robust security, ethical frameworks, and continuous model optimization.",
    image: "/assets/Ai.jpg",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  useEffect(() => {
  if (typeof window !== "undefined") {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }
}, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* TOP BANNER */}
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center  bg-black/50"
        style={{ backgroundImage: "url('/assets/service4.jpg')" }}
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

      {/* SERVICES SECTIONS */}
      <section className="py-16 sm:py-20 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 space-y-20">

          {services.map((service, index) => (
            <motion.div
              id={service.title.split(" ").join("-")}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`scroll-mt-28 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 ${
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

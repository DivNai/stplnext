"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Understanding Your Story",
    description:
      "We listen to the story and objectives of your brand, and conduct analysis to plan for successful partnering.",
    image: "/assets/step1.jpg", // replace with your image path
  },
  {
    id: "02",
    title: "Tailoring Software Solutions",
    description:
      "We identify your software needs and quickly develop enhancements to provide you with improvements in e-commerce and digital marketing.",
    image: "/assets/step2.jpg",
  },
  {
    id: "03",
    title: "Provide Ongoing Support",
    description:
      "Our team of experts provides ongoing technical and marketing support to help you maximize customer engagement and sales.",
    image: "/assets/step3.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const WorkingProcess = () => {
  return (
    <section className="relative w-full py-20 bg-[#f3f6fb] text-black overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-lines.svg')] bg-cover opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 text-sm uppercase tracking-wider text-center mb-3"
        >
          Working Process
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Get your IT solutions in{" "}
          <span className="text-[#7A6CF6]">3 easy steps</span>
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              className="flex flex-col items-center text-center max-w-xs relative"
            >
              {/* Step Image */}
              <div className="relative mb-5">
                <div className="rounded-2xl border-4 border-[#7A6CF6] overflow-hidden inline-block">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={220}
                    height={180}
                    className="object-cover rounded-2xl"
                  />
                </div>
                {/* Step number bubble */}
                <span className="absolute bottom-2 right-2 bg-[#7A6CF6] text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
                  {step.id}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-black/80 text-base">{step.description}</p>

              {/* Arrow (except last one) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden md:block absolute top-20 right-[-70px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="60"
                    height="60"
                    fill="none"
                  >
                    <path
                      d="M2 32C15 12 49 12 62 32"
                      stroke="#7A6CF6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M62 32L50 22M62 32L50 42"
                      stroke="#7A6CF6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;

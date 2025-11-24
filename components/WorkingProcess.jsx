"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Understanding Your Story",
    description:
      "We listen to your brand’s story and objectives, analyzing your goals to plan a successful partnership.",
    image: "/assets/img6.webp",
  },
  {
    id: "02",
    title: "Tailoring Software Solutions",
    description:
      "We identify your needs and rapidly develop tailored digital enhancements for better performance.",
    image: "/assets/navbar3.jpg",
  },
  {
    id: "03",
    title: "Providing Ongoing Support",
    description:
      "Our team provides continuous support and guidance to help you engage customers and grow efficiently.",
    image: "/assets/navbar2.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

export default function WorkingProcess() {
  return (
    <section className="relative w-full py-20 bg-[#f3f6fb] text-black overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-lines.svg')] bg-cover opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Get your IT solutions in{" "}
          <span className="text-[#7A6CF6]">3 easy steps</span>
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center max-w-xs relative"
            >
              {/* Step Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative mb-6"
              >
                <div className="rounded-full border-4 border-[#7A6CF6] overflow-hidden shadow-lg inline-block">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={220}
                    height={220}
                    className="object-cover rounded-full w-[220px] h-[220px]"
                  />
                </div>

                {/* Step Number Bubble */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute bottom-2 right-2 bg-[#7A6CF6] text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full shadow-md"
                >
                  {step.id}
                </motion.span>
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-black/80 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

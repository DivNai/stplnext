"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// ✅ Testimonial data
const testimonials = [
  {
    rating: 5,
    text: "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!",
    name: "Makhaia Antitni",
    role: "Fresh Design",
    avatar: "/assets/avatar1.jpg",
  },
  {
    rating: 5,
    text: "Outstanding experience! The team was professional, timely, and went above and beyond to deliver exactly what we needed.",
    name: "Evelyn Martinez",
    role: "TechBridge Co.",
    avatar: "/assets/avatar2.jpg",
  },
  {
    rating: 5,
    text: "Brilliant service and constant communication. They exceeded expectations on every project milestone.",
    name: "Liam Carter",
    role: "PixelWave Studios",
    avatar: "/assets/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* ====================== ABOUT US BANNER ====================== */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/meetingroom2.jpg')", // 👈 Banner image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/80 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-wide uppercase font-medium mb-3 text-gray-200"
          >
            
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            SERVICES
          </motion.h1>
        </div>
      </section>

      {/* ====================== TESTIMONIALS SECTION ====================== */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Images */}
          <div className="relative flex flex-col gap-6 lg:w-1/2">
            

            <div className="rounded-2xl overflow-hidden w-[280px] sm:w-[320px] h-[360px] ml-10">
              <Image
                src="/assets/client2.jpg"
                alt="Client 2"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Background Illustration */}
            <div className="absolute top-10 left-0 w-full h-full -z-10 opacity-10">
              <Image
                src="/assets/world-map-light.svg"
                alt="World Map"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
                What Clients Say
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-snug">
                Hear What Our Global Clients Say
              </h2>
            </motion.div>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              className="max-w-xl"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-700"
                  >
                    <div className="flex text-purple-600 mb-4">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-lg italic mb-8 leading-relaxed">
                      “{t.text}”
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

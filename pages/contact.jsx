"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Contact() {
  // 🌟 React states for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 📨 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { firstName, lastName, email, phone, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert("Server returned unexpected data.");
        setLoading(false);
        return;
      }

      if (res.ok && data.success) {
        alert("✅ Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("❌ Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[350px] md:h-[450px] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/building1.jpg"
            alt="Contact background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Text content */}
        <div className="relative z-10 text-white px-4">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-white/80 text-sm md:text-base mb-3 tracking-wide"
          >
            HOME / CONTACT US
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white text-black">
        {/* LEFT SIDE - Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="space-y-6"
        >
          <h5 className="text-[#7A6CF6] text-sm uppercase font-semibold tracking-widest">
            Our Contacts
          </h5>
          <h2 className="text-4xl font-extrabold text-[#0f172a] leading-snug">
            Get Our Contacts <br /> From Here
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email or fill out the contact form and
            we’ll get back to you.
          </p>

          <div className="space-y-6 mt-10">
            <div>
              <h6 className="font-semibold text-[#0f172a]">📍 Location</h6>
              <p className="text-gray-600">
                8814 Bayberry Ave, Jonesborough, TN 37659
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-[#0f172a]">🎧 Support</h6>
              <p className="text-gray-600">+4800 45 678 900</p>
            </div>
            <div>
              <h6 className="font-semibold text-[#0f172a]">✉️ Email us</h6>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-gray-500 mb-8 text-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A6CF6]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A6CF6]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A6CF6]"
              />
              <input
                type="email"
                placeholder="Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A6CF6]"
              />
            </div>

            <textarea
              placeholder="How Can We Assist You..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A6CF6]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#7A6CF6] to-[#4f38ea] text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition"
            >
              {loading ? "Sending..." : "SUBMIT REQUEST →"}
            </motion.button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

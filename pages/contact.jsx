"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Contact() {
  const [category, setCategory] = useState("general");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("category", category);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    if (category === "review") formData.append("product", product);

    if (category === "work") {
      formData.append("jobRole", jobRole);
      formData.append("heardFrom", heardFrom);
      if (cvFile) formData.append("cvFile", cvFile);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert("Unexpected server response.");
        return;
      }

      if (res.ok && data.success) {
        alert("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setProduct("");
        setJobRole("");
        setHeardFrom("");
        setCvFile(null);
        setMessage("");
      } else {
        alert("Failed: " + (data.error || "Unknown error"));
      }
    } catch {
      alert("Network or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* FULL-WIDTH HERO */}
      <section className="relative w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/building1.jpg"
            alt="Contact background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-white px-4">
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

      {/* FULL WIDTH CONTENT SECTION */}
      <section className="w-full py-20 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white text-black">

        {/* LEFT INFORMATION PANEL */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="space-y-6 w-full"
        >
          <h5 className="text-[#7A6CF6] text-sm uppercase font-semibold tracking-widest">
            Our Contacts
          </h5>

          <h2 className="text-4xl font-extrabold text-[#0f172a] leading-snug">
            Get Our Contacts <br /> From Here
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Contact us regarding general queries, product feedback or collaboration opportunities.
          </p>

          <div>
            <div className="mb-3 text-sm">
              <span className="text-black/80 block">Need help? Call us</span>
              <a href="tel:+919634701727" className="text-[#4f38ea] italic">
                +91 9634701727
              </a>
            </div>

            <div className="mb-3 text-sm">
              <span className="text-black/80 block">Visit us at</span>
              <address className="italic text-[#4f38ea]">
                326, Nagal Bulandawala,<br />
                Dehradun, Uttarakhand, India
              </address>
            </div>

            <span className="text-black/80 block mb-1">Email us at</span>
            <a href="mailto:info@steploops.com" className="text-[#4f38ea] text-sm block">
              info@steploops.com
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100 w-full"
        >
          {/* CATEGORY DROPDOWN */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Choose Query Type *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300"
            >
              <option value="general">General Enquiry</option>
              <option value="review">Product Review</option>
              <option value="work">Work With Us</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            {/* NAME INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full p-3 border rounded-md" />
              <input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full p-3 border rounded-md" />
            </div>

            {/* PHONE + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Mobile Number*" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border rounded-md" />
              <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border rounded-md" />
            </div>

            {/* PRODUCT REVIEW */}
            {category === "review" && (
              <select value={product} onChange={(e) => setProduct(e.target.value)} required className="w-full p-3 border rounded-md">
                <option value="">Select Product</option>
                <option value="CRM">CRM</option>
                <option value="VendorBook">VendorBook</option>
              </select>
            )}

            {/* WORK WITH US */}
            {category === "work" && (
              <>
                {/* CV UPLOAD */}
                <div>
                  <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setCvFile(e.target.files[0])} accept=".pdf,.doc,.docx" />

                  <button type="button" onClick={() => fileInputRef.current.click()} className="w-full p-3 bg-[#7A6CF6] text-white rounded-md font-semibold hover:bg-[#5f54d1]">
                    {cvFile ? "Change CV File" : "Upload CV"}
                  </button>

                  {cvFile && <p className="text-sm mt-2 text-gray-600">Selected: {cvFile.name}</p>}
                </div>

                <select value={jobRole} onChange={(e) => setJobRole(e.target.value)} required className="w-full p-3 border rounded-md">
                  <option value="">Select Job Role</option>
                  <option value="SAP">SAP</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>

                <select value={heardFrom} onChange={(e) => setHeardFrom(e.target.value)} required className="w-full p-3 border rounded-md">
                  <option value="">How did you hear about us?</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                </select>
              </>
            )}

            {/* MESSAGE */}
            <textarea placeholder="How can we assist you...?" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-3 border rounded-md"></textarea>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#7A6CF6] to-[#4f38ea] text-white font-semibold rounded-md"
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

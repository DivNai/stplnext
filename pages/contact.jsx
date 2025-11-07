"use client";

import React, { useEffect, useState } from "react";
import { CustomButton } from "../utils/CustomButton";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import Link from "next/link";
import Toast from "../utils/Toast";

const emailjs = dynamic(() => import("emailjs-com"), {
  ssr: false,
});

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("general");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full text-black flex flex-col lg:flex-row justify-between gap-8 md:px-[6rem] px-[2rem] mt-32 md:pb-48 pb-16">
      <div className="lg:w-1/3 font-semibold flex flex-col justify-start gap-12 items-start">
        <div>
          {/* <h4 className="text-xl mb-12">contact</h4> */}
          <h1 className="text-8xl font-medium">Where do we start?</h1>
        </div>
        <div className="md:block flex justify-between w-full">
          <div>
            <h4 className="text-xl mb-3">Phone</h4>
            <p>+91 9634701727</p>
            <p>info@steploops.com</p>
          </div>
          <div>
            <h4 className="text-xl mb-3">Follow Us</h4>
            <div className="flex gap-10 mt-7 ml-2">
              <Link
                href="https://www.linkedin.com/company/steploops-technologies-pvt-ltd/?viewAsMember=true"
                target="_blank"
              >
                <span>
                  <FaLinkedin className="scale-[2] " />
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/steploops_technologies/"
                target="_blank"
              >
                <span>
                  <FaInstagram className="scale-[2] " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-12 font-semibold items-start justify-start">
        <p className="text-lg">
          We had love to hear from you! Whether you have a question, need
          assistance, or want to explore how we can collaborate, feel free to
          reach out to us.
        </p>
        <p className="mt-3"> We are here to help you every step of the way.</p>
        <h2 className="text-7xl">Let us know why you’re getting in touch.</h2>
        <div>
          <div className="flex gap-5">
            <button
              onClick={() => handleButtonClick("general")}
              className={`${
                selectedOption === "general"
                  ? "bg-[#E35B28] text-white"
                  : "bg-black text-white"
              } rounded-3xl border-2 border-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-300`}
            >
              General Enquiry
            </button>

            <button
              onClick={() => handleButtonClick("product")}
              className={`${
                selectedOption === "product"
                  ? "bg-[#E35B28] text-white"
                  : "bg-black text-white"
              } rounded-3xl border-2 border-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-300`}
            >
              Product Review
            </button>

            <button
              onClick={() => handleButtonClick("work")}
              className={`${
                selectedOption === "work"
                  ? "bg-[#E35B28] text-white"
                  : "bg-black text-white"
              } rounded-3xl border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300`}
            >
              Work With Us
            </button>
          </div>
          <div className="md:w-[673px]">
            <ContactPage selectedOption={selectedOption} />
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactPage({ selectedOption }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
    product: "",
    cv: null,
    source: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.message) newErrors.message = "Message is required";

    // Product-specific validation
    if (selectedOption === "product" && !formData.product)
      newErrors.product = "Please select a product";

    // Work-specific validation
    if (selectedOption === "work") {
      // Check if CV file exists and has size > 0
      if (!formData.cv || formData.cv.size === 0) {
        newErrors.cv = "Please upload your CV";
      }
      // Validate file type (optional)
      else if (
        formData.cv &&
        ![
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(formData.cv.type)
      ) {
        newErrors.cv = "Please upload a PDF or Word document";
      }
      // Validate file size (optional - 5MB limit)
      else if (formData.cv && formData.cv.size > 5 * 1024 * 1024) {
        newErrors.cv = "File size must be less than 5MB";
      }

      if (!formData.source)
        newErrors.source = "Please select how you heard about us";
      if (!formData.role) newErrors.role = "Please select a job role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        // Create FormData object for file uploads
        const formDataToSend = new FormData();

        // Append all form fields
        Object.keys(formData).forEach((key) => {
          if (formData[key] !== null && formData[key] !== "") {
            formDataToSend.append(key, formData[key]);
          }
        });

        // Add the selected option type
        formDataToSend.append("inquiryType", selectedOption);

        const res = await fetch("/api", {
          method: "POST",
          // Remove Content-Type header - let browser set it for FormData
          body: formDataToSend, // Send FormData instead of JSON
        });

        const result = await res.json();
        console.log(result);

        // Show success message
        setToast({
          message: "Message sent successfully!",
          type: "success",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          phone: "",
          message: "",
          product: "",
          cv: null,
          source: "",
          role: "",
        });
      } catch (error) {
        console.log(error);
        setToast({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      }
    }
  };
  return (
    <div className="max-w-4xl mx-auto mt-4 p-6">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1  md:grid-cols-2 gap-6"
      >
        {
          <div>
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName}</p>
            )}
          </div>
        }

        {/* Last Name */}
        {
          <div>
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName}</p>
            )}
          </div>
        }

        {/* Email */}
        {
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
        }

        {/* Address */}
        {
          <div>
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <input
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.address && <p className="text-red-600">{errors.address}</p>}
          </div>
        }

        {/* Phone Number */}
        {
          <div>
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>
        }

        {/* Product Dropdown */}
        {selectedOption === "product" && (
          <div>
            <label htmlFor="product" className="block mb-2">
              Product
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            >
              <option className="bg-white" value="">
                Select a product...
              </option>
              <option className="bg-white" value="Product 1">
                Product 1
              </option>
              <option className="bg-white" value="Product 2">
                Product 2
              </option>
              <option className="bg-white" value="Product 3">
                Product 3
              </option>
            </select>
            {errors.product && <p className="text-red-600">{errors.product}</p>}
          </div>
        )}

        {/* CV Upload */}
        {selectedOption === "work" && (
          <div>
            <label htmlFor="cv" className="block mb-2">
              Upload Your CV
            </label>
            <input
              id="cv"
              name="cv"
              type="file"
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            />
            {errors.cv && <p className="text-red-600">{errors.cv}</p>}
          </div>
        )}

        {selectedOption === "work" && (
          <div>
            <label htmlFor="source" className="block mb-2">
              Job Role?
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            >
              <option className="bg-white" value="">
                Select an option...
              </option>
              <option className="bg-white" value="SAP">
                SAP
              </option>
              <option className="bg-white" value="Web Devlopment">
                Web Devlopment
              </option>
              <option className="bg-white" value="Mobile Devlopment">
                Mobile Devlopment
              </option>
            </select>
            {errors.source && <p className="text-red-600">{errors.source}</p>}
          </div>
        )}

        {/* How did you hear about us? */}

        {selectedOption === "work" && (
          <div>
            <label htmlFor="source" className="block mb-2">
              How did you hear about us?
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
            >
              <option className="bg-white" value="">
                Select an option...
              </option>
              <option className="bg-white" value="LinkedIn">
                LinkedIn
              </option>
              <option className="bg-white" value="Website">
                Website
              </option>
              <option className="bg-white" value="Referral">
                Referral
              </option>
            </select>
            {errors.source && <p className="text-red-600">{errors.source}</p>}
          </div>
        )}

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-transparent text-black border-b border-white focus:outline-none"
          />
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="md:col-span-2 w-[200px]">
          <CustomButton>Send A Message</CustomButton>
        </button>
      </form>
    </div>
  );
}

export default Contact;

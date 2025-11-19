"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative z-10 pt-20 pb-6 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top -140px", // More cropped
        backgroundRepeat: "no-repeat",
        height: "auto",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#17182d]/80 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* ===== GET IN TOUCH BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#4f38ea] to-[#98A3D1] px-7 py-2.5 
              rounded-xl font-semibold text-white shadow-lg mb-10"
            >
              GET IN TOUCH →
            </motion.button>
          </Link>
        </motion.div>

        {/* ===== MAIN FOOTER GRID (Height Reduced) ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-4">
          {/* Logo + Description */}
          <div className="md:w-1/4 w-full mb-8">
            <img
              alt="logo"
              src="/assets/logo-crop.png"
              className="h-10 mb-3"
            />

            <p className="text-white/80 text-sm leading-relaxed">
              We provide the best Information Technology solutions including
              hardware, software & networking.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:w-1/4 w-full mb-8">
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#">About Company</a></li>
              <li><a href="#">For Customers</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:w-1/4 w-full">
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>

            <div className="mb-3 text-sm">
              <span className="text-white/80">Need help? Call us</span>
              <a
                href="tel:+919634701727"
                className="text-[#34a6ff] font-semibold block"
              >
                +91 9634701727
              </a>
            </div>

            <a
              href="mailto:info@steploops.com"
              className="text-white/80 text-sm block mb-5"
            >
              info@steploops.com
            </a>

            {/* Social Icons */}
            <div className="flex space-x-5 text-xl">
              <a className="hover:text-[#E1306C]" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="hover:text-[#0077B5]" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="hover:text-[#5865F2]" target="_blank">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>

        {/* White Divider */}
        <div className="w-full h-px bg-white/40 mt-8 mb-3"></div>

        {/* Copyright LEFT aligned */}
        <p className="text-white/70 text-sm">© 2025 StepLoops</p>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-[#98A3D1] 
          flex justify-center items-center shadow-lg text-2xl text-white"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

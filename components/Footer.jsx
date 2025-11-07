"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative z-10 pt-28 pb-10 text-white"
      style={{
        backgroundImage: "url('/assets/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#17182d]/80 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading and Get In Touch Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Link href="/contact">
          {/* here to add contact.js component */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-[#4f38ea] to-[#98A3D1] px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition mb-16"
            >
              GET IN TOUCH &rarr;
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer Grid Section */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-8">
          {/* Logo and Description */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img alt="logo" src="/assets/logo2.png" style={{ height: "48px" }} />
            </div>
            <p className="text-base text-white/80 mb-6">
              We are the best world Information <br />
              Technology Company. Providing <br />
              the highest quality in hardware, software <br />
              &amp; network solutions.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0">
            <h3 className="font-bold mb-5 text-xl">Company</h3>
            <ul className="space-y-3 text-base text-white/80">
              <li><a href="#">About Company</a></li>
              <li><a href="#">For Customers</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">Careers & Reviews</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:w-1/4 w-full">
            <h3 className="font-bold mb-5 text-xl">Contact Us</h3>
            <div className="mb-4">
              <span className="text-white/80">Need help? <br />Call us </span>
              <a href="tel:+919634701727" className="text-[#34a6ff] font-semibold block">
                +91 9634701727
              </a>
            </div>
            <a href="mailto:info@steploops.com" className="text-white/80 text-base block mb-6">
              info@steploops.com
            </a>

            {/* Social Links */}
            <div className="flex space-x-6 text-2xl mt-4">
              <a
                href="https://www.instagram.com/steploops_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E1306C] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/steploops-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0077B5] transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-[#5865F2] transition"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-10 right-10 w-[72px] h-[72px] rounded-full bg-[#98A3D1] flex justify-center items-center shadow-lg text-3xl text-white"
          whileHover={{ scale: 1.08 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <span className="inline-block">↑</span>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

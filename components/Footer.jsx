import { motion } from "framer-motion";

// Replace '/assets/footer-bg.jpg' with your actual image path
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
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            // Use gradient background as visible in image
            className="inline-block bg-gradient-to-r from-[#4f38ea] to-[#98A3D1] px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition mb-16"
          >
            GET IN TOUCH &rarr;
          </motion.a>
        </motion.div>
        {/* Footer Grid Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-8">
          {/* Logo/Description */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img alt="neotech logo" src="/assets/logo2.png" style={{height: '48px'}} />
              
            </div>
            <p className="text-base text-white/80 mb-6">
              We are the best world Information <br />
              Technology Company. Providing <br />
              the highest quality in hardware, Software <br />
              &amp; Network solutions.
            </p>
            <div className="flex space-x-6 mt-1 text-xl">
              <a href=" " aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href=" " aria-label="X"><i className="fab fa-x-twitter" /></a>
              <a href=" " aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href=" " aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          {/* Company Links */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0">
            <h3 className="font-bold mb-5 text-xl">Company</h3>
            <ul className="space-y-3 text-base text-white/80">
              <li><a href=" ">About Company</a></li>
              <li><a href=" ">For Customers</a></li>
              <li><a href=" ">Blog & News</a></li>
              <li><a href=" ">Careers & Reviews</a></li>
              <li><a href=" ">Sitemap</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0">
            <h3 className="font-bold mb-5 text-xl">Quick Links</h3>
            <ul className="space-y-3 text-base text-white/80">
              <li><a href=" ">Services</a></li>
              <li><a href=" ">Pricing</a></li>
              <li><a href=" ">Team</a></li>
              <li><a href=" ">Contact</a></li>
              <li><a href=" ">Terms of use</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="md:w-1/4 w-full">
            <h3 className="font-bold mb-5 text-xl">Contact</h3>
            <address className="not-italic text-base text-white/80 mb-4">
              2972 Westheimer Rd. Santa <br />
              Ana, Illinois 85486
            </address>
            <div className="mb-4">
              <span className="text-white/80">Need help? Call us </span>
              <a href="tel:+0844560789" className="text-[#34a6ff] font-semibold">
                +(084) 456-0789
              </a>
            </div>
            <a href="mailto:support@example.com" className="text-white/80 text-base">
              support@example.com
            </a>
          </div>
        </div>
        
        {/* Floating back to top button (optional) */}
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

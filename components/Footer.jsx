"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // 👉 Redirect to Testimonial.jsx page
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <footer className="relative bg-[#0B0E1A] text-white pt-20 pb-6">

      {/* ===== TOP CTA BAR ===== */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%]">
        <div className="bg-gradient-to-r from-[#7A6CF6] to-[#4f38ea] px-6 py-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-lg font-semibold">Ready for a next project?</h3>

          <button
            onClick={handleContactClick}
            className="mt-3 md:mt-0 bg-[#1A1A1A] hover:bg-black text-white px-5 py-2 rounded-md transition shadow-md"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Logo + About */}
          <div>
            <img src="/assets/logo-crop.png" alt="logo" className="h-10 mb-4" />
            <p className="text-sm text-white/80 leading-relaxed">
              We provide top-tier IT solutions including hardware, software,
              networking, and digital services.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="font-bold mb-3 text-base">Company</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/Aboutus/about">About us</Link></li>
              <li><Link href="/Testimonials/Testimonial">Services</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Icons */}
          <div>
            <h3 className="font-bold mb-3 text-base">Follow us</h3>

            <div className="flex space-x-5 text-xl">
              <a
                href="https://instagram.com/steploops_technologies/"
                target="_blank"
                className="hover:text-[#E1306C] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://linkedin.com/company/steploops-technologies-pvt-ltd/"
                target="_blank"
                className="hover:text-[#0077B5] transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                className="hover:text-[#5865F2] transition"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="font-bold mb-3 text-base">Contact Us</h3>

            <div className="mb-3 text-sm">
              <span className="text-white/80 block">Need help? Call us</span>
              <a
                href="tel:+919634701727"
                className="text-[#34a6ff] font-semibold"
              >
                +91 9634701727
              </a>
            </div>

            <a
              href="mailto:info@steploops.com"
              className="text-white/80 text-sm block"
            >
              info@steploops.com
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mt-8 mb-3"></div>

        <p className="text-white/60 text-sm">Copyright © Steploops Technologies Pvt. Ltd. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

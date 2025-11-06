import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import HeroSection from "../components/HeroSection";
import Vision from "../components/Vision";
import ServicesGrid from "../components/ServicesGrid";
import Digital from "../components/Digital";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center">
        <Home />
        <ServicesGrid />
        <HeroSection />
        <Digital />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

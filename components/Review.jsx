import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Amazing theme! Neotech brings a professional and modern look, perfect for my tech website. The interface is easy to customize, with all essential features integrated for IT services. Fast and dedicated customer support. Definitely worth the investment!",
      author: "James K",
      position: "Tech Consultant",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 2,
      rating: 5,
      text: "Exceptional quality and design. The Neotech theme transformed our online presence completely. Highly recommended for any technology business looking to stand out.",
      author: "Sarah M",
      position: "CEO, TechCorp",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 3,
      rating: 5,
      text: "Outstanding support and documentation. Implementation was smooth and the results exceeded our expectations. A must-have for modern tech companies.",
      author: "Michael R",
      position: "Digital Director",
      avatar: "/api/placeholder/60/60",
    },
  ];

  const partners = [
    { logo: "SUCCESS" },
    { logo: "Build YourHome" },
    { logo: "YOUTHS DREAM" },
    { logo: "Frank G. Fabell" },
    { logo: "remote studio" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="bg-white pt-16 pb-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE STACK */}
          <div className="relative hidden lg:block">
            {/* Top Image */}
            <div className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl mb-6">
              <img
                src="/assets/review2.jpg"    // ← Replace with your own image
                alt="client-1"
                className="w-full h-[350px] object-cover"/>
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 right-10 w-64 rounded-3xl overflow-hidden shadow-2xl z-20">
              <img
                src="/assets/review1.jpg"    // ← Replace with your own image
                alt="client-2"
                className="w-full h-[250px] object-cover"/>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="inline-block mb-2">
              <span className="text-indigo-600 font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-0.5 bg-indigo-600"></span>
                WHAT CLIENTS SAY
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Hear What Our <span className="text-gray-900">Global</span>
              <br /> Clients Say
            </h2>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-indigo-600 text-indigo-600"
                />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {testimonials[currentSlide].text}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].author}
                className="w-12 h-12 rounded-full object-cover bg-gray-300"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  {testimonials[currentSlide].author}
                </h4>
                <p className="text-gray-500 text-xs">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-indigo-600 w-5"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PARTNERS ROW */}
        <div className="border-t border-gray-200 pt-6 pb-2 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="opacity-40 hover:opacity-70 transition-opacity text-xs"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

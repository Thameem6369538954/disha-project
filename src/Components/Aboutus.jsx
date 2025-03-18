import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertA from "../Certif/CertA.jpeg";
import CertB from "../Certif/CertB.jpeg";
import CertC from "../Certif/CertC.jpeg";
import MM from "../Images/MM.png";

const images = [
  { src: CertA, label: "ISO 9001: Certified" },
  { src: CertB, label: "Premium Quality Standards" },
  { src: CertC, label: "Trusted by Customers" },
];

const Aboutus = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="bg-gradient-to-b from-white  py-10 px-4 sm:px-8 lg:px-20">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="font-[Wonder] text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-5 text-[#9f0712] drop-shadow-md">
          Why We are Special
        </h1>
        <img src={MM} className="w-32 md:w-48 lg:w-56 mb-6" alt="MM" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-6  p-8 rounded-2xl shadow-xl"
        >
          <p className="font-[Poppins] text-lg sm:text-xl text-gray-800 leading-relaxed">
            <span className="font-[Heading] text-[#9f0712] text-2xl sm:text-3xl font-semibold">
              Cauvery
            </span>
            , the distinguished Ponni rice brand curated by GSNR Rice Industries Private Limited, epitomizes excellence in the agro-products realm. Established in 2008, we are a vanguard processor and purveyor of premium agricultural commodities in Tamil Nadu, anchored in a heritage spanning three generations.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#9f0712] to-[#bf2e2e] text-white rounded-full font-semibold shadow-md hover:from-[#4CAF50] hover:to-[#45a049] transition-all duration-300"
          >
            Know More...
          </motion.button>
        </motion.div>

        {/* Right Carousel */}
      {/* Right Carousel */}
<div className="w-full md:w-1/2 relative">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white flex items-center justify-center p-6">
    <AnimatePresence mode="wait">
      <motion.img
        key={index}
        src={images[index].src}
        alt="Certification"
        className="w-3/4 h-auto object-contain"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </AnimatePresence>

    {/* Overlay text */}
    <div className="absolute bottom-4 left-4 bg-opacity-80 px-4 py-2 rounded-xl text-[#9f0712] font-semibold text-sm shadow-md">
      {images[index].label}
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center mt-4 gap-3">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`h-3 w-3 rounded-full transition-all ${
          index === i
            ? "bg-[#9f0712] scale-125 shadow"
            : "bg-gray-300 hover:bg-[#9f0712]"
        }`}
      ></button>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Aboutus;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Weet from "../Images/Weet.jpg";
import Truck from "../Images/Truck.jpg";
// import { motion } from 'framer-motion';
const images = [Weet, Truck]; // Image Array

const Aboutus = () => {
  const [index, setIndex] = useState(0);

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 bg-gray-100"  id="target">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Left Box - Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto min-h-[400px] md:min-h-[600px]  p-6 rounded-lg shadow-lg bg-white"
        >
          <div className="relative space-y-4">
            <div className="relative inline-block">
              <h1 className="font-[Newheading] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#5FCF80]">
                About Us
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1 }}
                className="absolute left-0 -bottom-2 h-[3px] bg-[#5FCF80]"
              />
            </div>

            <p className="font-[Poppins] text-sm sm:text-base text-gray-700 leading-relaxed" >
              <span className="font-[Heading] text-lg sm:text-xl text-[#5FCF80]">
                Cauvery
              </span>
              ,the distinguished Ponni rice brand curated by GSNR Rice Industries Private Limited, epitomizes excellence in the agro-products realm. Established in 2008, we have firmly established ourselves as a vanguard processor and purveyor of premium agricultural commodities in the Tamil Nadu region. Anchored in a heritage spanning three generations, our unwavering commitment lies in furnishing pesticide-free, nutritionally superior sustenance.
            </p>

            <p className="font-[Poppins] text-sm sm:text-base text-gray-700 leading-relaxed">
            We meticulously source our grains from the esteemed agrarians of the Cauvery Delta, upholding exacting quality criteria. These grains, meticulously handpicked to meet our rigorous benchmarks, undergo a patient aging process of fourteen months, resulting in the zenith of authenticity and excellence. Our advanced milling facilities, strategically located in Poovalur and Lalgudi, seamlessly integrate cutting-edge technology across every phase of rice production.
            </p>
            <p className="font-[Poppins] text-sm sm:text-base text-gray-700 leading-relaxed">
            A devoted cadre of technicians and connoisseurs of quality meticulously oversee all facets of our operations, rigorously upholding the most stringent hygiene protocols. This assiduousness ensures that our final product encapsulates unadulterated flavors of the highest international caliber.
            </p>
    

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-[#5FCF80] text-white font-semibold rounded-lg shadow-md hover:bg-[#4CAF50] transition-all duration-300"
            >
              Know More...
            </motion.button>
          </div>
        </motion.div>

        {/* Right Box - Auto Sliding Images */}
        <div className="w-[90%] md:w-[40%] min-h-[400px] md:min-h-[600px]  bg-white flex justify-center items-center overflow-hidden rounded-lg shadow-lg relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt="Sliding Image"
              className="w-full h-full object-cover absolute"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

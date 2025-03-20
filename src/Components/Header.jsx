import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SL from "../Images/SL.jpg";
import SLA from "../Images/SLA.jpg";
import SLB from "../Images/SLB.jpg";
import boiled from "../Images/boiled.png";
import idly from "../Images/idly.png";
import masoori from "../Images/masoori.png";
import ponni from "../Images/ponni.png";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative w-full mt-20">
      <Slider {...settings} className="relative">
        {/* Slide 1 */}
        <div className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[90vh]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${SL})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
            {/* Header Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white font-[Wonder] text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide"
            >
              {["World’s", "No.1", "Rice", "Brand"].map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-4 sm:mr-6 lg:mr-10 last:mr-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Button Animation */}
            <motion.button
              className="border-2 border-white px-10 py-2 rounded-xl m-4 font-[Poppins] bg-transparent hover:bg-white hover:text-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Explore Now
            </motion.button>

            {/* Rice Images Animation */}
            <motion.div
              className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-hide px-4 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ maxWidth: "100%" }}
            >
              {[boiled, idly, masoori, ponni].map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  className="w-[80px] sm:w-[150px] lg:w-[200px] cursor-pointer transition-transform hover:scale-105"
                  alt="Rice Type"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${SLB})` }}
          />
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-full">
            <motion.h1
              className="text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Pure & Authentic
            </motion.h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;

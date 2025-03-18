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
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] mt-16">
      <Slider {...settings} className="relative">
        {/* Slide 1 */}
        <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${SL})` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-opacity-50 rounded-xl">
            
            {/* Header Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#9f0712]  font-[Wonder] text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide -mt-30"
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
            {/* <p className="text-[#9f0712] font-[Newheading]">Cavery Rice</p> */}

            {/* Button Animation */}
            <motion.button
              className="border-2 border-[#9f0712] px-10 py-2 rounded-xl m-4 font-[Poppins] bg-white hover:bg-[#9f0712] hover:text-white transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Explore Now
            </motion.button>

            {/* Rice Images Animation */}
            <motion.div
              className="absolute top-64 lg:top-80 flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-hide px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ maxWidth: "100%" }}
            >
              {[boiled, idly, masoori, ponni].map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  className="w-[100px] sm:w-[200px] lg:w-[240px] cursor-pointer transition-transform hover:scale-105"
                  alt="Rice Type"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${SL})` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50 rounded-xl px-4 sm:px-6">
            <motion.h1
              className="text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Premium Quality
            </motion.h1>
          </div>
        </div> */}

        {/* Slide 3 */}
        <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${SLB})` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50 rounded-xl px-4 sm:px-6">
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

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
      >
        <source src="/For.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Text and Explore Button */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        {/* Heading with Animation */}
        <motion.h1
          className="text-white text-4xl sm:text-6xl lg:text-8xl  text-center font-[Heading] "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Website
        </motion.h1>

        {/* Explore Button with Animation */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 50 }}  // Starts below and invisible
          animate={{ opacity: 1, y: 0 }}    // Moves up and becomes visible
          transition={{ duration: 1, delay: 0.5 }} // Delay for the button
        >
          <Link id="target" smooth={true}
              duration={500} >
            <button className="px-6 py-3 border-2 border-white text-white text-lg font-[Poppins] rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 tracking-wide"  
              >
              Explore
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

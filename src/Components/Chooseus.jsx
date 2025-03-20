import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaHandshake, FaHeadset, FaGift, FaTools, FaGlobeAmericas } from "react-icons/fa"; // Additional Icons
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { TbWorldUpload } from "react-icons/tb";
import { MdOutlineAutoMode } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import { GiWindTurbine } from "react-icons/gi";
import MM from "../Images/MM.png"
import RiceA from "../Images/RiceA.png"


const reasons = [
  {
    title: "Diabetic Friendly",
    description: "Healthy eating helps you strike the right balance, necessary for managing your blood sugar levels.",
    icon: <PiArrowsClockwiseLight className="text-4xl text-[#9f0712]" />, // Quality icon
  },
  {
    title: "High Fiber Content",
    description: "Grains rich in fiber aids in keeping your hunger satiated for longer and improves digestion.",
    icon: <TbWorldUpload  className="text-4xl text-[#9f0712]" />, // Trust icon
  },
  {
    title: "Automated Processing",
    description: "Automated processing helps in retaining the colour and the nutritional value of rice.",
    icon: <MdOutlineAutoMode className="text-4xl text-[#9f0712]" />, // Support icon
  },
  {
    title: "Laser Quality Control",
    description: "This cutting-edge technology aids in accurate testing of products to ensure adherence to quality.",
    icon: <PiPlantLight className="text-4xl text-[#9f0712]" />, // Gift icon
  },
  {
    title: "14 Month Old grains",
    description: "Aged rice is nutritionally beneficial and results in enhanced flavor and texture.",
    icon: <VscBook className="text-4xl text-[#9f0712]" />, // Tools icon
  },
  {
    title: "Wind Energy",
    description: "Sustainable energy consumption for parboiling rice",
    icon: <GiWindTurbine className="text-4xl text-[#9f0712]" />, // Globe icon
  },
];

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gradient-to-b from-white  px-4 font-[poppins] bg-cover bg-center  min-h-auto p-10 " 
  //   style={{backgroundImage :`url(${Nw})`}
  // }
    >
      {/* Section Heading with animation */}
  <img src={RiceA} className="absolute inset-0 w-full h-full object-cover -z-10" alt="" />
     
      <div className="text-center mb-8">
        <div className="relative inline-block">
         
          <div className="flex flex-col items-center justify-around">
                        <h1 className="font-[Wonder] text-center  text-3xl sm:text-4xl md:text-5xl lg:text-7xl py-5 text-[#9f0712]">
                        Why Choose Us?
                        </h1>
                  <img src={MM} className="w-70" alt="" />
                </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <motion.div
              className="mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {reason.icon}
            </motion.div>

            {/* Title and Description */}
            <h3 className="text-xl font-semibold text-center mb-2 text-[#9f0712]">
              {reason.title}
            </h3>
            <p className="text-md text-center text-gray-500">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

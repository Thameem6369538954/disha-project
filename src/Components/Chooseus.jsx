import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaHandshake, FaHeadset, FaGift, FaTools, FaGlobeAmericas } from "react-icons/fa"; // Additional Icons
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { TbWorldUpload } from "react-icons/tb";
import { MdOutlineAutoMode } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import { GiWindTurbine } from "react-icons/gi";

const reasons = [
  {
    title: "Diabetic Friendly",
    description: "Healthy eating helps you strike the right balance, necessary for managing your blood sugar levels.",
    icon: <PiArrowsClockwiseLight className="text-4xl text-[#5FCF80]" />, // Quality icon
  },
  {
    title: "High Fiber Content",
    description: "Grains rich in fiber aids in keeping your hunger satiated for longer and improves digestion.",
    icon: <TbWorldUpload  className="text-4xl text-[#5FCF80]" />, // Trust icon
  },
  {
    title: "Automated Processing",
    description: "Automated processing helps in retaining the colour and the nutritional value of rice.",
    icon: <MdOutlineAutoMode className="text-4xl text-[#5FCF80]" />, // Support icon
  },
  {
    title: "Laser Quality Control",
    description: "This cutting-edge technology aids in accurate testing of products to ensure adherence to quality.",
    icon: <PiPlantLight className="text-4xl text-[#5FCF80]" />, // Gift icon
  },
  {
    title: "14 Month Old grains",
    description: "Aged rice is nutritionally beneficial and results in enhanced flavor and texture.",
    icon: <VscBook className="text-4xl text-[#5FCF80]" />, // Tools icon
  },
  {
    title: "Wind Energy",
    description: "Sustainable energy consumption for parboiling rice",
    icon: <GiWindTurbine className="text-4xl text-[#5FCF80]" />, // Globe icon
  },
];

const WhyChooseUs = () => {
  return (
    <div className="my-12 px-4 font-[poppins]">
      {/* Section Heading with animation */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#5FCF80]">
            Why Choose Us?
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="absolute left-0 -bottom-2 h-[3px] bg-[#5FCF80]"
          />
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
            <h3 className="text-xl font-semibold text-center mb-2 text-[#5FCF80]">
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

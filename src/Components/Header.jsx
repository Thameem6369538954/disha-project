import Slider from "react-slick";
import { motion } from "framer-motion";
import SL from "../Images/SL.jpg";
import masoori from "../Images/masoori.png";
import ponni from "../Images/ponni.png";
import idly from "../Images/idly.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GG from "../Images/GG.jpg"
import map from "../Images/map.jpg"

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  const slides = [
    { bg: GG, title: "World’s No.1 Rice Brand" },
    { bg: map, title: "Premium Masoori Rice" },
    { bg: GG, title: "Authentic Ponni Rice" },
    { bg: GG, title: "Soft Idly Rice" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Slider {...settings} className="w-full   md:h-full">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full  min-h-[200px] md:min-h-screen">
            {/* Background Image with animation */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            ></motion.div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-screen px-4">
              <motion.h1
                className="text-white text-4xl md:text-6xl font-extrabold text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slide.title}
              </motion.h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;

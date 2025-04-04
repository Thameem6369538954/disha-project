import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Import local images for products and background
import ponni from "../Images/ponni.png";
import bgImage from "../Images/63.jpg"
const Carousel = () => {
  const products = [
    {
      image: ponni,
      title: 'Classic Ponni Raw Rice',
      description:
        'Perfect for daily meals, idlis, and dosas. Available in 1kg, 5kg, and 10kg packs.',
      rating: 4.5,
    },
    {
      image: ponni,
      title: 'Aged Ponni Sella Rice',
      description:
        'Ideal for biryanis, fried rice, and gourmet dishes. 14-month aged, extra-long grains, aromatic richness.',
      rating: 4.8,
    },
    {
      image: ponni,
      title: 'Organic Ponni Rice',
      description:
        'Certified organic – perfect for health-conscious families.',
      rating: 4.3,
    },
    {
      image: ponni,
      title: 'Bulk & Wholesale',
      description:
        'Custom packaging for hotels, restaurants, and exporters.',
      rating: 4.0,
    },
  ];

  return (
    <div
      id="pro"
      className="relative py-16 px-6 bg-cover bg-center bg-no-repeat "
      // style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <div className="relative z-10 flex flex-col items-center justify-center mb-12 gap-3  p-3">
        <h1 className="font-[Wonder] text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#9f0712]">
          Our Products
        </h1>
        <h1 className="font-[Wonder] text-center text-3xl sm:text-4xl md:text-5xl lg:text-3xl text-[#9f0712]">
         The Cauvery Collection
        </h1>
        <p className="font-[Poppins] text-center text-xl text-gray-800 mt-2">
          Crafted for Every Kitchen, Loved by Every Palate
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
      {products.map((product, index) => (
  <SwiperSlide key={index}>
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Product Image with increased height */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#9f0712] via-transparent to-transparent flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-[Poppins] text-white font-semibold">
          {product.title}
        </h3>
        <p className="mt-1 font-[Poppins] text-sm text-white">
          {product.description}
        </p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm text-white">{product.rating}</span>
        </div>
      </motion.div>
    </motion.div>
  </SwiperSlide>
))}


      </Swiper>
    </div>
  );
};

export default Carousel;

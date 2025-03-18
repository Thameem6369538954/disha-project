import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // For Swiper v7 and above
import { motion } from 'framer-motion';
import boiled from '../Images/boiled.png';
import idly from '../Images/idly.png';
import masoori from '../Images/masoori.png';
import ponni from '../Images/ponni.png';
import MM from "../Images/MM.png"
const Carousel = () => {
  const products = [
    {
      image: boiled,
      title: 'Ponni boiled rice',
      price: '$49.99',
      description: 'A great product with amazing features.',
    },
    {
      image: masoori,
      title: 'Masoori rice',
      price: '$59.99',
      description: 'An excellent choice for everyday use.',
    },
    {
      image: ponni,
      title: 'Ponni Rice',
      price: '$39.99',
      description: 'Affordable and reliable for all your needs.',
    },
    {
      image: idly,
      title: 'Idly Rice',
      price: '$39.99',
      description: 'Affordable and reliable for all your needs.',
    },
  ];

  return (
    <div className="relative w-full min-h-[70vh] mt-8" id='pro'>
<div className="my-8">
      <div className="relative">
  
       <div className="flex flex-col items-center justify-around">
                    <h1 className="font-[Wonder] text-center  text-3xl sm:text-4xl md:text-5xl lg:text-8xl  text-[#9f0712]">
                    Our Products
                    </h1>
              <img src={MM} className="w-90" alt="" />
            </div>
      </div>
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
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-90 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 text-white bg-[#9f0712] bg-opacity-60 p-2 rounded-lg">
                <h3 className="text-xl font-[Poppins]">{product.title}</h3>
                {/* <p className="text-lg font-[Poppins] text-yellow-500">{product.price}</p>
                <p className="mt-2 font-[Poppins] text-sm">{product.description}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

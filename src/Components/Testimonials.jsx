import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // For quote icons
import { motion } from "framer-motion"; // For animation

const testimonials = [
  {
    name: "Ravi Kumar",
    position: "Rice Farmer",
    feedback:
      "The high-quality rice seeds provided by this store have drastically improved my harvest. I'm now able to supply the market with premium rice!",
    avatar: "https://i.imgur.com/LfDVm98.jpg", // Indian farmer image
  },
  {
    name: "Meera Devi",
    position: "Rice Mill Owner",
    feedback:
      "As a mill owner, I rely on this store for the best raw materials. Their rice grains are consistently top-notch, ensuring that we produce the finest rice.",
    avatar: "https://i.imgur.com/KoFfFpi.jpg", // Indian woman image
  },
  {
    name: "Suresh Yadav",
    position: "Agricultural Expert",
    feedback:
      "This rice store offers excellent grains and agricultural tools that make rice farming more efficient. Their advice has been invaluable in enhancing crop yields.",
    avatar: "https://i.imgur.com/Kz5fV1d.jpg", // Indian man image
  },
  {
    name: "Nisha Rani",
    position: "Rice Distributor",
    feedback:
      "We depend on this store for reliable rice supplies. Their products always meet our quality standards and satisfy our customers.",
    avatar: "https://i.imgur.com/FdsyU82.jpg", // Indian woman image
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="my-12 px-4 font-[poppins]">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5FCF80]">
            Our Client Says
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="absolute left-0 -bottom-2 h-[3px] bg-[#5FCF80]"
          />
        </div>
      </div>

      {/* Swiper Testimonial Carousel */}
      <Swiper
        spaceBetween={50} // Spacing between slides
        slidesPerView={1} // Display 1 slide at a time
        pagination={{ clickable: true }} // Enable clickable pagination
        loop={true} // Enable looping of slides
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay even when interacting
        }}
        effect="fade" // Fade effect for transitions
        className="mySwiper"
        navigation={false} // Remove side navigation arrows
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto">
              {/* Quote Icons */}
              <div className="relative mb-4">
                <FaQuoteLeft className="absolute top-0 -left-6 text-2xl text-[#5FCF80]" />
                <p className="text-1xl text-gray-500 italic">{testimonial.feedback}</p>
                <FaQuoteRight className="absolute bottom-0 right-0 text-2xl text-[#5FCF80]" />
              </div>

              {/* Testimonial Details */}
              <div className="flex items-center justify-start">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#5FCF80]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;

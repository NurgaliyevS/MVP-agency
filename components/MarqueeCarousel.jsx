import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const MarqueeCarousel = ({ projects }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={3}
      slidesPerView={3}
      loop={true}
      speed={2800}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={`${project.id}-${index}`}
          className="w-[600px] h-[400px]"
        >
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full lg:object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarqueeCarousel;

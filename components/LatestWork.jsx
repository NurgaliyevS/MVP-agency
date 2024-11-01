import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const LatestWork = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/latest-work/pregnantmeal.png",
      alt: "Project One Description",
    },
    {
      id: 2,
      title: "Project Two",
      image: "/latest-work/pregnantmeal.png",
      alt: "Project Two Description",
    },
    {
      id: 3,
      title: "Project Three",
      image: "/latest-work/pregnantmeal.png",
      alt: "Project Three Description",
    },

    {
      id: 3,
      title: "Project Three",
      image: "/latest-work/pregnantmeal.png",
      alt: "Project Three Description",
    },

    {
      id: 3,
      title: "Project Three",
      image: "/latest-work/pregnantmeal.png",
      alt: "Project Three Description",
    },
  ];

  return (
    <section className="py-12 w-full">
      <h2 className="text-3xl font-bold text-center mb-12 mx-auto">
        Our Latest Work
      </h2>
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        breakpoints={{
          // Mobile
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="relative group rounded-xl overflow-hidden h-64">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestWork;
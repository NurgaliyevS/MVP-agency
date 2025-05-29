import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-[420px] flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <StarRating />
        </div>
      </div>
      <p className="text-gray-600 text-base leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Bohdan",
      image: "/reviews/Bohdan.webp",
      text: "I highly recommend using Post Content for promoting your products on Reddit. It is a huge time saver.",
    },
    {
      id: 2,
      name: "Tim",
      image: "/reviews/Tim.webp",
      text: "Wow - looks class and it's exactly what I need as I'm looking currently at Reddit as an additional lead gen channel for my business.",
    },
    {
      id: 3,
      name: "Deeps",
      image: "/reviews/Deeps.webp",
      text: "Awesome product and well executed 🙌🙌",
    },
    {
      id: 4,
      name: "Jainil",
      image: "/reviews/Jainil.webp",
      text: "The best tool to get traffic on reddit. Great product sabyr!",
    },
    {
      id: 5,
      name: "Saurav-Kumar",
      image: "/reviews/Saurav-Kumar.webp",
      text: "Great product to schedule on Reddit, grow that Karma and make an audience",
    },
    {
      id: 6,
      name: "Andri",
      image: "/reviews/Andri.webp",
      text: "Outstanding experience with MVP Agency! We moved incredibly fast and communication were top-notch. They kept me updated at every step, ensuring the project stayed on track and met all requirements. They also handled an API integration seamlessly, adding even more value to the project. If you're looking for a skilled, reliable, and fast-moving partner, I highly recommend MVP Agency. Looking forward to working together again!",
    },
    {
      id: 7,
      name: "Thomy",
      image: "/reviews/Thomy.webp",
      text: "Incredible tool! Recommended to anyone looking to improve their marketing on Reddit!",
    },
    {
      id: 8,
      name: "Nic Polotnianko",
      image: "/reviews/Nic-Polotnianko.webp",
      text: "Product is solid",
    },
    {
      id: 9,
      name: "Soyal",
      image: "/reviews/Soyal.webp",
      text: "If you need to post a lot on Reddit, you will save a lot of your time using this tool!",
    },
  ];

  // Split testimonials into two arrays
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

  useEffect(() => {
    // First carousel - moving right
    const splideRight = new Splide('.splide-right', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      gap: '2rem',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
      },
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
      },
    });

    // Second carousel - moving left
    const splideLeft = new Splide('.splide-left', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      gap: '2rem',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: -1, // Negative speed for left movement
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
      },
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
      },
    });

    splideRight.mount({ AutoScroll });
    splideLeft.mount({ AutoScroll });

    return () => {
      splideRight.destroy();
      splideLeft.destroy();
    };
  }, []);

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="px-8 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We don't have a lot of reviews yet, <br /> but here are reviews from
            businesses that use our apps.
          </p>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* First carousel - moving right */}
            <div className="splide splide-right">
              <div className="splide__track">
                <ul className="splide__list">
                  {firstHalf.map((testimonial) => (
                    <li className="splide__slide" key={testimonial.id}>
                      <TestimonialCard testimonial={testimonial} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second carousel - moving left */}
            <div className="splide splide-left">
              <div className="splide__track">
                <ul className="splide__list">
                  {secondHalf.map((testimonial) => (
                    <li className="splide__slide" key={testimonial.id}>
                      <TestimonialCard testimonial={testimonial} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

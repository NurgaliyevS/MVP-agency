import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Outstanding experience with MVP Agency! We moved incredibly fast, and the communication was top-notch. The development process was smooth, and they handled API integration seamlessly. Highly recommend for anyone looking for a skilled, reliable agency.",
      author: "Meal Plan Author",
      role: "Startup Founder"
    }
    // More testimonials can be added here in the future
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex flex-col">
                <div className="mb-4">
                  <svg 
                    className="h-8 w-8 text-primary opacity-50" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 
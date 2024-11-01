import React from "react";

function HowItWorks(props) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          3 Steps to Launch Your MVP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Book a call",
              description: "Share your idea and requirements with founder",
            },
            {
              title: "Define your MVP",
              description: "Choose the essential feature for your MVP launch",
            },
            {
              title: "Launch in 7 days",
              description: "Get your product to market in record time",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-base-content/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

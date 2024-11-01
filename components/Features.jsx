import React from "react";

function Features(props) {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MVP AGENCY?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Fast Deployment",
              description: "Launch in days, not weeks",
            },
            {
              title: "Cost-Effective",
              description: "Avoid overspending with targeted features",
            },
            {
              title: "AI-Powered Tools",
              description: "Leverage the latest in AI for building and testing",
            },
            {
              title: "Scalable Solutions",
              description: "Build a solid foundation for future growth",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

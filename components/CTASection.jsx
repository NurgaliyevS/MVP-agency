import React from "react";

function CTASection(props) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-base-content/70 mb-8">
          Get started with MVP AGENCY today!
        </p>
        <button className="btn btn-primary btn-lg px-8">Get Started</button>
      </div>
    </section>
  );
}

export default CTASection;

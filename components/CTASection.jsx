import React from "react";

function CTASection(props) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-base-content/70 mb-8">
          Get started with MVP AGENCY today!
        </p>
        <a
          href="https://cal.com/sabyr-nurgaliyev/15min"
          className="btn btn-primary btn-md lg:btn-lg px-8 rounded-3xl text-white"
          role="button"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

export default CTASection;

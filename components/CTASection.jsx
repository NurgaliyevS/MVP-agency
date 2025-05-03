import React from "react";
import CTAButton from "./CTAButton";

function CTASection(props) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-base-content/70 mb-8">
          Get started with MVP AGENCY today!
        </p>
        <CTAButton />
      </div>
    </section>
  );
}

export default CTASection;

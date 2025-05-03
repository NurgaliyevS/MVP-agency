import React from "react";
import CTAButton from "./CTAButton";
function Hero(props) {
  return (
    <section className="mt-36 mb-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
          From idea to MVP
          <br />
          <span className="text-primary inline-block">launch in weeks</span>
        </h1>
        <div className="max-w-3xl mx-auto mb-8"></div>
        <CTAButton />
        <p className="text-sm text-base-content/70 mt-4">
          No commitment, learn how we can help you launch faster
        </p>
      </div>
    </section>
  );
}

export default Hero;

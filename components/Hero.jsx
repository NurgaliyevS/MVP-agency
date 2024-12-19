import React from "react";

function Hero(props) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
          From idea to MVP
          <br />
          <span className="text-primary inline-block">launch in 2 weeks</span>
        </h1>
        <div className="max-w-3xl mx-auto mb-8"></div>
        <a
          href="https://cal.com/sabyr-nurgaliyev/15min"
          className="btn btn-primary btn-md lg:btn-lg px-8 rounded-3xl text-white"
          role="button"
        >
          Book a Call
        </a>
        <p className="text-sm text-base-content/70 mt-4">
          No commitment, learn how we can help you launch faster
        </p>
      </div>
    </section>
  );
}

export default Hero;

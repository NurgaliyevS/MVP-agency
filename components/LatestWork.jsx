import React from "react";
import Image from "next/image";

function LatestWork(props) {
  return (
    <section className="py-16">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Latest Work
        </h2>
        <div className="mx-auto">
          <div className="carousel w-full rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Project 1"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Project 2"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Project 3"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestWork;

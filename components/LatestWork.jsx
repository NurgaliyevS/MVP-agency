import React from "react";
import MarqueeCarousel from "./MarqueeCarousel";

const LatestWork = () => {
  const projects = [
    {
      id: 1,
      title: "Pregnant Meal",
      image: "/latest-work/pregnantmeal.png",
      alt: "Pregnant Meal Image",
    },
    {
      id: 2,
      title: "Uptime Friend",
      image: "/latest-work/uptimefriend.png",
      alt: "Uptime Friend Image",
    },
    {
      id: 3,
      title: "Weeealth",
      image: "/latest-work/weeealth.png",
      alt: "Weeealth Image",
    },
    {
      id: 4,
      title: "Trip Planss",
      image: "/latest-work/tripplanss.png",
      alt: "Trip Planss Image",
    },
    {
      id: 5,
      title: "SubPage",
      image: "/latest-work/subpage2.png",
      alt: "SubPage Image",
    },
    {
      id: 6,
      title: "Environmental Job Boards",
      image: "/latest-work/environmentaljobboards.png",
      alt: "Environmental Job Boards Image",
    },
  ];

  return (
    <div className="w-full py-8 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 mx-auto">
        Our Work
      </h2>
      <MarqueeCarousel projects={projects} />
    </div>
  );
};

export default LatestWork;

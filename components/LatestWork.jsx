import React from "react";

const LatestWork = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/screenshots/project1.png",
      alt: "Project One Description",
    },
    {
      id: 2,
      title: "Project Two",
      image: "/screenshots/project2.png",
      alt: "Project Two Description",
    },
    {
      id: 3,
      title: "Project Three",
      image: "/screenshots/project3.png",
      alt: "Project Three Description",
    },
    // Duplicate projects for seamless loop
    {
      id: 4,
      title: "Project One",
      image: "/screenshots/project1.png",
      alt: "Project One Description",
    },
    {
      id: 5,
      title: "Project Two",
      image: "/screenshots/project2.png",
      alt: "Project Two Description",
    },
    {
      id: 6,
      title: "Project Three",
      image: "/screenshots/project3.png",
      alt: "Project Three Description",
    },
  ];

  return (
    <section className="py-12 w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 mx-auto">
        Our Latest Work
      </h2>
      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-carousel">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group mx-4 flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
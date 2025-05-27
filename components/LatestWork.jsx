import React from "react";
import Link from "next/link";

const CaseStudyCard = ({ project }) => {
  return (
    <Link href={project.url || "#"} className="block h-full" target="_blank">
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="font-medium">View Case Study</p>
            </div>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const LatestWork = () => {
  const projects = [
    {
      id: 0,
      title: "Post Content",
      image: "/latest-work/post-content-new.webp",
      alt: "Post Content Image",
      description:
        "Double Reddit Results While You Sleep. Schedule Reddit posts that drive traffic to your website",
      tags: ["Reddit", "Content", "Marketing", "SaaS"],
      url: "https://post-content.com?ref=mvpagency.org",
    },
    {
      id: 1,
      title: "Pregnant Meal",
      image: "/latest-work/pregnantmeal-new.webp",
      alt: "Pregnant Meal Image",
      description:
        "A nutrition website designed for expecting mothers with personalized meal plans and health tracking features",
      tags: ["Nutrition", "SaaS", "Pregnancy", "Parenting"],
      url: "https://pregnantmeal.com?ref=mvpagency.org",
    },
    {
      id: 2,
      title: "Uptime Friend",
      image: "/latest-work/uptimefriend-new.webp",
      alt: "Uptime Friend Image",
      description:
        "Website monitoring service that alerts users when their websites go down, with detailed analytics and reporting",
      tags: ["Developer Tools", "SaaS", "Monitoring"],
      url: "https://uptimefriend.com?ref=mvpagency.org",
    },
    {
      id: 4,
      title: "Trip Planss",
      image: "/latest-work/tripplanss-new.webp",
      alt: "Trip Planss Image",
      description:
        "Travel planning application that simplifies planning and booking trips",
      tags: ["Travel", "SaaS", "Trip Planning"],
      url: "https://tripplanss.com?ref=mvpagency.org",
    },
    {
      id: 5,
      title: "SubPage",
      image: "/latest-work/subpage-new.webp",
      alt: "SubPage Image",
      description:
        "Website builder platform focused on creating beautiful landing pages with no coding required",
      tags: ["No-Code", "SaaS", "Web Development"],
      url: "https://subpage.io?ref=mvpagency.org",
    },
    {
      id: 6,
      title: "Environmental Job Boards",
      image: "/latest-work/environmentaljobboards-new.webp",
      alt: "Environmental Job Boards Image",
      description:
        "Job board connecting environmental professionals with sustainability-focused employers.",
      tags: ["Recruitment", "Nature", "Career"],
      url: "https://environmentaljobboards.com?ref=mvpagency.org",
    },
  ];

  return (
    <section className="py-20" id="work">
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-900">
              Case Studies
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and discover how we've helped
              businesses achieve their goals through innovative digital
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;

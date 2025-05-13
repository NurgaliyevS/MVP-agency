import React from "react";
import Header from "@/components/Header";
import LatestWork from "@/components/LatestWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  FaChevronDown,
  FaCloud,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaBuilding,
  FaLightbulb,
} from "react-icons/fa";
import Head from "next/head";

const solutionsItems = [
  {
    uuid: "mvp-dev",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Custom JavaScript Web Development Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We build using latest technologies and best practices to build
        user-friendly, responsive and scalable web applications.
      </div>
    ),
  },
  {
    uuid: "custom-mvp",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4"
            />
          </svg>
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Frontend UI/UX Development Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        With our expertise in React and Next.js, we build reliable,
        easy-to-maintain and easy-to-use frontend applications.
      </div>
    ),
  },
  {
    uuid: "agile-mvp",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h2l1 2h13a1 1 0 010 2H6l-1 2H3"
            />
          </svg>
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Backend Development Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We offer our clients Node.js development services to build server-side
        applications and APIs.
      </div>
    ),
  },
  {
    uuid: "tech-fit",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4V4a4 4 0 014-4h0a4 4 0 014 4v6m-4 4v4"
            />
          </svg>
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Mobile App Development Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We build mobile apps using React Native and Expo. We build native apps
        for iOS and Android.
      </div>
    ),
  },
  {
    uuid: "legacy-refactoring",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Enterprise Software Development Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We deliver custom software development services to help you build
        enterprise-level applications with reliable, data-driven and scalable
        focus in mind.
      </div>
    ),
  },
];

export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Head>
        <title>JavaScript Development Services - MVP Agency</title>
        <link
          rel="canonical"
          href="https://mvpagency.org/javascript-development"
        />
        <meta
          name="description"
          content="We provide JavaScript development services to help you build and maintain your web, mobile and desktop applications."
        />
        <meta
          property="og:description"
          content="We provide JavaScript development services to help you build and maintain your web, mobile and desktop applications."
        />
        <meta
          property="og:title"
          content="JavaScript Development Services"
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            JavaScript Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            As an experienced Javascript development company, we provide
            high-quality services to help you build and maintain your web,
            mobile and desktop applications. We build user-friendly SaaS
            solutions, responsive interfaces and complex backend systems.
          </p>
          <CTAButton />
          <p className="text-sm text-base-content/70 mt-4">
            No commitment, learn how we can help you launch faster
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      {/* #fafafa as bg */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight">
            Results-driven JavaScript development services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer custom JavaScript development services to help you build
            SaaS services, inhouse tools, web apps, mobile apps, and websites.
          </p>
        </div>
        <Accordion allowZeroExpanded className="w-full max-w-3xl mx-auto">
          {solutionsItems.map((item) => (
            <AccordionItem
              key={item.uuid}
              uuid={item.uuid}
              className="bg-white rounded-2xl shadow-sm mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
                      {item.heading.props.children[0].props.children}
                    </span>
                    <span className="font-bold text-xl text-gray-800">
                      {item.heading.props.children[1].props.children}
                    </span>
                  </div>
                  {/* Arrow icon, rotate if expanded */}
                  <span
                    className="ml-4 transition-transform duration-200"
                    aria-hidden="true"
                    data-accordion-arrow
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-8 pb-6 pt-0">
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* MVP Development Process Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            Our JavaScript development process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We deliver high quality JavaScript development services. The process
            consists of the following steps:
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Stepper */}
            {/* hide on mobile */}
            <div className="hidden md:flex flex-row md:flex-col items-center md:items-stretch md:w-24 w-full md:justify-start justify-center self-stretch">
              <div className="relative flex flex-col items-center w-full h-full my-2">
                {[1, 2, 3, 4].map((num, idx) => (
                  <div key={num} className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white font-bold text-lg z-10 shadow-md">
                      {num}
                    </div>
                    {idx < 3 && (
                      <div className="w-1 h-12 bg-blue-300 mx-auto"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Steps Accordion */}
            <div className="flex-1 w-full">
              <Accordion allowZeroExpanded className="w-full">
                <AccordionItem
                  uuid="step1"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 1: Discovery phase
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    You{" "}
                    <a
                      href="https://cal.com/sabyr-nurgaliyev/mvp-agency"
                      className="text-blue-500"
                    >
                      schedule a call
                    </a>{" "}
                    with us to discuss your JavaScript development needs. We
                    work with you to understand your problems, goals, and
                    requirements for the JavaScript development.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step2"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 2: Design and development
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will design and develop your JavaScript application. We
                    will use the proven design patterns and best practices to
                    create a end-to-end solution.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step3"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 3: Launching and Support
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will launch your JavaScript application and provide
                    ongoing support to help you achieve your business goals.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step4"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 4: Updates and maintenance
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We don't stop after the launch, also we deliver services to
                    help you release new features, fix issues and improve the
                    software.
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            Industry expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We have a deep understanding of the needs of industries. It allows
            us to deliver custom software solutions that help you achieve your
            business goals faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaCloud className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">SaaS</h3>
              <p className="text-gray-600 text-base">
                We build cloud-based SaaS solutions that help you scale your
                business.
              </p>
            </div>
            {/* Insurance */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaShieldAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Insurance
              </h3>
              <p className="text-gray-600 text-base">
                We build JavaScript-based insurance software solutions that help
                you manage your claims, policies and customers.
              </p>
            </div>
            {/* FinTech */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaMoneyCheckAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">FinTech</h3>
              <p className="text-gray-600 text-base">
                We build fintech solutions that help you manage your finances,
                payments and transactions with complex data and integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
            Why choose us for JavaScript development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Speed and quality
              </h3>
              <p className="text-gray-600 text-center">
                We deliver high quality JavaScript development services. We
                focus on speed and quality to help you grow your business.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                High-quality code
              </h3>
              <p className="text-gray-600 text-center">
                We deliver high-quality code that is easy to maintain and
                extend.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Business driven
              </h3>
              <p className="text-gray-600 text-center">
                We focus on your business revenue and growth to bring you
                maximum value.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Clean and rich interfaces
              </h3>
              <p className="text-gray-600 text-center">
                We build clean and rich interfaces that are easy to use and
                navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            We provide JavaScript development services for
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From small businesses to large enterprises and startups, we provide
            JavaScript development services to help you build and maintain your
            web, mobile and desktop applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                {/* a nice icon for small businesses */}
                <FaUserFriends className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Small Businesses
              </h3>
              <p className="text-gray-600 text-base">
                We focus on simple, lean and cost-effective solutions to help
                you grow your business.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                {/* a nice icon for mid/large enterprises */}
                <FaBuilding className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Mid/Large Enterprises
              </h3>
              <p className="text-gray-600 text-base">
                We deliver complex, scalable and reliable solutions to help you
                achieve your revenue goals.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                {/* a nice icon for startups */}
                <FaLightbulb className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Startups</h3>
              <p className="text-gray-600 text-base">
                We build fast, clean and hyper-growth solutions applications to
                get exponential attention and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section (LatestWork) */}
      <LatestWork />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2 md:space-y-4 w-full max-w-full md:max-w-3xl mx-auto">
          <Accordion allowZeroExpanded className="w-full">
            <AccordionItem
              uuid="faq1"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How long does it take to build a custom JavaScript
                  application?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We execute in weeks not months. We focus on one project at a
                  time.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq2"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How much does it cost to build a custom JavaScript
                  application?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We provide a fixed price for JavaScript development services.
                  Because we trust our clients and provide real results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq4"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  Can you integrate JavaScript with my existing software?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  Yes, we can integrate JavaScript with your existing software.
                  We focus on smooth and reliable integrations.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem
              uuid="faq5"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  What ongoing support do you offer once my project is
                  completed?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <div className="text-gray-600 text-base md:text-lg">
                  We provide ongoing support and maintenance to help you keep
                  your JavaScript application running. We also help you with updates
                  and new features.
                </div>
                <ul className="list-disc pl-5 mt-4 text-gray-600 text-base md:text-lg">
                  <li>Bug fixes</li>
                  <li>Feature updates</li>
                  <li>Performance improvements</li>
                  <li>Security updates</li>
                  <li>Maintenance</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
            Ready to build your JavaScript application?
          </h2>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

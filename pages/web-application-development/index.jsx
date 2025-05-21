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
  FaTruck,
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
          Custom web app development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        From 0 to 1, we help you build a web application that solve real-world
        problems. We support you with the every step of the way, from the
        initial idea to the final product.
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
          Frontend web app development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Customer experience starts with the frontend. We build a beautiful and
        user-friendly frontend that is simple and converts.
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
          Backend web app development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        The backend is the engine of your web application. We build a reliable
        and scalable backend that is easy to maintain and grow.
      </div>
    ),
  },
  {
    uuid: "cms-dev",
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
          CMS development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We build a content management system that is easy to manage and update.
        It allows you to control the content of your web application.
      </div>
    ),
  },
  {
    uuid: "saas-dev",
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
          SaaS development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Niche industries require niche solutions. We build a SaaS product that
        is fit for your needs.
      </div>
    ),
  },

  {
    uuid: "internal-tools",
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
          Internal tools development services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        If you don't want to rely on third-party tools, we can build a custom
        internal tool that is tailored to your needs.
      </div>
    ),
  },
];

export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Head>
        <title>Web Application Development Services - MVP Agency</title>
        <link
          rel="canonical"
          href="https://mvpagency.org/web-application-development"
        />
        <meta
          name="description"
          content="Build fast, lean, and secure web applications that scale with your business. We use the latest technologies and frameworks to develop your web application."
        />
        <meta
          property="og:description"
          content="Build fast, lean, and secure web applications that scale with your business. We use the latest technologies and frameworks to develop your web application."
        />
        <meta
          property="og:title"
          content="Web Application Development Services"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            Web Application Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Build fast, lean, and secure web applications that scale with your
            business. We use the latest technologies and frameworks to develop
            your web application. We focus on the customers and their needs, and
            we deliver a product that is easy to use and navigate.
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
            Our Web Application Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Custom web application development services are designed to help you
            create a web application that solve real-world problems.
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

      {/* Services Offered Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            Industries we serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Expertise in various industries allows us to bring industry insights
            to your project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaCloud className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                SaaS & Cloud Services
              </h3>
              <p className="text-gray-600 text-base">
                We build web apps for SaaS companies to solve real-world
                problems with software.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaTruck className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Logistics & Supply Chain
              </h3>
              <p className="text-gray-600 text-base">
                We build web apps for logistics companies to manage their
                operations, from inventory to shipping.
              </p>
            </div>
            {/* FinTech */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaMoneyCheckAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Finance & Accounting
              </h3>
              <p className="text-gray-600 text-base">
                We build web apps from trading platforms, banking systems, to
                credit analysis tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Development Process Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            What is the Web Application Development Process Like?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We move fast and deliver results. We value your time and money.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Stepper */}
            {/* hide on mobile */}
            <div className="hidden md:flex flex-row md:flex-col items-center md:items-stretch md:w-24 w-full md:justify-start justify-center self-stretch">
              <div className="relative flex flex-col items-center w-full h-full my-2">
                {[1, 2, 3, 4, 5].map((num, idx) => (
                  <div key={num} className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white font-bold text-lg z-10 shadow-md">
                      {num}
                    </div>
                    {idx < 4 && (
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
                        Step 1: Consultation
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
                    with us to discuss your web app development needs. We will
                    help you to execute your idea.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step2"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 2: Design & Prototyping
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We design and prototype the web app to make sure it's easy
                    to use.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step3"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 3: Web App Development
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We develop the web app using the latest technologies and
                    frameworks.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step4"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 4: Deployment & Maintenance
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We deploy the web app and provide maintenance services.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step5"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 5: Continuous Improvement
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We launch the web app and continue to iterate based on user
                    feedback and market needs.
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
            Why choose MVP Agency for your custom web app development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Problem-solving approach
              </h3>
              <p className="text-gray-600 text-center">
                We don't create problems, we solve them.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                End-to-end partnership
              </h3>
              <p className="text-gray-600 text-center">
                We are not just a development agency, we are your partner.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Transparency
              </h3>
              <p className="text-gray-600 text-center">
                We update you on the progress of the project and provide a
                detailed report.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Market-driven approach
              </h3>
              <p className="text-gray-600 text-center">
                We build web apps that are market-driven and user-friendly.
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
                  How much does it cost to create a custom web application?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We provide a fixed price for web app development. Because we
                  trust our clients and provide real results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq2"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How long does it take to develop a web application?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We execute in weeks not months. We value your time and money.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq3"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How soon can you start working on my project?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We start working on your project as soon as you sign the
                  contract.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq4"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  Can your team collaborate with my internal team?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  Yes, we would love to share our expertise with your team. We
                  can work as an extension of your team.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
            Ready to build your web application?
          </h2>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

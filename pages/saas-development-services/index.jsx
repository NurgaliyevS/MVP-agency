import React from "react";
import Header from "@/components/Header";
import LatestWork from "@/components/LatestWork";
import Pricing from "@/components/Pricing";
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
          Custom SaaS Development
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Grow your business with a custom SaaS application that meets your unique
        needs and scales with you. We integrate with existing systems and
        third-party services to deliver exact solutions.
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
          SaaS Migration & Integration
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We migrate your existing applications to the cloud and backup your data
        securely to scale with demand.
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
          API Development & Integration
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We build custom APIs to connect your SaaS application to existing
        systems and third-party services. Main focus is on realible systems and
        consistent data.
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
          Custom SaaS Features
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We focus on building custom features that are specific to your business
        needs and goals.
      </div>
    ),
  },

  {
    uuid: "security-services",
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
          SaaS Security Services & Maintenance
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We provide security services to protect your data and systems from
        attacks and ensure your application is always up to date. If you need to
        maintain your application, we can do that too.
      </div>
    ),
  },
];

export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Head>
        <title>SaaS Development Company - MVP Agency</title>
        <link
          rel="canonical"
          href="https://mvpagency.org/saas-development-services"
        />
        <meta
          name="description"
          content="SaaS development services to build, launch, and scale your software product. Turn your ideas into scalable, revenue-generating and cloud-based solutions."
        />
        <meta
          property="og:description"
          content="SaaS development services to build, launch, and scale your software product. Turn your ideas into scalable, revenue-generating and cloud-based solutions."
        />
        <meta property="og:title" content="SaaS Development Company" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            SaaS Development Company
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            End-to-end SaaS development services to build, launch, and scale
            your software product. Turn your ideas into scalable,
            revenue-generating and cloud-based solutions with our SaaS
            development services. Give users access to your software product
            from anywhere, at a fraction of the cost of traditional software.
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
            Our SaaS Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end SaaS application development services, from
            building cloud-based applications from scratch to transforming
            existing applications into cloud-based solutions and integrating
            data with the latest cloud technologies.
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
            Our Industries Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We don't just build SaaS products, but we also understand the unique
            challenges and needs of industry-specific businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaCloud className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                E-Commerce
              </h3>
              <p className="text-gray-600 text-base">
                Create a custom SaaS solution for your e-commerce business to
                streamline operations, boost sales, and improve customer
                satisfaction using our custom SaaS services.
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
                Improve underwriting, claims management, policy administration,
                and customer service with a custom SaaS solution.
              </p>
            </div>
            {/* FinTech */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaMoneyCheckAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">FinTech</h3>
              <p className="text-gray-600 text-base">
                We develop custom SaaS solutions for FinTech companies to
                banking operations, payments, investments management, and
                financial analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Development Process Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            Our SaaS Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We start with a discovery phase to understand your business needs
            and goals. Then we build a custom SaaS solution that is fit for your
            business.
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
                        Step 1: Discovery Call
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
                      book a call
                    </a>{" "}
                    with us to discuss your SaaS development needs. We work with
                    you to understand your vision, goals, and requirements for
                    the SaaS.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step2"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 2: Design & Development
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We identify and prioritize the core features that will
                    deliver the most value to your users.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step3"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 3: Release & Iteration
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We launch your SaaS application and continue to iterate
                    based on user feedback and market needs.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step4"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 4: Support & Maintenance
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We provide ongoing support and maintenance to help you keep
                    your SaaS application running. We also help you with updates
                    and new features.
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
            Why build SaaS web application with us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black text-center">
                End-to-End SaaS Development Services
              </h3>
              <p className="text-gray-600 text-center">
                We provide services from design to development, release, and
                maintenance.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Personal approach
              </h3>
              <p className="text-gray-600 text-center">
                We analyze your business needs and goals and provide a custom
                solution. We are not a one-size-fits-all agency.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Fast operation & delivery
              </h3>
              <p className="text-gray-600 text-center">
                We deliver your product on time and within budget.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Expertise in SaaS Development
              </h3>
              <p className="text-gray-600 text-center">
                We don't just build SaaS products, but we also own our own SaaS
                products. We know the market and the needs of the users.
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
                  How much does custom SaaS development cost?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We provide a fixed price for custom SaaS development. Because
                  we trust our clients and provide real results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq2"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How long does it take to develop a SaaS application?
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
              uuid="faq3"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  Do you provide maintenance and support services?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  Yes, we do it. We provide ongoing support, maintenance,
                  updates, and new features. We don't leave you alone after the
                  launch.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq4"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  Do you offer MVP development services for enterprises?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  Yes, we do it. We discuss the project in detail and provide a
                  custom help for your business.
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
            Got a project?
          </h2>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
          Application Support and Maintenance Services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Regular maintenance and support services to keep your software running
        24/7. Do not rely on notifications from your users, we will fix them
        before they arrive.
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
          Web app and website maintenance services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Do not wait for 404 errors, downtime or slow performance. Instead, we
        will fix them before they bother your users.
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
          IT infrastructure and network maintenance services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Do you want to sleep well at night? We will monitor your IT
        infrastructure and network 24/7 and fix issues before they impact your
        business.
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
          Web app and website security audits services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Errors and vulnerabilities cost you money. We will audit your web app
        and website and let you know if there are any issues and help you to
        solve them.
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
          Software updates and legacy refactoring services
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Legacy code is a pain. We will refactor your legacy code to ensure your
        business is always up to date.
      </div>
    ),
  },
];

export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Head>
        <title>IT Maintenance and Support Services - MVP Agency</title>
        <link
          rel="canonical"
          href="https://mvpagency.org/maintenance-and-support"
        />
        <meta
          name="description"
          content="We provide IT maintenance and support services for your software. We help you to prevent unexpected issues and downtime. And sleep well at night."
        />
        <meta
          property="og:description"
          content="We provide IT maintenance and support services for your software. We help you to prevent unexpected issues and downtime. And sleep well at night.    "
        />
        <meta
          property="og:title"
          content="IT Maintenance and Support Services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            IT Maintenance and Support Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We ensure your IT infrastructure is always up and running, with
            regular maintenance and updates. Anytime you need help, we're here
            to help. Avoid unexpected downtime and issues with your business.
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
            Software Maintenance and Support Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our maintenance and support services, prevent issues before they
            happen. We offer services from maintaince, monitoring, to legacy
            refactoring and network performance optimization.
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
            Industries expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            With more insights, we provide better services for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaCloud className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">SaaS</h3>
              <p className="text-gray-600 text-base">
                Software audits, maintenance and support services for SaaS
                companies.
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
                We focus on government regulations and compliance. We help you
                to build secure and reliable software.
              </p>
            </div>
            {/* FinTech */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaMoneyCheckAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">FinTech</h3>
              <p className="text-gray-600 text-base">
                We focus on speed and security. We help you to maintain and
                support your software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Development Process Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            How we provide maintenance and support services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We deliver high quality maintenance and support services.The process
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
                        Step 1: Requirements gathering
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
                    with us to discuss your maintenance and support needs. We
                    work with you to understand your problems, goals, and
                    requirements for the maintenance and support.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step2"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 2: Software maintenance and support services plan
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will create a plan to maintain and support your software.
                    The plan will include the following:
                    <ul>
                      <li>Regular maintenance and updates</li>
                      <li>Regular security audits</li>
                      <li>Regular performance audits</li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step3"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 3: Execution and monitoring
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will execute the plan and monitor the progress.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step4"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 4: Reporting and updates
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We communicate with you regularly about the progress of the
                    maintenance and support. We will provide all the details of
                    our work.
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
            Custom Software Maintenance and Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Reliable Work
              </h3>
              <p className="text-gray-600 text-center">
                We will fix issues and make your software more reliable to
                prevent unexpected downtime.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Custom services
              </h3>
              <p className="text-gray-600 text-center">
                Each project is unique. We deliver custom services to meet your
                needs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Fast response
              </h3>
              <p className="text-gray-600 text-center">
                If you have an issue, we will fix it quickly.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Monitor and improve
              </h3>
              <p className="text-gray-600 text-center">
                We automate logs and monitor your software to prevent issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            We provide software maintenance & support services for
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From small businesses to large enterprises and startups, we provide
            custom software maintenance & support services to prevent unexpected
            downtime, critical errors and issues.
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
                We focus on lean and simple solutions to deliver stable and
                reliable software.
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
                We focus on stability and growth. We help you to scale your
                software and improve your business.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                {/* a nice icon for startups */}
                <FaLightbulb className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Startups</h3>
              <p className="text-gray-600 text-base">
                We optimize for time and scale to prevent unexpected issues.
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
                  How much does maintenance and support cost?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We provide a fixed price for maintenance and support services.
                  Because we trust our clients and provide real results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq2"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  Why is it critical to maintain and support my software?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  They help you to prevent unexpected issues and downtime. And
                  sleep well at night.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq3"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How long does it take to maintain and support my software?
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
              uuid="faq4"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  How do you differ from other maintenance and support services?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We don't just maintain and support software. We build our own
                  products. We understand the market and the needs of the users.
                  We know where the issues are and how to fix them.
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
            GOT A SOFTWARE PROBLEM ?
          </h2>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

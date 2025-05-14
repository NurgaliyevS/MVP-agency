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
  FaStore,
  FaRocket,
  FaMobileAlt,
  FaGlobe,
  FaTools,
} from "react-icons/fa";
import Head from "next/head";

const solutionsItems = [
  {
    uuid: "mvp-dev",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <FaStore className="w-7 h-7 text-blue-500" />
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Custom Marketplace Development
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Build your own online marketplace to change the way you do business. We
        focus on your customazation needs and business processes.
      </div>
    ),
  },
  {
    uuid: "custom-mvp",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <FaRocket className="w-7 h-7 text-blue-500" />
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Marketplace MVP Development
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        Start small and scale your business with MVP development. We will launch
        MVP to prove your idea and get feedback from your customers.
      </div>
    ),
  },
  {
    uuid: "agile-mvp",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <FaMobileAlt className="w-7 h-7 text-blue-500" />
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Mobile marketplace development
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We provide the most simple and effective way to sell your products and
        services on mobile.
      </div>
    ),
  },
  {
    uuid: "tech-fit",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <FaGlobe className="w-7 h-7 text-blue-500" />
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Marketplace web app development
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We create reliable, fast and secure marketplaces for B2B and B2C
        businesses. End-to-end development and support of your IT business
        processes.
      </div>
    ),
  },
  {
    uuid: "legacy-refactoring",
    heading: (
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
          <FaTools className="w-7 h-7 text-blue-500" />
        </span>
        <span className="font-semibold text-lg text-gray-800">
          Marketplace software maintenance and support
        </span>
      </div>
    ),
    content: (
      <div className="mt-3 text-gray-600 text-left">
        We provide maintance, monitoring and support of your marketplace. We fix
        issues, solve problems and improve your marketplace.
      </div>
    ),
  },
];

export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Head>
        <title>Online Marketplace Development Services - MVP Agency</title>
        <link
          rel="canonical"
          href="https://mvpagency.org/marketplace-development"
        />
        <meta
          name="description"
          content="We provide online marketplace development services for your business. We help you to automate your business processes and improve your customer experience."
        />
        <meta
          property="og:description"
          content="We provide online marketplace development services for your business. We help you to automate your business processes and improve your customer experience."
        />
        <meta
          property="og:title"
          content="Online Marketplace Development Services"
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            B2B & B2C Marketplace Development from MVP to Enterprise Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Build your own online marketplace to sell products and services.
            Automate your business processes and improve your customer
            experience.
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
            Online Marketplace Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle all the challenges and you focus on your customers.
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
            Key Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We have insights and expertise that helps us build fast and scalable
            marketplaces in the following industries:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaCloud className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                SaaS & Software
              </h3>
              <p className="text-gray-600 text-base">
                We create fast and scalable marketplaces for SaaS and software
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
                We build marketplaces for insurance companies to manage
                insurance claims, policies and customers.
              </p>
            </div>
            {/* FinTech */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                <FaMoneyCheckAlt className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">FinTech</h3>
              <p className="text-gray-600 text-base">
                We build reliable, secure and data-driven marketplaces for
                fintech companies to help you to manage your finances, payments,
                and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Development Process Section */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            How we develop online marketplaces
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We deliver high quality marketplaces for your business. The process
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
                    with us to discuss your marketplace needs. We work with you
                    to understand your problems, goals, and requirements for the
                    marketplace.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step2"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 2: Design and Development phase
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will create a plan to develop your marketplace. The plan
                    will include the following:
                    <ul>
                      <li>Marketplace design</li>
                      <li>Marketplace development</li>
                      <li>Marketplace testing</li>
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
                        Step 3: Launch and support
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We will launch your marketplace and provide support to
                    ensure it runs smoothly.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem
                  uuid="step4"
                  className="bg-white rounded-2xl shadow-sm mb-4"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full px-8 py-6 focus:outline-none">
                      <span className="font-bold text-xl text-gray-800">
                        Step 4: Maintenance and improvements
                      </span>
                      <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pb-6 pt-0">
                    We provide maintenance and improvements to ensure your
                    marketplace is always up to date.
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
            Custom Online Marketplace Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Fast and full-stack development
              </h3>
              <p className="text-gray-600 text-center">
                From building a simple MVP to a full-stack marketplace, we
                deliver fast and scalable marketplaces for your business.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Quality and reliability
              </h3>
              <p className="text-gray-600 text-center">
                We build quality and reliable marketplaces for your business. We
                focus on proven technologies and best practices.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Data-driven approach
              </h3>
              <p className="text-gray-600 text-center">
                We use data to make decisions and improve your marketplace.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Integration and customization
              </h3>
              <p className="text-gray-600 text-center">
                We integrate your marketplace with your existing systems and
                customize it to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center">
            We provide online marketplace development services for
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From small businesses to large enterprises and startups, we provide
            custom online marketplace development services to prevent unexpected
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
                reliable marketplaces.
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
                marketplaces and improve your business.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 mb-4">
                {/* a nice icon for startups */}
                <FaLightbulb className="w-7 h-7 text-blue-500" />
              </span>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Startups</h3>
              <p className="text-gray-600 text-base">
                We optimize your marketplace for time and scale to prevent
                unexpected issues.
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
                  How long does it take to develop an online marketplace
                  platform?
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
                  How much does it cost to develop an online marketplace
                  platform?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We provide a fixed price for online marketplace development
                  services. Because we trust our clients and provide real
                  results.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq3"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  We need to create a marketplace MVP for our startup and pitch
                  it to investors. How long does it take to make an
                  e-marketplace?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  We execute in weeks not months. We can deliver your MVP in 2-3
                  weeks.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              uuid="faq4"
              className="bg-white rounded-lg md:rounded-xl shadow-inner border border-gray-200 mb-2 md:mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="text-base md:text-lg font-medium cursor-pointer flex items-center justify-between w-full px-2 md:px-6 py-4 md:py-5 focus:outline-none">
                  What is the difference between custom online marketplace
                  development and platform based (like Shopify/Wordpress)?
                  <FaChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="px-2 md:px-6 pb-4 md:pb-5 pt-0">
                <p className="text-gray-600 text-base md:text-lg">
                  With custom online marketplace development, we build a
                  marketplace that is specifically designed for your business.
                  We integrate your marketplace with your existing systems and
                  customize it to your business needs. On the other hand,
                  platform based solutions are pre-built marketplaces and
                  limited to the features of the platform, they own the data and
                  you don't have control over your data.
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

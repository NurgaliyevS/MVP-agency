import React from "react";
import Header from "@/components/Header";
import LatestWork from "@/components/LatestWork";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
export default function MVPDevelopmentServices() {
  return (
    <main className="bg-white mx-auto min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="mt-36 mb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-black">
            MVP Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Validate your ideas quickly with an MVP that focuses on market. We
            deliver functional MVPs that avoid unexpected delays and costs,
            helping you launch faster with a focused, agile approach.
          </p>
          <CTAButton />
          <p className="text-sm text-base-content/70 mt-4">
            No commitment, learn how we can help you launch faster
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
            Our MVP development solutions
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            With our extensive knowledge and experience, we provide high-quality
            MVP development services, allowing you to test your product and
            gather valuable feedback easily. Our developers are proficient in
            multiple programming languages, such as Python, Java, Ruby, and
            Node.js. We are also an MVP app development company, so we are
            experts in using popular API frameworks, including Django REST
            Framework, Swagger, and Express.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <span className="text-3xl text-primary">
                  <i className="fa-solid fa-mobile"></i>
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-black">
                MVP App Development Services
              </h3>
              <p className="text-gray-600">
                Fully customized MVP app development for Android and iOS,
                optimized for a wider audience and more feedback.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <span className="text-3xl text-primary">
                  <i className="fa-solid fa-desktop"></i>
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-black">
                MVP Web Development Services
              </h3>
              <p className="text-gray-600">
                Test your solutions, validate market demands, and optimize for
                maximum profit with our web MVP services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
            MVP development services offered by MVP Agency
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6">
              <h4 className="font-semibold text-lg mb-1 text-black">
                Web-Based MVP Development
              </h4>
              <p className="text-gray-600">
                Build web-based MVPs accessible via browser, using the latest
                tools for responsive, scalable, user-friendly products.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6">
              <h4 className="font-semibold text-lg mb-1 text-black">
                Mobile MVP Development
              </h4>
              <p className="text-gray-600">
                Create intuitive mobile MVPs for iOS and Android, gathering
                feedback from mobile users.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6">
              <h4 className="font-semibold text-lg mb-1 text-black">
                Software MVP Development
              </h4>
              <p className="text-gray-600">
                Develop software-based MVPs to demonstrate core functionality
                and assess market potential.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6">
              <h4 className="font-semibold text-lg mb-1 text-black">
                MVP Prototyping
              </h4>
              <p className="text-gray-600">
                Interactive prototypes to visualize and test user experience
                before full-scale development.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 md:col-span-2">
              <h4 className="font-semibold text-lg mb-1 text-black">
                MVP Testing and Iteration
              </h4>
              <p className="text-gray-600">
                Gather feedback, analyze data, and iterate to ensure your final
                product meets user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
            How it works
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <li>
              <span className="font-semibold text-black">
                Initial MVP Assessment:
              </span>{" "}
              Evaluate your goals and needs during a discovery call.
            </li>
            <li>
              <span className="font-semibold text-black">
                Professional MVP Developer Matching:
              </span>{" "}
              Connect with developers specializing in your required
              technologies.
            </li>
            <li>
              <span className="font-semibold text-black">
                Smooth Onboarding Process:
              </span>{" "}
              We manage onboarding to fit your systems and workflows.
            </li>
            <li>
              <span className="font-semibold text-black">
                Constant MVP Development Support:
              </span>{" "}
              Ongoing support and clear communication throughout the process.
            </li>
          </ol>
          <div className="text-center mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
            Why choose MVP Agency for MVP development services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Extensive Talent Pool
              </h3>
              <p className="text-gray-600 text-center">
                Access to excellent MVP developers with great technical skills
                and high work ethic.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-user-gear"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Custom Individual Approach
              </h3>
              <p className="text-gray-600 text-center">
                We customize our services to your particular needs and goals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Cost-Effective Services
              </h3>
              <p className="text-gray-600 text-center">
                Get cost-effective, scalable outsourcing without compromising
                quality.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-3xl text-primary mb-2">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">
                Knowledge and Experience
              </h3>
              <p className="text-gray-600 text-center">
                We stay up-to-date with MVP development tools and trends for
                modern solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section (LatestWork) */}
      <LatestWork />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black text-center">
          MVP Development FAQs
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-xl shadow-inner border border-gray-200 p-4">
            <summary className="text-lg font-medium cursor-pointer">
              How long does it take to develop an MVP with MVP Agency?
            </summary>
            <p className="text-gray-600 mt-2">
              The timeline varies by project complexity and requirements.
              Typically, a functional MVP can be delivered within a few weeks,
              but more complex products may take a few months. We'll provide an
              estimate after a discovery session.
            </p>
          </details>
          <details className="bg-white rounded-xl shadow-inner border border-gray-200 p-4">
            <summary className="text-lg font-medium cursor-pointer">
              How does MVP Agency ensure the quality of the MVP?
            </summary>
            <p className="text-gray-600 mt-2">
              We use comprehensive testing procedures and continuous feedback to
              ensure quality and address issues early.
            </p>
          </details>
          <details className="bg-white rounded-xl shadow-inner border border-gray-200 p-4">
            <summary className="text-lg font-medium cursor-pointer">
              How much does it cost to develop an MVP with MVP Agency?
            </summary>
            <p className="text-gray-600 mt-2">
              Costs depend on project scope and requirements. Contact us for a
              tailored quote.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
            Ready to scale your team?
          </h2>
          <p className="text-base-content/70 mb-8">
            Carry out your MVP project seamlessly with MVP Agency. Test your
            product efficiently, collect feedback, and ensure your MVP meets
            quality and security requirements.
          </p>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

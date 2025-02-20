"use client";

function Pricing() {
  const plans = [
    {
      name: "Growth MVP",
      price: 2499,
      description: "Everything you need to launch your MVP fast",
      features: [
        "Web application development",
        "Clean, responsive landing page",
        "Main integrations (Auth, DB, Analytics)",
        "Payment integration",
        "Hosting and deployment setup",
        "SEO Optimization",
        "Branding and UI/UX"
      ],
      link: "https://buy.stripe.com/4gwdUd106gSA3Nm9AI",
      label: "Buy now"
    },
    {
      name: "Ongoing Partnership",
      price: "",
      description:
        "Customized support and development for your growing product",
      features: [
        "Continuous development and maintenance",
        "Development iterations",
        "Weekly product updates",
        "Bug fixes and support",
        "Perfomance monitoring & control",
        "IT Infrastructure management",
        "Improving planning",
      ],
      link: "https://cal.com/sabyr-nurgaliyev/15min",
      label: "Contact Us"
    },
  ];

  return (
    <section className="py-16 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 flex-col">
          <h2 className="text-3xl font-bold mb-4 text-black flex-col fle">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Launch your MVP in weeks, not months. No hidden fees.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border w-[3/4] lg:w-[398px] ${
                plan.highlight ? "border-primary" : "border-gray-200"
              } relative`}
            >
              {plan.highlight && (
                <div className="bg-primary text-white text-sm py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 pb-3">
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-semibold text-black">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-black">
                      {plan.price ? "$" + plan.price : "Contact Us"}
                    </p>
                    {plan.price ? (
                      <span className="text-gray-500">one-time</span>
                    ) : null}
                  </div>
                  <p className="text-gray-600 text-sm py-2 min-h-12">
                    {plan.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={plan.link}
                    className={`w-full inline-block px-6 py-3.5 text-center text-white font-medium
                      ${
                        plan.highlight
                          ? "btn btn-primary rounded-lg btn-block"
                          : "bg-gray-800 hover:bg-gray-900"
                      } 
                      rounded-lg transition-colors duration-200`}
                    role="button"
                  >
                    {plan.label}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

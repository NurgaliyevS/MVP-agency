'use client'

function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      price: 499,
      description: "Launch your idea",
      features: [
        "Professional landing page",
        "7-day delivery",
        "Mobile optimization",
        "Easy content updates",
        "Hosting setup",
        "Custom domain setup",
        "14 days tech support"
      ],
      link: "https://buy.stripe.com/cN24jDdMSeKs83C6ou"
    },
    {
      name: "Lean MVP",
      price: 999,
      description: "Turn your idea into a working product",
      highlight: "Most Popular",
      features: [
        "Professional landing page",
        "Core feature development",
        "User authentication",
        "14-day delivery",
        "Two revision rounds",
        "Hosting setup",
        "SEO optimization",
        "30 days tech support"
      ],
      link: "https://buy.stripe.com/fZe3fz8sy1XGgA8eV1"
    },
    {
      name: "Growth MVP",
      price: 1497,
      description: "Scale your MVP with advanced features",
      features: [
        "Everything in Lean MVP",
        "3 custom features",
        "Admin dashboard",
        "Analytics integration",
        "Performance optimization",
        "Advanced SEO setup",
        "Scale-ready architecture"
      ],
      link: "https://buy.stripe.com/4gwdUd106gSA3Nm9AI"
    }
  ]

  return (
    <section className="py-16 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Launch your MVP in weeks, not months. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border ${plan.highlight ? 'border-primary' : 'border-gray-200'} relative`}>
              {plan.highlight && (
                <div className="bg-primary text-white text-sm py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 pb-3">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-black">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-black">
                      ${plan.price}
                    </p>
                    <span className="text-gray-500">one-time</span>
                  </div>
                  <p className="text-gray-600 text-sm pb-2">{plan.description}</p>
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
                      ${plan.highlight 
                        ? 'btn btn-primary rounded-lg btn-block' 
                        : 'bg-gray-800 hover:bg-gray-900'} 
                      rounded-lg transition-colors duration-200`}
                    role="button"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
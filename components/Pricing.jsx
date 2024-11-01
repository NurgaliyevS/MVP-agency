function Pricing() {
  const features = [
    "7 days delivery",
    "1 core feature",
    "1 round of revisions",
    "Basic hosting setup",
    "Deploy & setup domain",
  ];

  return (
    <section className="py-16 px-4" id="pricing">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Pricing
        </h2>
        <div className="bg-white rounded-xl overflow-hidden w-full lg:w-1/2 mx-auto shadow-inner border border-gray-200">
          <div className="p-6 pb-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-black">MVP</h3>
              <p className="text-3xl text-black font-bold">$3,000</p>
              <span>Bring your own design</span>
            </div>
          </div>
          <ul className="p-6 pt-0 space-y-4 pb-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1"
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
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 mx-auto pt-3">
            <a
              href="https://cal.com/sabyr-nurgaliyev/15min"
              className="btn btn-primary rounded-lg btn-block"
              role="button"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

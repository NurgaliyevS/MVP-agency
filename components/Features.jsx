function Features() {
  const comparisonData = [
    {
      traditional: "3-6 months to build",
      mvpAgency: "Launch in weeks",
    },
    {
      traditional: "$20,000+ for a basic MVP",
      mvpAgency: "From $2499 for MVP",
    },
    {
      traditional: "Hiring 3-5 developers at $100k+/year each",
      mvpAgency: "One expert developer",
    },
    {
      traditional: "Endless meetings and slow progress",
      mvpAgency: "Fast updates",
    },
    {
      traditional: "Tech arguments",
      mvpAgency: "Proven tools (Next.js, React)",
    },
    {
      traditional: "Security risks",
      mvpAgency: "Bank-level security",
    },
    {
      traditional: "Crashes under load",
      mvpAgency: "Handles big crowds",
    },
    {
      traditional: "Slow updates",
      mvpAgency: "Quick updates",
    },
    {
      traditional: "Hidden costs",
      mvpAgency: "Clear pricing",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-black">
          Why MVP Agency?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-gray-200">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center line-through">
                Traditional Approach
              </h3>
            </div>
            <ul className="p-6 space-y-4">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>{item.traditional}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-gray-200">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center">
                With MVP Agency
              </h3>
            </div>
            <ul className="p-6 space-y-4">
              {comparisonData.map((item, index) => (
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
                  <span>{item.mvpAgency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-8 my-8">
        <a
          href="https://cal.com/sabyr-nurgaliyev/mvp-agency"
          className="btn btn-primary btn-md lg:btn-lg px-12 py-2 rounded-full text-white"
          role="button"
          target="_blank"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

export default Features;

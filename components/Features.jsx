function Features() {
  const comparisonData = [
    {
      traditional: "6-12 months of development time",
      mvpAgency: "MVP ready in 7 days",
    },
    {
      traditional: "$50,000+ for a basic MVP",
      mvpAgency: "Fixed price starting at $3,000",
    },
    {
      traditional: "Hiring 3-5 developers at $100k+/year each",
      mvpAgency: "Experienced full-stack developer with 5+ years",
    },
    {
      traditional: "Endless meetings and slow progress",
      mvpAgency: "Weekly updates and rapid iterations",
    },
    {
      traditional: "Constant tech stack debates and changes",
      mvpAgency: "Optimized, modern tech stack (Next.js, React)",
    },
    {
      traditional: "Security vulnerabilities from inexperience",
      mvpAgency: "Enterprise-grade security measures",
    },
    {
      traditional: "Scalability issues as users grow",
      mvpAgency: "Built to scale to 100,000 of users",
    },
    {
      traditional: "Painful deployment process taking days",
      mvpAgency: "One-click Vercel deployment",
    },
    {
      traditional: "Limited support during critical times",
      mvpAgency: "24/7 tech support for 30 days post-launch",
    },
    {
      traditional: "Hidden costs and scope creep",
      mvpAgency: "Transparent, all-inclusive pricing",
    },
    {
      traditional: "Outdated tech by launch time",
      mvpAgency: "Cutting-edge tech (AI integration ready)",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Why MVP Agency?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2 text-center line-through">
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2 text-center">
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
          href="https://cal.com/sabyr-nurgaliyev/15min"
          className="btn btn-primary btn-md lg:btn-lg px-8 rounded-3xl"
          role="button"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

export default Features;

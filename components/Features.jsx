function Features() {
  const comparisonData = [
    {
      traditional: "6-12 months of development time",
      astroMVP: "MVP ready in 7 days",
    },
    {
      traditional: "$50,000+ for a basic MVP",
      astroMVP: "Fixed price starting at $3,000",
    },
    {
      traditional: "Hiring 3-5 developers at $100k+/year each",
      astroMVP: "Experienced full-stack developer",
    },
    {
      traditional: "Endless meetings and slow progress",
      astroMVP: "Weekly updates and rapid iterations",
    },
    {
      traditional: "Constant tech stack debates and changes",
      astroMVP: "Optimized, modern tech stack (Next.js, React)",
    },
    {
      traditional: "Security vulnerabilities from inexperience",
      astroMVP: "Enterprise-grade security measures",
    },
    {
      traditional: "Scalability issues as users grow",
      astroMVP: "Built to scale to 100,000 of users",
    },
    {
      traditional: "Painful deployment process taking days",
      astroMVP: "One-click Vercel deployment",
    },
    {
      traditional: "Limited support during critical times",
      astroMVP: "24/7 tech support for 30 days post-launch",
    },
    {
      traditional: "Hidden costs and scope creep",
      astroMVP: "Transparent, all-inclusive pricing",
    },
    {
      traditional: "High risk of project failure (>60%)",
      astroMVP: "95% client satisfaction rate",
    },
    {
      traditional: "Outdated tech by launch time",
      astroMVP: "Cutting-edge tech (AI integration ready)",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Why MVP Agency?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  <span>{item.astroMVP}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

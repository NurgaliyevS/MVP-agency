import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer(props) {
  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 gap-2">
              <img
                src="/company_related/favicon-192x192.png"
                alt="MVP AGENCY"
                className="w-8 h-8"
              />
              <h3 className="font-bold text-xl text-black">MVP AGENCY</h3>
            </div>
            <p className="text-sm opacity-70 pl-1">Let's work together!</p>
            <nav className="flex gap-4 mt-3 justify-start">
              <Link
                href="https://x.com/tech_nurgaliyev"
                target="_blank"
                title="X tech_nurgaliyev"
              >
                <Image
                  src={"/x.png"}
                  alt="X"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sabyr-n-43b4a822a/"
                target="_blank"
                title="Linkedin sabyr-nurgaliyev"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.producthunt.com/@tech_nurgaliyev"
                target="_blank"
                title="ProductHunt tech_nurgaliyeev"
              >
                <Image
                  src={"/productHunt.svg"}
                  alt="ProductHunt"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-black">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mvp-development-services"
                  className="text-sm hover:text-primary"
                  title="MVP Development Services"
                >
                  MVP Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="/mvp-development"
                  className="text-sm hover:text-primary"
                  title="MVP Software Development Services"
                >
                  MVP Software Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="/web-application-development"
                  className="text-sm hover:text-primary"
                  title="Web Application Development Services"
                >
                  Web Application Development Services
                </Link>
              </li>

              <li>
                <Link
                  href="/maintenance-and-support"
                  className="text-sm hover:text-primary"
                  title="IT Maintenance and Support Services"
                >
                  IT Maintenance and Support Services
                </Link>
              </li>
              <li>
                <Link
                  href="/online-marketplace-development"
                  className="text-sm hover:text-primary"
                  title="Online Marketplace Development Services"
                >
                  Online Marketplace Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="/saas-development-services"
                  className="text-sm hover:text-primary"
                  title="SaaS Development Services"
                >
                  SaaS Development Services
                </Link>
              </li>
              <li>
                <Link
                  href="/javascript-development"
                  className="text-sm hover:text-primary"
                  title="JavaScript Development Services"
                >
                  JavaScript Development Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-black">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:nurgasab@gmail.com"
                  className="text-sm hover:text-primary"
                  title="Contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-sm hover:text-primary"
                  title="Work"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm hover:text-primary"
                  title="Pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-primary"
                  title="Blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-primary"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/tos"
                  className="text-sm hover:text-primary"
                  title="Terms of Service"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-black">Recent Work</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://www.redditscheduler.com/"
                  target="_blank"
                  title="RedditScheduler - Home Page"
                >
                  RedditScheduler
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://pregnantmeal.com/"
                  target="_blank"
                  title="Pregnant Meal - Home Page"
                >
                  PregnantMeal
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://redditagency.com/"
                  target="_blank"
                  title="Reddit Agency - Home Page"
                >
                  Reddit Agency
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://bestwebsitegames.com/"
                  target="_blank"
                  title="Best Website Games - Home Page"
                >
                  Best Website Games
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://subpage.io/"
                  target="_blank"
                  title="Subpage.io - Home Page Builder"
                >
                  SubPage
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://uptimefriend.com/"
                  target="_blank"
                  title="Uptime Friend - Home Page"
                >
                  UptimeFriend
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://tripplanss.com/"
                  target="_blank"
                  title="Trip Planss - Home Page"
                >
                  TripPlanss
                </Link>
              </li>

              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="http://weeealth.com/"
                  target="_blank"
                  title="Weeealth - Home Page"
                >
                  Weeealth
                </Link>
              </li>

              <li>
                <Link
                  className="text-sm hover:text-primary"
                  href="https://environmentaljobboards.com/"
                  target="_blank"
                  title="Environmental Job Boards - Home Page"
                >
                  Environmental Job Boards
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm opacity-70">
          © {new Date().getFullYear()} MVP AGENCY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

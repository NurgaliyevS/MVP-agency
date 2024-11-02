import React from "react";
import Link from "next/link";

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
          </div>
          <div>
            <h4 className="font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#work" className="text-sm hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-black">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-black">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:nurgasab@gmail.com"
                  className="text-sm hover:text-primary"
                >
                  nurgasab@gmail.com
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

import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">MVP AGENCY</h3>
            <p className="text-sm opacity-70">
              Building the future of rapid product development
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
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
            <h4 className="font-bold mb-4">Contact</h4>
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
        <div className="mt-8 pt-8 text-center text-sm opacity-70 border-t border-neutral-content/20">
          © {new Date().getFullYear()} MVP AGENCY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BlogHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl flex items-center justify-between px-4 md:px-8 py-4 mx-auto">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center space-x-2 lg:w-1/3 transition-transform hover:scale-105 flex-1"
          >
            <img
              src="/company_related/favicon-192x192.png"
              alt="MVP AGENCY"
              className="w-8 h-8"
            />
            <div className="text-xl font-bold text-gray-800">MVP AGENCY</div>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          <Link
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            href="/blog"
            title="mvpagency.org blog page"
          >
            <span className="font-bold text-lg">All Posts</span>
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            href="/#pricing"
            title="Pricing"
          >
            <span className="font-bold text-lg">Pricing</span>
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            href="/#work"
            title="Recent work"
          >
            <span className="font-bold text-lg">Work</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <a
            href="https://cal.com/sabyr-nurgaliyev/15min"
            className="btn btn-primary btn-md lg:btn-lg px-8 rounded-full shadow-md hover:shadow-lg transition-shadow"
            role="button"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-10 overflow-y-auto bg-white shadow-xl sm:max-w-sm sm:ring-1 sm:ring-gray-200 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/company_related/favicon-192x192.png"
                alt="MVP AGENCY"
                className="w-8 h-8"
              />
              <div className="text-xl font-bold text-gray-800">MVP AGENCY</div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-6 items-start">
                <Link
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors"
                  href="/blog"
                  title="mvpagency.org blog page"
                  onClick={() => setIsOpen(false)}
                >
                  All Posts
                </Link>
                <Link
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors"
                  href="/#pricing"
                  title="Pricing"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors"
                  href="/#work"
                  title="Recent work"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 my-6"></div>
            <div className="flex flex-col">
              <a
                href="https://cal.com/sabyr-nurgaliyev/15min"
                className="btn btn-primary btn-md px-8 rounded-full shadow-md"
                role="button"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BlogHeader;

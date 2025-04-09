import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full transition-colors duration-300 bg-transparent pt-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 lg:w-1/4">
          <img src="/company_related/favicon-192x192.png" alt="MVP AGENCY" className="w-8 h-8" />
          <div className="text-xl font-bold text-black">MVP AGENCY</div>
        </Link>
        <nav className="hidden md:flex items-center justify-center space-x-8 lg:w-1/2">
          <Link href="#work" className="link link-hover">
            Work
          </Link>
          <Link href="#pricing" className="link link-hover">
            Pricing
          </Link>
          <Link
            href="https://cal.com/sabyr-nurgaliyev/mvp-agency"
            className="link link-hover"
          >
            Book a Call
          </Link>
        </nav>
        <div className="lg:w-1/4"></div>
        <div className="md:hidden">
          <button
            className="text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#work" className="text-base hover:text-primary">
              Work
            </Link>
            <Link href="#pricing" className="text-base hover:text-primary">
              Pricing
            </Link>
            <Link
              href="https://cal.com/sabyr-nurgaliyev/mvp-agency"
              className="text-base hover:text-primary"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;


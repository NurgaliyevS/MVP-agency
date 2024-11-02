import React from "react";
import Link from "next/link";

function Header(props) {
  return (
    <header className="w-full transition-colors duration-300 bg-transparent pt-4">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center space-x-2 w-1/3">
          <img src="/company_related/favicon-192x192.png" alt="MVP AGENCY" className="w-8 h-8" />
          <div className="text-xl font-bold text-black">MVP AGENCY</div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#work" className="text-sm hover:text-primary">
            Work
          </Link>
          <Link href="#pricing" className="text-sm hover:text-primary">
            Pricing
          </Link>
          <Link
            href="https://cal.com/sabyr-nurgaliyev/15min"
            className="text-sm hover:text-primary"
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

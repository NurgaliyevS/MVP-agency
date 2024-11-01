import React from "react";
import Link from "next/link";

function Header(props) {
  return (
    <header className="w-full transition-colors duration-300 bg-transparent pt-4">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center space-x-2 w-1/3">
          <div className="text-xl font-bold text-black">MVP AGENCY</div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-sm hover:text-primary">
            How It Works
          </Link>
          <Link href="#features" className="text-sm hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="text-sm hover:text-primary">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

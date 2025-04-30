import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-transparent transition-all duration-300"
      style={{ pointerEvents: 'none' }}
    >
      <div
        className={`transition-all duration-300
          ${isScrolled ? "bg-white shadow-lg rounded-full" : "bg-transparent"}
          flex items-center justify-between"
          ${isScrolled ? "" : "mx-auto"}
        `}
        style={{
          width: isScrolled ? '600px' : '100%',
          maxWidth: isScrolled ? '600px' : '100vw',
          transform: isScrolled ? 'translate3d(0, 20px, 0) scale(0.9)' : 'none',
          transformOrigin: '50% 50% 0px',
          marginTop: isScrolled ? '0' : '2rem',
          pointerEvents: 'auto',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/company_related/favicon-192x192.png" alt="MVP AGENCY" className="w-8 h-8" />
            <div className="text-xl font-bold text-black">MVP AGENCY</div>
          </Link>
          <nav className="hidden md:flex justify-center space-x-8">
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
        </div>
      </div>
    </header>
  );
}

export default Header;


import Header from "./Header";
import Hero from "./Hero";
import LatestWork from "./LatestWork";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Latest Work Section */}
      <LatestWork />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

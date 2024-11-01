import Header from "./Header";
import Hero from "./Hero";
import LatestWork from "./LatestWork";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import CTASection from "./CTASection";
import Footer from "./Footer";

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

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full transition-colors duration-300 bg-transparent">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2 w-1/3">
            <div className="text-xl font-bold">MVP AGENCY</div>
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-7xl font-extrabold leading-tight tracking-tight mb-6">
            From idea to MVP
            <br />
            <span className="text-primary inline-block">launch in 7 days</span>
          </h1>
          <div className="max-w-3xl mx-auto mb-8"></div>
          <button className="btn btn-primary btn-lg px-8">
            Book a Discovery Call
          </button>
          <p className="text-sm text-base-content/70 mt-4">
            No commitment, learn how we can help you launch faster
          </p>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Latest Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <figure>
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Project screenshot"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Describe your idea",
                description: "Share your vision and requirements with our expert team",
              },
              {
                title: "Select your features",
                description: "Choose the essential features for your MVP launch",
              },
              {
                title: "Launch with confidence",
                description: "Get your product to market in record time",
              },
            ].map((step, index) => (
              <div key={index} className="card bg-base-100 shadow-xl text-center">
                <div className="card-body">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MVP AGENCY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Fast Deployment",
                description: "Launch in days, not weeks",
              },
              {
                title: "Cost-Effective",
                description: "Avoid overspending with targeted features",
              },
              {
                title: "AI-Powered Tools",
                description: "Leverage the latest in AI for building and testing",
              },
              {
                title: "Scalable Solutions",
                description: "Build a solid foundation for future growth",
              },
            ].map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
          <p className="text-base-content/70 mb-8">Get started with MVP AGENCY today!</p>
          <button className="btn btn-primary btn-lg px-8">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">MVP AGENCY</h3>
              <p className="text-sm opacity-70">Building the future of rapid product development</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">How It Works</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">hello@mvpagency.com</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center text-sm opacity-70">
            © {new Date().getFullYear()} MVP AGENCY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
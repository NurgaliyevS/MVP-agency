import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingPage() {

  return (
    (<div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 bg-transparent`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold">MVP AGENCY</div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-50">
              Contact Us
            </Link>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            ☰
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="flex justify-center items-center gap-1 mb-4">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">5/5 from 6 reviews</span>
          </div>
          <div
            className="inline-block bg-red-100 text-red-600 rounded-full px-4 py-1 text-sm mb-6">
            Stop wasting $50k+ on your startup
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Fire your agency,{""}
            <span
              className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              launch in 2 weeks
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {[
              "MVP in 2-4 weeks",
              "Web app & landing page",
              "Handover documentation",
              "VC-funded expertise"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
            Book a Discovery Call
          </Button>
          <p className="text-sm text-neutral-500 mt-4 dark:text-neutral-400">
            No commitment, learn how we can help you launch faster
          </p>
        </div>
      </section>
      {/* Latest Work Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Latest Work</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-pink-200">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Project screenshot"
                  width={1200}
                  height={600}
                  className="w-full h-auto" />
              </CardContent>
            </Card>
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
                description: "Share your vision and requirements with our expert team"
              },
              {
                title: "Select your features",
                description: "Choose the essential features for your MVP launch"
              },
              {
                title: "Launch with confidence",
                description: "Get your product to market in record time"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div
                    className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-pink-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MVP AGENCY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Fast Deployment",
                description: "Launch in days, not weeks"
              },
              {
                title: "Cost-Effective",
                description: "Avoid overspending with targeted features"
              },
              {
                title: "AI-Powered Tools",
                description: "Leverage the latest in AI for building and testing"
              },
              {
                title: "Scalable Solutions",
                description: "Build a solid foundation for future growth"
              }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
          <p className="text-neutral-500 mb-8 dark:text-neutral-400">Get started with MVP AGENCY today!</p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
            Get Started
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">MVP AGENCY</h3>
              <p className="text-slate-400 text-sm">
                Building the future of rapid product development
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    hello@mvpagency.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} MVP AGENCY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>)
  );
}
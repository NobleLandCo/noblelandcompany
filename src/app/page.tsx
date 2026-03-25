import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import { ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Your Vacant Land Fast for Cash | Noble Land Co.",
  description:
    "Noble Land Co. buys vacant and unused land with fast, fair cash offers. No fees, no hassle. Close in 30 days or less. Get your free offer today.",
  alternates: {
    canonical: "https://www.noblelandcompany.com",
  },
  openGraph: {
    title: "Sell Your Vacant Land Fast for Cash | Noble Land Co.",
    description:
      "Noble Land Co. buys vacant and unused land with fast, fair cash offers. No fees, no hassle. Close in 30 days or less. Get your free offer today.",
    url: "https://www.noblelandcompany.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

// LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Noble Land Co.",
  description:
    "Noble Land Co. buys vacant and unused land with fast, fair cash offers. No fees, no hassle. Close in 30 days or less.",
  url: "https://www.noblelandcompany.com",
  email: "info@noblelandcompany.com",
  sameAs: ["https://www.noblelandcompany.com"],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "Free — No Fees",
  openingHours: "Mo-Fr 09:00-18:00",
};

const testimonials = [
  {
    quote:
      "Noble Land Co. made selling my inherited property effortless. They handled everything and I received my funds in just 3 weeks. Couldn't be happier.",
    name: "Sarah M.",
    location: "Texas",
  },
  {
    quote:
      "I was skeptical at first, but they were completely transparent throughout. No hidden fees, no surprises. Just a fair offer and a smooth process.",
    name: "James R.",
    location: "Ohio",
  },
  {
    quote:
      "After years of paying taxes on land I never used, they helped me move on quickly. Honest, fast, and professional.",
    name: "Linda K.",
    location: "Florida",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Us */}
      <WhyUs />

      {/* About Teaser */}
      <section className="py-20 bg-[#f0ece3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-6">
                Land Ownership Should Feel Empowering
              </h2>
              <p className="text-[#6b6560] leading-relaxed mb-4">
                At Noble Land Co., our story began with a simple idea: land
                ownership should feel empowering, not overwhelming. Founded by
                people who believe in honesty, transparency, and long-term
                value, we set out to create a land-buying experience rooted in
                trust and purpose.
              </p>
              <p className="text-[#6b6560] leading-relaxed mb-8">
                The name &ldquo;Noble&rdquo; reflects our core belief that every plot of
                land holds potential — not just as property, but as a foundation
                for future dreams, growth, and legacy.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-sm px-6 py-2.5 transition-colors"
              >
                Our Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Peaceful green countryside land representing Noble Land Co.'s mission"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Badge overlay */}
              <div className="absolute -bottom-4 -left-4 bg-[#2d5016] text-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl font-black text-[#d4a017]">100%</div>
                <div className="text-xs text-white/80 font-medium">Cash Offers<br />No Hidden Fees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-label="Customer testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
              What Sellers Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
              Real People, Real Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#faf8f3] border border-[#e2ddd4] rounded-xl p-7 flex flex-col"
              >
                <Quote className="w-8 h-8 text-[#b8860b] mb-4 flex-shrink-0" aria-hidden="true" />
                <p className="text-[#4a4540] leading-relaxed text-sm flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2d5016]/10 flex items-center justify-center text-[#2d5016] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a15] text-sm">{t.name}</div>
                    <div className="text-[#6b6560] text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Your Free Cash Offer?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            It takes less than 2 minutes. No obligation, no pressure. Just an
            honest offer for your land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3 shadow-lg shadow-black/20 transition-all hover:scale-105"
            >
              Let&apos;s Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold text-base px-8 py-3 transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const trustPoints = [
  "No Fees or Commissions",
  "Close in 30 Days or Less",
  "100% Cash Offers",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3810] via-[#2d5016] to-[#3d6b1e] text-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Decorative gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4a017] animate-pulse" />
            Trusted Land Buyers Nationwide
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Sell Your Land Fast
            <span className="block text-[#d4a017]">for a Fair Cash Offer</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            At Noble Land Co., we make selling your unused or inherited land
            simple, transparent, and stress-free. No agents, no fees, no
            surprises — just an honest cash offer and a smooth closing.
          </p>

          {/* Trust points */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle className="w-4 h-4 text-[#d4a017] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3 shadow-lg shadow-black/20 transition-all hover:scale-105"
            >
              Get My Free Cash Offer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold text-base px-8 py-3 backdrop-blur-sm transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
            fill="#faf8f3"
          />
        </svg>
      </div>
    </section>
  );
}

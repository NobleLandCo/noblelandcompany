import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Heart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Noble Land Co. | Trusted Land Buyers",
  description:
    "Learn about Noble Land Co. — a land buying company founded on honesty, transparency, and respect for families navigating the process of selling unused or inherited land.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/about",
  },
  openGraph: {
    title: "About Noble Land Co. | Trusted Land Buyers",
    description:
      "Learn about Noble Land Co. — founded on honesty, transparency, and long-term value. We help families sell unused or inherited land with dignity and care.",
    url: "https://www.noblelandcompany.com/about",
  },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      'The name \u201cNoble\u201d isn\u2019t just branding \u2014 it\u2019s a commitment. We do what we say, say what we mean, and never cut corners at the expense of the people we serve.',
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no confusing contracts, no bait-and-switch offers. We walk you through every step so you always know exactly where things stand.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description:
      "Selling land — especially inherited land — is personal. We approach every relationship with genuine care and respect for the emotional weight involved.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "From first contact to final wire transfer, we hold ourselves to the highest standard of service because you deserve nothing less.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a017] mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Noble Land Co.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Founded on a simple belief: every landowner deserves honesty,
            respect, and a fair deal — no matter the size of their property.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-6">
                Where Noble Land Co. Began
              </h2>
              <div className="space-y-4 text-[#6b6560] leading-relaxed">
                <p>
                  At Noble Land Co., our story began with a simple idea: that
                  land ownership should feel empowering, not overwhelming.
                  Founded by people who believe in honesty, transparency, and
                  long-term value, we set out to create a land-buying and
                  selling experience rooted in trust and purpose.
                </p>
                <p>
                  The name &ldquo;Noble&rdquo; is about integrity. It reflects our core
                  belief that every plot of land holds potential — not just as
                  property, but as a foundation for future dreams, growth, and
                  legacy.
                </p>
                <p>
                  We understand that buying or selling land is often more than a
                  transaction — it&apos;s a step toward something meaningful. That&apos;s
                  why we focus on real people, real stories, and real solutions.
                  Whether you&apos;re selling your first acre or passing land on to
                  the next generation, we&apos;re here to guide you every step of the
                  way.
                </p>
                <p>
                  At Noble Land Co., we&apos;re not just buying land — we&apos;re helping
                  you claim your place in the world, with dignity, transparency,
                  and care.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
                alt="Rolling green fields representing the land Noble Land Co. helps families sell"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
              Our Values
            </h2>
            <p className="text-[#6b6560] text-lg max-w-2xl mx-auto">
              These aren&apos;t just words on a wall. They&apos;re the principles we hold
              ourselves to in every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card
                  key={v.title}
                  className="border border-[#e2ddd4] hover:border-[#2d5016]/30 hover:shadow-md transition-all group"
                >
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-[#f0ece3] flex items-center justify-center mb-5 group-hover:bg-[#2d5016] transition-colors">
                      <Icon className="w-6 h-6 text-[#2d5016] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a15] mb-2">{v.title}</h3>
                    <p className="text-[#6b6560] text-sm leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-[#f0ece3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-6">
            Built for Families, Not Corporations
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed mb-8">
            We work with young families looking to sell unused or inherited land
            — people who may have received land they don&apos;t know what to do with,
            or who simply need to move on quickly. We&apos;re also here for property
            owners who have been holding vacant land and feel the weight of
            ongoing taxes and upkeep.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed mb-10">
            Whatever your situation, Noble Land Co. will work with you every
            step of the way, because we believe you deserve a smooth, transparent
            experience. No hidden fees. No surprises. Just honest guidance and
            real solutions — so you can focus on what truly matters.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-base px-8 py-3 transition-colors"
          >
            Get Your Free Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}

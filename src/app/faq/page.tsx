import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion, { type FAQItem } from "@/components/faq-accordion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Selling Your Land to Noble Land Co.",
  description:
    "Get answers to common questions about selling your land to Noble Land Co. Learn about our process, timeline, fees, and what types of land we buy.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/faq",
  },
  openGraph: {
    title: "FAQ | Selling Your Land to Noble Land Co.",
    description:
      "Answers to your most common questions about selling land — process, fees, timeline, and more. Noble Land Co. makes it simple.",
    url: "https://www.noblelandcompany.com/faq",
  },
};

export const faqItems: FAQItem[] = [
  {
    question: "How does the land buying process work?",
    answer:
      "We send you a cash offer based on our property research. If you're interested, contact us and we'll discuss the details. Once you're ready to move forward, we verify property details, handle all legal work through a local title company, and wire your funds directly to you — all within 30 business days.",
  },
  {
    question: "How fast can you close?",
    answer:
      "Most of our transactions close within 30 business days. We handle all paperwork, title work, and closing costs — so there are no delays on your end. In some cases, we can move even faster depending on the complexity of the title and property details.",
  },
  {
    question: "Do I have to pay any fees?",
    answer:
      "Absolutely not. Noble Land Co. covers 100% of closing costs and fees. There are zero out-of-pocket expenses for you at any point in the process. What we offer is exactly what you receive — no deductions, no surprises.",
  },
  {
    question: "What types of land do you buy?",
    answer:
      "We buy all types of vacant land: inherited land, unused rural parcels, agricultural and farmland, undeveloped lots, landlocked parcels, and more. Any condition, any location across the United States. Even if your land has issues — back taxes, unclear title, remote location — we're interested.",
  },
  {
    question: "How do you determine your cash offer?",
    answer:
      "We research comparable sales in the area, analyze the property's location, size, zoning classification, access, and current market conditions. Our goal is to provide a fair and competitive cash offer that reflects the actual market value of your land.",
  },
  {
    question: "What if I still owe taxes on my land?",
    answer:
      "We regularly work with properties that have delinquent or back taxes. This doesn't disqualify your land. We'll discuss the specifics during our consultation and find a solution that works for both parties — often rolling outstanding taxes into the transaction so you have nothing to pay upfront.",
  },
  {
    question: "Do I need a real estate agent?",
    answer:
      "No. We buy land directly from owners with no agents, no commissions, and no middlemen. This means you keep more of the sale price, and the process is faster and simpler without multiple parties involved.",
  },
  {
    question: "What if I inherited land and don't know what to do?",
    answer:
      "We specialize in helping families navigate inherited land situations. We understand that it can be overwhelming — especially with probate, unclear titles, or multiple heirs involved. We'll guide you through every step, from verifying ownership and resolving title issues to closing and transferring funds.",
  },
];

// FAQPage JSON-LD Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a017] mb-4">
            Got Questions?
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Selling your property is a big decision, but it doesn&apos;t have to be
            a difficult process. We aim to make each transaction fast, easy, and
            fair.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />

          {/* Still have questions */}
          <div className="mt-14 bg-white border border-[#e2ddd4] rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a1a15] mb-3">
              Still Have Questions?
            </h2>
            <p className="text-[#6b6560] mb-6">
              We&apos;re happy to answer anything that wasn&apos;t covered above. Reach out
              and a friendly team member will get back to you promptly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-sm px-6 py-2.5 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#f0ece3] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a15] mb-4">
            Ready to Get Your Free Cash Offer?
          </h2>
          <p className="text-[#6b6560] mb-6">
            No obligation. No pressure. Just an honest offer for your land.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3 transition-all hover:scale-105"
          >
            Get My Free Offer &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

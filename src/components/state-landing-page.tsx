import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, DollarSign, MapPin, Phone, Mail, FileText } from "lucide-react";

export interface StateLandingPageProps {
  state: string;
  stateAbbr: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  /** Unique selling angle paragraph(s) */
  angleContent: React.ReactNode;
  /** Steps customization — defaults provided if omitted */
  steps?: { title: string; description: string }[];
  /** Why choose us bullets */
  benefits: string[];
  /** Types of land we buy */
  landTypes: string[];
  /** County names to display */
  counties: string[];
  /** Total county count in the state */
  totalCounties: number;
  /** FAQ items */
  faqs: { question: string; answer: string }[];
  /** Optional bottom CTA text override */
  ctaHeadline?: string;
  ctaDescription?: string;
  /** Unsplash image URL for hero */
  heroImage?: string;
}

const defaultSteps = [
  {
    title: "Tell Us About Your Property",
    description:
      "Send us your property details — address, county, parcel number, or even just a rough description. We'll take it from there.",
  },
  {
    title: "Get a Fair Cash Offer",
    description:
      "Within 24 hours, we'll research your property and send you an honest cash offer. No obligation, no pressure.",
  },
  {
    title: "Get Paid",
    description:
      "Accept the offer, and we handle everything — title work, closing costs, paperwork. You get your money wired directly to you in 30 days or less.",
  },
];

export default function StateLandingPage({
  state,
  stateAbbr,
  heroHeadline,
  heroSubheadline,
  heroDescription,
  angleContent,
  steps,
  benefits,
  landTypes,
  counties,
  totalCounties,
  faqs,
  ctaHeadline,
  ctaDescription,
  heroImage,
}: StateLandingPageProps) {
  const stepsToRender = steps ?? defaultSteps;
  const stepIcons = [FileText, DollarSign, CheckCircle];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-20 md:py-28 overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a017] mb-4">
              {stateAbbr} Land Buyers
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {heroHeadline}
            </h1>
            <p className="text-xl text-white/90 mb-4 font-medium">
              {heroSubheadline}
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3.5 shadow-lg shadow-black/20 transition-all hover:scale-105"
              >
                Get My Free Cash Offer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold text-base px-8 py-3.5 transition-colors"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Angle Content */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {angleContent}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
              How It Works — 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stepsToRender.map((step, i) => {
              const Icon = stepIcons[i] ?? CheckCircle;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#2d5016] flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-[#b8860b] mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a15] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6560] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#f0ece3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-8">
                Why {state} Landowners Choose Noble Land Co.
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d5016] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4a4540] leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#e2ddd4] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a15] mb-6">
                Types of {state} Land We Buy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {landTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#4a4540] text-sm">
                    <MapPin className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
            Statewide Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
            We Buy Land in All {totalCounties} {state} Counties
          </h2>
          <p className="text-[#6b6560] mb-10 max-w-2xl mx-auto">
            Including these active markets — but don&rsquo;t see your county? We still buy there.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {counties.map((county) => (
              <span
                key={county}
                className="px-3 py-1.5 bg-[#f0ece3] border border-[#e2ddd4] rounded-full text-sm text-[#4a4540] font-medium"
              >
                {county}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
              Questions {state} Landowners Ask Us
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2ddd4] rounded-xl p-6"
              >
                <h3 className="font-bold text-[#1a1a15] mb-2">{faq.question}</h3>
                <p className="text-[#6b6560] leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {ctaHeadline ?? `Ready to Sell Your ${state} Land?`}
          </h2>
          <p className="text-white/80 text-lg mb-4">
            {ctaDescription ??
              "Get your free, no-obligation cash offer today. It takes less than 2 minutes."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 mb-8">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@noblelandcompany.com
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3.5 shadow-lg shadow-black/20 transition-all hover:scale-105"
          >
            Get My Free Cash Offer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

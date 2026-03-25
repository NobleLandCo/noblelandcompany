import { Mail, FileCheck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    icon: Mail,
    title: "We Connect",
    description:
      "You'll receive a cash offer letter from us. If you're interested, give us a call or send an email — we'd love to go over the details. Found us online? No problem, you can start right here.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "We Prepare",
    description:
      "Once you're ready to move forward, we verify property details and handle all legal work through a local title company. When possible, we'll send a mobile notary to you for convenient signing.",
  },
  {
    step: "03",
    icon: DollarSign,
    title: "You Get Paid",
    description:
      "We cover all closing costs and fees. Transactions close in 30 business days or less, and your funds are wired directly to you — fast, simple, and completely hassle-free.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-brand-cream" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
            Simple 3-Step Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
            How Selling Your Land Works
          </h2>
          <p className="text-[#6b6560] text-lg max-w-2xl mx-auto">
            We&apos;ve simplified the land-selling process so you can focus on what
            matters most — not paperwork.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#2d5016]/20 via-[#b8860b]/40 to-[#2d5016]/20"
            aria-hidden="true"
          />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.step}
                className="relative border border-[#e2ddd4] bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <CardContent className="p-8">
                  {/* Step number */}
                  <span className="absolute top-4 right-5 text-5xl font-black text-[#f0ece3] select-none">
                    {s.step}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#f0ece3] flex items-center justify-center mb-5 group-hover:bg-[#2d5016] transition-colors">
                    <Icon className="w-7 h-7 text-[#2d5016] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1a15] mb-3">{s.title}</h3>
                  <p className="text-[#6b6560] leading-relaxed text-sm">{s.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

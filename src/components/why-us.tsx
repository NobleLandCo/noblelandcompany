import { BadgeDollarSign, Clock, Shield, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Zero Fees or Commissions",
    description:
      "We cover 100% of closing costs. You pay nothing out of pocket — ever. What we offer is what you receive.",
  },
  {
    icon: Clock,
    title: "Close in 30 Days or Less",
    description:
      "No waiting for bank approvals or agent delays. We move fast so you can move on with your life.",
  },
  {
    icon: Shield,
    title: "All-Cash Offers",
    description:
      "No financing contingencies, no deals falling through. Our offers are backed by real cash, guaranteed.",
  },
  {
    icon: HeartHandshake,
    title: "Hassle-Free Process",
    description:
      "We handle all the paperwork, title work, and legal details. Just say yes, and we'll take care of the rest.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#b8860b] mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a15] mb-4">
            The Noble Land Co. Difference
          </h2>
          <p className="text-[#6b6560] text-lg max-w-2xl mx-auto">
            We&apos;re not just another land buyer. We&apos;re a team that genuinely cares
            about making land ownership accessible and fair for everyone.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="flex flex-col items-center text-center group p-6 rounded-xl hover:bg-[#f0ece3] transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2d5016] to-[#3d6b1e] flex items-center justify-center mb-5 shadow-lg shadow-[#2d5016]/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a15] mb-2">{r.title}</h3>
                <p className="text-[#6b6560] text-sm leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-[#1e3810] to-[#2d5016] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { value: "30", label: "Days to Close", suffix: "≤" },
            { value: "0", label: "Out-of-Pocket Fees", suffix: "$" },
            { value: "100", label: "Cash Offers", suffix: "%" },
            { value: "5★", label: "Client Satisfaction", suffix: "" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-black text-[#d4a017]">
                {stat.suffix}
                {stat.value}
              </div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

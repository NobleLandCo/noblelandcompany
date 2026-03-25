import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { Mail, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Cash Offer | Noble Land Co.",
  description:
    "Received a letter from Noble Land Co.? Ready to get a cash offer for your land? Fill out the form and we'll get back to you within 1–2 business days.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/contact",
  },
  openGraph: {
    title: "Contact Us | Get Your Cash Offer | Noble Land Co.",
    description:
      "Received a letter from Noble Land Co.? Ready to get a cash offer for your land? Fill out the form and we'll respond quickly.",
    url: "https://www.noblelandcompany.com/contact",
  },
};

const sidebarItems = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "We respond to all inquiries within 1–2 business days.",
    href: null,
  },
  {
    icon: CheckCircle,
    title: "No Obligation",
    description: "Submitting this form is free and commits you to nothing.",
    href: null,
  },
  {
    icon: Mail,
    title: "Email Us Directly",
    description: "info@noblelandcompany.com",
    href: "mailto:info@noblelandcompany.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a017] mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Received a Letter from Us?
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;d love to connect and go over the details with you. Fill out the
            form below and we&apos;ll be in touch soon — or reach out directly via
            email.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-[#e2ddd4] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a1a15] mb-2">
                Submit Your Information
              </h2>
              <p className="text-[#6b6560] text-sm mb-8">
                Already received our letter? Enter your reference number below.
                Found us online? No worries — just tell us about your land.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-[#e2ddd4] rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f0ece3] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#2d5016]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1a15] mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#2d5016] text-sm hover:text-[#3d6b1e] font-medium"
                          >
                            {item.description}
                          </a>
                        ) : (
                          <p className="text-[#6b6560] text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Trust block */}
              <div className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">
                  Why Sellers Choose Noble Land Co.
                </h3>
                <ul className="space-y-2">
                  {[
                    "Zero fees or commissions",
                    "Fast 30-day closing",
                    "All-cash offers",
                    "We handle all paperwork",
                    "Mobile notary available",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-white/85">
                      <CheckCircle className="w-4 h-4 text-[#d4a017] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

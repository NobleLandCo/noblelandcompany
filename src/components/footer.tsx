import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3810] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/nlc-logo-80.png"
                alt="Noble Land Co."
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-lg tracking-tight">Noble Land Co.</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Helping families sell unused and inherited land with fast, fair cash offers.
              No fees, no surprises — just honest guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Received a Letter?" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#d4a017] flex-shrink-0" />
                <a
                  href="mailto:info@noblelandcompany.com"
                  className="hover:text-white transition-colors"
                >
                  info@noblelandcompany.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                Get a Free Cash Offer →
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <p>© {currentYear} Noble Land Co. All rights reserved.</p>
          <p>We buy land nationwide · Fast, Fair &amp; Hassle-Free</p>
        </div>
      </div>
    </footer>
  );
}

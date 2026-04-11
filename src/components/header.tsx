"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Received a Letter?" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf8f3]/95 backdrop-blur-sm border-b border-[#e2ddd4] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/nlc-logo-80.png"
              alt="Noble Land Co. LLC"
              width={52}
              height={52}
              className="rounded-full"
            />
            <span className="font-bold text-lg text-black tracking-tight">
              Noble Land Co. LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#2d5016] bg-[#f0ece3]"
                    : "text-[#4a4540] hover:text-[#2d5016] hover:bg-[#f0ece3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-sm px-4 py-2 transition-colors"
            >
              Get Your Cash Offer
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-[#4a4540] hover:text-[#2d5016] hover:bg-[#f0ece3] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#e2ddd4]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#2d5016] bg-[#f0ece3]"
                      : "text-[#4a4540] hover:text-[#2d5016] hover:bg-[#f0ece3]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-sm px-4 py-2.5 transition-colors"
                >
                  Get Your Cash Offer
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

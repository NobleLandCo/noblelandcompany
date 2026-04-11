import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noblelandcompany.com"),
  title: {
    default: "Sell Your Vacant Land Fast for Cash | Noble Land Co.",
    template: "%s | Noble Land Co.",
  },
  description:
    "Noble Land Co. buys vacant and unused land with fast, fair cash offers. No fees, no hassle. Close in 30 days or less. Get your free offer today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.noblelandcompany.com",
    siteName: "Noble Land Co.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noble Land Co. — Trusted Land Buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noblelandco",
    creator: "@noblelandco",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/nlc-logo-512.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

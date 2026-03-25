import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "Sell Your Land Fast in Oklahoma | Cash Offer in 24 Hours",
  description:
    "Tired of paying taxes on vacant land in Oklahoma? Noble Land Co. buys land for cash. No fees, no agents, close in 30 days. Get your free offer today.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/we-buy-land-oklahoma",
  },
  openGraph: {
    title: "Sell Your Land Fast in Oklahoma | Cash Offer in 24 Hours — Noble Land Co.",
    description:
      "Tired of paying taxes on vacant land in Oklahoma? Noble Land Co. buys land for cash. No fees, no agents, close in 30 days. Get your free offer today.",
    url: "https://www.noblelandcompany.com/we-buy-land-oklahoma",
  },
};

export default function OklahomaPage() {
  return (
    <StateLandingPage
      state="Oklahoma"
      stateAbbr="OK"
      heroHeadline="Sell Your Land Fast in Oklahoma — Get a Cash Offer Today"
      heroSubheadline="Tired of Paying Taxes on Land You'll Never Use?"
      heroDescription="Thousands of Oklahoma landowners sit on vacant property they don't need — paying county taxes year after year. Maybe you inherited it, maybe plans changed. Whatever the reason, Noble Land Co. will buy your Oklahoma land for cash."
      heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            Stop Paying for Land That Just Sits There
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            You&rsquo;re not alone. Every year, Oklahoma landowners pay hundreds — sometimes thousands
            — in property taxes on vacant land they&rsquo;ll never build on or use. That money adds up
            fast, and the land isn&rsquo;t getting any easier to sell on your own.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Noble Land Co. gives you a way out. No realtors taking 6-10% commission. No listing your
            property for months hoping someone bites. Just a direct cash offer, a simple closing
            process, and money in your pocket.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed font-medium">
            Even if you&rsquo;ve been told your land is &ldquo;worthless&rdquo; — contact us.
            We&rsquo;ve purchased properties others passed on.
          </p>
        </div>
      }
      benefits={[
        "$0 out of pocket — We pay ALL closing costs and fees",
        "Close in 30 days or less — No bank approvals, no delays",
        "Any condition, any location — Rural, urban, landlocked, we buy it all",
        "No agents, no commissions — Deal directly with us",
        "We know Oklahoma — Active buyers in Tulsa, OKC, and every rural county in between",
      ]}
      landTypes={[
        "Vacant residential lots",
        "Raw acreage and farmland",
        "Inherited or probate property",
        "Tax-delinquent land",
        "Landlocked parcels",
        "Recreational land",
        "Hunting property",
        "Land with back taxes owed",
      ]}
      counties={[
        "Oklahoma County", "Tulsa County", "Cleveland County", "Canadian County",
        "Comanche County", "Rogers County", "Creek County", "Muskogee County",
        "Wagoner County", "Payne County", "Garfield County", "Pottawatomie County",
        "Le Flore County", "Pittsburg County", "McCurtain County", "Sequoyah County",
        "Mayes County", "Okmulgee County", "Washington County", "Carter County",
      ]}
      totalCounties={77}
      faqs={[
        {
          question: "How fast can you close?",
          answer:
            "Most deals close in 14-30 business days. Some close even faster depending on the title situation.",
        },
        {
          question: "Do I need to visit the property?",
          answer:
            "No. We handle all research and paperwork remotely. You don't need to set foot on the land.",
        },
        {
          question: "What if I owe back taxes?",
          answer:
            "No problem. We regularly buy tax-delinquent properties. We can work with you to resolve outstanding taxes at closing.",
        },
        {
          question: "Is there really no cost to me?",
          answer:
            "Zero. We cover title search, closing fees, and all associated costs. What we offer is what you receive.",
        },
        {
          question: "How do you determine your offer price?",
          answer:
            "We analyze recent comparable sales, property characteristics, location, and market conditions to make a fair offer based on current market value.",
        },
      ]}
    />
  );
}

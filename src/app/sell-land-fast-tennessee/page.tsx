import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "Sell Land Fast in Tennessee | Cash Offer Within 24 Hours",
  description:
    "Need to sell your Tennessee land fast? Noble Land Co. makes cash offers within 24 hours. No fees, no agents, close in as little as 14 days. Get your offer now.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/sell-land-fast-tennessee",
  },
  openGraph: {
    title: "Sell Land Fast in Tennessee | Cash Offer Within 24 Hours — Noble Land Co.",
    description:
      "Need to sell your Tennessee land fast? Noble Land Co. makes cash offers within 24 hours. No fees, no agents, close in as little as 14 days.",
    url: "https://www.noblelandcompany.com/sell-land-fast-tennessee",
  },
};

export default function TennesseePage() {
  return (
    <StateLandingPage
      state="Tennessee"
      stateAbbr="TN"
      heroHeadline="Need to Sell Your Tennessee Land Fast? We Close in as Little as 14 Days."
      heroSubheadline="When Waiting Isn't an Option"
      heroDescription="Traditional land sales take 6-18 months. Agents, listings, showings, buyers who back out. Noble Land Co. is the shortcut. From 'I want to sell' to money in your account in as little as 2-4 weeks."
      heroImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80"
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            Why Speed Matters in Tennessee
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Tennessee&rsquo;s land market moves fast. Prices are climbing in Nashville, Knoxville,
            Chattanooga, and even rural counties. But that growth also means property taxes are
            rising, counties are cracking down on delinquent taxes, and the longer you wait, the
            more it costs to hold.
          </p>
          <div className="bg-white border border-[#e2ddd4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 font-bold text-[#1a1a15] bg-[#f0ece3]">Step</div>
              <div className="p-4 font-bold text-[#1a1a15] bg-[#f0ece3]">When It Happens</div>
            </div>
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 text-[#6b6560]">You reach out</div>
              <div className="p-4 text-[#2d5016] font-semibold">Today</div>
            </div>
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 text-[#6b6560]">You receive a cash offer</div>
              <div className="p-4 text-[#2d5016] font-semibold">Within 24 hours</div>
            </div>
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 text-[#6b6560]">Due diligence and title work</div>
              <div className="p-4 text-[#2d5016] font-semibold">1-2 weeks</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 text-[#6b6560]">Closing and payment</div>
              <div className="p-4 text-[#2d5016] font-semibold">Day 14-30</div>
            </div>
          </div>
          <p className="text-[#6b6560] text-lg leading-relaxed font-medium">
            If you&rsquo;re going to sell, there&rsquo;s rarely a reason to wait.
          </p>
        </div>
      }
      benefits={[
        "Cash offer in 24 hours — Not days, not weeks",
        "You choose the closing date — Fast as 14 days or on your schedule",
        "Zero fees — We pay ALL closing costs",
        "No agents — Deal directly with decision makers",
        "Guaranteed close — Cash offers don't fall through",
      ]}
      landTypes={[
        "Residential lots in developing areas",
        "Rural acreage and mountain land",
        "Farmland and agricultural tracts",
        "Inherited and estate properties",
        "Tax-delinquent parcels",
        "Recreational and hunting land",
        "Landlocked or difficult-access parcels",
        "Commercial and mixed-use lots",
      ]}
      counties={[
        "Davidson County", "Shelby County", "Knox County", "Hamilton County",
        "Rutherford County", "Williamson County", "Sumner County", "Montgomery County",
        "Wilson County", "Blount County", "Sevier County", "Anderson County",
        "Sullivan County", "Maury County", "Bradley County", "Cumberland County",
        "Putnam County", "Roane County", "Campbell County", "Claiborne County",
      ]}
      totalCounties={95}
      faqs={[
        {
          question: "I just inherited land and need to sell quickly for estate settlement. Can you help?",
          answer:
            "Absolutely. Estate and probate sales are one of our specialties. We can work with your attorney or title company to close efficiently.",
        },
        {
          question: "My property is in a rural county with not much going on. Is it still sellable?",
          answer:
            "Yes. We buy land in every corner of Tennessee — busy counties and quiet ones. Location doesn't scare us off.",
        },
        {
          question: "Can I sell if there are multiple owners or heirs?",
          answer:
            "We deal with multi-owner and heir properties regularly. As long as all parties agree to sell, we can work through it.",
        },
        {
          question: "Do I need to clear the land or do anything to prepare it?",
          answer:
            "No. Sell it as-is. We don't require any cleanup, clearing, or improvements.",
        },
        {
          question: "What's the catch?",
          answer:
            "No catch. We buy land at a discount because that's how our business works — we take on the risk and holding costs. If our offer doesn't work for you, there's absolutely no obligation.",
        },
      ]}
      ctaHeadline="Get Your Cash Offer — It Takes 2 Minutes"
    />
  );
}

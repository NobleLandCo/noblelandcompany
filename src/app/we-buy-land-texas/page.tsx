import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "Sell Your Land Fast in Texas | Cash Offer in 24 Hours",
  description:
    "We buy land in Texas for cash — no agents, no fees, close in 30 days or less. Get a free cash offer today from Noble Land Co.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/we-buy-land-texas",
  },
  openGraph: {
    title: "Sell Your Land Fast in Texas | Cash Offer in 24 Hours — Noble Land Co.",
    description:
      "We buy land in Texas for cash — no agents, no fees, close in 30 days or less. Get a free cash offer today from Noble Land Co.",
    url: "https://www.noblelandcompany.com/we-buy-land-texas",
  },
};

export default function TexasPage() {
  return (
    <StateLandingPage
      state="Texas"
      stateAbbr="TX"
      heroHeadline="Sell Your Land Fast in Texas — Get a Cash Offer Today"
      heroSubheadline="Skip the Realtor. Skip the Fees. Get Cash for Your Texas Land."
      heroDescription="Texas is one of the largest land markets in the country — but selling on your own can take months or years. Noble Land Co. buys Texas land directly for cash, with no commissions, no fees, and closings in 30 days or less."
      heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            Texas Land Is Worth Something — Let&rsquo;s Turn It Into Cash
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Whether you inherited a few acres in East Texas, own a vacant lot in a growing suburb,
            or have raw ranchland sitting idle — we want to make you an offer. Texas landowners
            often don&rsquo;t realize how easy it is to sell without going through a realtor.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Noble Land Co. buys land in all 254 Texas counties. We handle all the paperwork, pay
            all the closing costs, and work on your timeline. No open houses, no negotiations with
            banks, no waiting.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed font-medium">
            Rural acreage, vacant lots, inherited property, tax-delinquent land — we buy it all.
            Contact us and get your free cash offer within 24 hours.
          </p>
        </div>
      }
      benefits={[
        "$0 out of pocket — We pay ALL closing costs and fees",
        "Close in 30 days or less — No bank approvals, no delays",
        "Any condition, any location — All 254 Texas counties",
        "No agents, no commissions — Deal directly with us",
        "Fast cash offers — Receive your offer within 24 hours",
      ]}
      landTypes={[
        "Vacant residential lots",
        "Raw acreage and ranchland",
        "Inherited or probate property",
        "Tax-delinquent land",
        "Landlocked parcels",
        "Recreational and hunting land",
        "Farm and agricultural land",
        "Land with back taxes owed",
      ]}
      counties={[
        "Harris County", "Dallas County", "Tarrant County", "Bexar County",
        "Travis County", "Collin County", "Denton County", "El Paso County",
        "Fort Bend County", "Montgomery County", "Williamson County", "Cameron County",
        "Nueces County", "Lubbock County", "Jefferson County", "Bell County",
        "McLennan County", "Galveston County", "Smith County", "Brazoria County",
      ]}
      totalCounties={254}
      faqs={[
        {
          question: "How fast can you close on Texas land?",
          answer:
            "Most deals close in 14-30 business days. Some close even faster depending on the title situation and county.",
        },
        {
          question: "Do I need to be in Texas to sell my land?",
          answer:
            "No. We handle everything remotely — title research, paperwork, and closing. You can sell from anywhere.",
        },
        {
          question: "What if I owe back taxes on my Texas property?",
          answer:
            "No problem. We regularly buy tax-delinquent properties in Texas. We can work with you to resolve outstanding taxes at closing.",
        },
        {
          question: "Is there really no cost to me?",
          answer:
            "Zero. We cover title search, closing fees, and all associated costs. What we offer is what you receive.",
        },
        {
          question: "Do you buy land anywhere in Texas?",
          answer:
            "Yes — we buy land in all 254 Texas counties, from rural West Texas ranchland to suburban lots in the DFW metroplex.",
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "Sell Your Land in North Carolina | NC's Trusted Land Buyers",
  description:
    "Noble Land Co. is North Carolina's go-to land buyer. We buy vacant land, inherited property, and tax-delinquent parcels for cash. Zero fees. Close in 30 days.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/we-buy-land-north-carolina",
  },
  openGraph: {
    title: "Sell Your Land in North Carolina | NC's Trusted Land Buyers — Noble Land Co.",
    description:
      "Noble Land Co. is North Carolina's go-to land buyer. We buy vacant land, inherited property, and tax-delinquent parcels for cash.",
    url: "https://www.noblelandcompany.com/we-buy-land-north-carolina",
  },
};

export default function NorthCarolinaPage() {
  return (
    <StateLandingPage
      state="North Carolina"
      stateAbbr="NC"
      heroHeadline="North Carolina's Trusted Land Buyers — Sell Your Land for Cash"
      heroSubheadline="We're Not Just Another National Land Buyer. We Know NC."
      heroDescription="From the Blue Ridge Mountains to the Outer Banks, from Charlotte suburbs to rural tobacco country — Noble Land Co. has bought land across North Carolina. Our local knowledge means a better offer for you."
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            Why Selling to a Local NC Buyer Matters
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            <strong className="text-[#1a1a15]">National companies use formulas.</strong> They plug
            in a zip code and spit out a lowball number.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            <strong className="text-[#1a1a15]">We do actual research.</strong> We know that a
            half-acre lot in Wake County is a completely different animal than 10 acres in Robeson
            County. We know which areas are growing, which counties are cracking down on delinquent
            taxes, and what buyers are actually paying.
          </p>
          <div className="bg-white border border-[#e2ddd4] rounded-xl p-6 space-y-3">
            <p className="text-[#4a4540] font-medium">That means:</p>
            <ul className="space-y-2 text-[#6b6560]">
              <li className="flex items-start gap-2">
                <span className="text-[#2d5016] font-bold">✓</span>
                More accurate offers based on real local market data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d5016] font-bold">✓</span>
                Faster closings because we already work with NC title companies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d5016] font-bold">✓</span>
                Fewer surprises because we know NC real estate law
              </li>
            </ul>
          </div>
        </div>
      }
      benefits={[
        "Local NC expertise — Not a formula, real market knowledge",
        "We pay ALL closing costs — Zero out of pocket for you",
        "Cash offer within 24 hours — Based on real local data",
        "Work with NC title companies we trust — Smoother, faster closings",
        "Out-of-state sellers welcome — We handle everything remotely with mobile notary",
      ]}
      landTypes={[
        "Inherited property and multi-heir parcels",
        "Tax-delinquent land",
        "Vacant residential lots",
        "Rural acreage — farms, timber, off-grid",
        "Landlocked land",
        "Coastal lots — OBX, Wilmington, Crystal Coast",
        "Hunting and recreational land",
        "Probate and estate situations",
      ]}
      counties={[
        "Wake County", "Durham County", "Guilford County", "Mecklenburg County",
        "Forsyth County", "Nash County", "Edgecombe County", "Wilson County",
        "Pitt County", "Johnston County", "Cumberland County", "Robeson County",
        "Buncombe County", "Henderson County", "New Hanover County", "Brunswick County",
        "Onslow County", "Carteret County", "Dare County", "Cabarrus County",
      ]}
      totalCounties={100}
      faqs={[
        {
          question: "I inherited land from a family member and there are multiple heirs. Can you still buy it?",
          answer:
            "Yes. Multi-heir properties are common in NC. As long as all heirs agree to sell, we handle the rest — including coordinating with your attorney.",
        },
        {
          question: "The county sent me a notice about delinquent taxes. Am I going to lose my land?",
          answer:
            "Not necessarily. If you sell to us, we can resolve the outstanding taxes at closing. You walk away with cash instead of losing the property to a tax lien foreclosure.",
        },
        {
          question: "How do your offers compare to listing with a realtor?",
          answer:
            "We typically offer below full retail — that's how we make the business work. In return, you get speed, certainty, and zero costs. No 6% commission, no 8-month wait, no deal falling through. For many sellers, especially those with vacant or inherited land, the trade-off makes sense.",
        },
        {
          question: "I don't live in North Carolina anymore. Can I still sell?",
          answer:
            "Absolutely. Many of our sellers live out of state. We handle everything remotely and can arrange a mobile notary to come to you for signing.",
        },
      ]}
      ctaHeadline="Get Your Free NC Land Offer"
      ctaDescription="North Carolina is home for us. Let us put that local expertise to work for you."
    />
  );
}

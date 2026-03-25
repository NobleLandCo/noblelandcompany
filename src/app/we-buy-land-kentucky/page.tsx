import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "We Buy Land in Kentucky | Fair Cash Offers, No Fees",
  description:
    "Selling land in Kentucky? Noble Land Co. makes it simple. Cash offers, zero fees, close in 30 days. Family-owned land, inherited property, vacant lots — we buy it all.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/we-buy-land-kentucky",
  },
  openGraph: {
    title: "We Buy Land in Kentucky | Fair Cash Offers, No Fees — Noble Land Co.",
    description:
      "Selling land in Kentucky? Noble Land Co. makes it simple. Cash offers, zero fees, close in 30 days.",
    url: "https://www.noblelandcompany.com/we-buy-land-kentucky",
  },
};

export default function KentuckyPage() {
  return (
    <StateLandingPage
      state="Kentucky"
      stateAbbr="KY"
      heroHeadline="We Buy Land in Kentucky — Simple, Fair, and Fast"
      heroSubheadline="Your Land Has a Story. We're Here to Help You Write the Next Chapter."
      heroDescription="Whether it's been in your family for generations or you inherited it from someone you loved — if you're ready to sell, Noble Land Co. is ready to buy. We're not a faceless corporation. We're a small team that believes land ownership should feel empowering, not burdensome."
      heroImage="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"
      steps={[
        {
          title: "Reach Out",
          description: "Call, text, or fill out our form. Tell us about your property — whatever details you have.",
        },
        {
          title: "Get Your Offer",
          description: "We'll research your land and send a fair cash offer within 24 hours. No games, no lowballing.",
        },
        {
          title: "Get Paid",
          description: "We handle all the paperwork. You get your money in 30 days or less. No agents. No commissions. No surprises.",
        },
      ]}
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            What Makes Noble Land Co. Different
          </h2>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Most land buyers are investors looking for a steal. We&rsquo;re looking for a fair deal —
            one that works for you AND for us.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            We believe if a seller walks away happy, we&rsquo;ve done our job right. That&rsquo;s
            the Noble Land Co. difference — honest communication, real offers, and a process as
            simple as a handshake.
          </p>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Maybe the land has been in your family for generations. Maybe you bought it years ago
            with big plans that life got in the way of. Whatever the story — we&rsquo;re here to
            help you move forward on your terms.
          </p>
        </div>
      }
      benefits={[
        "We cover ALL closing costs — You pay zero out of pocket",
        "Cash offers only — No financing contingencies, no deals falling through",
        "We move fast — Close in as little as 14 days",
        "Honest communication — We'll tell you straight if we can't make the numbers work",
        "Family-focused — We treat every seller with respect and care",
      ]}
      landTypes={[
        "Wooded acreage and timber land",
        "Farmland and agricultural parcels",
        "Vacant residential and rural lots",
        "Inherited or estate property",
        "Landlocked parcels",
        "Land with delinquent taxes",
        "Hunting and recreational land",
        "Horse farms and rural acreage",
      ]}
      counties={[
        "Jefferson County", "Fayette County", "Kenton County", "Boone County",
        "Warren County", "Madison County", "Hardin County", "Daviess County",
        "Meade County", "Nelson County", "Laurel County", "Pike County",
        "Whitley County", "Pulaski County", "Campbell County", "Boyd County",
        "Letcher County", "Perry County", "Breathitt County", "Knott County",
      ]}
      totalCounties={120}
      faqs={[
        {
          question: "What if the land has been in my family for a long time and I'm not sure of the title?",
          answer:
            "We work with experienced local title companies who handle complicated title situations regularly. We'll sort it out — you don't need to.",
        },
        {
          question: "The land is very rural and I haven't been there in years. Does that matter?",
          answer:
            "Not at all. We research properties remotely and don't require you to visit or prepare the land in any way.",
        },
        {
          question: "Can you buy land that has a lien or back taxes owed?",
          answer:
            "Yes. We regularly purchase land with outstanding tax obligations and handle the resolution at closing.",
        },
        {
          question: "What if I don't know the exact boundaries or acreage?",
          answer:
            "We'll find out. Give us the address, county, or parcel number and we'll do the research.",
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import StateLandingPage from "@/components/state-landing-page";

export const metadata: Metadata = {
  title: "Sell Your Vacant Land in Wisconsin for Cash",
  description:
    "Owning vacant land in Wisconsin costs you money every year. Sell it for cash instead. Noble Land Co. buys land fast — no agents, no fees, close in 30 days.",
  alternates: {
    canonical: "https://www.noblelandcompany.com/sell-land-wisconsin",
  },
  openGraph: {
    title: "Sell Your Vacant Land in Wisconsin for Cash | Noble Land Co.",
    description:
      "Owning vacant land in Wisconsin costs you money every year. Sell it for cash instead.",
    url: "https://www.noblelandcompany.com/sell-land-wisconsin",
  },
};

export default function WisconsinPage() {
  return (
    <StateLandingPage
      state="Wisconsin"
      stateAbbr="WI"
      heroHeadline="Sell Your Wisconsin Land for Cash — Stop Losing Money Every Year"
      heroSubheadline="Your Vacant Land Is Costing You Money Right Now"
      heroDescription="That empty lot or unused acreage in Wisconsin isn't just sitting there — it's actively draining your wallet. Property taxes, liability, maintenance. Over 10 years, a vacant parcel can quietly cost $10,000-$40,000. What if you just... sold it?"
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80"
      angleContent={
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1a1a15]">
            The Math Is Simple
          </h2>
          <div className="bg-white border border-[#e2ddd4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 font-bold text-[#1a1a15] bg-[#f0ece3]">Option</div>
              <div className="p-4 font-bold text-[#1a1a15] bg-[#f0ece3]">10-Year Impact</div>
            </div>
            <div className="grid grid-cols-2 border-b border-[#e2ddd4]">
              <div className="p-4 text-[#6b6560]">Keep paying taxes on vacant land</div>
              <div className="p-4 text-red-600 font-semibold">-$10,000 to -$40,000</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 text-[#6b6560]">Sell to Noble Land Co. for cash</div>
              <div className="p-4 text-[#2d5016] font-semibold">+$5,000 to $50,000+ in your pocket</div>
            </div>
          </div>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            One option bleeds money year after year. The other puts cash in your hands today.
            Property taxes alone run $500-$3,000+ per year in Wisconsin. Add liability insurance
            and maintenance, and you&rsquo;re looking at a serious drain on your finances for
            land that&rsquo;s doing nothing for you.
          </p>
        </div>
      }
      steps={[
        {
          title: "You Contact Us",
          description: "Takes 2 minutes. Give us your property address, parcel number, or even just the county and a rough description.",
        },
        {
          title: "We Do the Homework",
          description: "We research your property — comps, taxes, title, location — and send you a fair cash offer within 24 hours.",
        },
        {
          title: "You Decide, You Get Paid",
          description: "No pressure. No expiration date. If the offer works, we move forward. We pay all closing costs and wire funds to you in 30 days or less.",
        },
      ]}
      benefits={[
        "No 6-10% realtor commission — Deal directly with us and keep more money",
        "No 6-12 month listing period — Close in as little as 14 days",
        "No showings, no uncertainty — Just a direct cash sale with guaranteed closing",
        "We pay all closing costs — What we offer is what you receive",
        "Any location — North woods, farmland, small lots, all of it",
      ]}
      landTypes={[
        "Vacant lots in subdivisions",
        "Rural acreage and farmland",
        "Wooded hunting parcels",
        "Lakefront and recreational land",
        "Inherited property",
        "Tax-delinquent parcels",
        "Land with no road access",
        "Lots in any condition",
      ]}
      counties={[
        "Dane County", "Milwaukee County", "Waukesha County", "Brown County",
        "Racine County", "Outagamie County", "Winnebago County", "Marathon County",
        "Washington County", "Sheboygan County", "La Crosse County", "Rock County",
        "Walworth County", "Fond du Lac County", "Eau Claire County", "Wood County",
        "Marinette County", "Sauk County", "Vilas County", "Oneida County",
      ]}
      totalCounties={72}
      faqs={[
        {
          question: "My land is way up north in the middle of nowhere. Will you still buy it?",
          answer:
            "Yes. We buy rural land throughout Wisconsin — north woods, farmland, small lots, all of it.",
        },
        {
          question: "The property taxes are paid up. Does that affect your offer?",
          answer:
            "Properties with current taxes are actually easier to close — it just means a cleaner transaction for everyone.",
        },
        {
          question: "I inherited this land and I've never even seen it. Is that a problem?",
          answer:
            "Not at all. Many of the landowners we work with inherited property in counties they've never visited. We handle everything remotely.",
        },
        {
          question: "How is this different from listing with a realtor?",
          answer:
            "No 6-10% commission. No 6-12 month listing period. No showings, no uncertainty. Just a direct cash sale with guaranteed closing.",
        },
      ]}
      ctaHeadline="Stop Paying for Land You Don't Use"
      ctaDescription="Get a free cash offer today. Takes less than 2 minutes and there's zero obligation."
    />
  );
}

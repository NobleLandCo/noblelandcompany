import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Land Selling Tips & Guides",
  description:
    "Expert guides for landowners ready to sell. State-by-state advice on how to sell vacant land fast, handle inherited property, and maximize your net proceeds.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a017] mb-4">
            Land Seller Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Guides for Landowners Ready to Sell
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Plain-English guides to selling land in your state — covering
            timelines, taxes, probate, costs, and how to get a fair price fast.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[#e2ddd4] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#2d5016]/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#b8860b] bg-[#f9f3e3] px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {post.state}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#6b6560]">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#1a1a15] mb-3 group-hover:text-[#2d5016] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#6b6560] text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center text-sm font-semibold text-[#2d5016] group-hover:gap-2 transition-all">
                  Read the guide
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[#e2ddd4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a15] mb-3">
            Ready to Skip Straight to a Cash Offer?
          </h2>
          <p className="text-[#6b6560] mb-6">
            No listing, no agent fees, no waiting. Get a free, no-obligation
            cash offer on your land today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold text-base px-8 py-3.5 transition-colors"
          >
            Get My Free Cash Offer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

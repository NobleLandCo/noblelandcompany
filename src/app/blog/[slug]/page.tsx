import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, MapPin, Calendar } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All guides
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#d4a017] bg-white/10 px-2.5 py-1 rounded-full">
              <MapPin className="w-3 h-3" />
              {post.state}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/60">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/60">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          </div>
          <p className="text-white/80 text-base max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e2ddd4] rounded-2xl shadow-sm overflow-hidden">
            <article
              className="prose prose-lg max-w-none p-8 md:p-12
                prose-headings:text-[#1a1a15]
                prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#2d5016]
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#1a1a15]
                prose-p:text-[#4a4540] prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-[#4a4540] prose-li:mb-2
                prose-strong:text-[#1a1a15] prose-strong:font-semibold
                prose-a:text-[#2d5016] prose-a:font-medium prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3810] to-[#2d5016] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Get a Cash Offer on Your {post.state} Land?
          </h2>
          <p className="text-white/80 mb-8">
            No agent, no listing, no waiting. Free offer, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold text-base px-8 py-3.5 shadow-lg shadow-black/20 transition-all hover:scale-105"
          >
            Get My Free Cash Offer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-[#faf8f3] border-t border-[#e2ddd4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2d5016] hover:text-[#3d6b1e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all guides
          </Link>
        </div>
      </section>
    </>
  );
}

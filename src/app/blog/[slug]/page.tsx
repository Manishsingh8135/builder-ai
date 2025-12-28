import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { teamMembers } from "@/data/team";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const author = teamMembers.find((m) => m.id === post.author);
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 gradient-bg-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mr-3 flex items-center justify-center">
                <span className="text-white font-bold">
                  {author?.name?.charAt(0) || "T"}
                </span>
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {author?.name || "Team"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {author?.role || "Author"}
                </div>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime} min read
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-12" />

          <article className="prose prose-lg max-w-none">
            <p>
              This is where the full blog post content would appear. In a production environment, 
              this content would be loaded from a CMS like Sanity, Contentful, or stored as MDX files.
            </p>
            <h2>Introduction</h2>
            <p>
              The content here demonstrates how a blog post would be structured. Each post 
              would have rich formatting capabilities including headers, lists, code blocks, 
              and embedded media.
            </p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>First important point from the article</li>
              <li>Second key insight for readers</li>
              <li>Third actionable recommendation</li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              The article would conclude with a summary and call to action, encouraging readers 
              to implement what they&apos;ve learned or reach out for help with their specific situation.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <Badge variant="secondary" className="mb-3">
                    {related.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

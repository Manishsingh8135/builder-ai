import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { teamMembers } from "@/data/team";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog | MVP Development Tips, Startup Insights & Tech Guides",
  description:
    "Expert insights on MVP development, startup strategies, AI automation, and software development best practices. Learn how to build and scale your digital product from the Builder AI team.",
  keywords: [
    "MVP development blog",
    "startup development tips",
    "AI automation insights",
    "software development blog",
    "tech startup guides",
    "SaaS development articles",
    "web development best practices",
    "mobile app development tips",
  ],
  path: "/blog",
});

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const recentPosts = blogPosts.filter((p) => !p.featured);

  const getAuthor = (authorId: string) => {
    return teamMembers.find((m) => m.id === authorId);
  };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Insights &{" "}
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Expert insights on AI automation, software development, and digital transformation for business leaders.
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const author = getAuthor(post.author);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="h-64 bg-gradient-to-br from-muted to-muted/50 rounded-2xl mb-6" />
                    <Badge className="mb-3">{post.category}</Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 mr-3" />
                        <div>
                          <div className="font-medium text-sm text-foreground">
                            {author?.name || "Team"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const author = getAuthor(post.author);
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-muted to-muted/50" />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {author?.name || "Team"}
                      </span>
                      <span className="text-muted-foreground">
                        {post.readTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Custom Insights?"
        description="Let's discuss how these strategies can be applied to your specific business challenges."
      />
    </>
  );
}

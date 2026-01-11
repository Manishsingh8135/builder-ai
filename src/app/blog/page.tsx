import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "The Journal | Insights & Perspectives",
  description:
    "Expert insights on MVP development, startup strategies, AI automation, and software development best practices. Deep dives into what matters.",
  path: "/blog",
});

export default function BlogPage() {
  // Sort posts by date or feature, customizable
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              The <span className="text-primary">Journal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Exploring the frontiers of technology, design, and startup growth.
              Insights for the modern builder.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Storefront Style */}
      <section className="pb-20 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block relative rounded-[2.5rem] overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
          >
            <div className="grid lg:grid-cols-2 gap-0 border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="relative aspect-video lg:aspect-auto min-h-[400px] lg:min-h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-muted transition-transform duration-700 group-hover:scale-105">
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 lg:p-16 opacity-10 pointer-events-none">
                    <ArrowRight className="w-48 h-48" />
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <Badge
                    variant="outline"
                    className="border-primary/50 text-foreground px-4 py-1 text-xs uppercase tracking-widest"
                  >
                    Featured Story
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-2 font-mono">
                    <Calendar className="w-3 h-3 text-primary" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-10 line-clamp-3 leading-relaxed max-w-xl">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-bold tracking-wide uppercase text-sm group-hover:gap-4 transition-all gap-2">
                  Read Article{" "}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles - Magazine Grid */}
      <section className="pb-20 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16 border-b border-border/50 pb-8">
            <h2 className="text-4xl font-bold">Latest Articles</h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-border/30 bg-card">
                  <div className="absolute inset-0 bg-muted transition-transform duration-700 group-hover:scale-110">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                     <Badge className="bg-background/80 backdrop-blur-md text-foreground border-transparent hover:bg-background">
                        {post.category}
                     </Badge>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/60 font-mono">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    Read Story
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build?"
        description="Turn these insights into action. Let's build your next big thing."
      />
    </>
  );
}

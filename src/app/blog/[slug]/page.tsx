import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { generateBreadcrumbSchema, generateArticleSchema, siteUrl } from "@/lib/seo-config";

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
  
  const siteUrl = "https://builder-ai.dev";
  const pageUrl = `${siteUrl}/blog/${slug}`;
  
  return {
    title: `${post.title} | Builder AI Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags.map(t => t.toLowerCase()),
      post.category.toLowerCase(),
      "software development",
      "startup tips",
    ],
    authors: [{ name: "Builder AI Team" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Builder AI Team"],
      tags: post.tags,
      images: post.image 
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [{ url: `${siteUrl}/images/og_image.jpeg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [`${siteUrl}/images/og_image.jpeg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: post.title, url: `${siteUrl}/blog/${slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${siteUrl}/blog/${slug}`,
    image: post.image,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: "Builder AI Team",
    tags: post.tags,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="min-h-screen bg-background">
        {/* Cinematic Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh] min-h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-zinc-900/50 z-10" />
            
            {post.image ? (
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />

            <div className="absolute inset-0 z-30 flex flex-col justify-end pb-16 lg:pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Breadcrumb items={breadcrumbItems} className="mb-6 [&_*]:text-white/80 [&_*:hover]:text-white" />
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-black transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        <span className="font-medium tracking-wide text-sm">Back to Journal</span>
                    </Link>

                    <Badge className="bg-primary/90 hover:bg-primary text-black border-none mb-6 text-sm py-1.5 px-4 pointer-events-none">
                        {post.category}
                    </Badge>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs text-black font-bold">
                                B
                             </div>
                             <span>Builder AI Team</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4" />
                             <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-2">
                             <Clock className="w-4 h-4" />
                             <span>{post.readTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
             <div className="custom-prose max-w-none">
                <p className="lead text-xl md:text-2xl text-muted-foreground font-light mb-12 border-l-4 border-primary pl-6">
                    {post.excerpt}
                </p>

                {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                    <p className="text-muted-foreground italic">Content coming soon...</p>
                )}
             </div>

             <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-3">
                 {post.tags.map(tag => (
                     <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 transition-colors">
                         #{tag}
                     </Badge>
                 ))}
             </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/20 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
                 <h2 className="text-3xl font-bold tracking-tight">Keep Reading</h2>
                 <Link href="/blog" className="text-primary font-medium hover:underline flex items-center gap-2">
                    View Journal <ArrowLeft className="w-4 h-4 rotate-180" />
                 </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                >
                   <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
                        {related.image ? (
                            <Image
                                src={related.image}
                                alt={related.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                             <div className="w-full h-full bg-zinc-800" />
                        )}
                        <Badge className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur text-foreground border-transparent">
                            {related.category}
                        </Badge>
                   </div>
                   
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm mb-6 flex-1">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        <span>{new Date(related.publishedAt).toLocaleDateString()}</span>
                        <span>{related.readTime} min read</span>
                    </div>
                  </div>
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

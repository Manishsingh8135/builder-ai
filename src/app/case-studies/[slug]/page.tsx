import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { generateBreadcrumbSchema, generateCaseStudySchema, siteUrl } from "@/lib/seo-config";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  
  const siteUrl = "https://builder-ai.dev";
  const pageUrl = `${siteUrl}/case-studies/${slug}`;
  const resultsText = study.results.slice(0, 2).map(r => `${r.metric} ${r.label}`).join(", ");
  
  return {
    title: `${study.title} | ${study.industry} Case Study`,
    description: `${study.challenge.slice(0, 120)}... Results: ${resultsText}. See how Builder AI helped ${study.client} achieve success.`,
    keywords: [
      `${study.industry.toLowerCase()} software development`,
      `${study.industry.toLowerCase()} case study`,
      study.service.replace("-", " "),
      ...study.technologies.map(t => t.toLowerCase()),
      "client success story",
      "software development results",
    ],
    openGraph: {
      title: `${study.title} | Builder AI Case Study`,
      description: study.challenge,
      url: pageUrl,
      type: "article",
      images: study.images?.[0] 
        ? [{ url: study.images[0], width: 1200, height: 630, alt: study.title }]
        : [{ url: `${siteUrl}/images/og_image.jpeg`, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Builder AI`,
      description: `${study.challenge.slice(0, 100)}...`,
      images: study.images?.[0] ? [study.images[0]] : [`${siteUrl}/images/og_image.jpeg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id && (s.industry === study.industry || s.service === study.service))
    .slice(0, 2);

  const breadcrumbItems = [
    { label: "Case Studies", href: "/case-studies" },
    { label: study.title, href: `/case-studies/${slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Case Studies", url: `${siteUrl}/case-studies` },
    { name: study.title, url: `${siteUrl}/case-studies/${slug}` },
  ]);

  const caseStudySchema = generateCaseStudySchema({
    title: study.title,
    description: study.challenge,
    url: `${siteUrl}/case-studies/${slug}`,
    client: study.client,
    industry: study.industry,
    results: study.results,
  });

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Builder AI Development Services",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
    },
    "author": {
      "@type": "Person",
      "name": study.testimonial.author,
    },
    "reviewBody": study.testimonial.quote,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          <Link
            href="/case-studies"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-12 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mr-3 group-hover:border-primary group-hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">Back to Case Studies</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-6 mb-8">
                {study.logo && (
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-4 shadow-xl border border-border/50">
                    <img
                      src={study.logo}
                      alt={`${study.client} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {study.ownerImage && (
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl border-2 border-primary/20">
                         <img
                            src={study.ownerImage}
                            alt="Owner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{study.industry}</Badge>
                  <Badge variant="outline" className="text-muted-foreground border-border uppercase tracking-widest text-[10px]">{study.duration}</Badge>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Built for <span className="text-foreground font-medium">{study.client}</span>
              </p>
            </div>
            
            <div className="flex lg:justify-end">
               <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 lg:p-10 w-full max-w-md">
                   <div className="grid grid-cols-2 gap-8">
                        {study.results.slice(0, 4).map((result) => (
                            <div key={result.label}>
                                <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{result.label}</div>
                            </div>
                        ))}
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {study.images && study.images.length > 0 && (
            <div className="relative group">
              <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory">
                {study.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-[85vw] md:w-[60vw] aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl snap-center relative"
                  >
                    <img
                      src={image}
                      alt={`${study.title} - Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
              
              {/* Gallery Navigation UI Hint */}
              <div className="flex justify-center gap-2 mt-4">
                {study.images.map((_, index) => (
                   <div 
                    key={index} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === 0 ? "w-8 bg-primary" : "w-1.5 bg-muted"}`} 
                   />
                ))}
              </div>

              {/* Scroll Indicator Component for Mobile */}
              <div className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">Swipe to explore</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                <p className="text-lg text-muted-foreground">{study.solution}</p>
              </div>
              {study.features && study.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">What We Built</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {study.features.map((feature) => (
                      <div key={feature.category} className="bg-muted/50 rounded-xl p-5">
                        <h3 className="font-semibold text-foreground mb-3">{feature.category}</h3>
                        <ul className="space-y-2">
                          {feature.items.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {study.testimonial && (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-xl text-foreground italic mb-6">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    {study.ownerImage && (
                      <img
                        src={study.ownerImage}
                        alt={study.testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-foreground">
                        {study.testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {study.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-6">Results</h3>
                <div className="space-y-6">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <div className="text-3xl font-bold gradient-text">
                        {result.metric}
                      </div>
                      <div className="text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full gradient-bg" asChild>
                <Link href="/schedule">Get Similar Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {relatedStudies.length > 0 && (
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedStudies.map((related) => (
                <Link
                  key={related.id}
                  href={`/case-studies/${related.slug}`}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <Badge className="mb-4">{related.industry}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">{related.challenge}</p>
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

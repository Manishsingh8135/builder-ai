import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

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
  return {
    title: study.title,
    description: study.challenge,
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

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge>{study.industry}</Badge>
            <Badge variant="outline">{study.duration}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl">
            {study.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            {study.client}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {study.images && study.images.length > 0 && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                {study.images.map((image, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden">
                    <img
                      src={image}
                      alt={`${study.title} - Image ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
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
              {study.testimonial && (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-xl text-foreground italic mb-6">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {study.testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {study.testimonial.role}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6">
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

              <div className="bg-slate-50 rounded-2xl p-6">
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

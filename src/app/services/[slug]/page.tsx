import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { Icon } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  
  const siteUrl = "https://builder-ai.dev";
  const pageUrl = `${siteUrl}/services/${slug}`;
  
  return {
    title: `${service.title} | Professional ${service.shortTitle} Services`,
    description: `${service.description} Launch in ${service.benefits[0]?.metric || "weeks"}. Get ${service.benefits[1]?.metric || "significant"} ${service.benefits[1]?.label?.toLowerCase() || "savings"}. Technologies: ${service.technologies.slice(0, 4).join(", ")}.`,
    keywords: [
      service.title.toLowerCase(),
      `${service.shortTitle.toLowerCase()} services`,
      `${service.shortTitle.toLowerCase()} company`,
      `hire ${service.shortTitle.toLowerCase()} developers`,
      ...service.useCases.slice(0, 3).map(uc => uc.toLowerCase()),
      ...service.technologies.map(t => `${t} development`),
    ],
    openGraph: {
      title: `${service.title} | Builder AI`,
      description: service.description,
      url: pageUrl,
      type: "website",
      images: [{ url: `${siteUrl}/images/og_image.jpeg`, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Builder AI`,
      description: service.tagline,
      images: [`${siteUrl}/images/og_image.jpeg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((cs) => cs.service === service.id).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
            >
              ← Back to Services
            </Link>
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
              <Icon name={service.icon} className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg" asChild>
                <Link href="/schedule">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>
              <div className="space-y-6">
                {service.features.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <Icon name={feature.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Results You Can Expect
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {service.benefits.map((benefit) => (
                  <div key={benefit.label} className="bg-muted rounded-2xl p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {benefit.metric}
                    </div>
                    <div className="text-muted-foreground">{benefit.label}</div>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Common Use Cases
              </h3>
              <ul className="space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-base">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <Badge className="mb-4">{study.industry}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {study.challenge}
                  </p>
                  <div className="flex gap-6">
                    {study.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <div className="text-2xl font-bold gradient-text">
                          {result.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to ${service.shortTitle === "AI Automation" ? "Automate" : "Build"}?`}
        description={`Let's discuss how ${service.shortTitle.toLowerCase()} can transform your business operations.`}
      />
    </>
  );
}

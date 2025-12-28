"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

const industries = ["All", ...new Set(caseStudies.map((cs) => cs.industry))];
const serviceTypes = ["All", ...new Set(caseStudies.map((cs) => cs.service))];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filtered = caseStudies.filter((cs) => {
    if (selectedIndustry !== "All" && cs.industry !== selectedIndustry) return false;
    if (selectedService !== "All" && cs.service !== selectedService) return false;
    return true;
  });

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Real Results for{" "}
              <span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              See how we&apos;ve helped companies transform their operations with AI automation and custom software.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12">
            <div>
              <span className="text-sm text-muted-foreground mb-2 block">Industry</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="relative h-56 bg-gradient-to-br from-muted to-muted/50 rounded-2xl mb-6 overflow-hidden">
                  {study.images && study.images[0] && (
                    <img
                      src={study.images[0]}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {study.challenge}
                </p>
                <div className="flex flex-wrap gap-4">
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

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies match your filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedService("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CaseStudiesPreview() {
  const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Real Results for Real Businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              See how we&apos;ve helped companies like yours transform their operations with intelligent automation.
            </p>
          </div>
          <Button variant="outline" className="mt-6 lg:mt-0" asChild>
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featured.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block h-full"
              >
                <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 rounded-2xl mb-6 overflow-hidden">
                  {study.images && study.images[0] && (
                    <img
                      src={study.images[0]}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

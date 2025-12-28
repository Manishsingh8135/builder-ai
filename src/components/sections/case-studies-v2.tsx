"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "r1p-fitness",
    title: "R1P FITNESS",
    category: "Gym Management System",
    location: "Hawaii, USA",
    description: "Complete gym management platform with member portal, payments, and analytics",
    results: [
      { metric: "100%", label: "Digital Ops" },
      { metric: "60%", label: "Time Saved" },
    ],
    quote: "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system.",
    author: "Hipolito Rivera",
    image: "/images/r1pfitness1.png",
    href: "/case-studies/r1p-fitness-gym-management",
  },
  {
    id: "shedders-healthcare",
    title: "Shedder's Healthcare",
    category: "Professional Website",
    location: "Healthcare Services",
    description: "Professional website showcasing services with optimized local SEO",
    results: [
      { metric: "200%", label: "Inquiries" },
      { metric: "Top 10", label: "Local SEO" },
    ],
    quote: "The website perfectly represents our services. We've seen a significant increase in client inquiries.",
    author: "Shedder Jacques",
    image: "/images/sheddler1.png",
    href: "/case-studies/shedders-healthcare-website",
  },
  {
    id: "travel-spirene",
    title: "Travel Spirene",
    category: "Travel Platform",
    location: "Northeast India",
    description: "Comprehensive travel platform for exploring Northeast India's hidden gems",
    results: [
      { metric: "8", label: "States" },
      { metric: "100+", label: "Destinations" },
    ],
    quote: "We're building the platform we wished existed for Northeast India exploration.",
    author: "Builder AI Team",
    image: "/images/travelspire1.png",
    href: "/case-studies/travel-spirene-exploration-platform",
  },
];

export function CaseStudiesV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              Our Work
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-xl">
              See how we've helped businesses transform their operations
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="mt-6 lg:mt-0 rounded-xl"
            asChild
          >
            <Link href="/case-studies">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={study.href}
                className="group block h-full rounded-3xl bg-background border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Header with image */}
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.location}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="flex gap-6 mb-6">
                    {study.results.map((result) => (
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

                  {/* Quote */}
                  <div className="pt-6 border-t border-border">
                    <Quote className="w-5 h-5 text-primary/40 mb-2" />
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "{study.quote}"
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      — {study.author}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

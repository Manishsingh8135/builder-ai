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
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
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
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
            >
              Our Work
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-xl leading-relaxed">
              See how we've helped businesses transform their operations and achieve massive growth.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 lg:mt-0 rounded-full px-8 h-12 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
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
                className="group block h-full rounded-3xl bg-card border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
              >
                {/* Header with image */}
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-6">
                    <span className="inline-block px-3 py-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                      {study.category}
                    </span>
                  </div>
                  
                  <ArrowUpRight className="absolute top-4 right-6 w-10 h-10 p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mb-4">
                      {study.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-2xl bg-muted/50 border border-border/50">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <div className="text-2xl font-bold gradient-text">
                          {result.metric}
                        </div>
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="flex gap-3">
                      <Quote className="w-8 h-8 text-primary/20 shrink-0" />
                      <div>
                        <p className="text-sm italic text-muted-foreground mb-3 leading-relaxed">
                          "{study.quote}"
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          — {study.author}
                        </p>
                      </div>
                    </div>
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

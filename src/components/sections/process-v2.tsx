"use client";

import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "We start with a free consultation to understand your vision, goals, and requirements. No commitment needed.",
    duration: "30 min",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Planning",
    description: "We create a detailed roadmap, define the tech stack, and outline the MVP features that matter most.",
    duration: "3-5 days",
  },
  {
    icon: Code2,
    number: "03",
    title: "Design & Development",
    description: "Our team builds your product with weekly updates, ensuring you're involved every step of the way.",
    duration: "4-8 weeks",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "We deploy your product, provide training, and offer ongoing support to ensure your success.",
    duration: "Ongoing",
  },
];

export function ProcessV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            How We Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            From Idea to <span className="gradient-text">Launch</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven process that delivers results, every time. simple, transparent, and effective.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step card */}
                <div className="h-full p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative z-10">
                  {/* Icon with number */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border-4 border-card flex items-center justify-center text-sm font-bold text-primary shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div className="pt-4 border-t border-border/50">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
                        {step.duration}
                    </span>
                  </div>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 items-center justify-center text-primary/40">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Ready to start your project?
          </p>
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            asChild
          >
            <Link href="/schedule">
              Book Your Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

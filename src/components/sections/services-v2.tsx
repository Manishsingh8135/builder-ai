"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Rocket, Globe, Smartphone, Bot } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your startup in weeks, not months. We build production-ready MVPs with modern tech stacks.",
    features: ["Rapid Prototyping", "Full-Stack Development", "Scalable Architecture"],
    gradient: "from-violet-500 to-purple-600",
    href: "/services/mvp-development",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Powerful, responsive web apps that deliver exceptional user experiences and drive growth.",
    features: ["SaaS Platforms", "Customer Portals", "Admin Dashboards"],
    gradient: "from-cyan-500 to-blue-600",
    href: "/services/web-applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps your users will love. iOS & Android.",
    features: ["Cross-Platform", "Native Performance", "Offline Support"],
    gradient: "from-orange-500 to-red-600",
    href: "/services/mobile-applications",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Supercharge your product with AI capabilities. Chatbots, automation, and intelligent features.",
    features: ["AI Chatbots", "Smart Automation", "Data Analysis"],
    gradient: "from-emerald-500 to-teal-600",
    href: "/services/ai-integration",
  },
];

export function ServicesV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end development solutions to bring your vision to life
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full p-8 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

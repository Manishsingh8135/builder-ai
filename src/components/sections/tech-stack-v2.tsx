"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Next.js", category: "Frontend", description: "React framework for production" },
  { name: "React", category: "Frontend", description: "UI component library" },
  { name: "TypeScript", category: "Language", description: "Type-safe JavaScript" },
  { name: "Node.js", category: "Backend", description: "Server-side runtime" },
  { name: "PostgreSQL", category: "Database", description: "Relational database" },
  { name: "TailwindCSS", category: "Styling", description: "Utility-first CSS" },
  { name: "Stripe", category: "Payments", description: "Payment processing" },
  { name: "Vercel", category: "Hosting", description: "Edge deployment" },
  { name: "OpenAI", category: "AI", description: "AI integration" },
  { name: "React Native", category: "Mobile", description: "Cross-platform apps" },
  { name: "Supabase", category: "Backend", description: "Backend as a Service" },
  { name: "AWS", category: "Cloud", description: "Cloud infrastructure" },
];

export function TechStackV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,140,248,0.05),transparent_70%)]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Tech Stack
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and maintainable products
          </p>
        </motion.div>

        {/* Tech grid - Scrolling marquee effect */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold gradient-text">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Production Ready",
              description: "Every project is built with production in mind. Optimized, secure, and scalable from day one.",
              icon: "🚀",
            },
            {
              title: "Modern Architecture",
              description: "Clean code, proper documentation, and best practices. Your codebase will be a joy to maintain.",
              icon: "🏗️",
            },
            {
              title: "Future Proof",
              description: "We use stable, well-supported technologies that will serve your business for years to come.",
              icon: "🔮",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-card/50 border border-border/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

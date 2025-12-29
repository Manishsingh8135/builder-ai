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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

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
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            Tech Stack
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build fast, scalable, and maintainable products that stand the test of time.
          </p>
        </motion.div>

        {/* Tech grid - Scrolling marquee effect */}
        <div className="relative py-8">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/10 group-hover:border-primary/20 transition-colors">
                      <span className="text-xl font-bold gradient-text">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground">
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
              className="text-center p-8 rounded-3xl bg-card/30 border border-border/50 hover:bg-card/50 transition-colors"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

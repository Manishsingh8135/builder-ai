"use client";

import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need - no more paying for multiple subscriptions.",
    author: "Hipolito Rivera",
    role: "Owner",
    company: "R1P FITNESS",
    location: "Hawaii, USA",
    rating: 5,
  },
  {
    quote: "The website perfectly represents our services. We've seen a significant increase in client inquiries since launching. Builder AI was professional and delivered on time.",
    author: "Shedder Jacques",
    role: "Owner",
    company: "Shedder's Healthcare",
    location: "USA",
    rating: 5,
  },
  {
    quote: "The website captures the heart of our farm perfectly. Customers love being able to order online and learn about where their food comes from.",
    author: "Mike Quill",
    role: "Owner",
    company: "Little Tree Farm NS",
    location: "Nova Scotia, Canada",
    rating: 5,
  },
];

export function TestimonialsV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real feedback from real businesses we've helped grow. Your success is our reputation.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 lg:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col relative overflow-hidden">
                {/* Gradient Blob for Card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {/* Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <div className="relative z-10">
                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                </div>

                {/* Quote text */}
                <p className="text-lg text-foreground leading-relaxed mb-8 flex-grow relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border/50 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-background">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

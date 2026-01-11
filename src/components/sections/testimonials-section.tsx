"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredTestimonials = testimonials.filter((t) => t.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border"
            >
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{featuredTestimonials[currentIndex].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {featuredTestimonials[currentIndex].image ? (
                    <img
                      src={featuredTestimonials[currentIndex].image}
                      alt={featuredTestimonials[currentIndex].author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {featuredTestimonials[currentIndex].author.charAt(0)}
                    </div>
                  )}
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">
                      {featuredTestimonials[currentIndex].author}
                    </div>
                    <div className="text-muted-foreground">
                      {featuredTestimonials[currentIndex].role},{" "}
                      {featuredTestimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
                {featuredTestimonials[currentIndex].logo && (
                  <img
                    src={featuredTestimonials[currentIndex].logo}
                    alt={`${featuredTestimonials[currentIndex].company} logo`}
                    className="h-10 w-auto object-contain opacity-60"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

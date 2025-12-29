"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const benefits = [
  "Free 30-minute consultation",
  "No commitment required",
  "Get a custom project estimate",
  "Expert technical advice",
];

export function CTAV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 left-10 lg:left-20 hidden md:block"
          >
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Sparkles className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-10 right-10 lg:right-20 hidden md:block"
          >
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Zap className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative px-6 py-16 lg:px-16 lg:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold mb-8 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Limited spots available this week
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-sm"
              >
                Ready to Build Your
                <br />
                <span className="text-white/90">Dream Product?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 text-xl text-white/80 max-w-xl mx-auto font-medium"
              >
                Book a free discovery call and let's discuss how we can bring your vision to life.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10 text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                    {benefit}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button
                  size="lg"
                  className="group h-16 px-10 text-lg font-bold rounded-full bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/schedule">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:border-white/50 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

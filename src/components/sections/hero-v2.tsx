"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/r1pfitness1.png",
  "/images/sheddler1.png",
  "/images/travelspire1.png",
];

export function HeroV2() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 lg:pt-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[120px] opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            style={{ y, opacity }} 
            className="text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-semibold text-primary backdrop-blur-sm">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                AI-Powered MVP Development
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1]"
            >
              <span className="block text-foreground">Build Your</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Dream Product
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground leading-relaxed"
            >
              We turn your startup ideas into{" "}
              <span className="text-foreground font-semibold">production-ready MVPs</span> in weeks.
              Modern tech. Beautiful design. Scalable architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-2xl bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                asChild
              >
                <Link href="/schedule">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-2xl border-2"
                asChild
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">20+</span> Projects Shipped
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">4-8</span> Weeks to MVP
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-video max-w-[700px] group">
              {/* Abstract Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] rotate-3 blur-3xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:opacity-60" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20">
                {heroImages.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.1 
                    }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={`Project screenshot ${index + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay for better text contrast if needed, mostly for bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                ))}
              </div>

              {/* Floating Cards Decorations */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 bottom-20 p-4 bg-card/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl max-w-[200px] hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="font-semibold text-sm">Results Driven</span>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-green-500" 
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-20 p-4 bg-card/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="text-center">
                  <span className="block text-2xl font-bold gradient-text">100%</span>
                  <span className="text-xs text-muted-foreground">Client Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

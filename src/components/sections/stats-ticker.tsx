"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "20+", label: "PROJECTS SHIPPED" },
    { value: "4-8", label: "WEEKS TO MVP" },
    { value: "100%", label: "CLIENT SATISFACTION" },
    { value: "GLOBAL", label: "client base" },
    // Duplicate for seamless loop
    { value: "20+", label: "PROJECTS SHIPPED" },
    { value: "4-8", label: "WEEKS TO MVP" },
    { value: "100%", label: "CLIENT SATISFACTION" },
    { value: "GLOBAL", label: "client base" },
];

export function StatsTicker() {
    return (
        <section className="py-20 bg-background border-y border-border overflow-hidden relative z-20">
            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex gap-12 whitespace-nowrap px-6"
                >
                    {[...stats, ...stats].map((stat, index) => (
                        <div key={index} className="flex items-baseline gap-4">
                            <span className="text-6xl md:text-8xl font-bold text-transparent stroke-text-primary tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                                {stat.label}
                            </span>
                            <span className="text-4xl text-muted/20 select-none mx-8">/</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradients for smooth fade */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </section>
    );
}

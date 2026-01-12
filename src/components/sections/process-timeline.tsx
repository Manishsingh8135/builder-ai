"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We deep dive into your vision. No assumptions, just clarity. We analyze your market, requirements, and goals.",
    },
    {
        number: "02",
        title: "Architecture",
        description: "Blueprints before bricks. We design scalable systems that can handle growth from day one.",
    },
    {
        number: "03",
        title: "Development",
        description: "Clean code, delivered weekly. You see the progress as it happens, not just at the deadline.",
    },
    {
        number: "04",
        title: "Launch",
        description: "Deployment is just the beginning. We ensure smooth takeoff and monitor performance.",
    }
];

export function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="mb-20">
                    <span className="font-mono text-primary text-sm tracking-widest uppercase">The Method</span>
                    <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter">
                        From Chaos <br />
                        <span className="text-muted-foreground">To Clarity</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line Base */}
                    <div className="absolute left-[19px] top-4 bottom-0 w-px bg-muted md:left-1/2 md:-translate-x-1/2" />

                    {/* Vertical Line Fill */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[19px] top-4 bottom-0 w-px bg-primary md:left-1/2 md:-translate-x-1/2"
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <TimelineItem key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ step, index }: { step: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row gap-8 md:gap-0",
            isEven ? "md:flex-row-reverse" : ""
        )}>
            {/* Dot */}
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-background md:left-1/2 md:-translate-x-1/2 rounded-full border border-muted z-10 transition-colors duration-500 hover:border-primary">
                <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="pl-16 md:pl-0 md:w-1/2 md:px-12">
                <div className={cn(
                    "flex flex-col",
                    isEven ? "md:items-start" : "md:items-end md:text-right"
                )}>
                    <span className="text-6xl font-black text-muted/20 tracking-tighter mb-4">{step.number}</span>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">{step.description}</p>
                </div>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block md:w-1/2" />
        </div>
    )
}

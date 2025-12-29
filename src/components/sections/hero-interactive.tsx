"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroInteractive() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background"
            onMouseMove={handleMouseMove}
        >
            {/* Background Layer (Muted) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <h1 className="text-[13vw] font-bold leading-[0.85] tracking-tighter text-muted/20 font-sans">
                    DIGITAL
                </h1>
                <h1 className="text-[13vw] font-bold leading-[0.85] tracking-tighter text-muted/20 font-sans">
                    ATELIER
                </h1>
            </div>

            {/* Foreground Layer (Reveal) */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none bg-background"
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    // We set bg-background to cover the bottom layer, but the text inside should be primary.
                    // Actually, we want the text to be visible only through the mask.
                    // So the div itself should be transparent, but contain the colored text.
                    backgroundColor: "transparent",
                }}
            >
                <h1 className="text-[13vw] font-bold leading-[0.85] tracking-tighter text-primary font-sans">
                    DIGITAL
                </h1>
                <h1 className="text-[13vw] font-bold leading-[0.85] tracking-tighter text-primary font-sans">
                    ATELIER
                </h1>
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute z-20 bottom-24 flex flex-col items-center space-y-6">
                <p className="font-mono text-sm tracking-[0.2em] uppercase text-muted-foreground">
                    Build Faster. Scale Smarter.
                </p>
                <Link
                    href="/contact"
                    className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-transparent hover:border-sidebar-foreground cursor-scale"
                >
                    START PROJECT
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        </section>
    );
}

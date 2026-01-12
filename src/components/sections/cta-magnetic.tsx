"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTAMagnetic() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="z-10 text-center">
                <h2 className="text-[10vw] font-bold leading-none tracking-tighter text-foreground mb-12">
                    LET'S BUILD
                </h2>

                <div className="flex justify-center">
                    <MagneticButton>
                        <Link href="/contact" className="flex items-center gap-4 text-4xl font-bold text-background">
                            START PROJECT <ArrowRight className="w-8 h-8" />
                        </Link>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = (clientX - centerX) * 0.2; // Magnetic strength
        const y = (clientY - centerY) * 0.2;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative group cursor-pointer"
        >
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative px-12 py-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                {children}
            </div>
        </motion.div>
    );
}

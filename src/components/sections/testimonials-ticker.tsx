"use client";

import { motion } from "framer-motion";

const testimonials = [
    { text: "TRANSFORMED OUR BUSINESS", author: "R1P FITNESS" },
    { text: "INCREASED INQUIRIES BY 200%", author: "SHEDDER'S" },
    { text: "EXACTLY WHAT WE ENVISIONED", author: "LITTLE TREE FARM" },
    { text: "PROFESSIONAL & TIMELY", author: "TRAVEL SPIRENE" },
    // Duplicate
    { text: "TRANSFORMED OUR BUSINESS", author: "R1P FITNESS" },
    { text: "INCREASED INQUIRIES BY 200%", author: "SHEDDER'S" },
    { text: "EXACTLY WHAT WE ENVISIONED", author: "LITTLE TREE FARM" },
    { text: "PROFESSIONAL & TIMELY", author: "TRAVEL SPIRENE" },
];

export function TestimonialsTicker() {
    return (
        <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex whitespace-nowrap gap-20 px-10"
                >
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-4xl md:text-6xl font-bold tracking-tighter">
                                "{t.text}"
                            </span>
                            <span className="text-sm font-mono mt-2 uppercase tracking-widest opacity-80">
                                — {t.author}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

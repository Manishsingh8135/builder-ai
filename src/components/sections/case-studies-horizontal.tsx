"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
    {
        id: "r1p-fitness",
        title: "R1P FITNESS",
        category: "Gym Management",
        image: "/images/r1pfitness1.png", // Verify path exists or use fallback
        year: "2024",
        href: "/case-studies/r1p-fitness-gym-management",
    },
    {
        id: "shedders",
        title: "SHEDDER'S",
        category: "Healthcare",
        image: "/images/sheddler1.png",
        year: "2024",
        href: "/case-studies/shedders-healthcare-website",
    },
    {
        id: "travel-spirene",
        title: "TRAVEL SPIRENE",
        category: "Travel Platform",
        image: "/images/travelspire1.png",
        year: "2023",
        href: "/case-studies/travel-spirene-exploration-platform",
    },
    {
        id: "agency",
        title: "AGENCY INTERNAL",
        category: "Design System",
        image: "/images/service_mvp_1766985273319.png", // Reusing asset for demo
        year: "2025",
        href: "/case-studies",
    }
];

export function CaseStudiesHorizontal() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                <div className="absolute top-10 left-10 z-10">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-primary">
                        Selected Works (0{caseStudies.length})
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-16 px-16">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={study.href}
                            className="group relative w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] flex-shrink-0 bg-secondary overflow-hidden block"
                        >
                            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                {/* Placeholder for actual images - ensuring we have fallback if files missing */}
                                <div className="absolute inset-0 bg-muted" />
                                {/* Assuming images might not exist perfectly yet, we use a colored fallback div if image fails to load, but here we try Image component */}
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                                <div>
                                    <span className="text-xs font-mono text-primary mb-2 block">{study.category} — {study.year}</span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{study.title}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

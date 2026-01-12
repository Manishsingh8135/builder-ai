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

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-220%"]);

    return (
        <section ref={targetRef} className="relative bg-background lg:h-[400vh]">
            {/* Desktop Horizontal Scroll */}
            <div className="hidden lg:flex sticky top-0 h-screen items-center overflow-hidden">
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
                            className="group relative w-[70vw] aspect-[16/9] flex-shrink-0 bg-secondary overflow-hidden block rounded-3xl border border-white/5 shadow-2xl"
                        >
                            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                <div className="absolute inset-0 bg-muted" />
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
                                    <h3 className="text-4xl font-bold text-white tracking-tight">{study.title}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Vertical List */}
            <div className="lg:hidden py-20 px-6">
                <div className="mb-10">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-6">
                        Selected Works
                    </h2>
                </div>
                <div className="flex flex-col gap-8">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={study.href}
                            className="block group relative w-full aspect-[4/3] overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-xs text-primary font-mono mb-1 block">{study.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                                <div className="flex items-center text-white/80 text-xs font-bold uppercase tracking-wide">
                                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

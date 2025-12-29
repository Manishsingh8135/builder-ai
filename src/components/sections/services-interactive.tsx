"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: "01",
        title: "MVP DEVELOPMENT",
        description: "Launch your startup in weeks. We build production-ready MVPs that validate your idea and attract investors.",
        image: "/images/service_mvp_1766985273319.png",
        href: "/services/mvp-development",
    },
    {
        id: "02",
        title: "WEB APPLICATIONS",
        description: "Scalable SaaS platforms and customer portals built with modern architecture for maximum performance.",
        image: "/images/service_web_1766985292602.png",
        href: "/services/web-applications",
    },
    {
        id: "03",
        title: "MOBILE APPS",
        description: "Native and cross-platform experiences that feel premium and work flawlessly on every device.",
        image: "/images/service_mobile_1766985307921.png",
        href: "/services/mobile-applications",
    },
    {
        id: "04",
        title: "AI INTEGRATION",
        description: "Intelligent automation and neural networks woven into your product to give you a competitive edge.",
        image: "/images/service_ai_1766985324130.png",
        href: "/services/ai-integration",
    },
];

export function ServicesInteractive() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen py-20 bg-background text-foreground overflow-hidden flex items-center z-10">
            {/* Background Image Layer */}
            <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                    <motion.div
                        key={hoveredIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={services[hoveredIndex].image}
                            alt="Service Material"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-background/80" /> {/* Overlay to keep text readable */}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2">
                        Our Expertise
                    </h2>
                    <div className="h-px w-full bg-border" />
                </div>

                {/* Desktop View (Hover Reveal) */}
                <div className="hidden lg:flex flex-col">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className="group relative border-t border-border py-12 transition-colors hover:border-primary/50"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 pl-4 md:pl-0 transition-transform duration-500 group-hover:translate-x-4">
                                <span className="font-mono text-xl text-muted-foreground group-hover:text-primary transition-colors">
                                    {service.id}
                                </span>

                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all">
                                    {service.title}
                                </h3>
                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: hoveredIndex === index ? "auto" : 0,
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                className="overflow-hidden md:ml-[140px] max-w-xl"
                            >
                                <p className="pt-4 text-lg text-muted-foreground font-light leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-6 flex items-center text-primary font-bold tracking-wide uppercase text-sm">
                                    Explore <ArrowUpRight className="ml-2 w-4 h-4" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                    <div className="h-px w-full bg-border" />
                </div>

                {/* Mobile View (Simple List/Accordion) */}
                <div className="flex lg:hidden flex-col gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className="group border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm active:border-primary transition-colors"
                        >
                            <div className="mb-4 aspect-video relative overflow-hidden rounded-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <span className="absolute top-3 left-3 font-mono text-xs text-white bg-black/50 px-2 py-1 rounded">
                                    {service.id}
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold tracking-tighter mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wide">
                                View Service <ArrowUpRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

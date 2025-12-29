"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Node.js",
    "PostgreSQL", "Tailwind", "Stripe", "Framer",
    "OpenAI", "Supabase", "AWS", "Vercel"
];

export function TechStack3D() {
    return (
        <section className="py-32 bg-secondary border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                            CORE <span className="text-muted-foreground">STACK</span>
                        </h2>
                        <p className="text-muted-foreground max-w-md">
                            We rely on a battle-tested foundation of modern technologies to ensure reliability, speed, and scalability.
                        </p>
                    </div>

                    <div className="font-mono text-sm text-primary uppercase tracking-widest">
                        System_Status: Optimal
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 0.98, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                            className="h-32 flex items-center justify-center border border-border bg-background rounded-none cursor-crosshair transition-colors duration-300"
                        >
                            <span className="font-mono text-lg font-bold tracking-tight">{tech.toUpperCase()}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Metadata } from "next";
import { HeroInteractive } from "@/components/sections/hero-interactive";
import { ServicesInteractive } from "@/components/sections/services-interactive";
import { StatsTicker } from "@/components/sections/stats-ticker";
import { CaseStudiesHorizontal } from "@/components/sections/case-studies-horizontal";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TechStack3D } from "@/components/sections/tech-stack-3d";
import { TestimonialsTicker } from "@/components/sections/testimonials-ticker";
import { CTAMagnetic } from "@/components/sections/cta-magnetic";
import { generatePageMetadata, siteUrl } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "MVP Development Company | Build Your Startup App Fast",
  description:
    "Launch your MVP in 4-8 weeks with Builder AI. We specialize in MVP development, custom web apps, mobile apps, and AI integration for startups. Get 70% cost savings. Free consultation available.",
  keywords: [
    "MVP development company",
    "build MVP fast",
    "startup app development",
    "launch MVP quickly",
    "MVP development agency",
    "hire MVP developers",
    "startup software company",
    "product development for startups",
  ],
  path: "",
});

export default function Home() {
  return (
    <>
      <HeroInteractive />
      <StatsTicker />
      <ServicesInteractive />
      <CaseStudiesHorizontal />
      <ProcessTimeline />
      <TechStack3D />
      <TestimonialsTicker />
      <CTAMagnetic />
    </>
  );
}


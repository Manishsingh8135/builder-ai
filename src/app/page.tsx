import { HeroInteractive } from "@/components/sections/hero-interactive";
import { ServicesInteractive } from "@/components/sections/services-interactive";
import { StatsTicker } from "@/components/sections/stats-ticker";
import { CaseStudiesHorizontal } from "@/components/sections/case-studies-horizontal";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TechStack3D } from "@/components/sections/tech-stack-3d";
import { TestimonialsTicker } from "@/components/sections/testimonials-ticker";
import { CTAMagnetic } from "@/components/sections/cta-magnetic";

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


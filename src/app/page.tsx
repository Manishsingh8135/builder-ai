import { HeroV2 } from "@/components/sections/hero-v2";
import { ServicesV2 } from "@/components/sections/services-v2";
import { StatsV2 } from "@/components/sections/stats-v2";
import { CaseStudiesV2 } from "@/components/sections/case-studies-v2";
import { TestimonialsV2 } from "@/components/sections/testimonials-v2";
import { ProcessV2 } from "@/components/sections/process-v2";
import { TechStackV2 } from "@/components/sections/tech-stack-v2";
import { CTAV2 } from "@/components/sections/cta-v2";

export default function Home() {
  return (
    <>
      <HeroV2 />
      <ServicesV2 />
      <StatsV2 />
      <CaseStudiesV2 />
      <ProcessV2 />
      <TechStackV2 />
      <TestimonialsV2 />
      <CTAV2 />
    </>
  );
}

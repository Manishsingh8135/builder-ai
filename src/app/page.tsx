import { HeroHome } from "@/components/sections/hero-home";
import { ServicesPreview } from "@/components/sections/services-preview";
import { StatsSection } from "@/components/sections/stats-section";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProcessPreview } from "@/components/sections/process-preview";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesPreview />
      <StatsSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <ProcessPreview />
      <CTASection />
    </>
  );
}

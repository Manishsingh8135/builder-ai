import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { Icon } from "@/components/common/icon";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI automation and custom software solutions for healthcare, finance, retail, manufacturing, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Industry-Specific{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We understand that every industry has unique challenges. Our solutions are tailored to address the specific needs of your sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <Icon name={industry.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {industry.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Common Use Cases:
                  </h4>
                  <ul className="space-y-2">
                    {industry.useCases.slice(0, 3).map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                {industry.caseStudySlug && (
                  <Link
                    href={`/case-studies/${industry.caseStudySlug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        description="We work with businesses across many sectors. Let's discuss your specific needs."
      />
    </>
  );
}

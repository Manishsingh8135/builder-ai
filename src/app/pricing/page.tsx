import { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { pricingTiers, pricingFaqs } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for AI automation and custom software development projects.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Transparent Pricing,{" "}
              <span className="gradient-text">Real Value</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Choose the engagement model that fits your needs. All projects include our commitment to quality and results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 ${
                  tier.highlighted
                    ? "bg-slate-900 text-white ring-4 ring-primary"
                    : "bg-slate-50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  <p className={`mt-2 ${tier.highlighted ? "text-slate-300" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="mb-8">
                  <div className={`text-sm ${tier.highlighted ? "text-slate-400" : "text-muted-foreground"}`}>
                    {tier.price.period}
                  </div>
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                      {tier.price.currency}{tier.price.amount}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 shrink-0 ${tier.highlighted ? "text-primary" : "text-primary"}`} />
                      <span className={tier.highlighted ? "text-slate-300" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start opacity-50">
                      <X className="h-5 w-5 mr-3 shrink-0" />
                      <span className={tier.highlighted ? "text-slate-400" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${tier.highlighted ? "bg-white text-slate-900 hover:bg-slate-100" : "gradient-bg"}`}
                  asChild
                >
                  <Link href={tier.ctaLink}>{tier.cta}</Link>
                </Button>
                <p className={`mt-4 text-sm text-center ${tier.highlighted ? "text-slate-400" : "text-muted-foreground"}`}>
                  {tier.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Pricing FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan is Right?"
        description="Let's discuss your project and find the best approach for your budget and goals."
        primaryCta="Schedule a Free Consultation"
      />
    </>
  );
}

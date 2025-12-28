import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Icon } from "@/components/common/icon";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description: "AI automation, web applications, mobile apps, and internal tools for medium-sized businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Solutions That Drive{" "}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              From AI-powered automation to custom software development, we build solutions that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature.title} className="flex items-start">
                        <Icon
                          name={feature.icon}
                          className="h-5 w-5 text-primary mt-0.5 mr-3 shrink-0"
                        />
                        <div>
                          <div className="font-medium text-foreground">
                            {feature.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn more about {service.shortTitle}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      className="h-32 w-32 text-primary/20"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Icon } from "@/components/common/icon";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata, siteUrl } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | MVP Development, Web Apps, Mobile Apps, AI & Digital Marketing",
  description:
    "Explore Builder AI's services: MVP development in 4-8 weeks, custom web applications, mobile app development (iOS & Android), AI integration, SEO, AIO, and Facebook Meta Ads. Transform your business with our expert team.",
  keywords: [
    "MVP development services",
    "custom web application development",
    "mobile app development services",
    "AI integration services",
    "SEO services",
    "AIO AI optimization",
    "Facebook Meta Ads",
    "digital marketing services",
    "SaaS development company",
    "React development services",
  ],
  path: "/services",
});

const primaryServices = services.filter((s) => s.category === "primary");
const digitalMarketingServices = services.filter((s) => s.category === "digital-marketing");

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
              From custom software development to digital marketing—we build and grow businesses end-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services - Product Development */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Product Development
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build Your Digital Product
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core expertise—turning your ideas into powerful, scalable digital products.
            </p>
          </div>
          <div className="space-y-20 lg:space-y-40">
            {primaryServices.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
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
                  <div className="aspect-[4/3] bg-muted/30 rounded-3xl overflow-hidden border border-border group relative">
                    {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Icon
                                name={service.icon}
                                className="h-32 w-32 text-primary/20"
                            />
                        </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              Digital Marketing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Grow Your Online Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing services to drive traffic, generate leads, and scale your business online.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {digitalMarketingServices.map((service) => (
              <div
                key={service.id}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature.title} className="flex items-center text-sm">
                      <Icon
                        name={feature.icon}
                        className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2 shrink-0"
                      />
                      <span className="text-foreground">{feature.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit.label}
                      className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                    >
                      <span className="font-semibold text-foreground">{benefit.metric}</span> {benefit.label}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:underline text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

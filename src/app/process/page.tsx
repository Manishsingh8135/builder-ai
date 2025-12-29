import { Metadata } from "next";
import { processSteps, processHighlights } from "@/data/process";
import { Icon } from "@/components/common/icon";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Process | How We Build MVPs in 4-8 Weeks",
  description:
    "Learn how Builder AI delivers MVPs in 4-8 weeks. Our 5-step process: Discovery, Design, Development, Testing, and Launch. Transparent communication, weekly updates, and guaranteed quality.",
  keywords: [
    "MVP development process",
    "software development methodology",
    "agile development process",
    "how to build MVP",
    "startup development timeline",
    "product development stages",
    "software project management",
  ],
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              From Idea to{" "}
              <span className="gradient-text">Impact</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Our proven methodology ensures successful project delivery, on time and within budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mr-4">
                      <Icon name={step.icon} className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">
                        Step {step.step}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                    Duration: {step.duration}
                  </div>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Activities</h3>
                    <ul className="space-y-2">
                      {step.activities.map((activity) => (
                        <li key={activity} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Deliverables</h3>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our process is designed for transparency, flexibility, and results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processHighlights.map((highlight) => (
              <div key={highlight.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon name={highlight.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

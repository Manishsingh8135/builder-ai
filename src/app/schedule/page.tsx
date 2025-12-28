import { Metadata } from "next";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Schedule a Meeting",
  description: "Book a free consultation call to discuss your AI automation or software project.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Schedule a Meeting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Let&apos;s Discuss Your{" "}
              <span className="gradient-text">Project</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Book a free 30-minute discovery call with our team. No obligation, just a conversation about your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                What to Expect
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">30 Minutes</h3>
                    <p className="text-muted-foreground">
                      A focused conversation to understand your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Video Call</h3>
                    <p className="text-muted-foreground">
                      Via Google Meet or Zoom - your choice
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Pick a time that works across timezones
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-semibold text-foreground mb-4">
                  In This Call, We&apos;ll Cover:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Your current challenges and goals",
                    "How automation or custom software can help",
                    "Our approach and process",
                    "Rough timeline and budget expectations",
                    "Next steps if there's a fit",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Booking Calendar
                </h3>
                <p className="text-muted-foreground mb-8">
                  Select a convenient time slot below
                </p>
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
                  <p className="text-muted-foreground mb-4">
                    Calendar integration would go here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In production, embed Cal.com or Calendly widget:
                  </p>
                  <code className="block mt-2 text-xs bg-background p-2 rounded">
                    {siteConfig.scheduling.calendarLink}
                  </code>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  Or email us directly at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.salesEmail}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.salesEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

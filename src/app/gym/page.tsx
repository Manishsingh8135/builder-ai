import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, DollarSign, Clock, Users, Smartphone, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Custom Gym Management Software | Replace Your $500/month Tech Stack",
  description:
    "See how we helped a gym in Hawaii replace 5 different apps with one custom system. Member app with gamification, admin panel, payments - all for $0/month in software fees.",
  keywords: [
    "gym management software",
    "custom gym app",
    "fitness business software",
    "gym member app",
    "gym booking system",
    "fitness gamification",
  ],
  openGraph: {
    title: "Custom Gym Management Software | Builder AI",
    description: "Replace your $500/month tech stack with one custom system you own forever.",
    type: "website",
  },
};

const features = [
  {
    icon: Smartphone,
    title: "Member App",
    description: "Login, dashboard, workout tracking, class booking - all in one place for your members",
  },
  {
    icon: BarChart3,
    title: "Admin Panel",
    description: "Manage bookings, classes, members, workouts, and see all your analytics",
  },
  {
    icon: DollarSign,
    title: "Payments Built-in",
    description: "Stripe integration for memberships, class packages, and one-time purchases",
  },
  {
    icon: Users,
    title: "Gamification",
    description: "Points, rewards, achievements - keep members engaged and coming back",
  },
  {
    icon: Shield,
    title: "You Own It",
    description: "No monthly fees. No vendor lock-in. 100% yours forever.",
  },
  {
    icon: Clock,
    title: "Built in 4 Months",
    description: "From idea to live system. Not years, not huge budgets.",
  },
];

const problems = [
  "Paying $200-500/month for 4-5 different apps",
  "Member data scattered across platforms",
  "Manual work syncing everything",
  "Can't customize anything",
  "Stuck with features you don't need",
  "Worried about price increases",
];

const results = [
  { metric: "$0", label: "Monthly Software Fees" },
  { metric: "60%", label: "Less Admin Time" },
  { metric: "3x", label: "Member Engagement" },
  { metric: "100%", label: "Code Ownership" },
];

export default function GymPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Gym Owners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Stop Paying <span className="gradient-text">$500/month</span> for Software That Doesn&apos;t Work Together
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We build custom gym management systems that replace your entire tech stack. 
              One system. Zero monthly fees. Yours forever.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/schedule">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="/case-studies/r1p-fitness-gym-management">
                  View Case Study
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Most gym owners we talk to are dealing with the same problems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                <span className="text-destructive mr-3 text-xl">✗</span>
                <span className="text-foreground">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              One System That Does Everything
            </h2>
            <p className="text-lg text-muted-foreground">
              We built this for R1P FITNESS in Hawaii. Now their gym runs on one custom platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Results from R1P FITNESS
            </h2>
            <p className="text-lg text-muted-foreground">
              Hipolito Rivera, gym owner in Hawaii, after switching to our custom system
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {results.map((result) => (
              <div key={result.label} className="bg-background border border-border rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{result.metric}</div>
                <div className="text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <blockquote className="bg-background border border-border rounded-2xl p-8">
              <p className="text-lg text-foreground italic mb-4">
                &quot;Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need - no more paying for multiple subscriptions.&quot;
              </p>
              <footer className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                  <span className="text-white font-bold">HR</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hipolito Rivera</div>
                  <div className="text-sm text-muted-foreground">Owner, R1P FITNESS • Hawaii, USA</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Member App */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">📱 Member App</h3>
              <ul className="space-y-3">
                {[
                  "User authentication & profiles",
                  "Personal member dashboard",
                  "Workout & activity tracking",
                  "Points & rewards system",
                  "Class booking",
                  "Payment management",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admin Panel */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🖥️ Admin Panel</h3>
              <ul className="space-y-3">
                {[
                  "Complete booking management",
                  "Class & schedule management",
                  "Member management",
                  "Workout library",
                  "Revenue & payment reports",
                  "Automated notifications",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landing Page */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🌐 Marketing Site</h3>
              <ul className="space-y-3">
                {[
                  "Modern landing page",
                  "Membership plans display",
                  "Class schedules",
                  "Lead capture forms",
                  "Mobile responsive",
                  "SEO optimized",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Own Your Gym&apos;s Tech?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s talk about what you need. 30-minute call, no pressure.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/schedule">
                Book a Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-6 text-white/60 text-sm">
              Or email us at hello@builder-ai.dev
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

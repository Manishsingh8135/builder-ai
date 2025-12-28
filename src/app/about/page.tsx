import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { companyValues, teamMembers } from "@/data/team";
import { companyStats } from "@/data/stats";
import { Icon } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission to help businesses transform through AI automation and custom software.",
};

export default function AboutPage() {
  const leadership = teamMembers.filter((m) => m.leadership);

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              We Build Technology That{" "}
              <span className="gradient-text">Transforms Businesses</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe every business deserves access to powerful automation and custom software, not just enterprises with massive IT budgets. Our mission is to democratize technology by helping medium-sized businesses compete with the big players.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded by engineers and consultants who saw how outdated processes were holding companies back, we combine deep technical expertise with real business understanding to deliver solutions that actually get used.
              </p>
              <Button asChild>
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from how we build software to how we treat our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people driving our mission to transform businesses through technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.slice(0, 3).map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/team">
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We serve clients across USA, Canada, Europe, and the Middle East, bringing world-class solutions to businesses everywhere.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {["United States", "Canada", "Europe", "Middle East"].map((region) => (
              <div key={region} className="bg-slate-800 rounded-2xl p-6">
                <div className="text-2xl font-bold mb-2">{region}</div>
                <div className="text-slate-400">Active Clients</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

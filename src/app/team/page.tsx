import { Metadata } from "next";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/data/team";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Team | Meet the MVP Development Experts",
  description:
    "Meet the Builder AI team - experienced developers, designers, and strategists who build successful MVPs. Remote-first team serving clients globally with expertise in React, Node.js, AI, and more.",
  keywords: [
    "MVP development team",
    "software developers",
    "startup development experts",
    "remote development team",
    "React developers",
    "Node.js developers",
    "AI specialists",
  ],
  path: "/team",
});

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.leadership);
  const team = teamMembers.filter((m) => !m.leadership);

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Meet the People Behind{" "}
              <span className="gradient-text">Your Success</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              A diverse team of engineers, designers, and strategists dedicated to transforming your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-12">Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {leadership.map((member) => (
              <div key={member.id} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                {member.social && (
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} on Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {team.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-12">Team</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTASection
        title="Want to Join Our Team?"
        description="We're always looking for talented people who share our passion for technology and client success."
        primaryCta="View Open Positions"
        primaryHref="/careers"
      />
    </>
  );
}

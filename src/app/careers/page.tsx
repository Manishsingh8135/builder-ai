import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { jobListings, benefits, cultureValues } from "@/data/careers";
import { Icon } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team and help businesses transform through AI automation and custom software.",
};

export default function CareersPage() {
  const activeJobs = jobListings.filter((job) => job.active);

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Build the Future{" "}
              <span className="gradient-text">With Us</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Join a team of passionate engineers, designers, and strategists working on cutting-edge AI and software solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Why Join Us?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <Icon name={benefit.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Culture
              </h2>
              <div className="space-y-6">
                {cultureValues.map((value) => (
                  <div key={value.title}>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Open Positions ({activeJobs.length})
          </h2>
          <div className="space-y-6">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-muted rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge>{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${job.id}`}>
                      View Position
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
          {activeJobs.length === 0 && (
            <div className="text-center py-12 bg-card rounded-2xl">
              <p className="text-muted-foreground mb-4">
                No open positions at the moment.
              </p>
              <p className="text-sm text-muted-foreground">
                Send your resume to{" "}
                <a href="mailto:careers@company.com" className="text-primary hover:underline">
                  careers@company.com
                </a>{" "}
                and we&apos;ll keep you in mind.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

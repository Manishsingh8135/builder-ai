export const siteConfig = {
  name: "Builder AI",
  tagline: "Build Your MVP. Launch Faster. Scale Smarter.",
  description:
    "We help startups and businesses launch their MVPs quickly with AI-powered development, custom web & mobile apps, and complete digital solutions.",
  contact: {
    email: "hello@builder-ai.dev",
    salesEmail: "sales@builder-ai.dev",
    supportEmail: "support@builder-ai.dev",
    // Phone numbers temporarily removed
    // phone: {
    //   us: "+1 (555) 123-4567",
    //   uk: "+44 20 1234 5678",
    // },
    address: {
      street: "",
      city: "Remote",
      state: "",
      zip: "",
      country: "Global",
    },
  },
  social: {
    twitter: "https://twitter.com/builderai_dev",
    linkedin: "https://linkedin.com/company/builder-ai-dev",
    github: "https://github.com/builder-ai-dev",
    youtube: "https://youtube.com/@builderaidev",
  },
  seo: {
    title: "MVP Development & AI-Powered Software Solutions",
    description:
      "Launch your MVP faster with Builder AI. We build web apps, mobile apps, and complete digital solutions for startups and growing businesses.",
    keywords: [
      "MVP development",
      "startup development",
      "AI automation",
      "custom software",
      "web development",
      "mobile apps",
    ],
  },
  scheduling: {
    calendarLink: "https://cal.com/mike-t9f2tv/30min",
    calUsername: "mike-t9f2tv",
    calEventType: "30min",
    meetingDuration: 30,
  },
};

export type SiteConfig = typeof siteConfig;

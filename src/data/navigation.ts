export const mainNavigation = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "MVP Development",
        href: "/services/mvp-development",
        description: "Launch your startup idea fast",
        icon: "Rocket",
      },
      {
        label: "Web Applications",
        href: "/services/web-applications",
        description: "Custom web solutions for your business",
        icon: "Globe",
      },
      {
        label: "Mobile Apps",
        href: "/services/mobile-applications",
        description: "iOS & Android app development",
        icon: "Smartphone",
      },
      {
        label: "AI Integration",
        href: "/services/ai-integration",
        description: "Add AI capabilities to your product",
        icon: "Bot",
      },
      {
        label: "SEO Services",
        href: "/services/seo-services",
        description: "Rank higher in search results",
        icon: "Search",
      },
      {
        label: "AIO - AI Optimization",
        href: "/services/aio-services",
        description: "Get found by AI assistants",
        icon: "Sparkles",
      },
      {
        label: "Meta Ads",
        href: "/services/meta-ads",
        description: "Facebook & Instagram advertising",
        icon: "Megaphone",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "MVP Development", href: "/services/mvp-development" },
    { label: "Web Applications", href: "/services/web-applications" },
    { label: "Mobile Apps", href: "/services/mobile-applications" },
    { label: "AI Integration", href: "/services/ai-integration" },
  ],
  digitalMarketing: [
    { label: "SEO Services", href: "/services/seo-services" },
    { label: "AIO - AI Optimization", href: "/services/aio-services" },
    { label: "Facebook & Meta Ads", href: "/services/meta-ads" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Industries", href: "/industries" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
};

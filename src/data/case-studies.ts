interface CaseStudyResult {
  metric: string;
  label: string;
}

interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  duration: string;
  featured: boolean;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  technologies: string[];
  testimonial: CaseStudyTestimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "r1p-fitness",
    slug: "r1p-fitness-gym-management",
    title: "Complete Gym Management System for R1P FITNESS",
    client: "R1P FITNESS - ripfitgym.com",
    industry: "Fitness & Wellness",
    service: "mvp-development",
    duration: "4 months",
    featured: true,
    challenge:
      "Hipolito Rivera needed a complete digital solution for his gym in Hawaii - from member management to payments, class scheduling, and performance tracking. Existing solutions were expensive and didn't fit his specific needs.",
    solution:
      "We built a comprehensive gym management system from scratch including member portal, admin dashboard, payment processing with Stripe, class booking, trainer management, workout tracking, and detailed analytics.",
    results: [
      { metric: "100%", label: "Digital Operations" },
      { metric: "60%", label: "Admin Time Saved" },
      { metric: "3x", label: "Member Engagement" },
      { metric: "Zero", label: "Monthly Software Fees" },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
    testimonial: {
      quote:
        "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need - no more paying for multiple subscriptions.",
      author: "Hipolito Rivera",
      role: "Owner, R1P FITNESS",
    },
  },
  {
    id: "shedders-healthcare",
    slug: "shedders-healthcare-website",
    title: "Professional Website for Shedder's Healthcare",
    client: "Shedder's Healthcare - sheddlershealthcare.com",
    industry: "Professional Services",
    service: "web-apps",
    duration: "6 weeks",
    featured: true,
    challenge:
      "Shedder Jacques needed a professional online presence to showcase services, build trust with potential clients, and enable easy contact and appointment scheduling.",
    solution:
      "We designed and developed a modern, professional website that clearly communicates services, builds credibility, and makes it easy for clients to get in touch. Optimized for local SEO and mobile users.",
    results: [
      { metric: "200%", label: "Online Inquiries" },
      { metric: "Top 10", label: "Local Search Rankings" },
      { metric: "4.5s", label: "Avg Session Duration" },
      { metric: "Mobile", label: "First Design" },
    ],
    technologies: ["Next.js", "TailwindCSS", "Vercel", "Google Analytics"],
    testimonial: {
      quote:
        "The website perfectly represents our services. We've seen a significant increase in client inquiries since launching.",
      author: "Shedder Jacques",
      role: "Owner, Shedder's Healthcare",
    },
  },
  {
    id: "little-tree-farm",
    slug: "little-tree-farm-website",
    title: "E-commerce & Brand Website for Little Tree Farm",
    client: "Little Tree Farm NS - littletreefarmns.com",
    industry: "Agriculture & E-commerce",
    service: "web-apps",
    duration: "8 weeks",
    featured: true,
    challenge:
      "Mike Quill's farm in Nova Scotia needed an online presence to sell products directly to customers, share the farm's story, and build a community around sustainable agriculture.",
    solution:
      "We created a beautiful, story-driven website with e-commerce functionality, product catalog, farm blog, and newsletter integration. The design reflects the authentic, natural brand of the farm.",
    results: [
      { metric: "Direct", label: "Sales Channel" },
      { metric: "500+", label: "Newsletter Subscribers" },
      { metric: "Local", label: "SEO Optimized" },
      { metric: "Brand", label: "Story Told" },
    ],
    technologies: ["Next.js", "Shopify", "TailwindCSS", "Mailchimp"],
    testimonial: {
      quote:
        "The website captures the heart of our farm perfectly. Customers love being able to order online and learn about where their food comes from.",
      author: "Mike Quill",
      role: "Owner, Little Tree Farm NS",
    },
  },
  {
    id: "romeos-health-heaven",
    slug: "romeos-health-heaven-platform",
    title: "Health & Wellness Platform for Romeo's Health Heaven",
    client: "Romeo's Health Heaven - romeoshealthheaven.com",
    industry: "Health & Wellness",
    service: "web-apps",
    duration: "6 weeks",
    featured: false,
    challenge:
      "Romeo needed a professional platform to showcase health and wellness services, share content, and enable customers to easily browse offerings and make inquiries.",
    solution:
      "We built a clean, wellness-focused website with service showcases, content sections, and easy contact functionality. The design emphasizes trust, health, and professionalism.",
    results: [
      { metric: "Professional", label: "Online Presence" },
      { metric: "Mobile", label: "Optimized" },
      { metric: "Fast", label: "Load Times" },
      { metric: "SEO", label: "Ready" },
    ],
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    testimonial: {
      quote:
        "Builder AI understood my vision for a health-focused brand. The website looks amazing and my clients love it.",
      author: "Romeo",
      role: "Owner, Romeo's Health Heaven",
    },
  },
  {
    id: "travel-spirene",
    slug: "travel-spirene-exploration-platform",
    title: "Northeast India Exploration Platform - Travel Spirene",
    client: "Travel Spirene - travelspirene.com (Builder AI Project)",
    industry: "Travel & Tourism",
    service: "mvp-development",
    duration: "Ongoing",
    featured: true,
    challenge:
      "Northeast India is one of the most beautiful yet underexplored regions. Travelers struggle to find authentic information, book experiences, and discover hidden gems in the region.",
    solution:
      "We're building a comprehensive travel platform for Northeast India exploration - featuring curated destinations, local experiences, trip planning tools, and community-driven content. Making the region accessible to travelers worldwide.",
    results: [
      { metric: "8", label: "States Covered" },
      { metric: "100+", label: "Destinations" },
      { metric: "Local", label: "Partnerships" },
      { metric: "Growing", label: "Community" },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Mapbox", "Vercel"],
    testimonial: {
      quote:
        "Travel Spirene is our passion project to make Northeast India exploration easy and accessible. We're building the platform we wished existed.",
      author: "Builder AI Team",
      role: "Founders",
    },
  },
];

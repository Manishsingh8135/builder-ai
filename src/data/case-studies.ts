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
  images?: string[];
  logo?: string;
  ownerImage?: string;
  features?: {
    category: string;
    items: string[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "r1p-fitness",
    slug: "r1p-fitness-gym-management",
    title: "Full-Stack Gym Management Platform for R1P FITNESS",
    client: "R1P FITNESS - ripfitgym.com",
    industry: "Fitness & Wellness",
    service: "mvp-development",
    duration: "4 months",
    featured: true,
    challenge:
      "Hipolito Rivera needed a complete digital transformation for his gym in Hawaii. Existing gym software was expensive ($200-500/month), lacked customization, and required multiple subscriptions for different features. He wanted a single, custom solution that he owned outright.",
    solution:
      "We built a complete gym management ecosystem from scratch: (1) Marketing landing page to attract new members, (2) Member app with authentication, payments via Stripe, personal dashboard, workout tracking, gamification with points & rewards system, and advanced activity filtering, (3) State-of-the-art admin panel with booking management, class scheduling, user management, workout & activity management, and complete business analytics.",
    results: [
      { metric: "100%", label: "Digital Operations" },
      { metric: "60%", label: "Admin Time Saved" },
      { metric: "3x", label: "Member Engagement" },
      { metric: "$0", label: "Monthly Software Fees" },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel"],
    images: [
      "/images/projects/r1pfitness/r1pfitness-site-1.png",
      "/images/projects/r1pfitness/r1pfitness-site-2.png",
      "/images/projects/r1pfitness/r1pfitness-site-3.png"
    ],
    logo: "/images/projects/r1pfitness/r1pfitness-logo.png",
    ownerImage: "/images/projects/r1pfitness/r1pfitness-owner.jpg",
    features: [
      {
        category: "Landing Page",
        items: [
          "Modern marketing website",
          "Membership plans showcase",
          "Class schedules display",
          "Lead capture forms",
          "Mobile responsive design",
        ],
      },
      {
        category: "Member App",
        items: [
          "User authentication & profiles",
          "Stripe payment integration",
          "Personal member dashboard",
          "Workout & activity tracking",
          "Gamification with points system",
          "Rewards & achievements",
          "Advanced filtering for workouts",
          "Class booking system",
        ],
      },
      {
        category: "Admin Panel",
        items: [
          "Complete booking management",
          "Class & schedule management",
          "Member management & analytics",
          "Workout library management",
          "Activity tracking oversight",
          "Revenue & payment reports",
          "Automated notifications",
        ],
      },
    ],
    testimonial: {
      quote:
        "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need - no more paying for multiple subscriptions.",
      author: "Hipolito Rivera",
      role: "Owner, R1P FITNESS, Hawaii USA",
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
    images: [
      "/images/projects/sheddler/Sheddler-site-1.png",
      "/images/projects/sheddler/Sheddler-site-2.png"
    ],
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
    title: "Complete Digital Transformation for Little Tree Farm NS",
    client: "Little Tree Farm NS - littletreefarmns.com",
    industry: "Agriculture & E-commerce",
    service: "web-apps",
    duration: "10 weeks",
    featured: true,
    challenge:
      "Mike Quill's farm in Nova Scotia, Canada needed a complete digital transformation - from zero online presence to a fully operational e-commerce business. They needed everything: website development, product setup, online store, email marketing, SEO, and ongoing digital marketing to reach local customers.",
    solution:
      "We delivered a complete end-to-end digital solution built on WordPress with Hostinger hosting. This wasn't just a website - we built their entire online business from scratch: (1) Complete WordPress website development with custom theme, (2) Full e-commerce setup with WooCommerce - all products, categories, pricing, inventory, (3) SEO optimization for local Nova Scotia search rankings, (4) AIO (AI-Optimized) content strategy, (5) Facebook & Meta Ads campaigns for local reach, (6) Email marketing setup with automated campaigns, (7) Google Analytics integration for performance tracking, (8) Complete business launch support and training.",
    results: [
      { metric: "100%", label: "Online Business Setup" },
      { metric: "Top 5", label: "Local Search Rankings" },
      { metric: "500+", label: "Newsletter Subscribers" },
      { metric: "3x", label: "Monthly Revenue Growth" },
    ],
    technologies: ["WordPress", "WooCommerce", "Hostinger", "Yoast SEO", "Mailchimp", "Meta Ads", "Google Analytics"],
    images: [
      "/images/projects/little-tree-farms/little-tree-farms-site-1.png",
      "/images/projects/little-tree-farms/little-tree-farms-site-2.png"
    ],
    logo: "/images/projects/little-tree-farms/little-tree-farms-logo.webp",
    features: [
      {
        category: "Website Development",
        items: [
          "Custom WordPress theme design",
          "Mobile-responsive layout",
          "Fast hosting on Hostinger",
          "SSL security setup",
          "Contact forms & lead capture",
        ],
      },
      {
        category: "E-commerce Setup",
        items: [
          "WooCommerce store configuration",
          "Complete product catalog setup",
          "Payment gateway integration",
          "Shipping & tax configuration",
          "Inventory management system",
        ],
      },
      {
        category: "Digital Marketing",
        items: [
          "Local SEO optimization",
          "AIO content strategy",
          "Facebook & Meta Ads management",
          "Email marketing campaigns",
          "Google Analytics & tracking",
        ],
      },
    ],
    testimonial: {
      quote:
        "Builder AI didn't just build us a website - they launched our entire online business. From setting up every product to running our Facebook ads, they handled everything. We went from zero online presence to getting orders from across Nova Scotia.",
      author: "Mike Quill",
      role: "Owner, Little Tree Farm NS, Canada",
    },
  },
  {
    id: "romeos-health-heaven",
    slug: "romeos-health-heaven-platform",
    title: "Complete E-commerce Platform for Romeo's Health Heaven",
    client: "Romeo's Health Heaven - romeoshealthheaven.com",
    industry: "Health & Wellness E-commerce",
    service: "web-apps",
    duration: "8 weeks",
    featured: true,
    challenge:
      "Romeo needed a complete e-commerce solution to sell health and wellness products online. Required a professional platform with product catalog, secure checkout, and full digital marketing support to reach health-conscious customers.",
    solution:
      "We delivered a comprehensive WordPress e-commerce solution: (1) Custom WordPress website with health & wellness branding, (2) Full WooCommerce store setup with all products, categories, and pricing, (3) Secure payment processing integration, (4) SEO optimization for health & wellness keywords, (5) Email marketing integration, (6) Mobile-optimized shopping experience, (7) Analytics and conversion tracking setup.",
    results: [
      { metric: "100%", label: "E-commerce Ready" },
      { metric: "Mobile", label: "First Design" },
      { metric: "SEO", label: "Optimized" },
      { metric: "Growing", label: "Online Sales" },
    ],
    technologies: ["WordPress", "WooCommerce", "Yoast SEO", "Mailchimp", "Google Analytics"],
    images: [
      "/images/projects/remeos-healthcare/romeos-healthcare-site.png"
    ],
    logo: "/images/projects/remeos-healthcare/romeos-health-heaven-logo.webp",
    ownerImage: "/images/projects/remeos-healthcare/romeos-health-heaven-owner.webp",
    features: [
      {
        category: "Website & Store",
        items: [
          "Custom WordPress theme",
          "WooCommerce e-commerce setup",
          "Product catalog management",
          "Secure payment processing",
          "Mobile-responsive design",
        ],
      },
      {
        category: "Digital Marketing",
        items: [
          "SEO optimization",
          "Email marketing setup",
          "Social media integration",
          "Google Analytics tracking",
          "Conversion optimization",
        ],
      },
    ],
    testimonial: {
      quote:
        "Builder AI built my entire online store from scratch. The website looks professional, products are easy to manage, and customers love the shopping experience. They handled everything so I could focus on my products.",
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
    images: [
      "/images/projects/travelspire-ne/travelspire-site-1.png",
      "/images/projects/travelspire-ne/travelspire-site-2.png"
    ],
    logo: "/images/projects/travelspire-ne/travelspirene-logo.webp",
    testimonial: {
      quote:
        "Travel Spirene is our passion project to make Northeast India exploration easy and accessible. We're building the platform we wished existed.",
      author: "Builder AI Team",
      role: "Founders",
    },
  },
];

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceBenefit {
  metric: string;
  label: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  image?: string;
  category: "primary" | "digital-marketing";
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  useCases: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "mvp-development",
    slug: "mvp-development",
    title: "MVP Development",
    shortTitle: "MVP Development",
    tagline: "Launch your startup idea in weeks, not months",
    category: "primary",
    description:
      "Turn your vision into a working product fast. We specialize in building MVPs that validate your idea, attract investors, and get real users—all while keeping costs low and speed high.",
    icon: "Rocket",
    image: "/images/services/mvp-dev.png",
    features: [
      {
        title: "Rapid Prototyping",
        description: "From idea to clickable prototype in days",
        icon: "Zap",
      },
      {
        title: "Full-Stack Development",
        description: "Complete frontend, backend, and database",
        icon: "Layers",
      },
      {
        title: "User Authentication",
        description: "Secure login, signup, and user management",
        icon: "Shield",
      },
      {
        title: "Payment Integration",
        description: "Stripe, PayPal, and subscription billing",
        icon: "CreditCard",
      },
      {
        title: "Admin Dashboard",
        description: "Manage your product from day one",
        icon: "LayoutDashboard",
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your success",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      { metric: "4-8", label: "Weeks to Launch" },
      { metric: "70%", label: "Cost Savings" },
      { metric: "100%", label: "Code Ownership" },
      { metric: "24/7", label: "Support" },
    ],
    useCases: [
      "SaaS product launch",
      "Marketplace platforms",
      "Booking systems",
      "Subscription services",
      "Community platforms",
      "E-commerce startups",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Vercel",
    ],
  },
  {
    id: "web-apps",
    slug: "web-applications",
    title: "Custom Web Applications",
    shortTitle: "Web Apps",
    tagline: "Powerful web applications that scale with your business",
    category: "primary",
    description:
      "We build modern, responsive web applications that deliver exceptional user experiences. From customer portals to complex SaaS platforms, we create solutions that drive engagement and growth.",
    icon: "Globe",
    image: "/images/services/custom-webdev.png",
    features: [
      {
        title: "Custom SaaS Platforms",
        description: "Multi-tenant applications built for scale",
        icon: "Cloud",
      },
      {
        title: "Customer Portals",
        description: "Self-service interfaces for your clients",
        icon: "Users",
      },
      {
        title: "E-commerce Solutions",
        description: "Online stores with seamless checkout",
        icon: "ShoppingCart",
      },
      {
        title: "Admin Dashboards",
        description: "Powerful tools to manage your operations",
        icon: "LayoutDashboard",
      },
      {
        title: "Progressive Web Apps",
        description: "App-like experiences in the browser",
        icon: "Smartphone",
      },
      {
        title: "API Development",
        description: "Robust backends for any frontend",
        icon: "Code",
      },
    ],
    benefits: [
      { metric: "3x", label: "Faster Development" },
      { metric: "99.9%", label: "Uptime SLA" },
      { metric: "50%", label: "Lower Maintenance" },
      { metric: "100%", label: "Responsive" },
    ],
    useCases: [
      "SaaS product development",
      "Customer self-service portals",
      "Internal business tools",
      "E-commerce platforms",
      "Booking and reservation systems",
      "Content management systems",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-applications",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Native and cross-platform apps your users will love",
    category: "primary",
    description:
      "Reach your customers wherever they are with beautifully designed mobile applications. We build for iOS and Android, using the latest technologies to deliver fast, reliable, and engaging experiences.",
    icon: "Smartphone",
    image: "/images/services/mobile-app-dev.png",
    features: [
      {
        title: "Cross-Platform Development",
        description: "One codebase, multiple platforms",
        icon: "Layers",
      },
      {
        title: "Native iOS & Android",
        description: "Platform-specific when it matters",
        icon: "Apple",
      },
      {
        title: "Offline Capability",
        description: "Apps that work without internet",
        icon: "WifiOff",
      },
      {
        title: "Push Notifications",
        description: "Keep users engaged and informed",
        icon: "Bell",
      },
      {
        title: "App Store Optimization",
        description: "Get discovered and downloaded",
        icon: "Search",
      },
      {
        title: "Analytics Integration",
        description: "Understand user behavior",
        icon: "BarChart",
      },
    ],
    benefits: [
      { metric: "4.8★", label: "Avg App Rating" },
      { metric: "60%", label: "Faster Launch" },
      { metric: "2x", label: "User Engagement" },
      { metric: "40%", label: "Cost Savings" },
    ],
    useCases: [
      "Customer-facing mobile apps",
      "Field service applications",
      "Mobile commerce",
      "Fitness and wellness apps",
      "On-demand delivery",
      "Enterprise mobile solutions",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Expo",
    ],
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    title: "AI Integration & Automation",
    shortTitle: "AI Integration",
    tagline: "Supercharge your product with AI capabilities",
    category: "primary",
    description:
      "Add powerful AI features to your existing product or new MVP. From chatbots to content generation, we integrate the latest AI technologies to give you a competitive edge.",
    icon: "Bot",
    image: "/images/services/ai-integration.png",
    features: [
      {
        title: "AI Chatbots",
        description: "Intelligent customer support 24/7",
        icon: "MessageSquare",
      },
      {
        title: "Content Generation",
        description: "Auto-generate descriptions, emails, and more",
        icon: "FileText",
      },
      {
        title: "Smart Search",
        description: "AI-powered search and recommendations",
        icon: "Search",
      },
      {
        title: "Data Analysis",
        description: "Extract insights from your data automatically",
        icon: "TrendingUp",
      },
      {
        title: "Image Processing",
        description: "Auto-tagging, moderation, and enhancement",
        icon: "Image",
      },
      {
        title: "Workflow Automation",
        description: "Automate repetitive business tasks",
        icon: "GitBranch",
      },
    ],
    benefits: [
      { metric: "60%", label: "Time Saved" },
      { metric: "40%", label: "Cost Reduction" },
      { metric: "24/7", label: "Availability" },
      { metric: "10x", label: "Productivity" },
    ],
    useCases: [
      "Customer support automation",
      "Content creation tools",
      "Lead qualification",
      "Document processing",
      "Personalized recommendations",
      "Data entry automation",
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Python",
      "Vercel AI SDK",
      "Pinecone",
      "Supabase",
    ],
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    tagline: "Rank higher, get found, grow organically",
    category: "digital-marketing",
    description:
      "Dominate search results and drive organic traffic to your business. Our SEO services combine technical optimization, content strategy, and local SEO to help you rank for the keywords that matter most to your customers.",
    icon: "Search",
    features: [
      {
        title: "Technical SEO Audit",
        description: "Complete site health analysis and fixes",
        icon: "Settings",
      },
      {
        title: "Keyword Research",
        description: "Find high-intent keywords your customers search",
        icon: "Target",
      },
      {
        title: "On-Page Optimization",
        description: "Meta tags, content, and structure optimization",
        icon: "FileText",
      },
      {
        title: "Local SEO",
        description: "Google Business Profile & local rankings",
        icon: "MapPin",
      },
      {
        title: "Link Building",
        description: "Quality backlinks to boost authority",
        icon: "Link",
      },
      {
        title: "Performance Tracking",
        description: "Rankings, traffic, and conversion reports",
        icon: "BarChart",
      },
    ],
    benefits: [
      { metric: "Top 10", label: "Search Rankings" },
      { metric: "3x", label: "Organic Traffic" },
      { metric: "50%", label: "Lower Ad Spend" },
      { metric: "24/7", label: "Visibility" },
    ],
    useCases: [
      "Local business visibility",
      "E-commerce product rankings",
      "Service-based businesses",
      "Blog & content marketing",
      "Multi-location businesses",
      "New website launches",
    ],
    technologies: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Yoast SEO",
      "Google Analytics",
      "Screaming Frog",
    ],
  },
  {
    id: "aio-services",
    slug: "aio-services",
    title: "AIO - AI Search Optimization",
    shortTitle: "AIO",
    tagline: "Get found by AI assistants and chatbots",
    category: "digital-marketing",
    description:
      "The future of search is AI-powered. AIO (AI Search Optimization) ensures your business appears in AI assistant responses, chatbot recommendations, and voice search results. Stay ahead as customers increasingly use AI to find products and services.",
    icon: "Sparkles",
    features: [
      {
        title: "AI-Friendly Content",
        description: "Structured content that AI can understand",
        icon: "FileCode",
      },
      {
        title: "Schema Markup",
        description: "Rich data for AI comprehension",
        icon: "Code",
      },
      {
        title: "Voice Search Ready",
        description: "Optimized for conversational queries",
        icon: "Mic",
      },
      {
        title: "Featured Snippets",
        description: "Position zero optimization",
        icon: "Award",
      },
      {
        title: "Knowledge Graph",
        description: "Entity optimization for AI understanding",
        icon: "Brain",
      },
      {
        title: "AI Response Monitoring",
        description: "Track how AI tools reference your brand",
        icon: "Eye",
      },
    ],
    benefits: [
      { metric: "Future", label: "Ready" },
      { metric: "AI", label: "Visibility" },
      { metric: "Voice", label: "Search Ready" },
      { metric: "Ahead", label: "Of Competition" },
    ],
    useCases: [
      "Local businesses",
      "E-commerce stores",
      "Professional services",
      "Healthcare providers",
      "Restaurants & hospitality",
      "Any business wanting AI visibility",
    ],
    technologies: [
      "Schema.org",
      "JSON-LD",
      "ChatGPT/Bing",
      "Google SGE",
      "Voice Assistants",
      "Structured Data",
    ],
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Facebook & Meta Ads",
    shortTitle: "Meta Ads",
    tagline: "Reach your perfect customers on Facebook & Instagram",
    category: "digital-marketing",
    description:
      "Harness the power of Meta's advertising platform to reach billions of users on Facebook and Instagram. Our data-driven approach ensures your ads reach the right audience, with the right message, at the right time—maximizing ROI on every dollar spent.",
    icon: "Megaphone",
    features: [
      {
        title: "Audience Targeting",
        description: "Precision targeting by interests, behaviors, demographics",
        icon: "Users",
      },
      {
        title: "Creative Design",
        description: "Scroll-stopping ad creatives that convert",
        icon: "Image",
      },
      {
        title: "Retargeting Campaigns",
        description: "Re-engage visitors who didn't convert",
        icon: "RefreshCw",
      },
      {
        title: "Lookalike Audiences",
        description: "Find new customers similar to your best ones",
        icon: "UserPlus",
      },
      {
        title: "A/B Testing",
        description: "Continuous optimization for best results",
        icon: "FlaskConical",
      },
      {
        title: "ROI Tracking",
        description: "Full funnel conversion tracking",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      { metric: "3B+", label: "Users Reach" },
      { metric: "5x", label: "ROAS Average" },
      { metric: "Precise", label: "Targeting" },
      { metric: "Scalable", label: "Growth" },
    ],
    useCases: [
      "E-commerce sales",
      "Lead generation",
      "Brand awareness",
      "App installs",
      "Local store traffic",
      "Event promotions",
    ],
    technologies: [
      "Meta Business Suite",
      "Meta Pixel",
      "Conversions API",
      "Creative Hub",
      "Ads Manager",
      "Analytics",
    ],
  },
];

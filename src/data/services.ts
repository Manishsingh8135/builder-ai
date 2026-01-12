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
    title: "SEO - Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Rank higher, get found, grow faster",
    category: "digital-marketing",
    description:
      "Get your business found by customers actively searching for your services. We've helped businesses like Little Tree Farm NS achieve Top 5 local search rankings through strategic SEO optimization. Our approach combines technical excellence, local search expertise, and content optimization to drive real, measurable traffic growth.",
    icon: "Search",
    image: "/images/services/seo.png",
    features: [
      {
        title: "Local SEO Optimization",
        description: "Dominate local search results in your area - proven with Top 5 rankings for clients",
        icon: "MapPin",
      },
      {
        title: "Technical SEO Foundation",
        description: "Site speed, mobile optimization, and technical health for better rankings",
        icon: "Settings",
      },
      {
        title: "Strategic Keyword Research",
        description: "Target keywords your customers actually use to find businesses like yours",
        icon: "Target",
      },
      {
        title: "On-Page Optimization",
        description: "Optimize every page with proper meta tags, headings, and content structure",
        icon: "FileText",
      },
      {
        title: "Google Business Profile",
        description: "Complete setup and optimization for maximum local visibility",
        icon: "Store",
      },
      {
        title: "Monthly Performance Reports",
        description: "Clear reporting on rankings, traffic growth, and business impact",
        icon: "BarChart",
      },
    ],
    benefits: [
      { metric: "Top 5", label: "Local Rankings" },
      { metric: "Proven", label: "Results" },
      { metric: "Long-term", label: "Growth" },
      { metric: "24/7", label: "Visibility" },
    ],
    useCases: [
      "Local businesses wanting to dominate their area",
      "E-commerce stores needing product visibility",
      "Service providers competing for local customers",
      "Restaurants and hospitality businesses",
      "Professional services (legal, medical, consulting)",
      "New businesses establishing online presence",
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics",
      "Yoast SEO",
      "Google Business Profile",
      "Schema Markup",
      "Technical SEO Tools",
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
      "Position your business for the future of search. As customers increasingly use ChatGPT, Perplexity, and other AI tools to find services, AIO ensures your business appears in AI-generated recommendations. We've implemented AIO strategies for clients like Little Tree Farm NS, optimizing their content to be AI-friendly and discoverable in the new era of search.",
    icon: "Sparkles",
    image: "/images/services/AIO.png",
    features: [
      {
        title: "AI-Optimized Content Strategy",
        description: "Content structured for AI comprehension and recommendations",
        icon: "FileCode",
      },
      {
        title: "Schema Markup Implementation",
        description: "Structured data that helps AI understand your business",
        icon: "Code",
      },
      {
        title: "Conversational Query Optimization",
        description: "Optimize for how people naturally ask AI assistants questions",
        icon: "Mic",
      },
      {
        title: "Entity & Brand Recognition",
        description: "Establish your business as a recognized entity in AI knowledge bases",
        icon: "Brain",
      },
      {
        title: "FAQ & Answer Optimization",
        description: "Structure content to answer common customer questions AI tools surface",
        icon: "HelpCircle",
      },
      {
        title: "Future-Ready SEO",
        description: "Stay ahead as search evolves from keywords to AI-powered answers",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      { metric: "AI-Ready", label: "Content" },
      { metric: "Future", label: "Proof" },
      { metric: "Early", label: "Advantage" },
      { metric: "Proven", label: "Strategy" },
    ],
    useCases: [
      "Businesses preparing for AI-powered search",
      "E-commerce stores wanting AI recommendations",
      "Local businesses targeting voice search",
      "Service providers answering customer questions",
      "Companies building long-term digital presence",
      "Forward-thinking businesses gaining early advantage",
    ],
    technologies: [
      "Schema.org Markup",
      "JSON-LD Structured Data",
      "AI Content Optimization",
      "Semantic HTML",
      "Knowledge Graph Optimization",
      "FAQ Schema",
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
      "Connect with local customers where they spend their time. We've managed successful Facebook & Meta Ads campaigns for businesses like Little Tree Farm NS, helping them reach customers across their region. Our approach focuses on local targeting, compelling ad creative, and continuous optimization to ensure your advertising budget delivers real business results.",
    icon: "Megaphone",
    image: "/images/services/facebook-meta-ads.png",
    features: [
      {
        title: "Local Audience Targeting",
        description: "Reach customers in your specific geographic area with precision",
        icon: "MapPin",
      },
      {
        title: "Ad Creative Development",
        description: "Professional ad design that captures attention and drives action",
        icon: "Image",
      },
      {
        title: "Campaign Setup & Management",
        description: "Complete campaign configuration, monitoring, and optimization",
        icon: "Settings",
      },
      {
        title: "Budget Optimization",
        description: "Maximize results from your advertising spend through smart allocation",
        icon: "DollarSign",
      },
      {
        title: "Performance Tracking",
        description: "Clear reporting on reach, engagement, and conversions",
        icon: "BarChart",
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous testing and refinement for better results over time",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      { metric: "Local", label: "Reach" },
      { metric: "Proven", label: "Results" },
      { metric: "Targeted", label: "Campaigns" },
      { metric: "Measurable", label: "ROI" },
    ],
    useCases: [
      "Local businesses reaching nearby customers",
      "E-commerce stores driving online sales",
      "Restaurants and retail promoting offers",
      "Service businesses generating leads",
      "Event promotion and ticket sales",
      "Brand awareness in specific markets",
    ],
    technologies: [
      "Meta Business Suite",
      "Facebook Ads Manager",
      "Instagram Advertising",
      "Meta Pixel Tracking",
      "Audience Insights",
      "Campaign Analytics",
    ],
  },
];

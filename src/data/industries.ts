export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
  useCases: string[];
  caseStudySlug: string | null;
}

export const industries: Industry[] = [
  {
    id: "startups",
    name: "Startups & MVPs",
    slug: "startups",
    icon: "Rocket",
    description:
      "Launch faster with custom MVPs, validate ideas quickly, and scale with confidence.",
    challenges: [
      "Limited budget for development",
      "Need to validate ideas quickly",
      "Finding reliable tech partners",
      "Scaling from MVP to full product",
    ],
    solutions: [
      "Rapid MVP development",
      "Lean startup methodology",
      "Scalable architecture from day one",
      "Ongoing technical partnership",
    ],
    useCases: [
      "SaaS MVP launch",
      "Marketplace platforms",
      "Subscription products",
      "Community apps",
      "B2B tools",
    ],
    caseStudySlug: "r1p-fitness-gym-management",
  },
  {
    id: "fitness",
    name: "Fitness & Wellness",
    slug: "fitness",
    icon: "Dumbbell",
    description:
      "Build gym management systems, fitness apps, and wellness platforms that engage members.",
    challenges: [
      "Managing memberships and payments",
      "Class scheduling complexity",
      "Member engagement and retention",
      "Tracking progress and results",
    ],
    solutions: [
      "Complete gym management systems",
      "Member portals and mobile apps",
      "Payment and subscription handling",
      "Workout tracking and analytics",
    ],
    useCases: [
      "Gym management systems",
      "Fitness tracking apps",
      "Personal training platforms",
      "Wellness booking systems",
      "Community fitness apps",
    ],
    caseStudySlug: "r1p-fitness-gym-management",
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    slug: "ecommerce",
    icon: "ShoppingCart",
    description:
      "Build online stores, marketplaces, and retail solutions that convert and scale.",
    challenges: [
      "Standing out in crowded markets",
      "Cart abandonment issues",
      "Inventory management",
      "Customer experience optimization",
    ],
    solutions: [
      "Custom e-commerce platforms",
      "AI-powered recommendations",
      "Inventory management systems",
      "Seamless checkout experiences",
    ],
    useCases: [
      "Direct-to-consumer stores",
      "Marketplace platforms",
      "Subscription boxes",
      "Farm-to-table e-commerce",
      "B2B ordering systems",
    ],
    caseStudySlug: "little-tree-farm-website",
  },
  {
    id: "travel",
    name: "Travel & Tourism",
    slug: "travel",
    icon: "Plane",
    description:
      "Create booking platforms, travel guides, and tourism experiences that inspire exploration.",
    challenges: [
      "Complex booking workflows",
      "Multi-vendor coordination",
      "Seasonal demand fluctuations",
      "User experience across devices",
    ],
    solutions: [
      "Booking and reservation systems",
      "Travel planning platforms",
      "Tour operator management",
      "Mobile travel apps",
    ],
    useCases: [
      "Travel booking platforms",
      "Tour operator systems",
      "Destination guides",
      "Experience marketplaces",
      "Travel community apps",
    ],
    caseStudySlug: "travel-spirene-exploration-platform",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    slug: "professional-services",
    icon: "Briefcase",
    description:
      "Build websites and tools that establish credibility and streamline client management.",
    challenges: [
      "Establishing online presence",
      "Managing client inquiries",
      "Scheduling and booking",
      "Showcasing services effectively",
    ],
    solutions: [
      "Professional websites",
      "Client booking systems",
      "Service showcases",
      "Contact and inquiry management",
    ],
    useCases: [
      "Consulting websites",
      "Service provider platforms",
      "Appointment booking",
      "Client portals",
      "Portfolio sites",
    ],
    caseStudySlug: "shedders-healthcare-website",
  },
  {
    id: "agriculture",
    name: "Agriculture & Farming",
    slug: "agriculture",
    icon: "Leaf",
    description:
      "Connect farms with customers through e-commerce, subscription boxes, and community platforms.",
    challenges: [
      "Reaching customers directly",
      "Managing seasonal products",
      "Building farm brand story",
      "Subscription and delivery logistics",
    ],
    solutions: [
      "Farm e-commerce websites",
      "Subscription box platforms",
      "Farm management tools",
      "Community-supported agriculture systems",
    ],
    useCases: [
      "Farm-to-table e-commerce",
      "CSA management",
      "Farm subscription boxes",
      "Agricultural marketplaces",
      "Farm brand websites",
    ],
    caseStudySlug: "little-tree-farm-website",
  },
];

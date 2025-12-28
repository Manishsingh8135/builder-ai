export const pricingTiers = [
  {
    id: "starter",
    name: "Landing Page",
    description: "Professional website to establish your online presence",
    price: {
      amount: "1,500",
      currency: "$",
      period: "Starting from",
    },
    features: [
      "Modern, responsive design",
      "Up to 5 pages",
      "Mobile optimized",
      "SEO basics included",
      "Contact form integration",
      "2 weeks delivery",
    ],
    notIncluded: [
      "Custom backend",
      "User authentication",
      "Payment integration",
    ],
    cta: "Get Started",
    ctaLink: "/contact?plan=starter",
    highlighted: false,
    ideal: "Businesses needing a professional online presence",
  },
  {
    id: "mvp",
    name: "MVP Package",
    description: "Launch your product idea with a full-featured MVP",
    price: {
      amount: "8,000",
      currency: "$",
      period: "Starting from",
    },
    features: [
      "Full-stack web application",
      "User authentication & accounts",
      "Admin dashboard",
      "Payment integration (Stripe)",
      "Database & API backend",
      "Mobile-responsive design",
      "4-8 weeks delivery",
      "30-day support included",
    ],
    notIncluded: [
      "Native mobile apps",
      "Advanced AI features",
    ],
    cta: "Book a Call",
    ctaLink: "/schedule?plan=mvp",
    highlighted: true,
    ideal: "Startups ready to launch and validate their idea",
  },
  {
    id: "complete",
    name: "Complete Solution",
    description: "Full-scale product with web, mobile, and advanced features",
    price: {
      amount: "Custom",
      currency: "",
      period: "Let's talk",
    },
    features: [
      "Everything in MVP Package",
      "Native iOS & Android apps",
      "AI/automation features",
      "Third-party integrations",
      "Scalable architecture",
      "90-day support included",
      "Dedicated project manager",
      "Priority support",
      "Training & documentation",
    ],
    notIncluded: [],
    cta: "Contact Us",
    ctaLink: "/contact?plan=complete",
    highlighted: false,
    ideal: "Businesses needing comprehensive digital solutions",
  },
];

export const pricingFaqs = [
  {
    question: "How do you determine project pricing?",
    answer:
      "We provide custom quotes based on project scope, complexity, and timeline. After our discovery call, we'll provide a detailed proposal with fixed pricing – no surprises.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we typically structure payments in milestones: 30% upfront, 40% at midpoint, and 30% upon completion. Enterprise clients can discuss custom payment terms.",
  },
  {
    question: "What's included in ongoing support?",
    answer:
      "All projects include a support period (30-90 days depending on tier). This covers bug fixes, minor adjustments, and technical support. Extended support plans are available.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. Many clients start with a Starter project and expand as they see results. We make it easy to add more automation and features over time.",
  },
  {
    question: "Do you offer retainer arrangements?",
    answer:
      "Yes, for clients with ongoing needs, we offer monthly retainer packages that provide dedicated development hours at preferred rates.",
  },
  {
    question: "What if the project scope changes?",
    answer:
      "We use an agile approach and expect some evolution. Minor scope changes are accommodated. Significant changes are discussed transparently with updated timelines and costs.",
  },
];

export type PricingTier = (typeof pricingTiers)[0];
export type PricingFaq = (typeof pricingFaqs)[0];

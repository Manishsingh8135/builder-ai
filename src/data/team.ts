export const teamMembers = [
  {
    id: "team-001",
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "15+ years building enterprise software solutions. Previously led engineering teams at Fortune 500 companies. Passionate about using AI to solve real business problems.",
    image: "/images/team/alex.jpg",
    social: {
      linkedin: "https://linkedin.com/in/alexrivera",
      twitter: "https://twitter.com/alexrivera",
    },
    leadership: true,
  },
  {
    id: "team-002",
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI/ML expert with a PhD from MIT. Former research scientist at Google AI. Leads our technical architecture and AI initiatives.",
    image: "/images/team/priya.jpg",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      twitter: "https://twitter.com/priyasharma",
    },
    leadership: true,
  },
  {
    id: "team-003",
    name: "Marcus Johnson",
    role: "Head of Engineering",
    bio: "Full-stack veteran with expertise in scalable systems. Previously engineering lead at Stripe. Ensures our solutions are built to last.",
    image: "/images/team/marcus.jpg",
    social: {
      linkedin: "https://linkedin.com/in/marcusjohnson",
    },
    leadership: true,
  },
  {
    id: "team-004",
    name: "Sophie Mueller",
    role: "Head of Design",
    bio: "Award-winning product designer with a focus on enterprise UX. Believes great software should be beautiful and intuitive.",
    image: "/images/team/sophie.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sophiemueller",
      twitter: "https://twitter.com/sophiemueller",
    },
    leadership: true,
  },
  {
    id: "team-005",
    name: "David Park",
    role: "Head of Client Success",
    bio: "10+ years in enterprise consulting. Ensures every client gets maximum value from our solutions. Your success is his mission.",
    image: "/images/team/david.jpg",
    social: {
      linkedin: "https://linkedin.com/in/davidpark",
    },
    leadership: true,
  },
  {
    id: "team-006",
    name: "Fatima Hassan",
    role: "Senior AI Engineer",
    bio: "Specializes in NLP and automation systems. Built AI solutions processing millions of documents for enterprise clients.",
    image: "/images/team/fatima.jpg",
    social: {
      linkedin: "https://linkedin.com/in/fatimahassan",
    },
    leadership: false,
  },
  {
    id: "team-007",
    name: "James Wilson",
    role: "Senior Full-Stack Developer",
    bio: "React and Node.js expert. Passionate about clean code and developer experience. Open source contributor.",
    image: "/images/team/james.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
    },
    leadership: false,
  },
  {
    id: "team-008",
    name: "Elena Kowalski",
    role: "Mobile Lead",
    bio: "iOS and Android specialist with 8+ years experience. Delivered apps with millions of downloads.",
    image: "/images/team/elena.jpg",
    social: {
      linkedin: "https://linkedin.com/in/elenakowalski",
    },
    leadership: false,
  },
];

export const companyValues = [
  {
    title: "Client-First Mindset",
    description:
      "Your success is our success. We measure ourselves by the results we deliver for your business.",
    icon: "Heart",
  },
  {
    title: "Technical Excellence",
    description:
      "We don't cut corners. Every solution is built with best practices, security, and scalability in mind.",
    icon: "Award",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises. We keep you informed at every step with clear, honest communication.",
    icon: "MessageCircle",
  },
  {
    title: "Continuous Innovation",
    description:
      "Technology evolves fast. We stay ahead so your solutions remain cutting-edge.",
    icon: "Lightbulb",
  },
];

export type TeamMember = (typeof teamMembers)[0];
export type CompanyValue = (typeof companyValues)[0];

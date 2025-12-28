export const companyStats = [
  { value: "20+", label: "Projects Delivered", icon: "CheckCircle" },
  { value: "15+", label: "Happy Clients", icon: "Users" },
  { value: "4", label: "Countries Served", icon: "Globe" },
  { value: "100%", label: "Client Satisfaction", icon: "ThumbsUp" },
];

export const impactStats = [
  { value: "4-8", label: "Weeks to MVP", icon: "Rocket" },
  { value: "70%", label: "Cost Savings", icon: "DollarSign" },
  { value: "99.9%", label: "Uptime Achieved", icon: "Activity" },
  { value: "100%", label: "Code Ownership", icon: "Code" },
];

export const experienceStats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
  { value: "50+", label: "Integrations Built" },
  { value: "24/7", label: "Support Available" },
];

export const clientLogos = [
  { name: "R1P FITNESS", logo: "/images/logos/r1pfitness.svg" },
  { name: "Shedder's Healthcare", logo: "/images/logos/shedders.svg" },
  { name: "Little Tree Farm", logo: "/images/logos/littletreefarm.svg" },
  { name: "Romeo's Health Heaven", logo: "/images/logos/romeos.svg" },
  { name: "Travel Spirene", logo: "/images/logos/travelspirene.svg" },
];

export type Stat = (typeof companyStats)[0];
export type ClientLogo = (typeof clientLogos)[0];

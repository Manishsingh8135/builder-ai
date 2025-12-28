export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dive deep into your business to understand your pain points, goals, and opportunities for improvement.",
    duration: "1-2 weeks",
    icon: "Search",
    activities: [
      "Stakeholder interviews",
      "Current process mapping",
      "Technical environment assessment",
      "Opportunity identification",
      "Goal alignment sessions",
    ],
    deliverables: [
      "Discovery report",
      "Process documentation",
      "Requirements specification",
      "Project roadmap",
    ],
    color: "indigo",
  },
  {
    step: 2,
    title: "Design",
    description:
      "We design the solution architecture and user experience, ensuring alignment with your business needs.",
    duration: "1-2 weeks",
    icon: "Pencil",
    activities: [
      "Solution architecture design",
      "User experience mapping",
      "Technical design reviews",
      "Integration planning",
      "Security assessment",
    ],
    deliverables: [
      "Technical architecture document",
      "UI/UX wireframes",
      "Integration specifications",
      "Project timeline",
    ],
    color: "cyan",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Our team builds your solution using agile sprints with regular demos and feedback cycles.",
    duration: "4-12 weeks",
    icon: "Code",
    activities: [
      "Agile sprint development",
      "Regular demo sessions",
      "Continuous integration",
      "Quality assurance testing",
      "Stakeholder feedback loops",
    ],
    deliverables: [
      "Working software increments",
      "Sprint demo recordings",
      "Progress reports",
      "Testing documentation",
    ],
    color: "violet",
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "We launch your solution with comprehensive training and ensure everything runs smoothly.",
    duration: "1-2 weeks",
    icon: "Rocket",
    activities: [
      "Production environment setup",
      "Data migration",
      "User training sessions",
      "Go-live support",
      "Performance monitoring",
    ],
    deliverables: [
      "Deployed solution",
      "Training materials",
      "User documentation",
      "Admin guides",
    ],
    color: "emerald",
  },
  {
    step: 5,
    title: "Support & Optimize",
    description:
      "We provide ongoing support and continuously optimize your solution based on real-world usage.",
    duration: "Ongoing",
    icon: "HeartHandshake",
    activities: [
      "Technical support",
      "Bug fixes and updates",
      "Performance optimization",
      "Feature enhancements",
      "Regular check-ins",
    ],
    deliverables: [
      "Support documentation",
      "Performance reports",
      "Optimization recommendations",
      "Feature roadmap",
    ],
    color: "amber",
  },
];

export const processHighlights = [
  {
    title: "Transparent Communication",
    description:
      "Weekly updates, shared project boards, and dedicated Slack channels keep you informed at every step.",
    icon: "MessageSquare",
  },
  {
    title: "Agile Flexibility",
    description:
      "Our iterative approach means we can adapt to new requirements and feedback throughout the project.",
    icon: "RefreshCw",
  },
  {
    title: "Quality First",
    description:
      "Automated testing, code reviews, and QA processes ensure every deliverable meets our high standards.",
    icon: "Shield",
  },
  {
    title: "Knowledge Transfer",
    description:
      "Comprehensive documentation and training ensure your team can maintain and extend the solution.",
    icon: "BookOpen",
  },
];

export type ProcessStep = (typeof processSteps)[0];
export type ProcessHighlight = (typeof processHighlights)[0];

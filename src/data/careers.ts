export const jobListings = [
  {
    id: "job-001",
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for a Senior AI Engineer to lead the development of our AI automation solutions. You'll work directly with clients to understand their needs and build intelligent systems that transform their operations.",
    responsibilities: [
      "Design and implement AI/ML solutions for business automation",
      "Work with GPT-4, LangChain, and other modern AI tools",
      "Collaborate with clients to understand requirements",
      "Mentor junior engineers and establish best practices",
      "Stay current with AI/ML developments and evaluate new tools",
    ],
    requirements: [
      "5+ years of software engineering experience",
      "3+ years working with ML/AI technologies",
      "Experience with Python, LangChain, and LLM APIs",
      "Strong problem-solving and communication skills",
      "Experience with cloud platforms (AWS/GCP/Azure)",
    ],
    niceToHave: [
      "Experience with computer vision or NLP",
      "Contributions to open-source AI projects",
      "Previous consulting or agency experience",
    ],
    salary: "$150K - $200K",
    active: true,
  },
  {
    id: "job-002",
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our engineering team to build custom web applications for clients across industries. You'll work with modern technologies on diverse, challenging projects.",
    responsibilities: [
      "Build full-stack web applications using React and Node.js",
      "Design and implement RESTful APIs and database schemas",
      "Collaborate with designers to implement great user experiences",
      "Write clean, maintainable, well-tested code",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with PostgreSQL or similar databases",
      "Understanding of modern web development practices",
      "Excellent communication skills in English",
    ],
    niceToHave: [
      "Experience with Next.js and serverless architecture",
      "Knowledge of DevOps and CI/CD practices",
      "Experience working in an agency environment",
    ],
    salary: "$100K - $140K",
    active: true,
  },
  {
    id: "job-003",
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We're seeking a Product Designer who can create intuitive, beautiful interfaces for complex business applications. You'll own the design process from research to implementation.",
    responsibilities: [
      "Lead design for client projects from concept to launch",
      "Conduct user research and create personas",
      "Create wireframes, prototypes, and final designs",
      "Collaborate closely with developers during implementation",
      "Establish and maintain design systems",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio showing enterprise/B2B work",
      "Proficiency in Figma and modern design tools",
      "Experience with design systems and component libraries",
      "Excellent communication and presentation skills",
    ],
    niceToHave: [
      "Experience designing AI-powered interfaces",
      "Basic understanding of front-end development",
      "Experience with user testing and analytics",
    ],
    salary: "$110K - $150K",
    active: true,
  },
  {
    id: "job-004",
    title: "Project Manager",
    department: "Operations",
    location: "Remote (US)",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We need a Project Manager to ensure our client projects are delivered on time and exceed expectations. You'll be the primary point of contact for clients throughout their project journey.",
    responsibilities: [
      "Manage multiple client projects simultaneously",
      "Coordinate between clients and internal teams",
      "Create and maintain project schedules and budgets",
      "Identify and mitigate project risks",
      "Ensure client satisfaction and project success",
    ],
    requirements: [
      "4+ years of project management experience",
      "Experience managing software development projects",
      "Strong organizational and communication skills",
      "Familiarity with agile methodologies",
      "PMP certification preferred",
    ],
    niceToHave: [
      "Experience in a consulting or agency environment",
      "Technical background or understanding",
      "Experience with AI/ML projects",
    ],
    salary: "$90K - $120K",
    active: true,
  },
];

export const benefits = [
  {
    icon: "Globe",
    title: "Remote-First",
    description: "Work from anywhere in the world. We're a distributed team across multiple time zones.",
  },
  {
    icon: "DollarSign",
    title: "Competitive Salary",
    description: "Top-of-market compensation with annual reviews and performance bonuses.",
  },
  {
    icon: "Calendar",
    title: "Flexible PTO",
    description: "Unlimited paid time off with a minimum of 4 weeks encouraged.",
  },
  {
    icon: "Heart",
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage for US employees.",
  },
  {
    icon: "Laptop",
    title: "Latest Equipment",
    description: "MacBook Pro, monitors, and any tools you need to do your best work.",
  },
  {
    icon: "BookOpen",
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: "Users",
    title: "Team Retreats",
    description: "Annual company retreats to connect with teammates in person.",
  },
  {
    icon: "Zap",
    title: "Challenging Work",
    description: "Work on diverse projects with cutting-edge technology across industries.",
  },
];

export const cultureValues = [
  {
    title: "Ownership Mentality",
    description: "We trust you to own your work. No micromanagement, just results.",
  },
  {
    title: "Continuous Learning",
    description: "Technology moves fast. We invest in staying ahead.",
  },
  {
    title: "Work-Life Balance",
    description: "We work hard, but we also respect boundaries and time off.",
  },
  {
    title: "Open Communication",
    description: "Feedback flows freely. Every voice matters.",
  },
];

export type JobListing = (typeof jobListings)[0];
export type Benefit = (typeof benefits)[0];

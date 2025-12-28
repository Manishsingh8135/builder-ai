export const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What types of businesses do you work with?",
        answer:
          "We specialize in medium-sized businesses (50-500 employees) across various industries including healthcare, finance, logistics, retail, and manufacturing. Our sweet spot is companies that have outgrown basic tools but don't have large in-house tech teams.",
      },
      {
        question: "Where are you located? Do you work with international clients?",
        answer:
          "We're a global team with presence in the US, Europe, and Middle East. We work with clients across USA, Canada, Europe, and Middle Eastern countries. All communication is in English, and we're experienced in navigating different time zones.",
      },
      {
        question: "How do I know if my business is ready for AI automation?",
        answer:
          "If you have repetitive processes that consume significant employee time, struggle with data entry errors, or find your team doing manual work that could be standardized – you're likely ready. We offer a free discovery call to assess your specific situation.",
      },
      {
        question: "What makes you different from other agencies?",
        answer:
          "We focus exclusively on AI automation and custom software for business operations. We're not a generic web agency – we're specialists in making businesses more efficient through technology. Our team combines deep technical expertise with real business experience.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "What's the difference between AI automation and regular automation?",
        answer:
          "Regular automation follows fixed rules (if X, do Y). AI automation can understand context, process unstructured data like documents and emails, learn from patterns, and handle variations. For example, AI can read any invoice format, while rule-based automation needs exact templates.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes, integration is a core part of what we do. We work with most major business systems including Salesforce, HubSpot, SAP, QuickBooks, Slack, Microsoft 365, Google Workspace, and hundreds more through APIs and integration platforms.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes, all projects include an initial support period. We also offer ongoing maintenance plans for clients who want continued support, monitoring, and regular updates to their solutions.",
      },
      {
        question: "Can you work with our internal IT team?",
        answer:
          "Absolutely. We frequently collaborate with client IT teams. We can lead the project with your team's input, work alongside your developers, or provide solutions your team can maintain independently.",
      },
    ],
  },
  {
    category: "Process",
    questions: [
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope. A focused automation project might take 6-8 weeks. A full web application could be 12-16 weeks. Enterprise transformations can span several months. We'll provide a detailed timeline after our discovery phase.",
      },
      {
        question: "What's your development process?",
        answer:
          "We follow an agile methodology with 2-week sprints. This means you see progress regularly, can provide feedback early, and we can adjust as needed. Key phases include: Discovery → Design → Development → Testing → Deployment → Support.",
      },
      {
        question: "Will I own the code and intellectual property?",
        answer:
          "Yes, 100%. Upon project completion and final payment, you own all custom code and IP we create for you. We don't hold your code hostage or charge licensing fees for what we build.",
      },
      {
        question: "How do you handle project communication?",
        answer:
          "You'll have a dedicated project manager as your main point of contact. We use tools like Slack for daily communication, weekly video calls for status updates, and shared project boards for transparency into progress.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What technologies do you use?",
        answer:
          "We use modern, proven technologies. For AI: OpenAI GPT-4, LangChain, Python. For web: React, Next.js, Node.js. For mobile: React Native, Swift, Kotlin. For infrastructure: AWS, GCP, Azure. We choose the best tools for each project's needs.",
      },
      {
        question: "How do you ensure security?",
        answer:
          "Security is built into everything we do. This includes encrypted data transmission, secure authentication, regular security audits, compliance with standards like SOC 2 and GDPR, and following OWASP guidelines for web security.",
      },
      {
        question: "Can your solutions scale as we grow?",
        answer:
          "Yes, scalability is a core design principle. We use cloud infrastructure that can handle 10x or 100x growth without architectural changes. We've built systems handling millions of transactions for enterprise clients.",
      },
      {
        question: "What about data privacy and AI?",
        answer:
          "We take data privacy seriously. We can deploy AI models that don't send your data to third parties, use enterprise AI services with data protection agreements, and implement data anonymization where needed. We're experienced with GDPR, HIPAA, and other regulations.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I get started?",
        answer:
          "The first step is a free discovery call. We'll discuss your challenges, goals, and whether we're a good fit. If we are, we'll propose a solution with clear scope, timeline, and pricing. No commitment until you're ready.",
      },
      {
        question: "Is there a minimum project size?",
        answer:
          "Our Starter projects begin at $5,000. This ensures we can deliver meaningful value and not just a band-aid solution. For smaller needs, we can recommend trusted partners or tools that might be a better fit.",
      },
      {
        question: "What do you need from us to get started?",
        answer:
          "Initially, just your time for discovery conversations. As we progress, we'll need access to relevant systems, documentation about current processes, and availability from key stakeholders for feedback sessions.",
      },
      {
        question: "Can we start with a small pilot project?",
        answer:
          "Yes, and we often recommend this. A pilot project lets you see our work quality, assess ROI, and build confidence before larger investments. Many long-term clients started with a single automation.",
      },
    ],
  },
];

export type FaqCategory = (typeof faqs)[0];
export type FaqQuestion = FaqCategory["questions"][0];

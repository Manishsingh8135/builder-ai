import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

// Base URL for the site
export const siteUrl = "https://builder-ai.dev";

// Default SEO configuration
export const defaultSEO: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | MVP Development & AI-Powered Software Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Launch your MVP in weeks, not months. Builder AI specializes in MVP development, custom web apps, mobile apps, and AI integration for startups and growing businesses. Get a free consultation today.",
  keywords: [
    "MVP development",
    "MVP development company",
    "startup app development",
    "build MVP fast",
    "hire MVP developers",
    "custom web application development",
    "mobile app development company",
    "AI integration services",
    "SaaS development",
    "React development company",
    "Next.js development",
    "startup software development",
    "web app development agency",
    "custom software development",
    "AI automation for business",
    "digital product development",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | MVP Development & AI-Powered Software Solutions`,
    description:
      "Launch your MVP in weeks, not months. We build custom web apps, mobile apps, and AI-powered solutions for startups and businesses worldwide.",
    images: [
      {
        url: `${siteUrl}/images/og_image.jpeg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - MVP Development & AI Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | MVP Development & AI-Powered Software Solutions`,
    description:
      "Launch your MVP in weeks, not months. Custom web apps, mobile apps, and AI integration for startups.",
    images: [`${siteUrl}/images/og_image.jpeg`],
    creator: "@builderai_dev",
    site: "@builderai_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

// Organization Schema for JSON-LD
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone.us,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.address.city,
    addressCountry: siteConfig.contact.address.country,
  },
  sameAs: [
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.youtube,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone.us,
      contactType: "sales",
      areaServed: ["US", "CA", "GB", "EU", "AE"],
      availableLanguage: ["English"],
    },
  ],
  foundingDate: "2023",
  founders: [
    {
      "@type": "Person",
      name: "Builder AI Team",
    },
  ],
  knowsAbout: [
    "MVP Development",
    "Web Application Development",
    "Mobile App Development",
    "AI Integration",
    "Software Development",
    "Startup Development",
    "SaaS Development",
  ],
};

// Website Schema for JSON-LD
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.svg`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Professional Service Schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  image: `${siteUrl}/og-image.png`,
  description:
    "Professional MVP development and custom software solutions for startups and businesses. We build web apps, mobile apps, and AI-powered solutions.",
  priceRange: "$$$",
  telephone: siteConfig.contact.phone.us,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.address.city,
    addressCountry: siteConfig.contact.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0,
    longitude: 0,
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Development",
          description:
            "Launch your startup idea in weeks with a fully functional MVP. We build scalable, production-ready products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Applications",
          description:
            "Powerful web applications built with modern technologies like React, Next.js, and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration & Automation",
          description:
            "Add AI capabilities to your product including chatbots, content generation, and workflow automation.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Hipolito Rivera",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need.",
    },
  ],
  sameAs: [
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.github,
  ],
};

// Helper function to generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/images/og_image.jpeg`;

  return {
    title,
    description,
    keywords: [...(defaultSEO.keywords as string[]), ...keywords],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ Schema generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Service Schema generator
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: service.provider || siteConfig.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: "Software Development",
  };
}

// Article/Blog Schema generator
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || `${siteUrl}/images/og_image.jpeg`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    keywords: article.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

// Case Study Schema generator
export function generateCaseStudySchema(caseStudy: {
  title: string;
  description: string;
  url: string;
  client: string;
  industry: string;
  results: { metric: string; label: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.description,
    url: caseStudy.url,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    about: {
      "@type": "Thing",
      name: caseStudy.industry,
    },
    keywords: `${caseStudy.industry}, case study, ${caseStudy.client}`,
  };
}

import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "FAQ | MVP Development Questions Answered",
  description:
    "Find answers to common questions about MVP development, pricing, timelines, and our process. Learn about our approach to building startups, web apps, mobile apps, and AI integration.",
  keywords: [
    "MVP development FAQ",
    "software development questions",
    "startup development process",
    "how long to build MVP",
    "MVP development timeline",
    "custom software FAQ",
    "app development questions",
  ],
  path: "/faq",
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

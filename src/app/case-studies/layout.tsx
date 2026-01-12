import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies | MVP Development Success Stories & Client Results",
  description:
    "See real results from Builder AI clients. Case studies featuring gym management systems, e-commerce platforms, travel apps, and more. Learn how we helped startups launch successful products.",
  keywords: [
    "MVP development case studies",
    "startup success stories",
    "software development portfolio",
    "client testimonials",
    "app development results",
    "gym software case study",
    "e-commerce development case study",
  ],
  path: "/case-studies",
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

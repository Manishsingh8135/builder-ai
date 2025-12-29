import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Get a Free MVP Development Quote",
  description:
    "Contact Builder AI for your MVP development project. Get a free consultation and quote within 24 hours. We serve startups in USA, Canada, Europe & Middle East. Email, phone, or schedule a call.",
  keywords: [
    "contact MVP developers",
    "get software development quote",
    "hire app developers",
    "startup development consultation",
    "free MVP consultation",
    "software development inquiry",
    "web app development contact",
  ],
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

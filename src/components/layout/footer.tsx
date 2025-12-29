import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { footerNavigation } from "@/data/navigation";
import { Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  youtube: Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background pt-20 pb-10 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 via-accent/5 to-transparent opacity-50" />
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big CTA Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to build something <br />
            <span className="gradient-text">extraordinary?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's turn your vision into reality. Schedule a call with our team and get your MVP started today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
                href="/schedule"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-white/10 pt-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4 pt-2">
                {Object.entries(siteConfig.social).map(([key, url]) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      aria-label={`Follow us on ${key}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              {footerNavigation.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
             <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.us}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                     <Phone className="h-4 w-4" />
                  </span>
                  {siteConfig.contact.phone.us}
                </a>
                <div className="flex items-start text-muted-foreground text-sm group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 mt-0.5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="mt-1.5">
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.country}
                  </span>
                </div>
              </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

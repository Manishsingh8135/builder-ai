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
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt={siteConfig.name}
                  width={160}
                  height={40}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="mt-4 text-slate-400 max-w-sm">
                {siteConfig.description}
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.us}`}
                  className="flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {siteConfig.contact.phone.us}
                </a>
                <div className="flex items-start text-slate-400">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.country}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                {Object.entries(siteConfig.social).map(([key, url]) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                      aria-label={`Follow us on ${key}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerNavigation.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerNavigation.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerNavigation.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
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

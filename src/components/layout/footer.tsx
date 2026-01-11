"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block hover:text-primary transition-colors">
              {siteConfig.name.toUpperCase()}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-mono text-sm text-primary mb-6 uppercase tracking-widest">Development</h4>
              <ul className="space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-emerald-600 dark:text-emerald-400 mb-6 uppercase tracking-widest">Marketing</h4>
              <ul className="space-y-4">
                {footerNavigation.digitalMarketing.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-primary mb-6 uppercase tracking-widest">Company</h4>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-primary mb-6 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    Email Us
                  </a>
                </li>
                {footerNavigation.resources.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground font-mono">
            © {currentYear} {siteConfig.name}. All Rights Reserved.
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground font-mono">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

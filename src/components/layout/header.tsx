"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "py-4 px-4 sm:px-6 lg:px-8"
          : "py-0"
      )}
    >
      <nav 
        className={cn(
          "mx-auto transition-all duration-500 relative",
          isScrolled 
            ? "max-w-5xl bg-background/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/5 rounded-full px-6 py-2" 
            : "max-w-7xl px-4 sm:px-6 lg:px-8 py-4 bg-transparent"
        )}
      >
        {/* Gradient Shadow Effect for Scrolled State */}
        {isScrolled && (
          <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50" />
        )}

        <div className="flex items-center justify-between h-12 lg:h-14">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start p-3 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-sm text-muted-foreground mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild className="gradient-bg hover:opacity-90 transition-opacity">
              <Link href="/schedule">Book a Call</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button className="w-full gradient-bg" asChild>
                  <Link href="/schedule">Book a Call</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "px-4" : "px-6"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center pointer-events-auto">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, width: isScrolled ? "auto" : "100%" }}
          className={cn(
            "flex items-center justify-between p-2 lg:p-3 transition-all duration-500 ease-spring",
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border border-border shadow-2xl rounded-full"
              : "bg-transparent border-transparent w-full"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center pl-3 pr-8">
            {/* If logo is SVG text, maybe use a text span for creative feel */}
            <span className="font-bold text-xl tracking-tighter mix-blend-difference text-foreground">
              {siteConfig.name.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group overflow-hidden",
                    isActive
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pl-8 pr-1">
            <Button
              size="sm"
              variant="outline"
              className="hidden lg:flex rounded-full border-border bg-background hover:bg-muted font-mono uppercase text-xs tracking-wider"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>

            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/schedule">Book Call</Link>
            </Button>

            <button
              className="lg:hidden p-2 ml-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-border rounded-3xl p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 text-lg font-medium hover:bg-muted rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link href="/contact" className="p-4 text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/schedule" className="p-4 text-primary font-bold">Book a Call</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

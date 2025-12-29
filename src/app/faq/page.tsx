"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { faqs } from "@/data/faq";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/cta-section";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...faqs.map((f) => f.category)];

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          (selectedCategory === "All" || category.category === selectedCategory) &&
          (searchQuery === "" ||
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                className="pl-12 py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No questions match your search.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFaqs.map((category) => (
                <div key={category.category}>
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="bg-card rounded-2xl px-6 border border-border"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/schedule">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

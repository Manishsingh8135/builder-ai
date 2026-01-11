export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  logo?: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Builder AI delivered exactly what I envisioned. My gym now runs smoothly with a custom system that does everything I need - no more paying for multiple subscriptions.",
    author: "Hipolito Rivera",
    role: "Owner",
    company: "R1P FITNESS",
    image: "/images/projects/r1pfitness/r1pfitness-owner.jpg",
    logo: "/images/projects/r1pfitness/r1pfitness-logo.png",
    rating: 5,
    featured: true,
  },
  {
    id: "testimonial-2",
    quote:
      "The website perfectly represents our services. We've seen a significant increase in client inquiries since launching. Builder AI was professional and delivered on time.",
    author: "Shedder Jacques",
    role: "Owner",
    company: "Shedder's Healthcare",
    image: "",
    rating: 5,
    featured: true,
  },
  {
    id: "testimonial-3",
    quote:
      "Builder AI didn't just build us a website - they launched our entire online business. From setting up every product to running our Facebook ads, they handled everything.",
    author: "Mike Quill",
    role: "Owner",
    company: "Little Tree Farm NS",
    image: "",
    logo: "/images/projects/little-tree-farms/little-tree-farms-logo.webp",
    rating: 5,
    featured: true,
  },
  {
    id: "testimonial-4",
    quote:
      "Builder AI built my entire online store from scratch. The website looks professional, products are easy to manage, and customers love the shopping experience.",
    author: "Romeo",
    role: "Owner",
    company: "Romeo's Health Heaven",
    image: "/images/projects/remeos-healthcare/romeos-health-heaven-owner.webp",
    logo: "/images/projects/remeos-healthcare/romeos-health-heaven-logo.webp",
    rating: 5,
    featured: true,
  },
];

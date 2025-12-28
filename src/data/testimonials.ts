export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
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
    image: "/images/testimonials/hipolito-rivera.jpg",
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
    image: "/images/testimonials/shedder-jacques.jpg",
    rating: 5,
    featured: true,
  },
  {
    id: "testimonial-3",
    quote:
      "The website captures the heart of our farm perfectly. Customers love being able to order online and learn about where their food comes from.",
    author: "Mike Quill",
    role: "Owner",
    company: "Little Tree Farm NS",
    image: "/images/testimonials/mike-quill.jpg",
    rating: 5,
    featured: true,
  },
  {
    id: "testimonial-4",
    quote:
      "Builder AI understood my vision for a health-focused brand. The website looks amazing and my clients love it.",
    author: "Romeo",
    role: "Owner",
    company: "Romeo's Health Heaven",
    image: "/images/testimonials/romeo.jpg",
    rating: 5,
    featured: false,
  },
];

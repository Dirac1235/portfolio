"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Megegna Shop",
    description:
      "A full-featured e-commerce platform built for the Ethiopian market. Features user authentication, product catalog, shopping cart, checkout system, and admin dashboard. Focused on performance, mobile-first design, and seamless user experience.",
    image: "/images/megegna.png", // Replace with your actual screenshot
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
    ],
    liveUrl: "https://megegna-shop.vercel.app", // Replace with real deployed link
  },
  {
    title: "Revcom",
    description:
      "Ethiopia's #1 B2B procurement marketplace connecting buyers with 200+ verified suppliers. Features live procurement requests, real-time quote management, bulk product catalog, verified seller onboarding, and escrow-protected payments. Built for scale with a responsive Amazon-style grid UI.",
    image: "/images/revcom.png",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST API",
      "Responsive Design",
      "JavaScript",
    ],
    liveUrl: "https://revecom.vercel.app/",
  },
  {
    title: "Personal Portfolio Website (This Site)",
    description:
      "My developer portfolio showcasing projects, skills, and journey. Built with modern tooling for speed, accessibility, and beautiful animations.",
    image: "/images/portfolio.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Responsive",
    ],
    githubUrl: "https://github.com/Dirac1235/portfolio", // Your actual repo
    liveUrl: "https://webimuleta.dev", // Or whatever your domain is
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            04 — Featured Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              A selection of things I&apos;ve built recently.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

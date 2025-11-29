"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "Megegna Shop",
    description: "A full-featured e-commerce platform built for the Ethiopian market. Features user authentication, product catalog, shopping cart, checkout system, and admin dashboard. Focused on performance, mobile-first design, and seamless user experience.",
    image: "/images/megegna.png", // Replace with your actual screenshot
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/Dirac1235/megegna-shop", // Update if public
    liveUrl: "https://megegna-shop.vercel.app" // Replace with real deployed link
  },
  {
    title: "SSEcommerce",
    description: "Scalable and secure e-commerce solution with product management, search functionality, secure authentication, and optimized checkout flow. Designed with clean architecture and responsive UI for all devices.",
    image: "/images/ssecommerce.png",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API", "Responsive Design", "JavaScript"],
    githubUrl: "https://github.com/Dirac1235/ssecommerce", // Update if public
  },
  {
    title: "Personal Portfolio Website (This Site)",
    description: "My developer portfolio showcasing projects, skills, and journey. Built with modern tooling for speed, accessibility, and beautiful animations.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Responsive"],
    githubUrl: "https://github.com/Dirac1235/portfolio", // Your actual repo
    liveUrl: "https://webimuleta.dev" // Or whatever your domain is
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-[42rem] mx-auto">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
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
  )
}

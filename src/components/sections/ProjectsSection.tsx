"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce store with cart, checkout, and payment integration. Built with scalability in mind.",
    image: "/project1.jpg", // Placeholder
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks and projects with real-time updates and team collaboration features.",
    image: "/project2.jpg", // Placeholder
    tags: ["React", "Firebase", "DnD", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my work and skills. Designed with a focus on accessibility and performance.",
    image: "/project3.jpg", // Placeholder
    tags: ["Next.js", "Framer Motion", "ShadCN", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
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
            Here are some of the projects I've worked on recently.
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

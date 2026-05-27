"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter", "Dart"],
    accent: "#D4A843",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    accent: "#5CB8B2",
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Docker", "Linux", "Figma", "CI/CD", "Agile", "UI/UX Design"],
    accent: "#9B8EC4",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            03 — Skills & Expertise
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              What I work with
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          <div className="mt-5 h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-0.5 h-5 rounded-full"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: cat.accent }}
                >
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.04,
                    }}
                    viewport={{ once: true }}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary/40 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

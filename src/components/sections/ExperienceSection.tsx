"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    index: "01",
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    location: "Remote",
    date: "2025 — Present",
    status: "current",
    description:
      "Built and maintained modern, responsive web interfaces using Next.js and Tailwind CSS. Focused on component reusability, performance optimization, and seamless API integration to deliver high-quality user experiences for African-focused tech initiatives.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "API Integration"],
    accent: "#f59e0b",
  },
  {
    index: "02",
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    location: "On-site",
    date: "2023",
    status: "past",
    description:
      "Developed full-stack web applications using Next.js, Node.js, Express, and MongoDB. Built responsive UIs, implemented RESTful APIs, handled database operations, and collaborated with team members to deliver clean, maintainable, and efficient solutions.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express", "REST APIs", "Git"],
    accent: "#06b6d4",
  },
  {
    index: "03",
    role: "Full Stack Software Engineering Student",
    company: "ALX Africa",
    location: "Remote",
    date: "2021 — 2022",
    status: "past",
    description:
      "Completed an intensive, project-based software engineering program specializing in full-stack development. Mastered C, Python, JavaScript, Git, Linux, backend architecture, and modern web technologies through real-world projects and peer collaboration.",
    skills: ["C", "Python", "JavaScript", "Git", "Linux", "Backend Development", "Full-Stack"],
    accent: "#8b5cf6",
  },
]

function ExperienceCard({
  exp,
  i,
}: {
  exp: (typeof experiences)[0]
  i: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Connector line segment */}
      {i < experiences.length - 1 && (
        <div
          className="absolute left-[27px] top-[56px] w-px bg-border"
          style={{ height: "calc(100% + 2rem)" }}
        />
      )}

      <div className="flex gap-5 sm:gap-7">
        {/* Index Bubble */}
        <div className="relative flex-shrink-0">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: `color-mix(in srgb, ${exp.accent} 15%, transparent)`,
              border: `1.5px solid color-mix(in srgb, ${exp.accent} 35%, transparent)`,
              color: exp.accent,
              boxShadow: `0 0 24px color-mix(in srgb, ${exp.accent} 12%, transparent)`,
            }}
          >
            {exp.index}
          </div>

          {/* Pulsing dot for current role */}
          {exp.status === "current" && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ backgroundColor: exp.accent }}
              />
              <span
                className="relative inline-flex rounded-full h-3.5 w-3.5"
                style={{ backgroundColor: exp.accent }}
              />
            </span>
          )}
        </div>

        {/* Card */}
        <div
          className="flex-1 mb-8 rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all duration-300
            group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-opacity-80 relative overflow-hidden"
          style={
            {
              "--card-accent": exp.accent,
            } as React.CSSProperties
          }
        >
          {/* Top-right glow */}
          <div
            className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
            style={{ backgroundColor: exp.accent }}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: exp.accent }}
                >
                  {exp.company}
                </span>
                {exp.status === "current" && (
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${exp.accent} 18%, transparent)`,
                      color: exp.accent,
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                {exp.role}
              </h3>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 text-muted-foreground text-xs flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <span className="font-medium whitespace-nowrap">{exp.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-4 rounded-full bg-border" />

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-2.5 py-1 rounded-lg transition-colors duration-200"
                style={{
                  background: `color-mix(in srgb, ${exp.accent} 10%, transparent)`,
                  color: exp.accent,
                  border: `1px solid color-mix(in srgb, ${exp.accent} 25%, transparent)`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Corner icon */}
          <ArrowUpRight
            className="absolute bottom-5 right-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="experience" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Career Path
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-none">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              My professional journey and the companies I&apos;ve had the privilege to work with.
            </p>
          </div>

          {/* Underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 h-px origin-left bg-border"
          />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.index} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
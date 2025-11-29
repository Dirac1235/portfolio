"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    date: "2025 - Present",
    description: "Built and maintained modern, responsive web interfaces using Next.js and Tailwind CSS. Focused on component reusability, performance optimization, and seamless API integration to deliver high-quality user experiences for African-focused tech initiatives.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "API Integration"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    date: "2023",
    description: "Developed full-stack web applications using Next.js, Node.js, Express, and MongoDB. Built responsive UIs, implemented RESTful APIs, handled database operations, and collaborated with the team members to deliver clean, maintainable, and efficient solutions.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express", "REST APIs", "Git"]
  },
  {
    role: "Full Stack Software Engineering Student",
    company: "ALX Africa",
    date: "2021 - 2022",
    description: "Completed an intensive, project-based software engineering program specializing in full-stack development. Mastered C, Python, JavaScript, Git, Linux, backend architecture, and modern web technologies through real-world projects and peer collaboration.",
    skills: ["C", "Python", "JavaScript", "Git", "Linux", "Backend Development", "Full-Stack"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-[42rem] mx-auto">
            My professional journey and the companies I&apos;ve had the privilege to work with.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className={`flex flex-col gap-2 mb-4 ${
                      index % 2 === 0 ? "md:items-start" : "md:items-end"
                    }`}>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        {index % 2 !== 0 && <span className="hidden md:inline">{exp.company}</span>}
                        {exp.role}
                        {index % 2 === 0 && <span className="hidden md:inline">@ {exp.company}</span>}
                      </h3>
                      <div className="md:hidden text-primary font-medium">{exp.company}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                    }`}>
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Send, Code2 } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Dirac1235",
    icon: Github,
    description: "See my code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/webi",
    icon: Linkedin,
    description: "Connect with me",
  },
  {
    label: "Telegram",
    href: "https://t.me/dirac02",
    icon: Send,
    description: "Message me",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/Dirac1235",
    icon: Code2,
    description: "Problem solving",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
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
            05 — Contact
          </p>
          <div className="h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Let&apos;s build<br />something great.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi — I&apos;d love to hear from you.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 text-sm font-semibold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a href="mailto:webimuleta01@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </a>
            </Button>
          </motion.div>

          {/* Right: social links grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{social.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{social.description}</p>
                  </div>
                </a>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const facts = [
  { label: "Based in", value: "Ethiopia" },
  { label: "Availability", value: "Open to work" },
  { label: "Focus", value: "Full Stack" },
  { label: "Experience", value: "4+ years" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
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
            01 — About
          </p>
          <div className="h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <Image
              src="/images/profile.png"
              alt="Webi Muleta"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-8 md:pt-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Developer.<br />Builder.<br />Problem solver.
            </h2>

            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with a passion for building impactful digital
                products. I specialize in crafting fast, accessible, and beautifully
                designed web applications — from the API layer all the way to the UI.
              </p>
              <p>
                With experience ranging from e-commerce platforms and B2B marketplaces
                to consumer apps, I bring both technical depth and product thinking
                to every project I work on.
              </p>
              <p>
                When I&apos;m not building, I&apos;m exploring new technologies, contributing to
                open source, and sharpening my problem-solving skills on LeetCode.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-0 pt-4 border-t border-border">
              {facts.map((fact) => (
                <div key={fact.label} className="pt-5">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="text-foreground font-medium mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

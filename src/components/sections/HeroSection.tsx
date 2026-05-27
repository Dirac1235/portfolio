"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x,
          top: pos.y,
          width: 600,
          height: 600,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,168,67,0.10) 0%, rgba(212,168,67,0.04) 45%, transparent 70%)",
        }}
      />
    </div>
  )
}

const ORBS = [
  { size: 420, left: "8%",  top: "12%", delay: 0,   duration: 11 },
  { size: 300, left: "68%", top: "50%", delay: 1.6, duration: 14 },
  { size: 220, left: "52%", top: "4%",  delay: 0.9, duration: 9  },
]

function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
            filter: "blur(52px)",
          }}
          animate={{ y: [0, -44, 0], x: [0, 22, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
    </div>
  )
}

const ROLES = ["Full Stack Developer", "React Specialist", "Backend Engineer", "UI Craftsman"]

function TypewriterRole() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[index]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    } else if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      return () => clearTimeout(t)
    } else {
      setDeleting(false)
      setIndex((i) => (i + 1) % ROLES.length)
    }
  }, [displayed, deleting, index])

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-3.5 bg-primary ml-0.5 animate-pulse align-middle" />
    </span>
  )
}

const TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Docker", "GraphQL", "Redis", "Prisma", "AWS", "Git",
]

function TechMarquee() {
  return (
    <div className="overflow-hidden w-full mt-10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...TECH, ...TECH].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-muted-foreground whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  return (
    <>
      <CursorSpotlight />

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">

        <FloatingOrbs />

        {/* Dot grid — gold tint in dark, subtle in light */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(212,168,67,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            zIndex: 0,
          }}
        />

        {/* Edge vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, var(--color-background) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-6 text-center max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground"
            >
              <span className="block w-6 h-px bg-primary" />
              <TypewriterRole />
              <span className="block w-6 h-px bg-primary" />
            </motion.p>

            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-base text-muted-foreground"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.0]"
              >
                Webi Muleta
              </motion.h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Building accessible, pixel-perfect web products — from API to UI.
              Focused on the intersection of great engineering and thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="h-12 px-8 text-sm font-semibold tracking-wide"
                asChild
              >
                <a href="#projects">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-sm font-semibold tracking-wide border-2"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-8 justify-center pt-4 border-t border-border"
            >
              {[
                { label: "Years exp.", value: "4+" },
                { label: "Projects shipped", value: "20+" },
                { label: "Stack", value: "Full" },
              ].map((s) => (
                <div key={s.label} className="pt-4">
                  <p className="font-serif text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Tech Marquee ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <TechMarquee />
          </motion.div>

        </div>
      </section>
    </>
  )
}

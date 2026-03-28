"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

/* ── Cursor Spotlight ───────────────────────────────────────────── */
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
          width: 500,
          height: 500,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",

        }}
      />
    </div>
  )
}

/* ── Hero Section ───────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <>
      <CursorSpotlight />

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">

        {/* Dot Grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(150,150,150,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            zIndex: 0,
          }}
        />

        {/* Edge fade using box-shadow inset trick */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 120px 60px hsl(var(--background))",
            zIndex: 1,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 lg:gap-28">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground"
            >
              <span className="block w-6 h-px bg-primary" />
              Full Stack Developer
              <span className="block w-6 h-px bg-primary" />
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Building digital{" "}
              <br className="hidden sm:block" />
              experiences{" "}
              <span className="text-primary">that matter.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed">
              Passionate about crafting accessible, pixel-perfect interfaces
              that blend form and function — from API to UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold tracking-wide" asChild>
                <a href="#projects">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold tracking-wide border-2" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-8 justify-center md:justify-start pt-4 border-t border-border"
            >
              {[
                { label: "Years exp.", value: "4+" },
                { label: "Projects shipped", value: "20+" },
                { label: "Stack", value: "Full" },
              ].map((s) => (
                <div key={s.label} className="pt-4">
                  <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center md:justify-end"
          >
            <div className="relative">
              <span className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-primary rounded-tl-md z-10" />
              <span className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-primary rounded-br-md z-10" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary/10 border border-primary/20" />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden border-2 border-border bg-muted">
                <Image src="/photo.jpg" alt="Portrait" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
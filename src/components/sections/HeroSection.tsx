"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Building digital <br className="hidden md:block" />
            <span className="text-primary">experiences that matter.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[42rem] mx-auto md:mx-0 leading-relaxed">
            I&apos;m a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend form and function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="h-12 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <a href="#projects">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium border-2 hover:bg-secondary/50" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-3 transform transition-transform duration-500 hover:rotate-6"></div>
            <div className="absolute inset-0 bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-border/50">
              <Image
                src="/photo.jpg"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

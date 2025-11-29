"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="pt-4">
            <Button size="lg" className="h-14 px-10 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

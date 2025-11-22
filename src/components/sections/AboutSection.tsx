"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              src="/photo.jpg"
              alt="About Me"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">About Me</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated developer with a passion for building digital products that solve real-world problems. 
                With a strong foundation in web technologies, I strive to create efficient, scalable, and user-friendly applications.
              </p>
              <p>
                My journey in tech has led me to work on a diverse range of projects, from small business websites to complex web applications. 
                I am always eager to learn new tools and methodologies to stay ahead in this ever-evolving field.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

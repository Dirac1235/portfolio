"use client"

import { motion } from "framer-motion"

export function ProfileBio() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.div 
      className="flex-1 max-w-2xl"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5
          }
        }
      }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-semibold mb-6 text-foreground"
        variants={textVariants}
        custom={1}
      >
        About Me
      </motion.h2>
      
      <motion.p 
        className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed"
        variants={textVariants}
        custom={2}
      >
        Passionate about creating modern, responsive web applications with cutting-edge technologies.
      </motion.p>

      <div className="space-y-6">
        <motion.p 
          className="text-base md:text-lg text-foreground/70 leading-relaxed"
          variants={textVariants}
          custom={3}
        >
          With over 5 years of experience in web development, I specialize in building scalable applications using
          React, Next.js, and Node.js. My approach combines technical expertise with a keen eye for design to create
          exceptional user experiences.
        </motion.p>

        <motion.p 
          className="text-base md:text-lg text-foreground/70 leading-relaxed"
          variants={textVariants}
          custom={4}
        >
          I&apos;m dedicated to writing clean, maintainable code and staying current with the latest industry trends.
          Whether working on frontend interfaces or backend systems, I strive to deliver solutions that are both
          elegant and efficient.
        </motion.p>
      </div>
    </motion.div>
  )
}
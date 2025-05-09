"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProfileImage() {
  return (
    <motion.div 
      className="lg:sticky lg:top-24 flex justify-center lg:justify-start w-full lg:w-1/2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }
        }
      }}
    >
      <div className="group relative w-full max-w-[380px] aspect-square h-[380px] rounded-2xl overflow-hidden">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Profile Image */}
        <Image 
          src="/photo.jpg"
          alt="Professional profile portrait" 
          fill 
          priority
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 rounded-2xl"
        />
        
        {/* Bottom gradient and text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/3 z-20">
          <div className="absolute bottom-6 left-6 flex flex-col">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.2 }
                }
              }}
            >
              John Doe
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.3 }
                }
              }}
            >
              Full Stack Developer
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

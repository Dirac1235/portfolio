"use client"

import { motion } from "framer-motion"

const skills = [
  { id: 1, name: "React", level: 95 },
  { id: 2, name: "Next.js", level: 95 },
  { id: 3, name: "TypeScript", level: 85 },
  { id: 4, name: "Node.js", level: 80 },
  { id: 5, name: "Mongodb", level: 95 },
  { id: 6, name: "React Native", level: 50 },
  { id: 7, name: "Postgres", level: 70 },
  { id: 8, name: "Docker", level: 65 },
]

export function ProfileSkills() {
  return (
    <motion.div 
      className="mt-16 lg:mt-24"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { delay: 0.8 }
        }
      }}
    >
      <motion.h3 
        className="text-xl md:text-2xl font-semibold mb-8 text-gray-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.9 }
          }
        }}
      >
        Core Skills
      </motion.h3>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 1
            }
          }
        }}
      >
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  )
}

function SkillItem({ skill }: { skill: { id: number; name: string; level: number } }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { type: "spring", stiffness: 200, damping: 15 }
        }
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative group overflow-hidden"
    >
      <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all duration-300 h-full shadow-sm">
        <div className="font-medium text-gray-900">{skill.name}</div>
        
        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
          <motion.div 
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(resolvedTheme === "dark") // Sync initial state with resolvedTheme
  }, [resolvedTheme])

  if (!mounted) return null // prevent hydration mismatch

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-10 h-10"
      onClick={handleToggle}
    >
      <motion.div
        key={isDark ? "dark" : "light"} // re-renders on theme change
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navigation from "./Navigation";

interface SectionContent {
  id: number;
  title: string;
  content: React.ReactNode;
}

const sections: SectionContent[] = [
  { id: 1, title: "Welcome to My Portfolio", content: <WelcomeSection /> },
  { id: 2, title: "About Me", content: <AboutSection /> },
  { id: 3, title: "My Projects", content: <ProjectsSection /> },
  { id: 4, title: "Contact Me", content: <ContactSection /> },
];

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function FullPageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    if (isAnimating) return;

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
      setIsAnimating(true);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      setIsAnimating(true);
    }
  };

  const handleNavigate = (index: number) => {
    if (isAnimating || index === currentIndex || index < 0 || index >= sections.length) return;

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAnimating(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isAnimating]);

  const currentSection = sections[currentIndex];

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden relative bg-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom right, rgba(59, 130, 246, 0.05) 0%, transparent 100%)
        `,
      }}
    >
      <Navigation
        currentIndex={currentIndex}
        sections={sections}
        onNavigate={handleNavigate}
      />

      <AnimatePresence
        initial={false}
        custom={direction}
        onExitComplete={() => setIsAnimating(false)}
      >
        {currentSection && (
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-h-screen overflow-y-auto py-12">
              {currentSection.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

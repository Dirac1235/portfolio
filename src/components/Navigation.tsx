'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationProps {
  currentIndex: number;
  sections: { id: number; title: string }[];
  onNavigate: (index: number) => void;
}

export default function Navigation({ currentIndex, sections, onNavigate }: NavigationProps) {
  const [isHovered, setIsHovered] = useState(false);

  const rawProgress = useMotionValue(currentIndex / (sections.length - 1));
  const progress = useSpring(rawProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    rawProgress.set(currentIndex / (sections.length - 1));
  }, [currentIndex, sections.length]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = y / rect.height;
    const newIndex = Math.round(percentage * (sections.length - 1));
    onNavigate(newIndex);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.touches[0].clientY - rect.top;
    const percentage = y / rect.height;
    const newIndex = Math.round(percentage * (sections.length - 1));
    onNavigate(newIndex);
  };

  return (
    <nav className="fixed right-0 top-0 h-screen w-16 z-50 flex items-center justify-center">
      <div
        className="relative h-full w-1 bg-gray-200 cursor-pointer rounded-t-lg rounded-b-lg"
        onClick={handleClick}
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute top-0 left-0 w-full bg-blue-500 origin-top"
          style={{ scaleY: progress }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />

        {/* Section indicators */}
        <div className="absolute inset-0 flex flex-col justify-between py-8">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full -ml-1 ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              animate={{
                scale: currentIndex === index ? 1.5 : 1,
                backgroundColor: currentIndex === index ? '#3B82F6' : '#D1D5DB',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          ))}
        </div>

        {/* Section titles on hover */}
        {isHovered && (
          <div className="absolute right-8 top-0 h-full flex flex-col justify-between py-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0.5,
                  x: currentIndex === index ? 0 : 20,
                }}
                className="text-sm font-medium text-gray-600 whitespace-nowrap"
              >
                {section.title}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

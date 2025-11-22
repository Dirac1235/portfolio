"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b  pointer-events-none" />

      <motion.div
        className="container px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start py-1">
          {/* LEFT - Profile Image */}
          <motion.div
            className="lg:sticky lg:top-10 flex justify-center lg:justify-start w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 15 },
              },
            }}
          >
            <div className="group relative w-full max-w-[400px] h-[580px] rounded-4xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 bg-white shadow-lg hover:shadow-xl transition-all ">
              {/* Profile Image */}
              <Image
                src="/photo.jpg"
                alt="Professional profile portrait"
                fill
                priority
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 rounded-xl"
              />

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0  backdrop-blur-sm h-1/4 z-20 p-6 ">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                  variants={textVariants}
                  custom={1}
                >
                  Webi Muleta
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-gray-600"
                  variants={textVariants}
                  custom={2}
                >
                  Full Stack Developer
                </motion.p>

                {/* Social icons */}
                <div className="flex gap-4 mt-3">
                  <Link
                    href="https://github.com/Dirac1235"
                    target="_blank"
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </Link>
                  <Link
                    href="https://linkedin.com/webi-muleta"
                    target="_blank"
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </Link>
                  <Link
                    href="mailto:webimuleta01@gmail.com"
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
                  >
                    <Mail className="w-5 h-5 text-gray-700" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Text Content */}
          <motion.div
            className="flex-1 max-w-2xl space-y-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.5 },
              },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-900"
              variants={textVariants}
              custom={1}
            >
              👋 About Me
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              Passionate about creating modern, responsive web applications with
              cutting-edge technologies.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={textVariants}
              custom={3}
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I completed a Software Engineering course at ALX and graduated
                as a backend-specialized software engineer. Over the past few
                years, I’ve worked on various projects that helped me gain
                practical experience in building real-world applications.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I’m familiar with a variety of tech stacks including Next.js,
                React, Express, React Native, and TypeScript. I’m dedicated to
                writing clean, maintainable code and staying current with the
                latest industry trends.
              </p>
            </motion.div>

            {/* Download Resume */}
            <motion.div variants={textVariants} custom={4}>
              <Link
                href="https://drive.google.com/file/d/1BILWJOMAsAYpHFXwi3YZWI4MYdPfbWCS/view?usp=sharing"
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-all shadow-md"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              variants={textVariants}
              custom={5}
            >
              {["Next.js", "React", "TypeScript", "Express", "Node.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-blue-50 text-blue-700 font-medium text-sm rounded-full border border-blue-100"
                    variants={textVariants}
                    custom={index + 6}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Section */}
      </motion.div>
    </section>
  );
}

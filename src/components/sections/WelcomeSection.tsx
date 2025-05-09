"use client";

import { motion } from "framer-motion";
import { ProfileSkills } from "../profileSkills";
import Image from "next/image";

export default function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full  flex flex-col items-center">
      <motion.div
        className="container px-4 md:px-6 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
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
                  damping: 15,
                },
              },
            }}
          >
            <div className="group relative w-full max-w-[400px] h-[500px] rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-200 transition-all">
              {/* Profile Image */}
              <Image
                src="/photo.jpg"
                alt="Professional profile portrait"
                fill
                priority
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 rounded-xl"
              />

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm h-1/4 z-20 p-6">
                <div className="flex flex-col">
                  <motion.h1
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2 },
                      },
                    }}
                  >
                    Webi Muleta
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-gray-600"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.3 },
                      },
                    }}
                  >
                    Full Stack Developer
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-2xl"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900"
              variants={textVariants}
              custom={1}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              Passionate about creating modern, responsive web applications with
              cutting-edge technologies.
            </motion.p>

            <div className="space-y-6">
              <motion.p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                variants={textVariants}
                custom={3}
              >
                I completed a Software Engineering course at ALX and graduated
                as a backend-specialized software engineer. Over the past few
                years, I’ve worked on various projects that helped me gain
                practical experience in building real-world applications.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                variants={textVariants}
                custom={4}
              >
                I’m familiar with a variety of tech stacks including Next.js,
                React, Express, React Native, and TypeScript. I’m dedicated to
                writing clean, maintainable code and staying current with the
                latest industry trends. Whether working on frontend interfaces
                or backend systems, I strive to deliver solutions that are both
                elegant and efficient.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <ProfileSkills />
      </motion.div>
    </section>
  );
}

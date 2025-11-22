"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Megegna",
      tech: ["Next.js", "Express", "Playwright", "MySQL", "Prisma"],
      description:
        "An intelligent price comparison platform that aggregates data from electronic shops in Ethiopia, offering users real-time market insights.",
      link: "https://megegna-shop.vercel.app/",
      gitlink: "",
      image: "/images/megegna.png",
    },
    {
      id: 2,
      title: "SSEcommerce",
      tech: ["Next.js", "Express", "Prisma", "Postgres"],
      description:
        "A scalable e-commerce platform built for small businesses. Features real-time inventory management, secure APIs, and a smooth checkout experience.",
      gitlink: "https://github.com/Dirac1235/ssecomerce",
      link: "#",
      image: "/images/ssecommerce.png",
    },
    {
      id: 3,
      title: "Simple Chat",
      tech: ["Next.js", "Express", "Socket.io", "MongoDB"],
      description:
        "A real-time chat web app enabling seamless communication with instant messaging, typing indicators, and clean modern UI.",
      gitlink: "https://github.com/Dirac1235/socketchat",
      link: "#",
      image: "/images/socketchat.png",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white text-gray-800 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 xl:px-0 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-black">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            A selection of my favorite full-stack builds and creative web
            solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group bg-white/70 backdrop-blur-lg rounded-3xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col justify-between h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay buttons */}
              <div className="absolute inset-0 flex justify-center items-center gap-4 bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                {project.link && project.link !== "#" && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium shadow-md transition-colors"
                  >
                    <Link2 className="w-4 h-4" /> Live Demo
                  </motion.a>
                )}
                {project.gitlink && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium shadow-md transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="https://github.com/Dirac1235"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-400/40 transition-all"
          >
            View More on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

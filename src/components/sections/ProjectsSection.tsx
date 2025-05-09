"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Megegna",
      tech: ["Next.js", "Express", "Playwright", "Mysql", "Prisma"],
      description:
        "Website that fetches data across electronic shops in Ethiopia",
      link: "https://megegna-shop.vercel.app/",
      gitlink:""
    },
    {
      id: 2,
      title: "SSEcommerce",
      tech: ["Next.js", "Express", "Prisma", "Postgres", ],
      description:
        "A scalable e-commerce platform designed for small businesses, featuring secure payment integration and real-time inventory management.",
      gitlink: "https://github.com/Dirac1235/ssecomerce",
      link:"#"
    },
    {
      id: 3,
      title: "Simple Chat",
      tech: ["Next.js", "Express", "Socket.io", "Mongodb"],
      description:
        "A real-time chat application enabling seamless communication between users, built with modern web technologies.",
      gitlink: "https://github.com/Dirac1235/socketchat",
      link:"# "
    },
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center text-blue-500"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden border border-slate-700 transition-all"
            >
              <div className="absolute inset-0 z-10" />

              <div className="relative h-full p-8 flex flex-col justify-between z-20">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <ArrowUpRight className="text-cyan-400 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm text-cyan-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-40" />

              {/* Action buttons */}
              <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.link}
                  className="p-2 bg-cyan-950/20 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                >
                  <Link2 className="w-5 h-5 text-cyan-400" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.gitlink}
                  className="p-2 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <Link href="https://github.com/Dirac1235" className="px-8 py-3 rounded-full bg-cyan-500 text-slate-900 font-semibold hover:shadow-xl transition-all">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

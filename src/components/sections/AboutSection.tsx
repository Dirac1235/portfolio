"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Server } from "lucide-react";

export default function AboutSection() {
  const aboutData = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description:
        "Graduated in Computer Science and Engineering (CGPA: 3.8) from Adama Science and Technology University. Completed ALX Software Engineering program specializing in full-stack development, and A2SV Data Structures training focused on algorithms and problem-solving.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description:
        "Worked as a Full-Stack Developer Intern at Ewnet Communication, contributing to both frontend and backend development using Next.js, Node.js, and MongoDB. Freelanced with Tech for Africa to build responsive and modern web interfaces focused on user experience and performance.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description:
        "Proficient in JavaScript, TypeScript, Python, Go, PHP, and Java. Experienced with frameworks like Next.js, React, and Express, and databases such as MongoDB, MySQL, and PostgreSQL. Skilled in Git, Linux, and CI/CD pipelines for scalable web solutions.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Server,
      title: "Projects & Interests",
      description:
        "Developed platforms like SSEcommerce and Megegna Shop using Next.js and Node.js with full CRUD functionality and RESTful APIs. Passionate about AI integration, performance optimization, and building scalable digital systems that solve real-world problems.",
      color: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section className="relative pb-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            About Me
          </h2>
          <p className="text-xl text-gray-600">
            A full-stack developer passionate about building modern, efficient, and user-focused web applications.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {aboutData.map((item, index) => (
            <motion.article
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}
              >
                <item.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

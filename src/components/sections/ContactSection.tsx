'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-24  ">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center  text-blue-500 bg-clip-text "
        >
          Let&apos;s Collaborate
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Direct Contact
            </h3>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:webimuleta01@gmail.com"
                  className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="border-b border-dashed border-transparent group-hover:border-blue-600 transition-all">
                    webimuleta01@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+251965764430"
                  className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="border-b border-dashed border-transparent group-hover:border-blue-600 transition-all">
                    +251 (965) 764-430
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-3">
              <Linkedin className="w-6 h-6" />
              Social Connections
            </h3>
            <div className="flex flex-col gap-6">
              <a
                href="#"
                className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="p-2 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                  <Github className="w-5 h-5 text-blue-600" />
                </div>
                <span className="border-b border-dashed border-transparent group-hover:border-blue-600 transition-all">
                  github.com/dirac1235
                </span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 text-gray-700 hover:text-violet-600 transition-colors"
              >
                <div className="p-2 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-violet-600" />
                </div>
                <span className="border-b border-dashed border-transparent group-hover:border-violet-600 transition-all">
                  linkedin.com/in/webi
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-full  from-blue-600 to-violet-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-400/20 transition-all">
            Schedule a Call
          </button>
        </motion.div>
      </div>

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[url('/noise-light.png')] opacity-10 pointer-events-none" />
    </section>
  );
}
'use client';

import { Code, Briefcase, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const contentBlocks = [
    {
      icon: Code,
      title: 'Technical Expertise',
      highlights: [
        'Full-stack development specialist',
        'Modern framework advocate',
        'Performance optimization',
        'CI/CD pipelines'
      ],
      color: 'bg-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Career Journey',
      highlights: [
        '3 years in tech industry',
        'Team leadership',
        'Agile methodology',
        'Client collaboration'
      ],
      color: 'bg-blue-600'
    },
    {
      icon: Sparkles,
      title: 'Passion Projects',
      highlights: [
        'AI integration experiments',
        'Developer tooling',
        'Tech community building',
        'Accessibility advocacy',
        'Interactive prototypes'
      ],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="relative py-24 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Building Digital Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Combining technical mastery with creative problem-solving
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 px-8">
          {contentBlocks.map((block, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`mb-6 w-fit p-4 rounded-xl ${block.color}`}>
                <block.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{block.title}</h3>
              <ul className="space-y-4">
                {block.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span className={`w-2 h-2 mr-3 rounded-full ${block.color}`} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}

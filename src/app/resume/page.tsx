"use client";

import { Printer } from "lucide-react";

const printStyles = `
  @media print {
    @page { margin: 0; size: A4; }
    html, body {
      height: 297mm;
      margin: 0;
      -webkit-print-color-adjust: exact;
    }
    /* Force the CV sheet to exactly one A4 page */
    .cv-sheet {
      height: 297mm !important;
      box-sizing: border-box !important;
      padding: 12mm 12mm !important;
      overflow: hidden !important;
    }
    /* Avoid breaking inside these major blocks where possible */
    .cv-header, .cv-section {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    /* Hide any screen-only spacing */
    .print\\:hidden { display: none !important; }
  }
`

const contact = {
  email: "webimuleta01@gmail.com",
  github: "github.com/Dirac1235",
  linkedin: "www.linkedin.com/in/webi",
  telegram: "t.me/dirac02",
  leetcode: "leetcode.com/Dirac1235",
  website: "webi-muleta.vercel.app",
};

const experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Tech for Africa",
    period: "2025 — Present",
    location: "Remote",
    points: [
      "Built and maintained modern, responsive web interfaces using Next.js and Tailwind CSS.",
      "Focused on component reusability, performance optimizations, and seamless API integration.",
      "Delivered high-quality user experiences for African-focused tech initiatives.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ewnet Communication",
    period: "2023",
    location: "On-site",
    points: [
      "Built full-stack web applications with Next.js, Node.js, Express, and MongoDB.",
      "Implemented RESTful APIs, handled database operations, and shipped responsive UIs.",
      "Collaborated with team members to deliver clean, maintainable solutions.",
    ],
  },
  {
    role: "Full Stack Software Engineering Student",
    company: "ALX Africa",
    period: "2021 — 2022",
    location: "Remote",
    points: [
      "Completed an intensive, project-based software engineering program specializing in full-stack development.",
      "Gained hands-on experience in C, Python, JavaScript, Linux, and backend architecture.",
      "Delivered real-world projects and collaborated with peers across distributed teams.",
    ],
  },
];

const projects = [
  {
    title: "Intent",
    url: "intentt.vercel.app",
    tags: ["AI Agent", "Desktop App", "Automation", "Next.js", "TypeScript"],
    description:
      "A desktop AI agent platform that puts your computer on autopilot. Helps professionals build tailored automation systems to solve repetitive problems.",
  },
  {
    title: "Revcom",
    url: "revecom.vercel.app",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API", "JavaScript"],
    description:
      "Ethiopia's #1 B2B procurement marketplace connecting buyers with verified suppliers. Features live procurement requests, real-time quote management, and escrow-protected payments.",
  },
  {
    title: "SymDoc",
    url: "sym-doc.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDb"],
    description:
      "Generate, refine, and publish high-quality system prompts for AI agents. Create with AI assistance and iterate in real-time.",
  },
  {
    title: "Sitota",
    url: "sitota-nu.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres"],
    description:
      "Render custom brand assets onto products with AI precision and send comfort globally.",
  },
];

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Flutter",
    "Dart",
    "HTML & CSS",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
    "JWT",
  ],
  "Tools & Workflow": [
    "Git",
    "Docker",
    "Linux",
    "Figma",
    "CI/CD",
    "Agile",
    "UI/UX Design",
    "VS Code",
    "Vercel",
  ],
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#F5F2EE] print:bg-white">
      <style>{printStyles}</style>

      {/* Print button — hidden when printing */}
      <div className="print:hidden flex justify-center pt-8 pb-4">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#C44B4B] hover:bg-[#a83535] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <Printer className="h-4 w-4" />
          Save as PDF
        </button>
      </div>

      {/* CV sheet */}
      <div
        className="mx-auto bg-white shadow-xl print:shadow-none cv-sheet"
        style={{ width: "210mm", height: "297mm", padding: "14mm 16mm" }}
      >

        {/* ── Header ── */}
        <header className="mb-6 pb-5 border-b-2 border-[#C44B4B] cv-header">
          <h1 className="font-serif text-[32px] font-black tracking-tight text-[#100F0F] leading-none mb-1">
            Webi Muleta
          </h1>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#C44B4B] mb-3">
            Full Stack Developer
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-[#4A4440]">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.email}
            </a>
            <span className="text-[#C44B4B]">·</span>
            <a
              href={`https://${contact.website}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.website}
            </a>
            <span className="text-[#C44B4B]">·</span>
            <a
              href={`https://${contact.github}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.github}
            </a>
            <span className="text-[#C44B4B]">·</span>
            <a
              href={`https://${contact.linkedin}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.linkedin}
            </a>
            <span className="text-[#C44B4B]">·</span>
            <a
              href={`https://${contact.telegram}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.telegram}
            </a>
            <span className="text-[#C44B4B]">·</span>
            <a
              href={`https://${contact.leetcode}`}
              className="hover:text-[#C44B4B]"
            >
              {contact.leetcode}
            </a>
          </div>
        </header>

        {/* ── Summary ── */}
        <section className="mb-5 cv-section">
          <SectionHeading>Summary</SectionHeading>
          <p className="text-[11.5px] text-[#3A3330] leading-relaxed">
            I&apos;m a Full Stack Developer with a passion for building
            impactful digital products. I specialize in crafting fast,
            accessible, and beautifully designed web applications — from the API
            layer to the UI. With experience across e-commerce, B2B
            marketplaces, and consumer apps, I bring both technical depth and
            product thinking to every project. I also contribute to open source
            and sharpen my problem-solving skills on LeetCode.
          </p>
        </section>

        {/* ── Experience ── */}
        <section className="mb-5 cv-section">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.company}>
                <div className="flex items-baseline justify-between mb-0.5">
                  <div>
                    <span className="text-[12.5px] font-bold text-[#100F0F]">
                      {exp.role}
                    </span>
                    <span className="text-[11px] text-[#C44B4B] font-semibold">
                      {" "}
                      · {exp.company}
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#6A625D] whitespace-nowrap ml-4 shrink-0">
                    {exp.period} · {exp.location}
                  </div>
                </div>
                <ul className="mt-1 space-y-0.5">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[11px] text-[#3A3330] leading-snug"
                    >
                      <span className="text-[#C44B4B] mt-[3px] shrink-0">
                        ›
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="mb-5 cv-section">
          <SectionHeading>Selected Projects</SectionHeading>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.title}>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[12.5px] font-bold text-[#100F0F]">
                    {p.title}
                  </span>
                  <a
                    href={`https://${p.url}`}
                    className="text-[10px] text-[#C44B4B] hover:underline"
                  >
                    {p.url}
                  </a>
                  <div className="flex flex-wrap gap-1 ml-auto">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium px-1.5 py-0.5 rounded border border-[#DDD8D2] text-[#6A625D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#3A3330] leading-snug">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="mb-5 cv-section">
          <SectionHeading>Skills</SectionHeading>
          <div className="space-y-1.5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex gap-3">
                <span className="text-[10.5px] font-bold text-[#C44B4B] w-28 shrink-0 pt-0.5">
                  {category}
                </span>
                <p className="text-[11px] text-[#3A3330] leading-snug">
                  {items.join("  ·  ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section>
          <SectionHeading>Education</SectionHeading>
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[12.5px] font-bold text-[#100F0F]">
                Full Stack Software Engineering
              </span>
              <span className="text-[11px] text-[#C44B4B] font-semibold">
                {" "}
                · ALX Africa
              </span>
            </div>
            <span className="text-[10.5px] text-[#6A625D] whitespace-nowrap ml-4">
              2021 — 2022 · Remote
            </span>
          </div>
          <p className="mt-1 text-[11px] text-[#3A3330] leading-snug">
            Intensive 12-month software engineering program covering systems
            programming, full-stack web development, algorithms, and real-world
            project delivery. Equivalent to a professional engineering bootcamp
            with rigorous peer evaluation.
          </p>
        </section>
      </div>

      {/* Bottom spacing for screen view */}
      <div className="print:hidden h-12" />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <h2 className="text-[10px] font-black tracking-[0.22em] uppercase text-[#C44B4B] whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-[#E8E3DE]" />
    </div>
  );
}

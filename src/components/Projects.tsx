"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  gradient: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Ceres – AI-Driven Offline Agricultural Assistant",
    subtitle: "Hardware & AI",
    description:
      "Engineered a fully offline hardware-integrated telemetry system on ESP32 with a custom voice-synthesis engine delivering live soil diagnostics in native languages — no internet, no cloud dependency, deployable in rural field conditions.",
    tags: ["ESP32", "C/C++", "Voice Synthesis", "Hardware"],
    year: "2024",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "text-accent-orange",
  },
  {
    id: "project-2",
    title: "FetchWise AI",
    subtitle: "Semantic E-Commerce Search Engine",
    description:
      "Built an AI-driven conversational search engine that parses user intent and queries multiple vendor platforms simultaneously using semantic matching — returning ranked product results or intelligent fallbacks when exact matches fail.",
    tags: ["Python", "AI/NLP", "Semantic Search", "Web Scraping"],
    year: "2024",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    accentColor: "text-accent-teal",
  },
  {
    id: "project-3",
    title: "Campus L&F",
    subtitle: "Lost and Found Portal",
    description:
      "Shipped a centralized campus asset-tracking web app with React state management, relational DB schemas, and atomic transactions — eliminating manual item recovery processes for an active student user base.",
    tags: ["React", "Relational DB", "Node.js", "State Management"],
    year: "2024",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
  },
  {
    id: "project-4",
    title: "Traditional Sarees E-Commerce",
    subtitle: "Client Project",
    description:
      "Building a custom e-commerce platform for a traditional household saree business, focusing on seamless user experience, inventory management, and authentic brand storytelling.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "E-Commerce"],
    year: "2025",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "text-blue-400",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      id={project.id}
      className="glass-card group relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${project.accentColor}`}
            >
              {project.subtitle}
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:scale-[1.015] sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-text-muted transition-colors duration-300 group-hover:border-accent-cyan/30 group-hover:text-foreground">
            {project.year}
          </span>
        </div>

        <p className="mb-6 max-w-md text-sm leading-relaxed font-light text-text-secondary transition-colors duration-300 group-hover:text-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary transition-colors group-hover:border-white/15 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a href="https://github.com/abhiramyakkala10-ay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors group-hover:text-foreground">
          <span>View on GitHub</span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </a>
      </div>

      {/* Decorative corner glow */}
      <div
        className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60`}
      />
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-7xl sm:mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-12 bg-accent-orange" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-orange">
            Selected Work
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Featured
          <span className="text-gradient-orange ml-3">Projects</span>
        </h2>
        <p className="mt-4 max-w-xl text-base font-light text-text-secondary sm:text-lg">
          A curated collection of recent work spanning product design, creative
          development, and full-stack engineering.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

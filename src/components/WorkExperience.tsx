"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    role: "Data Science Intern",
    company: "Pinnacle Labs",
    duration: "06/2026 – Present",
    location: "Hyderabad, India",
    achievements: [
      "Developing an OpenCV road lane detection pipeline using Canny edge detection and Hough Transforms to process real-time video telemetry frames.",
      "Building a custom Python NLP chatbot engine by structuring fallback intent-matching algorithms to streamline automated user queries.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Unify Labs",
    duration: "01/2026 – 02/2026",
    location: "Hyderabad, India",
    achievements: [
      "Performed end-to-end backend optimization by programming custom Python scripts to parse 10,000+ data points, which increased data workflow processing speeds by 30%.",
    ],
  },
];

export default function WorkExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative z-10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* Decorative separator */}
      <div className="mx-auto mb-20 max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-accent-blue" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Experience
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Work
            <span className="text-gradient-blue ml-3">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="glass-card rounded-2xl p-8 transition-all duration-500">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-8 z-10">
                  <motion.div
                    className="h-4 w-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  />
                </div>

                {/* Timeline connector */}
                {index < EXPERIENCES.length - 1 && (
                  <div className="absolute -left-[8.5px] top-12 h-16 w-px bg-gradient-to-b from-accent-blue to-transparent" />
                )}

                {/* Header */}
                <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-accent-blue">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-4 text-right sm:mt-0">
                    <p className="text-sm font-medium text-text-secondary">
                      {exp.duration}
                    </p>
                    <p className="text-xs text-text-muted">{exp.location}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-6 space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + i * 0.1,
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                      }}
                    >
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
                      <p className="text-base font-light leading-relaxed text-text-secondary">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

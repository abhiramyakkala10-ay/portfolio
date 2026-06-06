"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PERSONAL_DETAILS = [
  { label: "Name", value: "Abhiram Yakkala" },
  { label: "DOB", value: "10-08-2006" },
  { label: "Based In", value: "Hyderabad, Telangana, India" },
  { label: "Languages", value: "English, Hindi, Telugu, French" },
];


export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* Decorative separator */}
      <div className="mx-auto mb-20 max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-accent-blue" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              About Me
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Driven by
            <span className="text-gradient-blue ml-3">Curiosity</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <p className="text-lg font-light leading-relaxed text-text-secondary">
              Hi I am a B.Tech student at Vignan Institute in Hyderabad, I love digging into Data Science and Machine Learning to figure out how to make everyday life run smoother. As a creative coder, I'm passionate about building real-world solutions for those annoying micro-problems we all deal with.
            </p>
            <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
              I thrive where logic meets creativity, because I believe code shouldn't just work—it should make sense to people. My interests span filmmaking, video editing, and learning random skills. I'm a people-focused developer who loves giving back and bringing structure to what lacks it.
            </p>

            {/* Personal Details Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PERSONAL_DETAILS.map((detail, i) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-sm font-medium uppercase tracking-wider text-text-muted">
                    {detail.label}
                  </div>
                  <div className="mt-1 text-lg font-medium text-foreground">
                    {detail.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <h3 className="mb-8 text-lg font-semibold tracking-tight text-foreground">
              Core Competencies
            </h3>
            <div className="space-y-6">
              {[
                { category: "Frontend", skills: "CSS3, HTML5, JavaScript, Next.js, React, Tailwind CSS, TypeScript" },
                { category: "Backend & Systems", skills: "C, C++, ETL, Java, MySQL, Node.js, Oracle, Python, REST APIs, SQL" },
                { category: "Cloud & Infra", skills: "Git, GitHub, Oracle Cloud (OCI), Supabase, Vercel, Web Scraping" },
                { category: "Data & Analytics", skills: "Advanced Excel, ETL Pipelines, Power BI, Tableau" },
              ].map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-blue">
                    {group.category}
                  </div>
                  <div className="text-base font-light text-text-secondary leading-relaxed">
                    {group.skills}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extras */}
            <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Extras
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/8 px-3 py-1 text-xs font-medium text-text-secondary transition-all hover:border-accent-teal/30 hover:text-accent-teal">
                  NSS Volunteer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

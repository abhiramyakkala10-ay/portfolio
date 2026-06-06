"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EDUCATION = [
  {
    id: "edu-1",
    period: "2024–2028",
    degree: "B.Tech Computer Science & Engineering (Data Science)",
    institution: "Vignan Institute of Technology and Science, Hyderabad",
    score: "GPA: 8.1 / 10",
  },
  {
    id: "edu-2",
    period: "2022–2024",
    degree: "Intermediate",
    institution: "Excellencia Junior College, Hyderabad",
    score: "Score: 87.50%",
  },
  {
    id: "edu-3",
    period: "2022",
    degree: "CBSE Class X",
    institution: "Sri Chaitanya Olympiad School, Hyderabad",
    score: "Score: 90%",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative z-10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl uppercase">
            Education <span className="text-gradient-orange">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2">
          {EDUCATION.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 ml-8 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-accent-orange bg-bg-primary" />
                
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-accent-orange/10 px-3 py-1 text-xs font-semibold text-accent-orange mb-4">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-light text-text-secondary mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sm font-medium text-text-muted">
                    {item.score}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

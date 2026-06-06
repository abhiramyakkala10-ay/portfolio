"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Section 1: Hero Title (visible 0–25%) ── */
  const s1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [60, 0, 0, -80]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0.92, 1, 1, 0.95]);

  /* ── Section 2: Tagline (visible 30–55%) ── */
  const s2Opacity = useTransform(scrollYProgress, [0.28, 0.35, 0.48, 0.55], [0, 1, 1, 0]);
  const s2X = useTransform(scrollYProgress, [0.28, 0.35, 0.48, 0.55], [-120, 0, 0, -60]);
  const s2Y = useTransform(scrollYProgress, [0.28, 0.35, 0.48, 0.55], [40, 0, 0, -40]);

  /* ── Section 3: Statement (visible 58–80%) ── */
  const s3Opacity = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.82], [0, 1, 1, 0]);
  const s3X = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.82], [120, 0, 0, 60]);
  const s3Y = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.82], [40, 0, 0, -40]);

  /* ── Section 4: CTA (visible 82–100%) ── */
  const s4Opacity = useTransform(scrollYProgress, [0.82, 0.88, 0.95, 1], [0, 1, 1, 0.8]);
  const s4Y = useTransform(scrollYProgress, [0.82, 0.88, 0.95, 1], [80, 0, 0, -20]);
  const s4Scale = useTransform(scrollYProgress, [0.82, 0.88], [0.9, 1]);

  return (
    <div
      ref={containerRef}
      id="overlay-container"
      className="pointer-events-none absolute inset-0"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        {/* ── SECTION 1 — CENTER: Hero Identity ── */}
        <motion.div
          id="overlay-section-hero"
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        >
          {/* Decorative status chip */}
          <motion.div className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-amber">
              Available for Projects
            </span>
          </motion.div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-foreground">ABHIRAM</span>
            <span className="text-gradient-orange block">YAKKALA</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-text-secondary sm:text-lg md:mt-8 md:text-xl">
            CSE Data Science undergrad coding creative solutions for everyday problems.
          </p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Scroll to explore
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-text-muted"
            >
              <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>

        {/* ── SECTION 2 — LEFT: What I Do ── */}
        <motion.div
          id="overlay-section-tagline"
          className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-24"
          style={{ opacity: s2Opacity, x: s2X, y: s2Y }}
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-accent-orange" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-orange">
                Philosophy
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              I build digital
              <br />
              <span className="text-gradient-teal">experiences.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-text-secondary sm:text-lg">
              From concept to code, every pixel is intentional. Every interaction
              tells a story. Every transition is buttery smooth.
            </p>
          </div>
        </motion.div>

        {/* ── SECTION 3 — RIGHT: Philosophy ── */}
        <motion.div
          id="overlay-section-statement"
          className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 lg:px-24"
          style={{ opacity: s3Opacity, x: s3X, y: s3Y }}
        >
          <div className="max-w-2xl text-right">
            <div className="mb-4 flex items-center justify-end gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-teal">
                Approach
              </span>
              <div className="h-px w-12 bg-accent-teal" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Bridging design
              <br />
              <span className="text-gradient-orange">&amp; engineering.</span>
            </h2>
            <p className="mt-6 ml-auto max-w-md text-base font-light leading-relaxed text-text-secondary sm:text-lg">
              Where aesthetic vision meets technical precision. I transform ideas
              into performant, scalable realities.
            </p>
          </div>
        </motion.div>

        {/* ── SECTION 4 — CENTER: CTA ── */}
        <motion.div
          id="overlay-section-cta"
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s create something
            <br />
            <span className="text-gradient-orange">extraordinary.</span>
          </h2>
          <div className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="#about"
              id="cta-view-work"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-orange to-accent-amber px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-bg-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,115,58,0.4)]"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-amber to-accent-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              id="cta-contact"
              className="rounded-full border border-white/15 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent-teal hover:text-accent-teal hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

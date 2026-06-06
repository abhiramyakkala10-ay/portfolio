"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/abhiramyakkala10-ay", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiram-yakkala-1b30753b5/", icon: "LI" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* Decorative separator */}
      <div className="mx-auto mb-20 max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent-orange" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-orange">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-accent-orange" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Have a project
            <br />
            <span className="text-gradient-orange">in mind?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            I&apos;m currently available for freelance work and exciting
            collaborations. Let&apos;s build something remarkable together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <motion.a
              href="mailto:abhiramyakkala8@gmail.com"
              id="contact-email-btn"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-orange to-accent-amber px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-bg-primary transition-all duration-300 hover:shadow-[0_0_50px_rgba(232,115,58,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">abhiramyakkala8@gmail.com</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-amber to-accent-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>

            <motion.a
              href="/ABHIRAMYAKKALA_RESUME.pdf"
              download="ABHIRAMYAKKALA_RESUME.pdf"
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download resume"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-amber to-accent-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          </div>

          {/* Socials */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {SOCIALS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                id={`social-${social.label.toLowerCase().replace("/", "-")}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-xs font-bold text-text-secondary transition-all duration-300 hover:border-accent-orange/40 hover:bg-accent-orange/10 hover:text-accent-orange hover:shadow-[0_0_20px_rgba(232,115,58,0.1)]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mx-auto mt-24 max-w-7xl border-t border-white/5 pt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Abhiram Yakkala. Crafted with passion.
          </p>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <a href="mailto:abhiramyakkala8@gmail.com" className="transition-colors hover:text-accent-orange">Email</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/abhiram-yakkala-1b30753b5/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-teal">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/abhiramyakkala10-ay" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-amber">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}

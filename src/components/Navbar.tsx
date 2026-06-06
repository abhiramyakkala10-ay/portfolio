"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navBg = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(8, 15, 30, 0)", "rgba(8, 15, 30, 0.86)"]
  );

  const navBlur = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["blur(0px)", "blur(16px)"]
  );

  const borderOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 0.08]
  );

  return (
    <>
      <motion.nav
        id="navbar"
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderBottom: useTransform(
            borderOpacity,
            (v) => `1px solid rgba(56, 189, 248, ${v})`
          ),
        }}
      >
        {/* Logo / Name */}
        <motion.a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-foreground"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan shadow-[0_0_18px_rgba(56,189,248,0.35)]">
            <span className="text-xs font-black text-bg-primary">AY</span>
          </div>
          <span className="hidden sm:inline text-white/95">
            Abhiram Yakkala
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="relative rounded-full px-5 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
          <a
            href="mailto:abhiramyakkala8@gmail.com"
            id="nav-cta-hire"
            className="ml-3 rounded-full border border-accent-cyan/30 bg-gradient-to-r from-accent-blue/15 to-accent-orange/15 px-5 py-2 text-sm font-medium text-accent-cyan transition-all duration-300 hover:border-accent-orange/50 hover:bg-gradient-to-r hover:from-accent-blue/25 hover:to-accent-orange/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-toggle"
          className="flex flex-col items-center justify-center gap-1.5 sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <motion.span
            className="block h-px w-6 bg-foreground"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6 bg-foreground"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-px w-6 bg-foreground"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-menu"
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 sm:hidden"
        style={{
          background: "rgba(10, 14, 18, 0.95)",
          backdropFilter: "blur(30px)",
        }}
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
      >
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-3xl font-bold text-foreground"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: mobileOpen ? i * 0.1 : 0, duration: 0.3 }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="mailto:abhiramyakkala8@gmail.com"
          onClick={() => setMobileOpen(false)}
          className="mt-4 rounded-full bg-gradient-to-r from-accent-orange to-accent-amber px-8 py-3 text-sm font-bold uppercase tracking-widest text-bg-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: mobileOpen ? 0.3 : 0, duration: 0.3 }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </>
  );
}

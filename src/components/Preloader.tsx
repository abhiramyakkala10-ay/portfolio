"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease out the progress for realistic feel
        const increment = Math.max(1, Math.floor((100 - prev) / 8));
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // Dismiss loader after progress hits 100
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="preloader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_rgba(4,10,18,1)_45%,_rgba(2,6,23,1)_100%)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="h-2 w-16 rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-orange" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-accent-cyan">Loading awesomeness</span>
          </motion.div>

          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-orange via-accent-amber to-accent-blue shadow-[0_0_24px_rgba(56,189,248,0.25)]">
              <span className="text-sm font-black text-bg-primary">AY</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">Abhiram Yakkala</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="h-1.5 w-64 overflow-hidden rounded-full bg-white/8 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-orange"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.span
            className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

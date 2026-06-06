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
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Branding */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-orange to-accent-amber">
              <span className="text-sm font-black text-bg-primary">CD</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              Portfolio
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="h-0.5 w-48 overflow-hidden rounded-full bg-white/5"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-orange to-accent-amber"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.span
            className="mt-4 font-mono text-xs text-text-muted"
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

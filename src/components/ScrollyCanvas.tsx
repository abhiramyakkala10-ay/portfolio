"use client";

import { useEffect, useRef, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 141;

/** Generates the image source path for a given frame index (0-based). */
function getFrameSrc(index: number): string {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/sequence/ezgif-frame-${frameNum}.png`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  /** Draws the given image on the canvas with object-fit: cover logic */
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;

    // Only resize the canvas buffer if dimensions changed (avoids flicker)
    if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, displayW, displayH);

    // Object-fit: cover math
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = displayW / displayH;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      // Image is wider relative to canvas — crop width
      drawH = displayH;
      drawW = displayH * imgRatio;
      drawX = (displayW - drawW) / 2;
      drawY = 0;
    } else {
      // Image is taller relative to canvas — crop height
      drawW = displayW;
      drawH = displayW / imgRatio;
      drawX = 0;
      drawY = (displayH - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  /** Renders the frame at the specified index using requestAnimationFrame */
  const renderFrame = useCallback(
    (index: number) => {
      const frame = Math.round(index);
      if (frame === currentFrameRef.current && loadedCountRef.current > 0)
        return;
      currentFrameRef.current = frame;

      const img = imagesRef.current[frame];
      if (img && img.complete && img.naturalWidth > 0) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(img));
      }
    },
    [drawFrame]
  );

  // Preload all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCountRef.current++;
        // Draw first frame immediately once loaded
        if (i === 0) {
          renderFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [renderFrame]);

  // Listen to frame index changes and render
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const img = imagesRef.current[currentFrameRef.current];
      if (img && img.complete && img.naturalWidth > 0) {
        drawFrame(img);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      id="scrolly-canvas-container"
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          id="hero-canvas"
          className="h-full w-full"
          style={{ display: "block" }}
        />

        {/* Vignette overlay for cinematic feel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(255, 255, 255, 0.4) 100%)",
          }}
        />

        {/* Bottom gradient fade for seamless blending */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-64"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 100%)",
          }}
        />

        {/* Subtle edge fades to prevent harsh transitions */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.15), transparent 20%, transparent 80%, rgba(255, 255, 255, 0.15))",
          }}
        />
      </div>
    </div>
  );
}

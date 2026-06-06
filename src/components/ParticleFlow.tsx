"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function ParticleFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMouseNearRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check if mouse is over interactive element
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        target?.closest(".glass-card") ||
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest(".group");
      isMouseNearRef.current = !!isInteractive;

      // Spawn particles on hover
      if (isInteractive) {
        spawnParticles(e.clientX, e.clientY);
      }
    };

    // Create particles
    const spawnParticles = (x: number, y: number) => {
      const colors = ["#0d47a1", "#1e88e5", "#1a1a1a"];
      const count = Math.random() > 0.5 ? 3 : 5;

      for (let i = 0; i < count; i++) {
        const angle = (Math.random() * Math.PI * 2);
        const speed = 0.5 + Math.random() * 1.5;

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + 0.3,
          life: 1,
          maxLife: 60 + Math.random() * 40,
          size: 1.5 + Math.random() * 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(248, 247, 244, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.08; // gravity
        particle.life -= 1 / particle.maxLife;

        const alpha = Math.max(0, particle.life);
        ctx.fillStyle = `${particle.color}${Math.round(alpha * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return particle.life > 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

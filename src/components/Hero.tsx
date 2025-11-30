"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    // Particle effect using canvas
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let particles: {x: number, y: number, r: number, dx: number, dy: number}[] = [];
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.7,
                dy: (Math.random() - 0.5) * 0.7
            });
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "#7f5af0";
                ctx.globalAlpha = 0.7;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            }
            requestAnimationFrame(animate);
        }
        animate();
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Animated Gradient Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 -z-20"
            >
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-accent/20 to-background/10 animate-gradient-move" />
            </motion.div>
            {/* Particle Canvas */}
            <canvas ref={canvasRef} width={500} height={500} className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2" style={{ pointerEvents: 'none' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                    Portfolio <FaStar className="text-accent animate-spin-slow" />
                </h2>
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                    Building digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-text">
                        experiences
                    </span>
                </h1>
                <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                    I'm Avadhut, a creative developer passionate about crafting intuitive and visually stunning web applications.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#projects"
                        className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 shadow-lg hover:shadow-primary/40"
                    >
                        View Work
                    </Link>
                    <Link
                        href="#contact"
                        className="rounded-full border border-border bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-secondary shadow-lg hover:shadow-accent/40"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-10 w-6 rounded-full border-2 border-muted-foreground p-1 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-2 w-full rounded-full bg-muted-foreground"
                    />
                    <FaStar className="text-primary ml-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}

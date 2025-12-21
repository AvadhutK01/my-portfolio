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
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number, y: number, r: number, dx: number, dy: number }[] = [];
        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Responsive count

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 2 + 1,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: (Math.random() - 0.5) * 0.5
                });
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let p of particles) {
                // Mouse Interaction
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 5;
                    const directionY = forceDirectionY * force * 5;

                    p.x -= directionX;
                    p.y -= directionY;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "#7f5af0";
                ctx.globalAlpha = 0.5;
                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
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
            <canvas
                ref={canvasRef}
                className="absolute inset-0 -z-10"
                style={{ pointerEvents: 'none' }}
            />

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
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="h-10 w-6 rounded-full border-2 border-primary p-1 flex items-start justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="h-2 w-2 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
}


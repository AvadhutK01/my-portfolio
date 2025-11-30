"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                    Portfolio
                </h2>
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                    Building digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        experiences
                    </span>
                </h1>
                <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                    I'm Avadhut, a creative developer passionate about crafting intuitive and
                    visually stunning web applications.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#projects"
                        className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                        View Work
                    </Link>
                    <Link
                        href="#contact"
                        className="rounded-full border border-border bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-secondary"
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
                <div className="h-10 w-6 rounded-full border-2 border-muted-foreground p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-2 w-full rounded-full bg-muted-foreground"
                    />
                </div>
            </motion.div>
        </section>
    );
}

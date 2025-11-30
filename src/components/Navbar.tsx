"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/95 backdrop-blur-lg py-4"
                    : "bg-background/0 py-6"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            A
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-md group-hover:opacity-75 transition-opacity"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tighter">
                        Avadhut<span className="text-primary">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#about"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#experience"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#achievements"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Achievements
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                <Link
                    href="#contact"
                    className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                    Let's Talk
                </Link>
            </div>
        </motion.header>
    );
}

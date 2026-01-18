"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState<string>("home");
    const manualScrollRef = useRef(false);
    const manualTimeoutRef = useRef<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const ids = ["about", "experience", "achievements", "projects", "contact"];
        const observers: IntersectionObserver[] = [];

            ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                (entries) => {
                    // If user initiated a manual click-scroll, skip observer updates briefly
                    if (manualScrollRef.current) return;
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(id);
                        }
                    });
                },
                { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const navLinks = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "achievements", label: "Achievements" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const handleLinkClick = (id: string) => {
        setActive(id);
        manualScrollRef.current = true;
        if (manualTimeoutRef.current) window.clearTimeout(manualTimeoutRef.current);
        manualTimeoutRef.current = window.setTimeout(() => {
            manualScrollRef.current = false;
            manualTimeoutRef.current = null;
        }, 900) as unknown as number;
        setIsMenuOpen(false); // Close menu on link click
    };

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

                <nav className="hidden md:flex items-center gap-8 relative">
                    {navLinks.map((link) => (
                        <div key={link.id} className="relative">
                            <Link
                                href={`#${link.id}`}
                                className={`text-sm font-medium transition-colors ${active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                onClick={() => handleLinkClick(link.id)}
                            >
                                {link.label}
                            </Link>
                            {active === link.id && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary rounded"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </div>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                    Let's Talk
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden mt-4 bg-background/95 backdrop-blur-lg"
                >
                    <nav className="flex flex-col items-center gap-6 py-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                className={`text-lg font-medium transition-colors ${active === link.id ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                                onClick={() => handleLinkClick(link.id)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-transform hover:scale-105"
                             onClick={() => handleLinkClick('contact')}
                        >
                            Let's Talk
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}


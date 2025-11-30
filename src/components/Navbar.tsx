"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState<string>("home");
    const manualScrollRef = useRef(false);
    const manualTimeoutRef = useRef<number | null>(null);

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
                {/* Theme Toggle Button */}
                {/* <button
                    aria-label="Toggle dark/light mode"
                    className="ml-4 rounded-full p-2 bg-card border border-border hover:bg-primary/20 transition-colors"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? (
                        <FaSun className="text-yellow-400" />
                    ) : (
                        <FaMoon className="text-blue-600" />
                    )}
                </button> */}

                <nav className="hidden md:flex items-center gap-8 relative">
                    {[
                        { id: "about", label: "About" },
                        { id: "experience", label: "Experience" },
                        { id: "achievements", label: "Achievements" },
                        { id: "projects", label: "Projects" },
                        { id: "contact", label: "Contact" },
                    ].map((link) => (
                        <div key={link.id} className="relative">
                            <Link
                                href={`#${link.id}`}
                                className={`text-sm font-medium transition-colors ${active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                onClick={() => {
                                    // mark manual scroll to prevent observer override during smooth scrolling
                                    setActive(link.id);
                                    manualScrollRef.current = true;
                                    if (manualTimeoutRef.current) window.clearTimeout(manualTimeoutRef.current);
                                    // allow observers to resume after 900ms
                                    manualTimeoutRef.current = window.setTimeout(() => {
                                        manualScrollRef.current = false;
                                        manualTimeoutRef.current = null;
                                    }, 900) as unknown as number;
                                }}
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
            </div>
        </motion.header>
    );
}

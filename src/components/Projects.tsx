"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useCallback } from "react";
import useParallax from "@/hooks/useParallax";

const projects = [
    {
        title: "Analytics Dashboard",
        description:
            "A comprehensive data visualization dashboard for tracking key performance indicators. Features real-time data updates and customizable widgets.",
        image: "/project1.png",
        tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
        link: "#",
    },
    {
        title: "E-Commerce App",
        description:
            "A modern mobile-first e-commerce application with seamless checkout flow and intuitive product discovery.",
        image: "/project2.png",
        tags: ["React Native", "Expo", "Redux", "Stripe"],
        link: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "This very website! A showcase of my skills and projects, built with performance and aesthetics in mind.",
        image: "/project1.png", // Reusing for now or could use a screenshot of itself later
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        link: "#",
    },
];

export default function Projects() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useParallax();

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl">Featured Work</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a
                        unique challenge and a solution I'm proud of.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={scrollDirection === 'down' ? { duration: 0.5, delay: index * 0.1 } : { duration: 0 }}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                        >
                            <div className="relative h-48 w-full overflow-hidden parallax" data-speed="0.06">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
                                >
                                    View Project &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
                            // enable parallax indicated decorations
}

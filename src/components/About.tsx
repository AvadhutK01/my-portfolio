"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "UI/UX Design",
    "Git",
];

export default function About() {
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

    return (
        <section id="about" className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6 sm:text-4xl">About Me</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I am a Software Engineer at Mypcot Infotech, where I started my journey
                        as a fresher in January 2024. With a strong academic background from
                        Mumbai University (9.72 CGPI) and specialized training in the MERN
                        stack, I am passionate about building scalable and efficient web
                        solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">My Journey</h3>
                        <p className="text-muted-foreground">
                            Starting with a curiosity for how things work on the web, I dove deep
                            into frontend development. Over the years, I've honed my skills in
                            building responsive, accessible, and performant web apps.
                        </p>
                        <p className="text-muted-foreground">
                            When I'm not coding, you can find me exploring new design trends,
                            contributing to open source, or enjoying a good cup of coffee.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8, delay: 0.4 } : { duration: 0 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={scrollDirection === 'down' ? { duration: 0.4, delay: 0.1 * index } : { duration: 0 }}
                                    className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

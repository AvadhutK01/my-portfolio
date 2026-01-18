"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useParallax from "@/hooks/useParallax";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaAws,
    FaDocker,
} from "react-icons/fa";
import {
    TbBrandNextjs,
    TbBrandTypescript,
    TbBrandTailwind,
    TbBrandFramerMotion,
    TbBrandReactNative,
} from "react-icons/tb";
import { FaPencilRuler } from "react-icons/fa";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { SiExpress, SiExpo, SiKubernetes, SiDjango } from "react-icons/si";


const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <TbBrandNextjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "PostgreSQL", icon: <DiPostgresql /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "Expo", icon: <SiExpo /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { name: "UI/UX Design", icon: <FaPencilRuler /> },
    { name: "Git", icon: <FaGitAlt /> },
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

    // enable parallax effect for decorated elements
    useParallax();

    return (
        <section id="about" className="py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl font-bold mb-6 sm:text-4xl lg:text-5xl">About Me</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
                        I'm a versatile Full-Stack Developer with a passion for building robust and scalable web applications. My expertise spans across the entire development lifecycle, from crafting beautiful and responsive user interfaces with modern frontend frameworks to designing and implementing resilient backend systems and managing cloud infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
                        className="space-y-6"
                    >
                        <div className="parallax" data-speed="0.12">
                            <h3 className="text-2xl font-semibold lg:text-3xl">My Journey</h3>
                            <p className="text-muted-foreground lg:text-lg">
                                My journey in software development has been a deep dive into both frontend and backend technologies. I thrive on building complete, end-to-end solutions that are not only performant and scalable but also provide a seamless user experience.
                            </p>
                            <p className="text-muted-foreground lg:text-lg">
                                Whether it's architecting a database, building a RESTful API, or creating a pixel-perfect UI, I am driven by the challenge of solving complex problems and delivering high-quality software.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8, delay: 0.4 } : { duration: 0 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 lg:text-3xl">Skills & Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="parallax" data-speed="0.08">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={scrollDirection === 'down' ? { duration: 0.4, delay: 0.1 * index } : { duration: 0 }}
                                        className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary transition-colors cursor-default mr-2 mb-2 inline-flex items-center lg:text-base lg:px-5 lg:py-2.5"
                                    >
                                        <span className="mr-2 text-lg lg:text-xl">{skill.icon}</span>
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

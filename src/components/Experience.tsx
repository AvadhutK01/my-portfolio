"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useParallax from "@/hooks/useParallax";

const experiences = [
    {
        title: "Software Engineer",
        company: "Mypcot Infotech Pvt. Ltd.",
        period: "Jan 2024 - Present",
        description:
            "Joined as a fresher and currently working as a Software Engineer. Contributing to the development of robust web applications and gaining hands-on experience with modern technologies.",
        type: "work",
    },
    {
        title: "MERN Stack Course",
        company: "Sharpener Tech Institute",
        period: "Completed",
        description:
            "Intensive training in Full Stack Development using MongoDB, Express.js, React, and Node.js. Built various projects to solidify understanding of the stack.",
        type: "education",
    },
    {
        title: "Graduation",
        company: "Mumbai University",
        period: "Completed",
        description:
            "Graduated with a CGPI of 9.72. Built a strong foundation in computer science principles and engineering.",
        type: "education",
    },
];

export default function Experience() {
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
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
                        Experience & Education
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and educational background.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={scrollDirection === 'down' ? { duration: 0.6, delay: index * 0.1 } : { duration: 0 }}
                            className="relative pl-8 border-l-2 border-border last:border-0 pb-8 last:pb-0"
                        >
                            <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
                            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors parallax" data-speed="0.04">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-lg text-foreground/80 mb-2">{exp.company}</p>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

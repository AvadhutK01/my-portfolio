"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useParallax from "@/hooks/useParallax";

const experiences = [
    {
        title: "Full Stack Engineer",
        company: "Mypcot Infotech Pvt. Ltd.",
        period: "Jan 2024 - Present",
        description:
            "As a Full Stack Engineer, I contribute to the development of robust web applications. My role involves working with a wide range of technologies, including React, Node.js, and various database systems. I am also involved in the deployment and maintenance of our applications on cloud platforms.",
        type: "work",
    },
    {
        title: "Full Stack Development",
        company: "Sharpener Tech Institute",
        period: "Completed",
        description:
            "Intensive training in Full Stack Development, covering everything from frontend frameworks like React to backend technologies like Node.js, Express, and Django. Also gained hands-on experience with databases like MongoDB, MySQL, and PostgreSQL, as well as DevOps tools and cloud technologies.",
        type: "education",
    },
    {
        title: "Graduation",
        company: "Mumbai University",
        period: "Completed",
        description:
            "Graduated with a CGPI of 9.72. Built a strong foundation in computer science principles, software engineering, and database management systems.",
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
        <section id="experience" className="py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">
                        Experience & Education
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
                        My professional journey and educational background.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={scrollDirection === 'down' ? { duration: 0.6, delay: index * 0.1 } : { duration: 0 }}
                            className="relative pl-8 md:pl-12 border-l-2 border-border last:border-0 pb-8 md:pb-12 last:pb-0"
                        >
                            <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
                            <div className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-colors parallax" data-speed="0.04">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-semibold lg:text-2xl">{exp.title}</h3>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 lg:text-base">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-lg text-foreground/80 mb-2 lg:text-xl">{exp.company}</p>
                                <p className="text-muted-foreground lg:text-lg">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

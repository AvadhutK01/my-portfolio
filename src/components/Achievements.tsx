"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const achievements = [
    {
        title: "Student of the Year",
        organization: "College",
        date: "2023",
        description: "Awarded for outstanding academic performance and extracurricular involvement.",
        icon: "🎓",
    },
    {
        title: "2nd Prize - Project Competition",
        organization: "State Level",
        date: "2023",
        description: "Recognized for innovation and technical excellence in a state-level project showcase.",
        icon: "🏆",
    },
    {
        title: "Employee of the Month",
        organization: "Mypcot Infotech",
        date: "Jun 2024, Sept 2024, Mar 2025, Sept 2025, Mar 2026",
        description: "Recognized as Employee of the Month 5 times at Mypcot Infotech for consistent high performance and on-time delivery.",
        icon: "⭐",
    },
];

export default function Achievements() {
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
        <section id="achievements" className="py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">Achievements</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
                        Honors and awards that highlight my dedication and success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-7xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={scrollDirection === 'down' ? { duration: 0.5, delay: index * 0.1 } : { duration: 0 }}
                            className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg flex flex-col items-center text-center h-full group"
                        >
                            <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-primary font-medium mb-1 lg:text-lg">{achievement.organization}</p>
                            <p className="text-sm text-muted-foreground mb-4 lg:text-base">{achievement.date}</p>
                            <p className="text-foreground/80 lg:text-lg">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

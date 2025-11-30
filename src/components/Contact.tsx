"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Code2, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="h-6 w-6" />,
            href: "https://github.com/", // Replace with actual URL
            color: "hover:text-[#333]",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="h-6 w-6" />,
            href: "https://linkedin.com/", // Replace with actual URL
            color: "hover:text-[#0077b5]",
        },
        {
            name: "LeetCode",
            icon: <Code2 className="h-6 w-6" />,
            href: "https://leetcode.com/", // Replace with actual URL
            color: "hover:text-[#ffa116]",
        },
        {
            name: "Instagram",
            icon: <Instagram className="h-6 w-6" />,
            href: "https://instagram.com/", // Replace with actual URL
            color: "hover:text-[#e4405f]",
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6 sm:text-4xl">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? I'd love to hear from
                        you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                            <p className="text-muted-foreground mb-8">
                                Feel free to reach out through any of these platforms. I'm always
                                open to discussing new projects, creative ideas or opportunities to
                                be part of your visions.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group ${link.color}`}
                                    >
                                        <div className="p-2 rounded-full bg-background group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </div>
                                        <span className="font-medium">{link.name}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-border flex items-center gap-3">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email me at</p>
                                    <a
                                        href="mailto:hello@example.com"
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        hello@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-lg"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2 text-foreground"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2 text-foreground"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2 text-foreground"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) =>
                                        setFormState({ ...formState, message: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

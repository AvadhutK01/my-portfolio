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

    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

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

    function validate(values: typeof formState) {
        const errs: typeof errors = {};
        if (!values.name.trim()) errs.name = "Name is required";
        if (!values.email.trim()) errs.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Enter a valid email";
        if (!values.message.trim()) errs.message = "Message is required";
        return errs;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(null);
        const validation = validate(formState);
        setErrors(validation);
        if (Object.keys(validation).length > 0) {
            // validation failed
            return;
        }

        setIsSubmitting(true);
        try {
            // Simulate network request — replace with your API call if available
            await new Promise((res) => setTimeout(res, 900));
            setSuccess("Thanks! Your message has been sent.");
            setFormState({ name: "", email: "", message: "" });
            setErrors({});
        } catch (err) {
            setSuccess("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
            // clear success after a while
            window.setTimeout(() => setSuccess(null), 4500);
        }
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
                            noValidate
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
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-input'}`}
                                    placeholder="John Doe"
                                    aria-invalid={!!errors.name}
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
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-input'}`}
                                    placeholder="john@example.com"
                                    aria-invalid={!!errors.email}
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
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) =>
                                        setFormState({ ...formState, message: e.target.value })
                                    }
                                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-input'}`}
                                    placeholder="Tell me about your project..."
                                    aria-invalid={!!errors.message}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-primary-foreground" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                    </svg>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            <div aria-live="polite" className="mt-2">
                                {success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="rounded-md bg-green-800/80 text-white px-4 py-2 text-sm"
                                    >
                                        {success}
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

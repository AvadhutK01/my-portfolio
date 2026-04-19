"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import useParallax from "@/hooks/useParallax";
import {
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaHtml5,
    FaServer,
    FaTimes
} from "react-icons/fa";
import {
    TbBrandNextjs,
} from "react-icons/tb";
import { DiMongodb, DiMysql, DiPostgresql, DiRedis } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiDjango, SiJsonwebtokens } from "react-icons/si";
import { MdOutlineWorkOutline, MdOutlinePersonOutline } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const projects = [
    {
        title: "Alchomap",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "B2B Alcohol Distribution Platform with RESTful APIs, real-time KYC, and efficient lead routing.",
        details: [
            "Architected RESTful APIs for user onboarding, enquiry management, and distributor-retailer workflows covering city-based supply chain mapping.",
            "Wired real-time KYC verification via Zoop Aadhaar eSign API with support for multiple license-type verification workflows.",
            "Structured MongoDB schemas with pincode-based search and intelligent enquiry routing for efficient lead distribution across regions.",
            "Enforced RBAC across distributor, retailer, and admin roles; shipped SEO-optimized landing pages via Next.js server-side rendering.",
            "Launched CI/CD automation, API versioning for backward compatibility, and unit tests backed by SonarQube static analysis."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <TbBrandNextjs /> },
            { name: "MongoDB", icon: <DiMongodb /> },
        ],
        link: "#",
    },
    {
        title: "Gaminggle",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Fantasy Sports Platform with Redis caching, AES-256 encryption, and Docker containerization.",
        details: [
            "Spearheaded backend API development (Repository Architecture) for contest management, user workflows, and financial transaction processing.",
            "Boosted API throughput by applying Redis caching strategies that substantially reduced database load under peak-traffic conditions.",
            "Safeguarded sensitive financial data with AES-256 encryption aligned to PCI DSS compliance requirements.",
            "Containerized all services with Docker; streamlined deployment cycles through GitHub Actions CI/CD pipelines.",
            "Performed load testing with JMeter, resolved performance bottlenecks, and monitored production health on AWS EC2 via CloudWatch."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "Redis", icon: <DiRedis /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "AWS EC2", icon: <FaAws /> },
        ],
        link: "#",
    },
    {
        title: "TAQSET",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Islamic Banking Benefits Platform (BNPL) with payment transfer, Fawry integration, and offer management.",
        details: [
            "Built RESTful APIs for payment transfers, utility payments, and healthcare allowances using a clean repository-pattern architecture.",
            "Modelled schema via Sequelize ORM and shipped three web panels (admin, service provider, company) in React.js TypeScript.",
            "Wired Fawry payment gateway for customer and merchant transactions; rolled out SEO-optimized Next.js pages with server-side rendering.",
            "Launched a usage-based offer management system supporting tiered free and premium profile-level offerings."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <TbBrandNextjs /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
        ],
        link: "#",
    },
    {
        title: "Shuff-Group",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Home Security SaaS Platform using serverless backend processing and robust caching strategies.",
        details: [
            "Leveraged AWS Lambda and API Gateway to power serverless backend processing; provisioned infrastructure via CloudFormation with full CI/CD.",
            "Tuned performance using Redis caching, lazy loading, and CDN integration; tracked production health continuously via AWS CloudWatch.",
            "Fortified the platform with JWT auth, RBAC, encryption, rate limiting, input validation, and XSS/CSRF protection; audited via SonarQube."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "AWS Lambda", icon: <FaAws /> },
            { name: "Redis", icon: <DiRedis /> },
            { name: "MongoDB", icon: <DiMongodb /> },
        ],
        link: "#",
    },
    {
        title: "Cloudcard",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Cloud Storage & Chat Platform featuring a pixel-perfect React.js administrative panel.",
        details: [
            "Crafted a pixel-perfect, fully responsive marketing landing page in React.js to showcase platform capabilities and drive user acquisition.",
            "Delivered a full-featured admin panel with modular, reusable React.js components for overseeing users, storage quotas, and chat activity.",
            "Wired backend REST APIs throughout the admin panel, enabling live data dashboards, user management, and platform health monitoring."
        ],
        tags: [
            { name: "React.js", icon: <FaReact /> },
            { name: "REST API", icon: <FaServer /> },
        ],
        link: "#",
    },
    {
        title: "Green Vegease",
        category: "Freelance",
        categoryIcon: <BiBriefcaseAlt2 className="inline mr-1" />,
        description: "Online Vegetable Retail Platform featuring complex product catalogs, cart management, and order processing workflows.",
        details: [
            "Spun up REST APIs for product catalog, cart management, and order processing for a live green vegetables retail platform.",
            "Modelled and tuned PostgreSQL schemas for inventory, orders, and users, ensuring efficient query execution under concurrent load."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
        ],
        link: "#",
    },
    {
        title: "EnjoChem",
        category: "Freelance",
        categoryIcon: <BiBriefcaseAlt2 className="inline mr-1" />,
        description: "Internal ERP System covering procurement, inventory, and reporting workflows with robust validation.",
        details: [
            "Delivered REST APIs using Django for an internal ERP system covering procurement, inventory, and reporting workflows.",
            "Structured relational data models in PostgreSQL and enforced rigorous validation and business logic to guarantee data integrity."
        ],
        tags: [
            { name: "Django", icon: <SiDjango /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
        ],
        link: "#",
    },
    {
        title: "Realtime Chat App",
        category: "Personal Project",
        categoryIcon: <MdOutlinePersonOutline className="inline mr-1" />,
        description: "End-to-end messaging platform supporting real-time one-to-one and group chat with Socket.IO.",
        details: [
            "End-to-end messaging platform supporting real-time one-to-one and group chat, file sharing, media transfer, and emoji reactions via Socket.IO."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "MySQL", icon: <DiMysql /> },
            { name: "Socket.IO", icon: <SiSocketdotio /> },
            { name: "JWT", icon: <SiJsonwebtokens /> },
        ],
        link: "#",
    },
    {
        title: "Expense Tracker",
        category: "Personal Project",
        categoryIcon: <MdOutlinePersonOutline className="inline mr-1" />,
        description: "Financial tracking tool with income/expense reports and pie charts wired securely with RazorPay.",
        details: [
            "Financial tracking tool with income/expense reports and pie charts; wired RazorPay for secure premium membership transactions."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MySQL", icon: <DiMysql /> },
            { name: "HTML/CSS", icon: <FaHtml5 /> },
        ],
        link: "#",
    },
    {
        title: "ZipToDocument Converter",
        category: "Personal Project",
        categoryIcon: <MdOutlinePersonOutline className="inline mr-1" />,
        description: "MERN utility that extracts ZIP archives, maps file locations into structured PDFs, and stores output securely on AWS S3.",
        details: [
            "MERN utility that extracts ZIP archives, maps file locations into structured PDFs, and stores output securely on AWS S3."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "AWS S3", icon: <FaAws /> },
        ],
        link: "#",
    },
    {
        title: "E-Commerce Platform",
        category: "Personal Project",
        categoryIcon: <MdOutlinePersonOutline className="inline mr-1" />,
        description: "Full MERN e-commerce solution with product catalog, cart management, and payment processing.",
        details: [
            "Full MERN e-commerce solution with product catalog, cart management, and RazorPay payment processing."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "MongoDB", icon: <DiMongodb /> },
        ],
        link: "#",
    }
];

export default function Projects() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const lastScrollY = useRef(0);
    const [selectedProject, setSelectedProject] = useState<any>(null);

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

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    useParallax();

    return (
        <section id="projects" className="py-20 md:py-28 lg:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={scrollDirection === 'down' ? { duration: 0.8 } : { duration: 0 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">Featured Work</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
                        Here are some of the projects I've worked on. Each one represents a
                        unique challenge and a solution I'm proud of.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={scrollDirection === 'down' ? { duration: 0.5, delay: index * 0.1 } : { duration: 0 }}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all flex flex-col"
                        >
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="mb-2 text-sm font-medium text-accent flex items-center">
                                    {project.categoryIcon}
                                    {project.category}
                                </div>
                                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow lg:text-base">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className="px-2.5 py-1 text-xs lg:text-sm rounded-md bg-secondary text-secondary-foreground flex items-center gap-1.5"
                                        >
                                            <span className="text-primary">{tag.icon}</span>
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors mt-auto lg:text-base w-max outline-none"
                                >
                                    View Details &rarr;
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card w-full max-w-3xl rounded-2xl shadow-2xl border border-border p-6 md:p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors outline-none"
                            >
                                <FaTimes size={24} />
                            </button>
                            
                            <div className="mb-4 text-sm md:text-base font-medium text-accent flex items-center">
                                {selectedProject.categoryIcon}
                                {selectedProject.category}
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">{selectedProject.title}</h2>
                            
                            <div className="mb-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground/90 pb-2 border-b border-border/50">About the Project</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    {selectedProject.details.map((detail: string, i: number) => (
                                        <li key={i} className="flex items-start text-base lg:text-lg leading-relaxed">
                                            <span className="text-primary mr-3 mt-1.5 text-sm">▶</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.tags.map((tag: any) => (
                                        <span
                                            key={tag.name}
                                            className="px-4 py-2 text-sm md:text-base rounded-lg bg-secondary/50 text-secondary-foreground flex items-center gap-2 border border-border"
                                        >
                                            <span className="text-primary text-lg">{tag.icon}</span>
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {selectedProject.link && selectedProject.link !== "#" && (
                                <div className="mt-8">
                                    <Link
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                                    >
                                        Visit Live Project
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

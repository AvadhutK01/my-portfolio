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
    FaTimes,
    FaCreditCard,
    FaCheckCircle
} from "react-icons/fa";
import {
    TbBrandNextjs,
} from "react-icons/tb";
import { DiMongodb, DiMysql, DiPostgresql, DiRedis } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiDjango, SiJsonwebtokens, SiRazorpay, SiGithubactions, SiJest } from "react-icons/si";
import { MdOutlineWorkOutline, MdOutlinePersonOutline } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";

interface Project {
    title: string;
    category: string;
    categoryIcon: React.ReactNode;
    description: string;
    details: string[];
    tags: { name: string; icon: React.ReactNode }[];
    link: string;
}

const projects: Project[] = [
    {
        title: "Alchomap",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "B2B Alcohol Distribution Platform with RESTful APIs, real-time KYC, and efficient lead routing.",
        details: [
            "Built REST APIs for user onboarding, enquiry management, and city-based supply chain mapping.",
            "Integrated Zoop Aadhaar eSign API for real-time KYC checks across different license types.",
            "Created the database ERD and designed MongoDB schemas supporting pincode-based search and enquiry routing.",
            "Developed the frontend admin panels and landing pages in React.js and Next.js, and set up role-based access control.",
            "Set up CI/CD workflows, wrote unit test cases in Jest, handled API versioning for backward compatibility, and integrated SonarQube for code quality checks."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <TbBrandNextjs /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "CI/CD", icon: <SiGithubactions /> },
            { name: "Zoop", icon: <FaCheckCircle /> },
            { name: "Jest", icon: <SiJest /> },
        ],
        link: "#",
    },
    {
        title: "Gaminggle",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Fantasy Sports Platform with Redis caching, AES-256 encryption, and Docker containerization.",
        details: [
            "Designed the database ERD and built backend REST APIs using Repository Architecture for contests and user workflows.",
            "Integrated Razorpay for secure payments and Zoop for identity verification.",
            "Wrote unit test cases using Jest to verify transaction logs and contest entry logic.",
            "Implemented Redis caching to reduce database load and improve response times under peak traffic.",
            "Secured financial transactions and sensitive user data using AES-256 encryption.",
            "Containerized the application using Docker and automated deployments using GitHub Actions.",
            "Conducted load testing with JMeter to resolve performance bottlenecks, and set up AWS CloudWatch monitoring."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "Redis", icon: <DiRedis /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "CI/CD", icon: <SiGithubactions /> },
            { name: "Zoop", icon: <FaCheckCircle /> },
            { name: "Razorpay", icon: <SiRazorpay /> },
            { name: "Jest", icon: <SiJest /> },
        ],
        link: "#",
    },
    {
        title: "TAQSET",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Islamic Banking Benefits Platform (BNPL) with payment transfer, Fawry integration, and offer management.",
        details: [
            "Created REST APIs for payment transfers, utility bills, and healthcare allowances using a repository pattern.",
            "Designed the database ERD, mapped schemas using Sequelize ORM, and built three frontend panels in React.js and TypeScript.",
            "Wrote backend unit test cases in Jest to validate benefit disbursements and transactions.",
            "Integrated the Fawry payment gateway to handle transactions between customers and merchants.",
            "Built a usage-based offer management system with free and premium tiered plans."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "CI/CD", icon: <SiGithubactions /> },
            { name: "Fawry", icon: <FaCreditCard /> },
            { name: "Jest", icon: <SiJest /> },
        ],
        link: "#",
    },
    {
        title: "Shuff-Group",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Home Security SaaS Platform using serverless backend processing and robust caching strategies.",
        details: [
            "Designed the database ERD and set up MongoDB schemas for devices and user profiles.",
            "Built a serverless backend using AWS Lambda and API Gateway, writing CloudFormation templates for infrastructure and CI/CD.",
            "Wrote unit test cases using Jest to verify serverless helper functions and API endpoints.",
            "Improved load speeds by setting up Redis caching, lazy loading, and CloudFront CDN.",
            "Added security layers including JWT authentication, rate limiting, request validation, and SonarQube quality gates."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "AWS Lambda", icon: <FaAws /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "Redis", icon: <DiRedis /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "CI/CD", icon: <SiGithubactions /> },
            { name: "Jest", icon: <SiJest /> },
        ],
        link: "#",
    },
    {
        title: "Cloudcard",
        category: "Mypcot Infotech",
        categoryIcon: <MdOutlineWorkOutline className="inline mr-1" />,
        description: "Cloud Storage & Chat Platform featuring a pixel-perfect React.js administrative panel.",
        details: [
            "Built a responsive marketing landing page in React.js to showcase the platform features.",
            "Created a custom admin dashboard with modular React.js components to monitor users and chat logs.",
            "Connected REST APIs to populate real-time dashboards and handle user management actions."
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
            "Developed backend REST APIs for product catalogs, cart management, and checkout flows.",
            "Designed the database ERD and created optimized PostgreSQL tables for inventory and order tracking."
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
            "Built backend REST APIs using Django for procurement, inventory control, and report generation.",
            "Designed the database ERD and set up PostgreSQL tables with custom validation constraints for data integrity."
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
            "Designed the database ERD and MySQL schemas for chat history, user relationships, and group memberships.",
            "Built the frontend UI and landing pages using React.js for an interactive user experience.",
            "Integrated Socket.IO to support real-time messaging, active status indicators, and file sharing."
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
        description: "Financial tracking tool with income/expense reports, pie charts, and secure payment gateway integration.",
        details: [
            "Designed the database ERD and wrote MySQL schemas to track incomes, expenses, and monthly budgets.",
            "Integrated Razorpay for handling secure premium membership subscriptions.",
            "Created responsive dashboards and visual expense charts using HTML, CSS, and JavaScript."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MySQL", icon: <DiMysql /> },
            { name: "HTML/CSS", icon: <FaHtml5 /> },
            { name: "Razorpay", icon: <SiRazorpay /> },
        ],
        link: "#",
    },
    {
        title: "ZipToDocument Converter",
        category: "Personal Project",
        categoryIcon: <MdOutlinePersonOutline className="inline mr-1" />,
        description: "MERN utility that extracts ZIP archives, maps file locations into structured PDFs, and stores output securely on AWS S3.",
        details: [
            "Designed the database ERD and created MongoDB schemas to map file uploads and metadata.",
            "Built the frontend user dashboard and file upload interfaces using React.js.",
            "Developed backend scripts to unzip files, generate structured PDF documents, and store them on AWS S3."
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
        description: "Full MERN e-commerce solution with product catalog, cart management, and payment gateway integration.",
        details: [
            "Designed the database ERD and set up MongoDB collections for user profiles, catalogs, and shopping carts.",
            "Built responsive frontend landing pages, dynamic product listings, and cart flows in React.js.",
            "Integrated Razorpay to handle payments and process customer orders securely."
        ],
        tags: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "Razorpay", icon: <SiRazorpay /> },
        ],
        link: "#",
    }
];

export default function Projects() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const lastScrollY = useRef(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                        Here are some of the projects I&apos;ve worked on. Each one represents a
                        unique challenge and a solution I&apos;m proud of.
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
                                <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground/90 pb-2 border-b border-border/50">Key Contributions</h3>
                                <ul className="space-y-3 text-muted-foreground -ml-5">
                                    {selectedProject.details.map((detail: string, i: number) => (
                                        <li key={i} className="relative pl-5 text-base lg:text-lg leading-relaxed">
                                            <span className="absolute left-0 text-primary top-1.5 text-sm">▶</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.tags.map((tag) => (
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

"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Code2,
    Globe,
    Layers,
    Star,
    Users,
    LucideIcon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { MotionCard } from "@/components/ui/motion"

interface Project {
    title: string
    description: string
    category: string
    technologies: string[]
    highlights: string[]
    image: string
    link: string
    rating: number
    icon: LucideIcon
}

const projects = [
    {
        title: "Blueprint Application Framework",
        description: "Developed a modern, scalable application framework with advanced authentication system and configurable content management. The framework serves as a foundation for building secure, customizable web applications with minimal setup time.",
        category: "Framework",
        technologies: [
            "Next.js 14",
            "TypeScript",
            "ShadCN",
            "MongoDB",
            "Redis",
            "Vault",
            "Tailwind CSS",
            "Speakeasy",
            "WebAuthn"
        ],
        highlights: [
            "Multi-factor authentication system (Google OAuth, Passkeys, TOTP, Password)",
            "Role-based access control (RBAC) with granular permissions",
            "Dynamic content configuration system",
            "Modular architecture for easy feature extension",
            "Project-specific configuration management"
        ],
        image: "/projects/blueprint.jpg",
        link: "https://github.com/shwetasangani30",
        rating: 5.0,
        icon: Code2
    },
    {
        title: "VWED Custom CMS",
        description: "Developed a modern, user-friendly Content Management System that enables users to create dynamic web pages through an intuitive drag-and-drop interface. VWED empowers users to build professional websites without coding knowledge, offering flexible content management and customization options.",
        category: "CMS",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Docker",
        ],
        highlights: [
            "Drag-and-drop page builder",
            "Dynamic content management",
            "Custom element configuration",
            "User-friendly interface",
            "Microservices architecture",
            "Docker containerization",
            "Real-time preview",
            "Responsive design templates",
            "Role-based access control"
        ],
        image: "/projects/vwed-cms.jpg",
        link: "https://www.vwed.de",
        rating: 5.0,
        icon: Layers
    },
    {
        title: "Psy-o-mat",
        description: "Developed an interactive psychological assessment platform that generates personalized reports through a multi-step questionnaire. The system processes user responses to create comprehensive PDF reports featuring drought and radar charts, along with targeted advertisements.",
        category: "Web Application",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Chart.js",
            "Tailwind CSS",
            "JavaScript"
        ],
        highlights: [
            "Multi-step questionnaire system",
            "Dynamic MCQ assessment",
            "Automated PDF report generation",
            "Interactive drought and radar charts",
            "Personalized result calculations",
            "Responsive design",
            "Advertisement integration",
            "User session management"
        ],
        image: "/projects/psyomat.jpg",
        link: "https://psyomat.de",
        rating: 5.0,
        icon: Code2
    },
    {
        title: "Forms and Flow Builder",
        description: "Developed a powerful low-code platform for creating custom dynamic forms and business workflows. The application enables users to build complex forms and define business processes through an intuitive drag-and-drop interface, making it easy to create and manage custom applications without extensive coding.",
        category: "Low-Code Platform",
        technologies: [
            "React.js",
            "Laravel",
            "PHP",
            "MySQL",
            "Redux",
            "Material UI",
            "ReactFlow",
            "JavaScript"
        ],
        highlights: [
            "Drag-and-drop form builder with custom styling",
            "Visual workflow designer using nodes and edges",
            "Dynamic form components and property tools",
            "Custom business flow creation and management",
            "Responsive design for all devices",
            "Real-time form preview and testing",
            "Form validation and conditional logic",
            "Workflow automation and process management"
        ],
        image: "/projects/forms-flow.jpg",
        link: "https://upwork.com/project-link",
        rating: 5.0,
        icon: Layers
    },
    {
        title: "Dynamic Certificate Generator",
        description: "Developed a secure, microservices-based certificate generation system that converts dynamic HTML content to encrypted PDFs. The platform features a form-based interface for certificate creation, automated email delivery, and custom data visualization, all while ensuring data security through AES encryption.",
        category: "Microservices",
        technologies: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Puppeteer",
            "Material UI",
            "Tailwind CSS",
            "Docker",
            "JavaScript",
            "AES-256"
        ],
        highlights: [
            "Dynamic HTML to PDF conversion with Puppeteer",
            "256-bit AES encryption for PDF security",
            "Five different form submission methods",
            "Automated certificate delivery via email",
            "Custom data visualization graphs",
            "Microservices architecture",
            "Docker containerization",
            "Real-time certificate preview",
            "Secure user authentication"
        ],
        image: "/projects/certificate-gen.jpg",
        link: "#",
        rating: 5.0,
        icon: Code2
    },
    {
        title: "IOCL Truck Tracking System",
        description: "Developed a comprehensive truck tracking and management system for Indian Oil Corporation Limited (IOCL) to monitor fuel delivery trucks, optimize routes, and ensure timely deliveries. Implemented real-time GPS tracking and automated reporting features.",
        category: "Enterprise Solution",
        technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Google Maps API", "Redis"],
        highlights: [
            "Real-time GPS tracking of delivery trucks",
            "Automated route optimization",
            "Fuel delivery scheduling system",
            "Driver performance analytics",
            "Automated delivery reports and notifications",
            "Emergency response system"
        ],
        image: "/projects/iocl-tracking.jpg",
        link: "https://upwork.com/project-link",
        rating: 5.0,
        icon: Globe
    },
    {
        title: "Real Estate Management System",
        description: "Developed a comprehensive real estate management system with property listings, agent management, and client portals. Implemented advanced search filters and interactive property maps.",
        category: "Web Application",
        technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
        highlights: [
            "Property search with advanced filters",
            "Agent and client dashboards",
            "Payment integration with Stripe",
            "Interactive property maps",
            "Real-time notifications"
        ],
        image: "/projects/real-estate.jpg",
        link: "https://upwork.com/project-link",
        rating: 5.0,
        icon: Layers
    },
    {
        title: "E-commerce Platform",
        description: "Built a full-featured e-commerce platform with inventory management, order processing, and customer analytics. Implemented secure payment gateways and automated email notifications.",
        category: "E-commerce",
        technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Stripe", "SendGrid"],
        highlights: [
            "Multi-vendor marketplace",
            "Inventory management system",
            "Order tracking and management",
            "Customer analytics dashboard",
            "Automated email notifications"
        ],
        image: "/projects/ecommerce.jpg",
        link: "https://upwork.com/project-link",
        rating: 5.0,
        icon: Globe
    }
]

const categories = [
    "All",
    "Framework",
    "CMS",
    "Enterprise Solution",
    "Low-Code Platform",
    "Microservices",
    "Web Application",
    "E-commerce"
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            className="group"
        >
            <MotionCard className="h-full overflow-hidden border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:shadow-xl transition-all duration-300">
                <div className="p-6 relative">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <project.icon className="w-6 h-6 text-slate-500" />
                            </motion.div>
                            <h2 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                {project.title}
                            </h2>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                    </div>

                    <motion.p
                        className="text-muted-foreground mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {project.description}
                    </motion.p>

                    <div className="space-y-4">
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={fadeInUp}
                        >
                            {project.technologies.map((tech: string, techIndex: number) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * techIndex }}
                                >
                                    <Badge
                                        variant="secondary"
                                        className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.ul
                            className="space-y-2"
                            variants={fadeInUp}
                        >
                            {project.highlights.map((highlight: string, index: number) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-start gap-2 text-sm group/item"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Code2 className="w-4 h-4 mt-1 text-slate-500 flex-shrink-0 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300 transition-colors" />
                                    </motion.div>
                                    <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100 transition-colors">
                                        {highlight}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </MotionCard>
        </motion.div>
    )
}

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <div className="container mx-auto px-4 py-12 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <motion.h1
                    className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Featured Projects
                </motion.h1>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    A showcase of my recent work, demonstrating expertise in full-stack development,
                    system architecture, and delivering high-quality solutions.
                </motion.p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
            >
                {categories.map((category) => (
                    <motion.div
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant={selectedCategory === category ? "default" : "outline"}
                            className={cn(
                                "rounded-full transition-all duration-300",
                                selectedCategory === category && "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                            )}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    </motion.div>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <AnimatePresence mode="wait">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {[
                    { icon: Star, value: "5.0", label: "Average Rating", sublabel: "Across All Projects" },
                    { icon: Users, value: "20+", label: "Happy Clients", sublabel: "Worldwide" },
                    { icon: Code2, value: "100%", label: "Job Success", sublabel: "On Upwork" }
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                        <MotionCard className="p-6 text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <stat.icon className="w-8 h-8 text-slate-500 mb-3" />
                                </motion.div>
                                <motion.div
                                    className="text-4xl font-bold mb-1 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-muted-foreground">{stat.label}</div>
                                <div className="text-xs text-slate-500 mt-1">{stat.sublabel}</div>
                            </div>
                        </MotionCard>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
} 
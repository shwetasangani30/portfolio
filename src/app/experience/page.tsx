"use client"

import { Badge } from "@/components/ui/badge"
import {
    Briefcase,
    Calendar,
    Code2,
    Users,
    GraduationCap,
    ChevronRight,
    Clock,
    Users2,
    Trophy
} from "lucide-react"
import { cn } from "@/lib/utils"
import calculateExperience from "@/utils/calculateExperience"
import {
    MotionDiv,
    MotionLi,
    MotionCard,
    MotionText,
    MotionContainer
} from "@/components/ui/motion"

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Freelancer",
        period: "February 2023 - Present",
        description: "Working as a full-time freelancer specializing in MERN stack development.",
        skills: ["MERN Stack"],
        icon: Briefcase,
        highlights: [],
        color: "from-slate-700 to-slate-500"
    },
    {
        title: "Dedicated Developer",
        company: "Shiv Technolabs Pvt Ltd",
        period: "March 2022 - December 2022",
        description: "Led development of SaaS-based systems and managed client communications.",
        skills: ["React.js", "Node.js", "Laravel"],
        icon: Code2,
        highlights: [
            "Led a team of 8-9 members in SaaS system development",
            "Managed end-to-end project delivery",
            "Integrated multiple third-party APIs (Reactflow, Google Maps, Calendar, Social Media, Payment Gateways)"
        ],
        color: "from-slate-600 to-slate-400"
    },
    {
        title: "Full Stack Developer",
        company: "Shiv Technolabs Pvt Ltd",
        period: "January 2019 - December 2021",
        description: "Advanced through multiple roles including senior developer and team leader.",
        skills: ["React.js", "Node.js", "Laravel", "AWS", "VPS"],
        icon: Users,
        highlights: [
            "Worked with international clients",
            "Mentored junior developers",
            "Enhanced communication and professional skills",
            "Developed server expertise"
        ],
        color: "from-slate-500 to-slate-300"
    },
    {
        title: "Web Developer",
        company: "Itechnotree",
        period: "October 2017 - January 2019",
        description: "Started journey as a junior web developer, learning fundamental technologies.",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "CodeIgniter"],
        icon: GraduationCap,
        highlights: [
            "Built foundation in web development",
            "Mastered core technologies",
            "Developed first professional projects"
        ],
        color: "from-slate-400 to-slate-200"
    }
]

export default function ExperiencePage() {
    const experience = calculateExperience();

    return (
        <div className="container mx-auto px-4 py-12">
            <MotionDiv
                variant="fadeInUp"
                className="text-center mb-12"
            >
                <MotionText
                    variant="textGradientVariants"
                    className="text-4xl font-bold tracking-tight mb-4"
                >
                    Professional Journey
                </MotionText>
                <MotionText
                    variant="fadeInUp"
                    className="text-muted-foreground max-w-2xl mx-auto"
                >
                    A timeline of my professional experience, showcasing my growth from a junior developer
                    to a full-stack expert.
                </MotionText>
            </MotionDiv>

            <MotionContainer
                className="relative"
            >
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-12">
                    {experiences.map((experience) => (
                        <MotionDiv
                            key={experience.company + experience.period}
                            variant="timelineItemVariants"
                            className="relative pl-16"
                        >
                            {/* Timeline dot */}
                            <div className={cn(
                                "absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-background",
                                "bg-gradient-to-br",
                                experience.color
                            )} />

                            <MotionCard className="p-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <experience.icon className="w-5 h-5 text-slate-500" />
                                            <h2 className="text-2xl font-semibold tracking-tight">
                                                {experience.title}
                                            </h2>
                                        </div>

                                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{experience.period}</span>
                                            <ChevronRight className="w-4 h-4" />
                                            <span className="font-medium text-foreground">
                                                {experience.company}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground mb-4">
                                            {experience.description}
                                        </p>

                                        {experience.highlights.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {experience.highlights.map((highlight, i) => (
                                                    <MotionLi key={i} index={i} className="flex items-start gap-2">
                                                        <ChevronRight className="w-4 h-4 mt-1 text-slate-500 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </MotionLi>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {experience.skills.map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="bg-slate-100 dark:bg-slate-800"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </MotionCard>
                        </MotionDiv>
                    ))}
                </div>
            </MotionContainer>

            {/* Stats Section */}
            <MotionContainer
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {[
                    {
                        icon: Clock,
                        value: `${experience.years}.${experience.months}`,
                        label: "Years of Experience",
                        sublabel: "Since October 2017"
                    },
                    {
                        icon: Trophy,
                        value: "20+",
                        label: "Projects Delivered",
                        sublabel: "Including SaaS & Enterprise Solutions"
                    },
                    {
                        icon: Users2,
                        value: "8+",
                        label: "Team Members Led",
                        sublabel: "Across Multiple Projects"
                    }
                ].map((stat, index) => (
                    <MotionCard
                        key={stat.label}
                        className="p-6 text-center"
                        delay={index * 0.1}
                    >
                        <div className="flex flex-col items-center">
                            <stat.icon className="w-8 h-8 text-slate-500 mb-3 group-hover:scale-110 transition-transform" />
                            <MotionText
                                variant="textGradientVariants"
                                className="text-4xl font-bold mb-1"
                            >
                                {stat.value}
                            </MotionText>
                            <div className="text-muted-foreground">{stat.label}</div>
                            <div className="text-xs text-slate-500 mt-1">{stat.sublabel}</div>
                        </div>
                    </MotionCard>
                ))}
            </MotionContainer>
        </div>
    )
} 
"use client"

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Code2,
    Database,
    Server,
    Layout,
    GitBranch,
    Cloud,
    Workflow,
    CheckCircle2
} from "lucide-react"
import {
    MotionDiv,
    MotionText,
    MotionContainer,
    MotionHover,
    MotionCard
} from "@/components/ui/motion"

const skills = {
    frontend: [
        { name: "React.js", icon: <Code2 className="w-4 h-4" /> },
        { name: "Next.js", icon: <Code2 className="w-4 h-4" /> },
        { name: "Vue.js", icon: <Code2 className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-4 h-4" /> },
        { name: "ShadCN", icon: <Layout className="w-4 h-4" /> },
        { name: "Material UI", icon: <Layout className="w-4 h-4" /> },
        { name: "Styled Components", icon: <Layout className="w-4 h-4" /> },
    ],
    backend: [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Server className="w-4 h-4" /> },
        { name: "PHP", icon: <Server className="w-4 h-4" /> },
        { name: "Laravel", icon: <Server className="w-4 h-4" /> },
        { name: "Socket.io", icon: <Server className="w-4 h-4" /> },
    ],
    database: [
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "MSSQL", icon: <Database className="w-4 h-4" /> },
        { name: "Redis", icon: <Database className="w-4 h-4" /> },
    ],
    devops: [
        { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
        { name: "Docker", icon: <Cloud className="w-4 h-4" /> },
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
        { name: "GitHub", icon: <GitBranch className="w-4 h-4" /> },
    ],
    agile: [
        { name: "JIRA", icon: <Workflow className="w-4 h-4" /> },
        { name: "Trello", icon: <Workflow className="w-4 h-4" /> },
        { name: "Asana", icon: <Workflow className="w-4 h-4" /> },
    ]
}

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <MotionDiv
                variant="fadeInUp"
                className="max-w-4xl mx-auto text-center mb-16"
            >
                <MotionText
                    variant="textGradientVariants"
                    className="text-4xl font-bold tracking-tight mb-4"
                >
                    About Me
                </MotionText>
                <MotionText
                    variant="fadeInUp"
                    className="text-muted-foreground max-w-2xl mx-auto mb-8"
                >
                    Full-stack freelancer with over 7 years of hands-on experience in crafting dynamic web solutions.
                    Transforming concepts into reality with cutting-edge technologies.
                </MotionText>
                <MotionContainer className="flex flex-wrap justify-center gap-4">
                    {[
                        { icon: CheckCircle2, text: "Frontend Specialist" },
                        { icon: CheckCircle2, text: "Backend Developer" },
                        { icon: CheckCircle2, text: "UI/UX Enthusiast" }
                    ].map((badge, index) => (
                        <MotionHover
                            key={badge.text}
                            scale={1.05}
                            delay={index * 0.1}
                        >
                            <Badge variant="secondary" className="px-4 py-2">
                                <badge.icon className="w-4 h-4 mr-2" />
                                {badge.text}
                            </Badge>
                        </MotionHover>
                    ))}
                </MotionContainer>
            </MotionDiv>

            {/* Skills Section */}
            <MotionCard className="max-w-4xl mx-auto mb-16">
                <CardContent className="pt-6">
                    <Tabs defaultValue="frontend" className="w-full">
                        <TabsList className="grid w-full grid-cols-5 mb-8">
                            {Object.keys(skills).map((category) => (
                                <TabsTrigger key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Object.entries(skills).map(([category, items]) => (
                            <TabsContent key={category} value={category} className="space-y-4">
                                <MotionContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {items.map((skill, index) => (
                                        <MotionHover
                                            key={skill.name}
                                            scale={1.05}
                                            delay={index * 0.1}
                                            className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                                        >
                                            {skill.icon}
                                            <span className="text-sm font-medium">{skill.name}</span>
                                        </MotionHover>
                                    ))}
                                </MotionContainer>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </MotionCard>

            {/* Experience Section */}
            <MotionDiv variant="fadeInUp" className="max-w-4xl mx-auto">
                <MotionCard>
                    <CardContent className="pt-6">
                        <MotionText
                            variant="textGradientVariants"
                            className="text-2xl font-bold mb-6"
                        >
                            What I Do
                        </MotionText>
                        <MotionContainer className="space-y-6">
                            {[
                                {
                                    icon: Layout,
                                    title: "Responsive Web Development",
                                    description: "Creating high-scale, productive, and mobile-responsive real-time web applications with user-friendly interfaces."
                                },
                                {
                                    icon: Workflow,
                                    title: "Agile Development",
                                    description: "Following agile methodologies and tools to streamline processes and deliver efficient solutions."
                                },
                                {
                                    icon: Code2,
                                    title: "API Integration",
                                    description: "Seamless integration with third-party services like Stripe, PayPal, Google Maps, and Google Calendar."
                                }
                            ].map((item, index) => (
                                <MotionDiv
                                    key={item.title}
                                    variant="fadeInUp"
                                    delay={0.1 * (index + 1)}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </MotionDiv>
                            ))}
                        </MotionContainer>
                    </CardContent>
                </MotionCard>
            </MotionDiv>
        </div>
    )
} 
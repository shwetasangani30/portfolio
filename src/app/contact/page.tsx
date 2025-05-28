"use client"

import {
    Mail,
    Phone,
    MapPin,
    Download,
    Github,
    Linkedin,
    ExternalLink,
    Briefcase,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    MotionDiv,
    MotionText,
    MotionContainer,
    MotionHover,
    MotionCard
} from "@/components/ui/motion"

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "shweta.sangani30@gmail.com",
        href: "mailto:shweta.sangani30@gmail.com",
        description: "I'll respond within 24 hours",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 7433011281",
        href: "tel:+91 7433011281",
        description: "Available 9 AM - 7 PM IST",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Surat, Gujarat, India",
        href: "https://maps.google.com/?q=Surat,Gujarat,India",
        description: "Open to remote opportunities",
    },
]

const socialLinks = [
    {
        icon: Github,
        name: "GitHub",
        href: "https://github.com/shwetasangani30",
        description: "Check out my projects",
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        href: "https://linkedin.com/in/shweta-sangani-7434b2131",
        description: "Connect professionally",
    },
    {
        icon: Briefcase,
        name: "Upwork",
        href: "https://www.upwork.com/freelancers/~018174adfe3b220546",
        description: "100% Job Success",
    },
]

export default function ContactPage() {
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
                    Let&apos;s Connect
                </MotionText>
                <MotionText
                    variant="fadeInUp"
                    className="text-muted-foreground max-w-2xl mx-auto"
                >
                    Feel free to reach out through any of these channels. I&apos;m always open
                    to discussing new projects, creative ideas, or opportunities to be
                    part of your vision.
                </MotionText>
            </MotionDiv>

            {/* Contact Cards */}
            <MotionContainer
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
                {contactInfo.map((info) => (
                    <MotionHover
                        key={info.title}
                        scale={1.05}
                        className="h-full"
                    >
                        <MotionCard className="p-6 h-full group hover:shadow-lg transition-all duration-300">
                            <Link
                                href={info.href}
                                target={info.title === "Location" ? "_blank" : undefined}
                                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                                className="flex flex-col items-center text-center h-full"
                            >
                                <info.icon className="w-8 h-8 text-slate-500 mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-1">{info.title}</h3>
                                <p className="text-muted-foreground mb-2">{info.value}</p>
                                <p className="text-sm text-slate-500 mt-auto">{info.description}</p>
                            </Link>
                        </MotionCard>
                    </MotionHover>
                ))}
            </MotionContainer>

            {/* Social Links */}
            <MotionContainer
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
                {socialLinks.map((social) => (
                    <MotionHover
                        key={social.name}
                        scale={1.05}
                        className="h-full"
                    >
                        <MotionCard className="p-6 h-full group hover:shadow-lg transition-all duration-300">
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-center h-full"
                            >
                                <social.icon className="w-8 h-8 text-slate-500 mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-1">{social.name}</h3>
                                <p className="text-sm text-slate-500 mt-auto">
                                    {social.description}
                                </p>
                            </Link>
                        </MotionCard>
                    </MotionHover>
                ))}
            </MotionContainer>

            {/* CV Download */}
            <MotionDiv
                variant="fadeInUp"
                delay={0.5}
                className="text-center"
            >
                <MotionCard className="p-8 max-w-2xl mx-auto">
                    <MotionText
                        variant="textGradientVariants"
                        className="text-2xl font-semibold mb-4"
                    >
                        Download My CV
                    </MotionText>
                    <MotionText
                        variant="fadeInUp"
                        className="text-muted-foreground mb-6"
                    >
                        Get a detailed overview of my skills, experience, and achievements in my CV.
                    </MotionText>
                    <MotionHover scale={1.05}>
                        <Button size="lg" className="group" asChild>
                            <Link href="/Shweta_Sangani_CV.pdf" download>
                                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Download CV
                                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </Button>
                    </MotionHover>
                </MotionCard>
            </MotionDiv>
        </div>
    )
}
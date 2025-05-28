"use client"

import Link from "next/link"
import { Briefcase, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/shwetasangani30",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/shweta-sangani-7434b2131",
        icon: Linkedin,
    },
    {
        name: "Email",
        href: "mailto:shweta.sangani30@gmail.com",
        icon: Mail,
    },
    {
        name: "Upwork",
        href: "https://www.upwork.com/freelancers/~018174adfe3b220546",
        icon: Briefcase,
    },
]

export function Footer() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Logo />
                        <p className="mt-4 text-sm text-muted-foreground max-w-md">
                            Full-stack developer specializing in building exceptional digital experiences.
                            Currently focused on building accessible, human-centered products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((item) => (
                                <Button
                                    key={item.name}
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                        <item.icon className="h-5 w-5" />
                                        <span className="sr-only">{item.name}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Shweta Sangani. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
} 
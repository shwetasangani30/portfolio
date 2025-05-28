"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { MotionDiv } from "./ui/motion"
import { Logo } from "./logo"

const navigation = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden mr-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                        <Logo />
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium text-foreground/60 transition-colors hover:text-foreground",
                                        pathname === item.href && "text-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Link href="/Shweta_Sangani_CV.pdf" download>
                                <Button variant="outline" size="sm" className="hidden md:inline-flex">
                                    Download CV
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <MotionDiv
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-down Menu */}
                        <MotionDiv
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 top-16 md:hidden bg-background"
                        >
                            <div className="container mx-auto px-4 py-6 h-[calc(100vh-4rem)] flex flex-col">
                                <nav className="flex-1 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "block px-4 py-3 rounded-lg text-lg font-medium",
                                                "text-foreground/60 hover:text-foreground hover:bg-accent",
                                                pathname === item.href && "text-foreground bg-accent",
                                                "transition-colors"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="pt-4 border-t">
                                    <Link
                                        href="/Shweta_Sangani_CV.pdf"
                                        download
                                        className="block w-full px-4 py-3 rounded-lg text-lg font-medium text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Download CV
                                    </Link>
                                </div>
                            </div>
                        </MotionDiv>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
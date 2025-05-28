"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MotionDiv, MotionHover } from "./ui/motion"

interface LogoProps {
    className?: string
    variant?: "default" | "small"
    isMenuOpen?: boolean
}

export function Logo({ className, variant = "default", isMenuOpen = false }: LogoProps) {
    return (
        <Link href="/" className={cn("group relative flex items-center gap-3", className)}>
            <MotionHover
                scale={1.05}
                className="relative flex h-12 w-12 items-center justify-center"
            >
                {/* Logo Image */}
                <div className="relative h-full w-full">
                    <Image
                        src="/logo.png"
                        alt="SS Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 48px, 48px"
                        priority
                    />
                </div>
            </MotionHover>

            {variant === "default" && !isMenuOpen && (
                <MotionDiv
                    className="hidden sm:flex sm:flex-col"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <span className="text-xl font-bold tracking-tight">
                        Shweta{" "}
                        <MotionHover
                            scale={1.05}
                            className="inline bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-600 dark:to-slate-400 bg-clip-text text-transparent"
                        >
                            Sangani
                        </MotionHover>
                    </span>
                    <span className="text-xs text-slate-600/80 dark:text-slate-400/80 font-medium">
                        Full Stack Developer
                    </span>
                </MotionDiv>
            )}
        </Link>
    )
}
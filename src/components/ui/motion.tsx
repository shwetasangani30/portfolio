"use client"

import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { ReactNode } from "react"

// Common animation variants
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 }
}

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

// New variants based on usage in attached files
export const hoverScale: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
}

export const gradientBackground: Variants = {
    initial: {
        background: "linear-gradient(to bottom right, #334155, #64748b)"
    },
    animate: {
        background: [
            "linear-gradient(to bottom right, #334155, #64748b)",
            "linear-gradient(to bottom right, #475569, #94a3b8)",
            "linear-gradient(to bottom right, #334155, #64748b)"
        ],
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
}

export const shineEffect: Variants = {
    initial: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
}

// New variants based on usage in attached files
export const timelineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const timelineItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const cardHoverVariants: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
}

export const textGradientVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

// Reusable motion components
interface MotionDivProps extends HTMLMotionProps<"div"> {
    className?: string
    delay?: number
    duration?: number
    variant?: keyof typeof commonVariants
    children?: ReactNode
}

export const MotionDiv = ({
    className,
    children,
    delay = 0,
    duration = 0.8,
    variant,
    ...props
}: MotionDivProps) => {
    const motionVariant = variant ? commonVariants[variant] : undefined

    return (
        <motion.div
            className={cn(className)}
            variants={motionVariant}
            initial={motionVariant ? "initial" : { opacity: 0, y: 20 }}
            animate={motionVariant ? "animate" : { opacity: 1, y: 0 }}
            exit={motionVariant ? "exit" : { opacity: 0, y: -20 }}
            transition={{ duration, delay }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

const MotionCardBase = motion(Card)

export const MotionCard = ({
    className,
    children,
    delay = 0,
    duration = 0.8,
    ...props
}: MotionDivProps) => {
    return (
        <MotionCardBase
            className={cn(
                "h-full overflow-hidden border-slate-200 dark:border-slate-800",
                "bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800",
                "hover:shadow-xl transition-all duration-300",
                className
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration, delay, type: "spring", stiffness: 200 }}
            {...props}
        >
            {children}
        </MotionCardBase>
    )
}

export const MotionText = ({
    className,
    children,
    delay = 0,
    duration = 0.8,
    ...props
}: MotionDivProps) => {
    return (
        <motion.div
            className={cn("bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration, delay }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionContainer = ({
    className,
    children,
    delay = 0,
    duration = 0.8,
    ...props
}: MotionDivProps) => {
    return (
        <motion.div
            className={cn("space-y-6", className)}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration, delay }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// New components based on usage in attached files
interface MotionHoverProps extends MotionDivProps {
    scale?: number
    rotate?: number
}

export const MotionHover = ({
    className,
    children,
    scale = 1.05,
    rotate = 0,
    ...props
}: MotionHoverProps) => {
    return (
        <motion.div
            className={cn(className)}
            whileHover={{
                scale,
                rotate,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

interface MotionGradientProps extends MotionDivProps {
    from?: string
    to?: string
}

export const MotionGradient = ({
    className,
    children,
    from = "#334155",
    to = "#64748b",
    ...props
}: MotionGradientProps) => {
    const gradientVariants: Variants = {
        initial: {
            background: `linear-gradient(to bottom right, ${from}, ${to})`
        },
        animate: {
            background: [
                `linear-gradient(to bottom right, ${from}, ${to})`,
                `linear-gradient(to bottom right, ${to}, ${from})`,
                `linear-gradient(to bottom right, ${from}, ${to})`
            ],
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }

    return (
        <motion.div
            className={cn(className)}
            variants={gradientVariants}
            initial="initial"
            animate="animate"
            {...props}
        >
            {children}
        </motion.div>
    )
}

interface MotionShineProps extends MotionDivProps {
    direction?: "left" | "right"
}

export const MotionShine = ({
    className,
    children,
    direction = "right",
    ...props
}: MotionShineProps) => {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
            <motion.div
                className={cn(
                    "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                    direction === "right" ? "-translate-x-full" : "translate-x-full"
                )}
                variants={shineEffect}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}

interface MotionLiProps extends HTMLMotionProps<"li"> {
    index?: number
    delayStart?: number
    delayStep?: number
}

export function MotionLi({
    children,
    index = 0,
    delayStart = 0.2,
    delayStep = 0.1,
    ...props
}: MotionLiProps) {
    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delayStart + index * delayStep }}
            {...props}
        >
            {children}
        </motion.li>
    )
}

// Scroll-based motion component
interface ScrollMotionProps extends Omit<MotionDivProps, 'offset'> {
    viewportMargin?: string
}

export const ScrollMotion = ({
    className,
    children,
    viewportMargin = "-100px",
    ...props
}: ScrollMotionProps) => {
    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{ duration: 0.8 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Common animation presets
export const commonTransitions = {
    spring: {
        type: "spring",
        stiffness: 100,
        damping: 15
    },
    bounce: {
        type: "spring",
        stiffness: 400,
        damping: 10
    },
    smooth: {
        duration: 0.3,
        ease: "easeInOut"
    }
} as const

// Common animation variants
export const commonVariants = {
    fadeInUp,
    fadeIn,
    scaleIn,
    staggerContainer,
    hoverScale,
    gradientBackground,
    shineEffect,
    timelineVariants,
    timelineItemVariants,
    cardHoverVariants,
    textGradientVariants
} as const 
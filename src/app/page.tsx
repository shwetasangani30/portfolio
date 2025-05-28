"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import calculateExperience from "@/utils/calculateExperience"
import {
  MotionDiv,
  MotionCard,
  MotionText,
  MotionContainer,
  ScrollMotion
} from "@/components/ui/motion"

const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const experience = calculateExperience()

  return (
    <MotionDiv
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background elements */}
      <MotionDiv
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl" />
      </MotionDiv>

      {/* Main content */}
      <MotionContainer className="relative z-20 text-center px-4">
        <MotionDiv className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Hello, I&apos;m
          </h2>
          <MotionText
            className="text-5xl md:text-7xl font-bold tracking-tight h-20"
            delay={0.4}
          >
            Shweta Sangani
          </MotionText>
        </MotionDiv>

        <MotionText
          className="text-3xl md:text-4xl font-bold tracking-tight"
          delay={0.5}
        >
          Full Stack Developer
        </MotionText>

        <MotionDiv
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          delay={0.6}
        >
          Crafting modern, scalable web applications with cutting-edge technologies
        </MotionDiv>

        <MotionDiv
          className="flex flex-wrap justify-center gap-4"
          delay={0.8}
        >
          <Button
            size="lg"
            className="group"
            asChild
          >
            <Link href="/projects">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <Link href="/contact">
              Get in Touch
              <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </MotionDiv>

        {/* Stats */}
        <MotionDiv
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
          delay={1}
        >
          {[
            { label: "Projects", value: "20+" },
            { label: "Experience", value: `${experience.years}+ Years` },
            { label: "Rating", value: "5.0" },
            { label: "Clients", value: "15+" }
          ].map((stat, index) => (
            <MotionCard
              key={stat.label}
              className="p-4"
              delay={1.2 + (index * 0.1)}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </MotionCard>
          ))}
        </MotionDiv>
      </MotionContainer>

      {/* Scroll indicator */}
      <ScrollMotion
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        delay={1.5}
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <MotionDiv
            className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </ScrollMotion>
    </MotionDiv>
  )
}

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <div className="relative z-10 bg-white dark:bg-slate-900">
        {/* Add your other sections here */}
      </div>
    </main>
  )
}

import { Suspense } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsVisualization } from "@/components/skills-visualization"
import { ContactForm } from "@/components/contact-form"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedHeading } from "@/components/animated-heading"
import { AnimatedSection } from "@/components/animated-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { MouseFollower } from "@/components/mouse-follower"
import { ProfileImage } from "@/components/profile-image"
import { ExperienceTimeline } from "@/components/experience-timeline"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background to-background/80 dark:from-black dark:to-slate-900">
      <MouseFollower />
      <ParticleBackground />

      <header className="fixed top-0 z-40 w-full border-b border-slate-100/10 bg-background/80 backdrop-blur-md dark:bg-black/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">
              Joseph<span className="text-primary">Yared</span>
            </span>
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#about" className="text-sm font-medium tracking-wider transition-colors hover:text-primary">
              ABOUT
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium tracking-wider transition-colors hover:text-primary"
            >
              EXPERIENCE
            </Link>
            <Link href="#skills" className="text-sm font-medium tracking-wider transition-colors hover:text-primary">
              SKILLS
            </Link>
            <Link href="#projects" className="text-sm font-medium tracking-wider transition-colors hover:text-primary">
              PROJECTS
            </Link>
            <Link href="#contact" className="text-sm font-medium tracking-wider transition-colors hover:text-primary">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex space-x-1">
              <Link href="https://github.com/josephy02" target="_blank">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/10 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com/in/josephyared" target="_blank">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/10 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
            <div className="mx-auto max-w-4xl text-center">
              <AnimatedHeading
                text="Joseph Yared"
                className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
              />
              <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
                AI Research Lead & Computer Vision Engineer
              </p>
              <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="group relative overflow-hidden rounded-full px-8 py-6 text-sm font-medium uppercase tracking-wider">
                  <span className="relative z-10">Explore My Work</span>
                  <span className="absolute inset-0 h-full w-full translate-y-full rounded-full bg-primary transition-transform duration-300 group-hover:translate-y-0"></span>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-slate-200/20 px-8 py-6 text-sm font-medium uppercase tracking-wider backdrop-blur-sm hover:bg-slate-100/10 dark:border-slate-800/50"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Building <span className="text-primary">intelligent</span> systems for complex problems
                </h2>
                <div className="mt-6 h-1 w-20 bg-primary"></div>
                <p className="mt-6 text-slate-400">
                  I'm an AI Research Lead and Computer Vision Engineer with expertise in developing cutting-edge
                  solutions that leverage the power of artificial intelligence and machine learning. My work spans
                  across autonomous AI agents, computer vision, and multimodal research.
                </p>
                <p className="mt-4 text-slate-400">
                  With a strong foundation in both theoretical concepts and practical applications, I build systems that
                  not only perform well technically but also deliver meaningful business impact.
                </p>
                <div className="mt-8 flex space-x-4">
                  <div className="rounded-lg bg-slate-100/5 p-4 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-primary">BS</h3>
                    <p className="mt-1 text-sm text-slate-400">Informatics</p>
                  </div>
                  <div className="rounded-lg bg-slate-100/5 p-4 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-primary">UW</h3>
                    <p className="mt-1 text-sm text-slate-400">Seattle</p>
                  </div>
                  <div className="rounded-lg bg-slate-100/5 p-4 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-primary">AI</h3>
                    <p className="mt-1 text-sm text-slate-400">Research</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <ProfileImage />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Professional Experience</h2>
                <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
                <p className="mx-auto mt-6 max-w-2xl text-slate-400">My journey in AI research and development</p>
              </div>
              <div className="mt-16">
                <ExperienceTimeline />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Technical Expertise</h2>
                <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
                <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                  My technical toolkit spans across various AI/ML technologies and frameworks, allowing me to build
                  comprehensive solutions.
                </p>
              </div>
              <div className="mt-16">
                <Suspense fallback={<div>Loading skills...</div>}>
                  <SkillsVisualization />
                </Suspense>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
                <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
                <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                  A selection of my most impactful work in AI and machine learning.
                </p>
              </div>
              <div className="mt-16">
                <Suspense fallback={<div>Loading projects...</div>}>
                  <ProjectShowcase />
                </Suspense>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl rounded-2xl bg-slate-100/5 p-8 backdrop-blur-lg md:p-12">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's Work Together</h2>
                  <div className="mt-6 h-1 w-20 bg-primary"></div>
                  <p className="mt-6 text-slate-400">
                    I'm always interested in challenging projects and collaborations. Whether you have a specific
                    project in mind or just want to discuss possibilities, I'd love to hear from you.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-300">Email</h3>
                        <p className="text-slate-400">josephyared0@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-300">LinkedIn</h3>
                        <p className="text-slate-400">linkedin.com/in/josephyared</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <span className="text-lg font-bold text-primary">📞</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-300">Phone</h3>
                        <p className="text-slate-400">206-218-4825</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-slate-100/10 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Joseph Yared. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-slate-400 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


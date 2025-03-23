"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Infrastructure for Multimodal Research",
    description:
      "Modular infrastructure system to support training of multimodal language and vision models concurrently.",
    longDescription:
      "Developed a modular infrastructure system to support training of 2–3 multimodal language and vision models concurrently. Utilized Docker and Kubernetes to containerize model training pipelines, resulting in a 30% improvement in deployment time compared to manual setups. Integrated logging and monitoring tools to capture key performance metrics, reducing troubleshooting time by 15% and enabling quicker iterations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "PyTorch", "Docker", "Kubernetes"],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/multimodal-infra",
    },
  },
  {
    id: 2,
    title: "Real-Time Sentiment Analysis Dashboard",
    description: "Sentiment analysis microservices to process over 10,000 social media posts in real time.",
    longDescription:
      "Designed sentiment analysis microservices to process over 10,000 social media posts in real time, reducing manual reporting time by 30% and achieving 92% accuracy through optimized text preprocessing. The dashboard provides real-time insights and visualizations of sentiment trends across different platforms and topics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "FastAPI", "Streamlit", "NLP"],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/sentiment-dashboard",
    },
  },
  {
    id: 3,
    title: "Graph-Based ML System for Network Analysis",
    description: "Graph ML system for anomaly detection across networks with 100K+ nodes.",
    longDescription:
      "Engineered a graph ML system for anomaly detection across networks with 100K+ nodes, optimizing feature extraction workflows and reducing runtime by 40% while achieving 90% precision. The system uses advanced graph neural networks to identify patterns and anomalies in complex network structures, providing valuable insights for security and optimization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "PyG", "NetworkX", "Graph ML"],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/graph-ml",
    },
  },
]

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div className="grid gap-12 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={project.id === activeProject.id}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>
      <div className="md:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-slate-100/5 p-6 backdrop-blur-lg"
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold">{activeProject.title}</h3>
            <p className="mt-4 text-slate-400">{activeProject.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-slate-100/10 hover:bg-slate-100/20">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex space-x-4">
              <Button className="group flex items-center space-x-2">
                <span>View Demo</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 border-slate-100/20">
                <span>Source Code</span>
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  isActive: boolean
  onClick: () => void
}

function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`cursor-pointer rounded-lg border-l-2 p-4 transition-colors ${
        isActive
          ? "border-primary bg-slate-100/10"
          : "border-transparent hover:border-slate-100/50 hover:bg-slate-100/5"
      }`}
      onClick={onClick}
    >
      <h3 className="font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{project.description}</p>
      <div className="mt-4 flex items-center text-xs text-primary">
        <span>View Details</span>
        <ArrowRight className="ml-2 h-3 w-3" />
      </div>
    </motion.div>
  )
}


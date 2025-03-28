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
    title: "A Customizable End-to-End Computer Vision Pipeline for Object Detection & Segmentation",
    description:
      "A customizable computer vision pipeline built with Detectron2 for object detection and instance segmentation tasks, with optimized deployment capabilities.",
    longDescription:
      "Developed a modular infrastructure system to support training of 3D multiple object detection and segmentation models using PyTorch and Detectron2. The system includes data preprocessing pipelines, model training workflows, and containerized deployment with Docker and Kubernetes orchestration. Features include automated dataset preparation, hyperparameter optimization, model evaluation tools, and export capabilities for production environments. The architecture supports various backbone networks and is optimized for both research experimentation and industrial applications.",
    image: "/images/d2.jpg",
    tags: ["Python", "PyTorch", "Docker", "Detectron2"],
    links: {
      demo: "https://docs.google.com/presentation/d/1CwUDI6y-Z6E5PME46U4sSF9qtclZ6m3l/edit?usp=sharing&ouid=115360730949705164823&rtpof=true&sd=true",
      github: "https://github.com/josephy02/Detectron2-Sample",
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
      github: "https://github.com/josephy02/SpectraNLP",
    },
  },
  {
    id: 3,
    title: "AWS Support Ticket Analytics Dashboard",
    description: "A DE project that processes and visualizes AWS support ticket data using PySpark and Streamlit.",
    longDescription:
      "Built an end-to-end analytics dashboard for AWS support ticket data. The system features an ETL pipeline for processing ticket data, real-time analytics visualizations, SLA monitoring and compliance tracking, and performance metrics visualization. The tech stack includes PySpark for data processing, Streamlit for interactive visualization, Pandas for data manipulation, and Plotly for interactive charts. This solution enables support teams to monitor ticket resolution performance, track SLA compliance, and identify trends in customer issues to improve service quality.",
    image: "/images/aws2.jpg",
    tags: ["Python", "PySpark", "Pandas", "Plotly", "Streamlit"],
    links: {
      demo: "https://csanalytics-aws-support-metrics.streamlit.app/",
      github: "https://github.com/josephy02/CSAnalytics",
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


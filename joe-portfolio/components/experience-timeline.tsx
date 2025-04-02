"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    title: "Founder / AI Engineer",
    company: "Stealth Startup",
    location: "Seattle, WA",
    period: "Oct 2024 – Present",
    description: [
      "Architected and deployed autonomous AI agents using LangChain, achieving a 40% improvement in task completion rates and directly supporting customer-driven AI research initiatives",
      "Spearheaded research initiatives bridging cutting-edge model development with robust, open-source infrastructure improvements",
      "Designed scalable agent memory systems using vector databases and implemented robust evaluation frameworks that reduced hallucination rates by 85%, ensuring responsible and predictable LLM deployments",
    ],
    skills: ["LangChain", "Vector Databases", "AI Agents", "LLMs"],
  },
  {
    id: 2,
    title: "Computer Vision Researcher Engineer",
    company: "University of Washington",
    location: "Seattle, WA",
    period: "Jan 2024 – Dec 2024",
    description: [
      "Built and optimized an end-to-end computer vision pipeline for image segmentation and classification, processing 5000+ images with 99% accuracy",
      "Implemented post-training fine-tuning strategies that reduced segmentation error by 30% and improved model robustness",
      "Engineered scalable data pipelines, cutting image retrieval latency by 40% and boosting inference speed by 25%",
      "Developed reinforcement learning-based feedback loops, increasing segmentation consistency by 35% through iterative model updates",
    ],
    skills: ["Computer Vision", "Image Segmentation", "PyTorch", "Data Pipelines"],
  },
  // {
  //   id: 3,
  //   title: "Lead Physics Tutor",
  //   company: "University of Washington",
  //   location: "Seattle, WA",
  //   period: "Sept 2022 – June 2023",
  //   description: [
  //     "Supported 100+ students in understanding complex physics concepts",
  //     "Developed teaching materials and study guides to improve student comprehension",
  //     "Collaborated with faculty to identify areas where students needed additional support",
  //   ],
  //   skills: ["Physics", "Teaching", "Leadership"],
  // },
]

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-slate-100/20 md:left-1/2 md:-ml-px"></div>

      {/* Experience items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 transform items-center justify-center md:left-1/2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <div className="absolute h-6 w-6 animate-ping rounded-full bg-primary/30"></div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="rounded-lg bg-slate-100/5 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <Badge variant="outline" className="border-primary/30 bg-primary/10">
                      {experience.period}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center text-slate-400">
                    <span>{experience.company}</span>
                    <span className="mx-2">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-400">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-100/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}


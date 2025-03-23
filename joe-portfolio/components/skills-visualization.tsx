"use client"
import { motion } from "framer-motion"

const skills = [
  { name: "Python", level: 95, color: "#3b82f6" },
  { name: "Machine Learning", level: 90, color: "#6366f1" },
  { name: "PyTorch", level: 90, color: "#f43f5e" },
  { name: "TensorFlow", level: 85, color: "#ec4899" },
  { name: "Computer Vision", level: 95, color: "#10b981" },
  { name: "LangChain", level: 90, color: "#8b5cf6" },
  { name: "Vector Databases", level: 85, color: "#14b8a6" },
  { name: "Java", level: 80, color: "#f59e0b" },
  { name: "Go", level: 75, color: "#0ea5e9" },
  { name: "TypeScript", level: 80, color: "#6366f1" },
  { name: "SQL", level: 85, color: "#0ea5e9" },
  { name: "Docker/Kubernetes", level: 80, color: "#3b82f6" },
]

export function SkillsVisualization() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        {skills.slice(0, 6).map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
      <div className="space-y-6">
        {skills.slice(6, 12).map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}

interface SkillBarProps {
  skill: {
    name: string
    level: number
    color: string
  }
  index: number
}

function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100/10">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: index * 0.1,
            ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
          }}
        />
      </div>
    </div>
  )
}


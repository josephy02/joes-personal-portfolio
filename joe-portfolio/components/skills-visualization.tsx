// "use client"
// import { motion } from "framer-motion"

// const skills = [
//   { name: "Python", level: 95, color: "#3b82f6" },
//   { name: "Machine Learning", level: 90, color: "#6366f1" },
//   { name: "PyTorch", level: 90, color: "#f43f5e" },
//   { name: "TensorFlow", level: 85, color: "#ec4899" },
//   { name: "Computer Vision", level: 95, color: "#10b981" },
//   { name: "LangChain", level: 90, color: "#8b5cf6" },
//   { name: "Vector Databases", level: 85, color: "#14b8a6" },
//   { name: "Java", level: 80, color: "#f59e0b" },
//   { name: "Go", level: 75, color: "#0ea5e9" },
//   { name: "TypeScript", level: 80, color: "#6366f1" },
//   { name: "SQL", level: 85, color: "#0ea5e9" },
//   { name: "Docker/Kubernetes", level: 80, color: "#3b82f6" },
// ]

// export function SkillsVisualization() {
//   return (
//     <div className="grid gap-8 md:grid-cols-2">
//       <div className="space-y-6">
//         {skills.slice(0, 6).map((skill, index) => (
//           <SkillBar key={skill.name} skill={skill} index={index} />
//         ))}
//       </div>
//       <div className="space-y-6">
//         {skills.slice(6, 12).map((skill, index) => (
//           <SkillBar key={skill.name} skill={skill} index={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// interface SkillBarProps {
//   skill: {
//     name: string
//     level: number
//     color: string
//   }
//   index: number
// }

// function SkillBar({ skill, index }: SkillBarProps) {
//   return (
//     <div>
//       <div className="mb-2 flex justify-between">
//         <span className="text-sm font-medium">{skill.name}</span>
//         <span className="text-sm font-medium">{skill.level}%</span>
//       </div>
//       <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100/10">
//         <motion.div
//           className="h-full rounded-full"
//           style={{ backgroundColor: skill.color }}
//           initial={{ width: 0 }}
//           whileInView={{ width: `${skill.level}%` }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.5,
//             delay: index * 0.1,
//             ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
//           }}
//         />
//       </div>
//     </div>
//   )
// }
"use client"
import { motion } from "framer-motion"
import { Code2, Database, Server, Cpu, BrainCircuit, Layers } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define technology categories with their associated technologies
const techCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
    technologies: [
      { name: "Python", color: "#3b82f6" },
      { name: "TypeScript", color: "#6366f1" },
      { name: "Java", color: "#f59e0b" },
      { name: "Go", color: "#0ea5e9" },
      { name: "C++", color: "#ec4899" },
    ],
  },
  {
    name: "Machine Learning",
    icon: <BrainCircuit className="h-6 w-6 text-purple-500" />,
    technologies: [
      { name: "PyTorch", color: "#f43f5e" },
      { name: "TensorFlow", color: "#ec4899" },
      { name: "Scikit-learn", color: "#10b981" },
      { name: "Keras", color: "#ef4444" },
      { name: "Hugging Face", color: "#fbbf24" },
    ],
  },
  {
    name: "Computer Vision",
    icon: <Cpu className="h-6 w-6 text-green-500" />,
    technologies: [
      { name: "OpenCV", color: "#10b981" },
      { name: "YOLO", color: "#14b8a6" },
      { name: "Vision Language Models", color: "#8b5cf6" },
      { name: "Image Segmentation", color: "#0ea5e9" },
      { name: "Object Detection", color: "#f59e0b" },
    ],
  },
  {
    name: "AI & LLMs",
    icon: <Layers className="h-6 w-6 text-indigo-500" />,
    technologies: [
      { name: "LangChain", color: "#8b5cf6" },
      { name: "LlamaIndex", color: "#f43f5e" },
      { name: "OpenAI API", color: "#10b981" },
      { name: "Prompt Engineering", color: "#6366f1" },
      { name: "RAG", color: "#0ea5e9" },
    ],
  },
  {
    name: "Data & Databases",
    icon: <Database className="h-6 w-6 text-amber-500" />,
    technologies: [
      { name: "SQL", color: "#0ea5e9" },
      { name: "PostgreSQL", color: "#3b82f6" },
      { name: "MongoDB", color: "#10b981" },
      { name: "Redis", color: "#ef4444" },
      { name: "Vector DBs", color: "#8b5cf6" },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    icon: <Server className="h-6 w-6 text-rose-500" />,
    technologies: [
      { name: "Docker", color: "#3b82f6" },
      { name: "Kubernetes", color: "#6366f1" },
      { name: "AWS", color: "#f59e0b" },
      { name: "CI/CD", color: "#10b981" },
      { name: "Terraform", color: "#8b5cf6" },
    ],
  },
]

export function SkillsVisualization() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden border-slate-100/10 bg-slate-100/5 backdrop-blur-sm hover:bg-slate-100/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.technologies.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} color={tech.color} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

interface TechBadgeProps {
  name: string
  color: string
}

function TechBadge({ name, color }: TechBadgeProps) {
  return (
    <Badge
      className="px-3 py-1 text-sm font-medium transition-all hover:scale-105"
      style={{
        backgroundColor: `${color}20`, // 20% opacity version of the color
        color: color,
        borderColor: `${color}40`, // 40% opacity version of the color
      }}
    >
      {name}
    </Badge>
  )
}



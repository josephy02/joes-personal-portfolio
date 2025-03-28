"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/30"
    >
      <Image src="/images/profile_pic_joe.jpg" alt="Joseph Yared" fill className="object-cover" priority />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
    </motion.div>
  )
}


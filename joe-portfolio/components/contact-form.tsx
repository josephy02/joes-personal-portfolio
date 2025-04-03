"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions/contact"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing again
    if (formError) {
      setFormError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })

        // Reset form on success
        setFormData({ name: "", email: "", message: "" })
      } else {
        setFormError(result.message)
      }
    } catch (error) {
      setFormError("Something went wrong. Please try again later.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {formError && (
        <Alert variant="destructive" className="mb-6 bg-red-500/10 text-red-400 border-red-500/20">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border-slate-100/10 bg-slate-100/5 px-4 py-6 text-base backdrop-blur-sm focus:border-primary"
            required
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border-slate-100/10 bg-slate-100/5 px-4 py-6 text-base backdrop-blur-sm focus:border-primary"
            required
          />
        </div>
        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="min-h-[150px] resize-none border-slate-100/10 bg-slate-100/5 px-4 py-4 text-base backdrop-blur-sm focus:border-primary"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden rounded-full bg-primary px-6 py-6 text-sm font-medium uppercase tracking-wider text-primary-foreground"
        >
          <span className="relative z-10 flex items-center justify-center">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </span>
          <span className="absolute inset-0 h-full w-full translate-y-full bg-primary/80 transition-transform duration-300 group-hover:translate-y-0"></span>
        </Button>
      </form>
    </motion.div>
  )
}


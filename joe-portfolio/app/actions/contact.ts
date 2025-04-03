"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define validation schema for the contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = ContactFormSchema.parse(formData)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can customize this after domain verification
      to: "josephyared0@gmail.com",
      subject: `New contact from ${validatedData.name}`,
      replyTo: validatedData.email,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}

        Message:
        ${validatedData.message}
      `,
      // You can also use HTML for a nicer email format
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <h3>Message:</h3>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return { success: false, message: errorMessages }
    }

    // Handle other errors
    console.error("Contact form error:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}


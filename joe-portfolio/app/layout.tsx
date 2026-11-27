import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" })

export const metadata: Metadata = {
  title: "Joseph Yared — AI Engineer",
  description: "Joseph Yared is an AI engineer who builds for people. Work, experiments, and writing.",
  metadataBase: new URL("https://www.josephyared.com"),
  openGraph: {
    title: "Joseph Yared — AI Engineer",
    description: "Joseph Yared is an AI engineer who builds for people.",
    url: "https://www.josephyared.com",
    siteName: "Joseph Yared",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body className="grain font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

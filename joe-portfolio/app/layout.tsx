import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joseph Yared Personal Site',
  description: 'Hosted on Vercel',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

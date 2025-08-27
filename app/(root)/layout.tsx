import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { SanityLive } from "@/sanity/lib/live"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Siay National High School",
  description: "Committed to Excellence in Education",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  )
}

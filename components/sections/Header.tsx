"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to get the correct href for navigation
  const getHref = (originalHref: string) => {
    // If it's the about link and we're not on the home page, go to home page with anchor
    if (originalHref === "#about" && pathname !== "/") {
      return "/#about"
    }
    return originalHref
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/announcements", label: "Announcements" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#003366] to-[#002244] shadow-md">
            <Image src="/images/snhs-logo.jfif"
              alt="Siay National High School Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="hidden font-bold text-[#003366] sm:inline-block">Siay National High School</span>
            <span className="hidden text-xs text-muted-foreground sm:inline-block">
              Committed to Excellence in Education
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

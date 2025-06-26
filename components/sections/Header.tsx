import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#003366] to-[#002244] shadow-md">
            <div className="absolute inset-0 flex items-center justify-center text-[#FFCC00] font-bold text-lg">
              SNHS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="hidden font-bold text-[#003366] sm:inline-block">Siay National High School</span>
            <span className="hidden text-xs text-muted-foreground sm:inline-block">
              Committed to Excellence in Education
            </span>
          </div>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="#"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#academics"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            Academics
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#announcements"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            News & Announcements
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-[#003366] hover:text-[#FFCC00] transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex bg-[#003366] hover:bg-[#002244] text-white">Student Portal</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

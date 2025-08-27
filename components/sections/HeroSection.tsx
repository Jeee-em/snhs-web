import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Users } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#002855] to-[#001F40]">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/snhs.jfif"
                    alt="Students at Siay National High School"
                    fill
                    className="object-cover opacity-50 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001F40]/70"></div>
            </div>
            <div className="container relative z-10 mx-auto px-4 py-8 sm:py-12 md:py-16">
                <div className="flex items-center justify-center md:justify-start md:ml-20">
                    <div className="animate-fade-in-up text-center sm:text-left max-w-4xl">
                        <Badge className="mb-4 bg-[#FFCC00]/20 text-[#FFCC00] hover:bg-[#FFCC00]/30 px-3 py-1 text-xs sm:text-sm">
                            Est. 1965
                        </Badge>
                        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Welcome to <br />
                            <span className="text-[#FFCC00]">Siay National High School</span>
                        </h1>
                        <p className="mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                            Committed to Excellence in Education, nurturing future leaders through quality education and holistic
                            development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
                            <Button 
                                className="sm:w-auto bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90 px-4 sm:px-6 py-3 sm:py-6 text-sm sm:text-base"
                                asChild
                            >
                                <Link href="/academics">
                                    Explore Our Programs
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

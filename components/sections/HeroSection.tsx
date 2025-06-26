import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Users } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#002855] to-[#001F40]">
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
        <div className="container relative z-10 mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="animate-fade-in-up order-2 md:order-1">
                <Badge className="mb-4 bg-[#FFCC00]/20 text-[#FFCC00] hover:bg-[#FFCC00]/30 px-3 py-1 text-sm">
                Est. 1965
                </Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Welcome to <span className="text-[#FFCC00]">Siay National High School</span>
                </h1>
                <p className="mb-8 max-w-xl text-xl text-white/80 leading-relaxed">
                Committed to Excellence in Education, nurturing future leaders through quality education and holistic
                development.
                </p>
                <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90 px-6 py-6">
                    Explore Our Programs
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </div>
            </div>
            {/* <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFCC00]/20 rounded-lg animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFCC00]/10 rounded-lg animate-pulse-slow delay-300"></div>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                    <CardHeader className="bg-[#003366]/70 text-white">
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-[#FFCC00]" />
                        Principal's Message
                    </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 text-white/90">
                    <div className="flex gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full bg-[#FFCC00]/20 flex items-center justify-center">
                        <Users className="h-8 w-8 text-[#FFCC00]" />
                        </div>
                        <div>
                        <h3 className="font-bold">Dr. Maria Santos</h3>
                        <p className="text-sm text-white/70">School Principal</p>
                        </div>
                    </div>
                    <p className="italic text-sm leading-relaxed">
                        "Welcome to Siay National High School, where we are dedicated to providing a nurturing
                        environment that fosters academic excellence, character development, and lifelong learning. Our
                        commitment is to prepare students not just for exams, but for life's challenges."
                    </p>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-4">
                    <Button variant="link" className="text-[#FFCC00] hover:text-[#FFCC00]/80 p-0">
                        Read Full Message
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                    </CardFooter>
                </Card>
                </div>
            </div> */}
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </svg>
        </div>
        </section>
    )
}

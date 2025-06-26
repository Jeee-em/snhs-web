import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export default function HighlightsSection() {
    return (
        <section className="py-12">
        <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-1.5 bg-[#003366] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#003366]">School Highlights</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
                {
                title: "Regional Science Fair Champions",
                date: "March 15, 2025",
                image: "/placeholder.svg?height=200&width=400&text=Science Fair",
                description: "Our students won first place in the Regional Science Fair Competition.",
                },
                {
                title: "New Computer Laboratory",
                date: "February 28, 2025",
                image: "/placeholder.svg?height=200&width=400&text=Computer Lab",
                description: "State-of-the-art computer laboratory with 30 new units now open for students.",
                },
                {
                title: "National Achievement Test Results",
                date: "January 20, 2025",
                image: "/placeholder.svg?height=200&width=400&text=NAT Results",
                description: "SNHS ranks in the top 10% nationwide in the recent National Achievement Test.",
                },
                {
                title: "Sports Festival 2025",
                date: "April 10-15, 2025",
                image: "/placeholder.svg?height=200&width=400&text=Sports Festival",
                description: "Annual sports competition featuring various athletic events and team sports.",
                },
            ].map((highlight, index) => (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                    <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90">{highlight.date}</Badge>
                    </div>
                </div>
                <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-[#003366] mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button variant="link" className="p-0 text-[#003366]">
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
        </section>
    )
}

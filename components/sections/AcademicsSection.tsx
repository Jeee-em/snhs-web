import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ChevronRight } from "lucide-react"

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20">Academics</Badge>
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl mb-4">Our Educational Programs</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our comprehensive curriculum designed to develop well-rounded students prepared for future
            success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=K to 12 Curriculum"
                alt="K to 12 Curriculum"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-2 bg-[#FFCC00] text-[#003366]">Core Program</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">K to 12 Curriculum</h3>
                <p className="text-white/80 mb-4">
                  Our comprehensive K to 12 program follows the Department of Education's curriculum standards,
                  preparing students for higher education and future careers.
                </p>
                <Button className="bg-white text-[#003366] hover:bg-white/90">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Science, Technology, Engineering & Mathematics (STEM)",
                description:
                  "Specialized track for students interested in pursuing careers in science and technology fields.",
                icon: <BookOpen className="h-6 w-6 text-[#003366]" />,
              },
              {
                title: "Humanities and Social Sciences (HUMSS)",
                description:
                  "Focused on literature, philosophy, social sciences and preparation for careers in education, law, and public service.",
                icon: <BookOpen className="h-6 w-6 text-[#003366]" />,
              },
              {
                title: "Accountancy, Business and Management (ABM)",
                description:
                  "Prepares students for college courses and careers in business, finance, and entrepreneurship.",
                icon: <BookOpen className="h-6 w-6 text-[#003366]" />,
              },
              {
                title: "Technical-Vocational-Livelihood (TVL)",
                description:
                  "Provides practical skills training in various specializations for immediate employment or entrepreneurship.",
                icon: <BookOpen className="h-6 w-6 text-[#003366]" />,
              },
            ].map((track, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                      {track.icon}
                    </div>
                    <CardTitle className="text-base text-[#003366]">{track.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-xs text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-[#003366] rounded-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Special Programs</Badge>
              <h3 className="text-2xl font-bold text-white mb-4">Specialized Educational Offerings</h3>
              <p className="text-white/80 mb-6">
                Beyond our core curriculum, we offer specialized programs to address diverse student needs and
                interests, ensuring every student has the opportunity to excel in their chosen path.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Special Education Program (SPED)",
                    description: "Tailored education for students with special needs",
                  },
                  {
                    title: "Indigenous Peoples Education (IPED)",
                    description: "Culturally responsive education for indigenous students",
                  },
                  {
                    title: "Music, Arts, Physical Education & Health (MAPEH)",
                    description: "Enhanced program for artistically and athletically inclined students",
                  },
                ].map((program, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#FFCC00] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-4 w-4 text-[#003366]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{program.title}</h4>
                      <p className="text-sm text-white/70">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Special Programs"
                alt="Special Programs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-[#003366] mb-6">Learning Resources</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { title: "Library", count: "10,000+ Books" },
              { title: "Computer Labs", count: "3 Labs" },
              { title: "Science Labs", count: "4 Labs" },
              { title: "Digital Resources", count: "24/7 Access" },
              { title: "Learning Modules", count: "All Subjects" },
              { title: "Sports Facilities", count: "Multiple Courts" },
            ].map((resource, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 text-center hover:border-[#FFCC00] transition-colors"
              >
                <h4 className="font-medium text-[#003366]">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

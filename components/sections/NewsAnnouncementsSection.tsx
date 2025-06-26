import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, FileText } from "lucide-react"

export default function NewsAnnouncementsSection() {
  return (
    <section id="announcements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20">News & Announcements</Badge>
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl mb-4">Stay Updated</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Keep up with the latest happenings, events, and important announcements at Siay National High School.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1.5 bg-[#003366] rounded-full"></div>
              <h3 className="text-xl font-bold text-[#003366]">Latest News</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "SNHS Students Win First Place in Regional Science Fair",
                  date: "April 5, 2025",
                  image: "/placeholder.svg?height=300&width=600&text=Science Fair Winners",
                  excerpt:
                    "Our students showcased their innovative projects and brought home the top prize in the Regional Science Fair Competition.",
                  tags: ["Academic", "Achievement"],
                },
                {
                  title: "New Computer Laboratory Inaugurated",
                  date: "March 28, 2025",
                  image: "/placeholder.svg?height=300&width=600&text=Computer Laboratory",
                  excerpt:
                    "State-of-the-art computer laboratory with 30 new units was officially opened to enhance our technology education program.",
                  tags: ["Facilities", "Technology"],
                },
                {
                  title: "Annual School Festival Announced",
                  date: "March 15, 2025",
                  image: "/placeholder.svg?height=300&width=600&text=School Festival",
                  excerpt:
                    "Mark your calendars for our week-long celebration featuring competitions, performances, and exhibits from May 10-15, 2025.",
                  tags: ["Event", "Activities"],
                },
              ].map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="md:flex">
                    <div className="relative h-48 md:h-auto md:w-1/3">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#FFCC00] text-[#003366]">{news.date}</Badge>
                        {news.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="border-[#003366] text-[#003366]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-lg font-bold text-[#003366] mb-2">{news.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{news.excerpt}</p>
                      <Button variant="link" className="p-0 text-[#003366]">
                        Read full story
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#003366] hover:bg-[#002244] text-white">View All News</Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1.5 bg-[#003366] rounded-full"></div>
              <h3 className="text-xl font-bold text-[#003366]">School Memos</h3>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Guidelines for Final Examinations",
                      date: "April 2, 2025",
                      type: "Academic",
                    },
                    {
                      title: "Schedule for Graduation Rehearsals",
                      date: "March 30, 2025",
                      type: "Event",
                    },
                    {
                      title: "Requirements for Enrollment SY 2025-2026",
                      date: "March 25, 2025",
                      type: "Administrative",
                    },
                    {
                      title: "Parent-Teacher Conference Schedule",
                      date: "March 20, 2025",
                      type: "Meeting",
                    },
                    {
                      title: "Guidelines for Clearance Processing",
                      date: "March 15, 2025",
                      type: "Administrative",
                    },
                  ].map((memo, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-[#003366] text-[#003366]">
                            {memo.type}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-[#003366] mt-1">{memo.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{memo.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button
                  variant="outline"
                  className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                >
                  View All Memos
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1.5 bg-[#003366] rounded-full"></div>
                <h3 className="text-xl font-bold text-[#003366]">Event Calendar</h3>
              </div>

              <Card className="bg-[#003366] text-white">
                <CardHeader>
                  <CardTitle className="text-[#FFCC00]">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Final Examinations",
                      date: "April 15-19, 2025",
                      type: "Academic",
                    },
                    {
                      title: "Graduation Ceremony",
                      date: "April 30, 2025",
                      type: "Ceremony",
                    },
                    {
                      title: "School Festival",
                      date: "May 10-15, 2025",
                      type: "Event",
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="h-12 w-12 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-[#FFCC00]" />
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-white/70">{event.date}</p>
                        <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">{event.type}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="border-t border-white/10 pt-4">
                  <Button className="w-full bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90">
                    View Full Calendar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

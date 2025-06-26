import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, GraduationCap, Users } from "lucide-react"

export default function AnnouncementsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-1.5 bg-[#003366] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#003366]">Important Announcements</h2>
          </div>
          <Card className="bg-[#003366] text-white">
            <CardHeader>
              <CardTitle className="text-[#FFCC00]">Upcoming Events</CardTitle>
              <CardDescription className="text-white/70">Stay updated with our school calendar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Enrollment for SY 2025-2026",
                  date: "April 1-30, 2025",
                  time: "8:00 AM - 5:00 PM",
                  type: "Registration",
                },
                {
                  title: "Parent-Teacher Conference",
                  date: "April 15, 2025",
                  time: "1:00 PM - 5:00 PM",
                  type: "Meeting",
                },
                {
                  title: "Final Examinations",
                  date: "March 20-24, 2025",
                  time: "7:30 AM - 11:30 AM",
                  type: "Academic",
                },
                {
                  title: "Graduation Ceremony",
                  date: "April 30, 2025",
                  time: "9:00 AM",
                  type: "Ceremony",
                },
              ].map((event, index) => (
                <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0">
                    {event.type === "Registration" && <Users className="h-6 w-6 text-[#FFCC00]" />}
                    {event.type === "Meeting" && <Users className="h-6 w-6 text-[#FFCC00]" />}
                    {event.type === "Academic" && <BookOpen className="h-6 w-6 text-[#FFCC00]" />}
                    {event.type === "Ceremony" && <GraduationCap className="h-6 w-6 text-[#FFCC00]" />}
                  </div>
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                    </div>
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
    </section>
  )
}

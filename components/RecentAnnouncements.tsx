import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Award, Bell, BookOpen, Calendar, Users } from 'lucide-react'
import { Button } from './ui/button'

const RecentAnnouncements = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-school-blue flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Announcements
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                        {[
                        {
                            title: "Enrollment for SY 2025-2026 Now Open",
                            date: "March 20, 2025",
                            urgent: true,
                            type: "Registration",
                        },
                        {
                            title: "Parent-Teacher Conference Schedule",
                            date: "March 18, 2025",
                            urgent: false,
                            type: "Meeting",
                        },
                        {
                            title: "Final Examination Guidelines Released",
                            date: "March 15, 2025",
                            urgent: true,
                            type: "Academic",
                        },
                        {
                            title: "Graduation Ceremony Details Announced",
                            date: "March 12, 2025",
                            urgent: false,
                            type: "Event",
                        },
                        {
                            title: "Summer Program Registration Opens",
                            date: "March 10, 2025",
                            urgent: false,
                            type: "Program",
                        },
                        ].map((announcement, index) => (
                        <div
                            key={index}
                            className="p-3 rounded-lg border border-gray-100 hover:border-school-gold transition-colors cursor-pointer"
                        >
                            <div className="flex items-start gap-3">
                            <div className="flex flex-col items-center gap-1 flex-shrink-0">
                                {announcement.urgent && (
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                )}
                                <div className="w-8 h-8 rounded-full bg-school-blue/10 flex items-center justify-center">
                                {announcement.type === "Registration" && <Users className="h-4 w-4 text-school-blue" />}
                                {announcement.type === "Meeting" && <Users className="h-4 w-4 text-school-blue" />}
                                {announcement.type === "Academic" && <BookOpen className="h-4 w-4 text-school-blue" />}
                                {announcement.type === "Event" && <Calendar className="h-4 w-4 text-school-blue" />}
                                {announcement.type === "Program" && <Award className="h-4 w-4 text-school-blue" />}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-school-blue text-sm mb-1">{announcement.title}</h4>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {announcement.date}
                                </p>
                            </div>
                            </div>
                        </div>
                        ))}
                </CardContent>
                <CardFooter>
                        <Button
                        variant="outline"
                        className="w-full border-school-blue text-school-blue hover:bg-school-blue hover:text-white bg-transparent"
                        >
                        View All Announcements
                        </Button>
                </CardFooter>
        </Card>
    )
}

export default RecentAnnouncements
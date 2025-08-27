import Link from "next/link"
import {
    ArrowLeft,
    Calendar,
    Clock,
    Bell,
    AlertTriangle,
    Info,
    CheckCircle,
    Users,
    BookOpen,
    Award,
    FileText,
    Search,
    Filter,
    ChevronRight,
    Pin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnnouncementsPage() {
    const announcements = [
        {
            id: 1,
            title: "Enrollment for School Year 2025-2026 Now Open",
            content:
                "We are now accepting applications for the upcoming school year. All interested students and parents are encouraged to visit our registrar's office or apply online through our student portal.",
            type: "urgent",
            category: "Registration",
            date: "March 20, 2025",
            time: "8:00 AM",
            author: "Registrar's Office",
            pinned: true,
            deadline: "April 30, 2025",
            icon: <Users className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Enrollment 2025",
        },
        {
            id: 2,
            title: "Final Examination Schedule and Guidelines",
            content:
                "The final examinations for the 4th quarter will be conducted from March 25-29, 2025. Please review the examination guidelines and schedule carefully.",
            type: "urgent",
            category: "Academic",
            date: "March 18, 2025",
            time: "2:00 PM",
            author: "Academic Office",
            pinned: true,
            deadline: "March 25, 2025",
            icon: <BookOpen className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Final Exams",
        },
        {
            id: 3,
            title: "Parent-Teacher Conference Schedule",
            content:
                "The quarterly parent-teacher conference will be held on March 22, 2025, from 1:00 PM to 5:00 PM. Parents are encouraged to attend to discuss their child's academic progress.",
            type: "important",
            category: "Meeting",
            date: "March 15, 2025",
            time: "10:00 AM",
            author: "Student Affairs",
            pinned: false,
            deadline: "March 22, 2025",
            icon: <Users className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Parent Conference",
        },
        {
            id: 4,
            title: "Graduation Ceremony Details and Requirements",
            content:
                "The graduation ceremony for Grade 12 students will be held on April 5, 2025, at 9:00 AM in the school gymnasium. Please review the requirements and dress code.",
            type: "important",
            category: "Event",
            date: "March 12, 2025",
            time: "3:00 PM",
            author: "Student Affairs",
            pinned: false,
            deadline: "April 5, 2025",
            icon: <Award className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Graduation",
        },
        {
            id: 5,
            title: "Summer Program Registration Opens",
            content:
                "Registration for our summer enrichment programs is now open. Programs include academic remediation, sports training, and arts workshops.",
            type: "info",
            category: "Program",
            date: "March 10, 2025",
            time: "9:00 AM",
            author: "Program Coordinator",
            pinned: false,
            deadline: "May 15, 2025",
            icon: <BookOpen className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Summer Program",
        },
        {
            id: 6,
            title: "New School Uniform Policy Implementation",
            content:
                "Starting next school year, new uniform guidelines will be implemented. Please review the updated dress code and uniform specifications.",
            type: "info",
            category: "Policy",
            date: "March 8, 2025",
            time: "11:00 AM",
            author: "Administration",
            pinned: false,
            deadline: "June 1, 2025",
            icon: <FileText className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Uniform Policy",
        },
        {
            id: 7,
            title: "Library Extended Hours During Exam Period",
            content:
                "The school library will extend its operating hours during the final examination period to provide students with additional study space and resources.",
            type: "info",
            category: "Facility",
            date: "March 5, 2025",
            time: "4:00 PM",
            author: "Library Staff",
            pinned: false,
            deadline: "March 29, 2025",
            icon: <BookOpen className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Library Hours",
        },
        {
            id: 8,
            title: "Health and Safety Protocols Update",
            content:
                "Updated health and safety protocols are now in effect. All students, faculty, and staff are required to follow the new guidelines for everyone's safety.",
            type: "important",
            category: "Health",
            date: "March 3, 2025",
            time: "1:00 PM",
            author: "Health Office",
            pinned: false,
            deadline: "Ongoing",
            icon: <AlertTriangle className="h-6 w-6" />,
            image: "/placeholder.svg?height=300&width=600&text=Health Protocols",
        },
    ]

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "urgent":
                return <AlertTriangle className="h-5 w-5 text-red-500" />
            case "important":
                return <Info className="h-5 w-5 text-orange-500" />
            case "info":
                return <CheckCircle className="h-5 w-5 text-blue-500" />
            default:
                return <Bell className="h-5 w-5 text-gray-500" />
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case "urgent":
                return "bg-red-100 text-red-800 border-red-200"
            case "important":
                return "bg-orange-100 text-orange-800 border-orange-200"
            case "info":
                return "bg-blue-100 text-blue-800 border-blue-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-school-blue via-school-blue-dark to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Floating elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-10 w-32 h-32 bg-school-gold/10 rounded-full blur-xl animate-pulse-slow"></div>
                        <div className="absolute bottom-20 right-20 w-24 h-24 bg-school-gold/20 rounded-lg rotate-45 animate-pulse-slow animate-delay-300"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <Badge className="mb-4 bg-school-gold/20 text-school-gold hover:bg-school-gold/30 px-4 py-2 text-sm font-medium backdrop-blur-sm border border-school-gold/30">
                                <span className="flex items-center gap-2">
                                    <Bell className="h-4 w-4" />
                                    Official Announcements
                                </span>
                            </Badge>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                                School{" "}
                                <span className="bg-gradient-to-r from-school-gold to-yellow-300 bg-clip-text text-transparent">
                                    Announcements
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                                Stay informed with important announcements, deadlines, and updates from Siay National High School
                                administration.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                                    <Input
                                        type="text"
                                        placeholder="Search announcements..."
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:border-school-gold focus:ring-school-gold/20 rounded-xl"
                                    />
                                    <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-school-gold text-school-blue hover:bg-school-gold/90 px-6">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Main Content Area */}
                            <div className="lg:col-span-3">
                                {/* Filter Tabs */}
                                <Tabs defaultValue="all" className="mb-8">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full sm:w-auto">
                                            <TabsTrigger value="all">All</TabsTrigger>
                                            <TabsTrigger value="urgent">Urgent</TabsTrigger>
                                            <TabsTrigger value="important">Important</TabsTrigger>
                                            <TabsTrigger value="academic">Academic</TabsTrigger>
                                            <TabsTrigger value="events">Events</TabsTrigger>
                                        </TabsList>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm" className="bg-transparent">
                                                <Filter className="h-4 w-4 mr-2" />
                                                Filter
                                            </Button>
                                            <Button variant="outline" size="sm" className="bg-transparent">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                Date
                                            </Button>
                                        </div>
                                    </div>

                                    <TabsContent value="all" className="space-y-6">
                                        {/* Pinned Announcements */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold text-school-blue flex items-center gap-2">
                                                <Pin className="h-5 w-5" />
                                                Pinned Announcements
                                            </h2>
                                            {announcements
                                                .filter((announcement) => announcement.pinned)
                                                .map((announcement) => (
                                                    <Card key={announcement.id} className="border-l-4 border-l-red-500 shadow-md">
                                                        <CardContent className="p-6">
                                                            <div className="flex items-start gap-4">
                                                                <div className="flex-shrink-0">
                                                                    <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                                                                        {announcement.icon}
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-start justify-between gap-4 mb-3">
                                                                        <div>
                                                                            <div className="flex items-center gap-2 mb-2">
                                                                                {getTypeIcon(announcement.type)}
                                                                                <Badge className={`text-xs ${getTypeColor(announcement.type)}`}>
                                                                                    {announcement.type.toUpperCase()}
                                                                                </Badge>
                                                                                <Badge variant="outline" className="text-xs">
                                                                                    {announcement.category}
                                                                                </Badge>
                                                                                <Pin className="h-4 w-4 text-red-500" />
                                                                            </div>
                                                                            <h3 className="text-lg font-bold text-school-blue mb-2">{announcement.title}</h3>
                                                                        </div>
                                                                        <div className="text-right text-sm text-muted-foreground">
                                                                            <div className="flex items-center gap-1 mb-1">
                                                                                <Calendar className="h-3 w-3" />
                                                                                <span>{announcement.date}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-1">
                                                                                <Clock className="h-3 w-3" />
                                                                                <span>{announcement.time}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-muted-foreground mb-4">{announcement.content}</p>
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                                            <span>By: {announcement.author}</span>
                                                                            <span>•</span>
                                                                            <span>Deadline: {announcement.deadline}</span>
                                                                        </div>
                                                                        <Link
                                                                            href={`/announcements/${announcement.id}`}
                                                                            className="inline-flex items-center text-school-blue hover:text-school-gold transition-colors font-medium"
                                                                        >
                                                                            Read more
                                                                            <ChevronRight className="ml-1 h-4 w-4" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                        </div>

                                        <div className="border-t border-gray-200 pt-8">
                                            <h2 className="text-xl font-bold text-school-blue mb-6">All Announcements</h2>
                                            <div className="space-y-6">
                                                {announcements
                                                    .filter((announcement) => !announcement.pinned)
                                                    .map((announcement) => (
                                                        <Card key={announcement.id} className="hover:shadow-lg transition-all duration-300">
                                                            <CardContent className="p-6">
                                                                <div className="flex items-start gap-4">
                                                                    <div className="flex-shrink-0">
                                                                        <div
                                                                            className={`h-12 w-12 rounded-lg flex items-center justify-center ${announcement.type === "urgent"
                                                                                    ? "bg-red-100"
                                                                                    : announcement.type === "important"
                                                                                        ? "bg-orange-100"
                                                                                        : "bg-blue-100"
                                                                                }`}
                                                                        >
                                                                            {announcement.icon}
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="flex items-start justify-between gap-4 mb-3">
                                                                            <div>
                                                                                <div className="flex items-center gap-2 mb-2">
                                                                                    {getTypeIcon(announcement.type)}
                                                                                    <Badge className={`text-xs ${getTypeColor(announcement.type)}`}>
                                                                                        {announcement.type.toUpperCase()}
                                                                                    </Badge>
                                                                                    <Badge variant="outline" className="text-xs">
                                                                                        {announcement.category}
                                                                                    </Badge>
                                                                                </div>
                                                                                <h3 className="text-lg font-bold text-school-blue mb-2">
                                                                                    {announcement.title}
                                                                                </h3>
                                                                            </div>
                                                                            <div className="text-right text-sm text-muted-foreground">
                                                                                <div className="flex items-center gap-1 mb-1">
                                                                                    <Calendar className="h-3 w-3" />
                                                                                    <span>{announcement.date}</span>
                                                                                </div>
                                                                                <div className="flex items-center gap-1">
                                                                                    <Clock className="h-3 w-3" />
                                                                                    <span>{announcement.time}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-muted-foreground mb-4">{announcement.content}</p>
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                                                <span>By: {announcement.author}</span>
                                                                                <span>•</span>
                                                                                <span>Deadline: {announcement.deadline}</span>
                                                                            </div>
                                                                            <Link
                                                                                href={`/announcements/${announcement.id}`}
                                                                                className="inline-flex items-center text-school-blue hover:text-school-gold transition-colors font-medium"
                                                                            >
                                                                                Read more
                                                                                <ChevronRight className="ml-1 h-4 w-4" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                            </div>
                                        </div>

                                        {/* Pagination */}
                                        <div className="flex justify-center items-center gap-2 mt-12">
                                            <Button variant="outline" size="sm" disabled className="bg-transparent">
                                                Previous
                                            </Button>
                                            <Button size="sm" className="bg-school-blue text-white">
                                                1
                                            </Button>
                                            <Button variant="outline" size="sm" className="bg-transparent">
                                                2
                                            </Button>
                                            <Button variant="outline" size="sm" className="bg-transparent">
                                                3
                                            </Button>
                                            <Button variant="outline" size="sm" className="bg-transparent">
                                                Next
                                            </Button>
                                        </div>
                                    </TabsContent>

                                    {/* Other tab contents would be similar but filtered */}
                                    <TabsContent value="urgent" className="space-y-6">
                                        <div className="text-center py-12">
                                            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-school-blue mb-2">Urgent Announcements</h3>
                                            <p className="text-muted-foreground">Critical announcements requiring immediate attention.</p>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="important" className="space-y-6">
                                        <div className="text-center py-12">
                                            <Info className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-school-blue mb-2">Important Announcements</h3>
                                            <p className="text-muted-foreground">
                                                Important updates and information for the school community.
                                            </p>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="academic" className="space-y-6">
                                        <div className="text-center py-12">
                                            <BookOpen className="h-12 w-12 text-school-blue mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-school-blue mb-2">Academic Announcements</h3>
                                            <p className="text-muted-foreground">Academic-related announcements and updates.</p>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="events" className="space-y-6">
                                        <div className="text-center py-12">
                                            <Calendar className="h-12 w-12 text-school-blue mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-school-blue mb-2">Event Announcements</h3>
                                            <p className="text-muted-foreground">Upcoming events and activities.</p>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Quick Actions */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-school-blue">Quick Actions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <Button className="w-full justify-start bg-school-blue hover:bg-school-blue-dark text-white">
                                            <Bell className="h-4 w-4 mr-2" />
                                            Subscribe to Alerts
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start bg-transparent">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            View Calendar
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start bg-transparent">
                                            <FileText className="h-4 w-4 mr-2" />
                                            Download Forms
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Categories */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-school-blue">Categories</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        {[
                                            { name: "Academic", count: 12, color: "bg-blue-100 text-blue-800" },
                                            { name: "Registration", count: 8, color: "bg-green-100 text-green-800" },
                                            { name: "Events", count: 15, color: "bg-purple-100 text-purple-800" },
                                            { name: "Health", count: 6, color: "bg-red-100 text-red-800" },
                                            { name: "Policy", count: 4, color: "bg-orange-100 text-orange-800" },
                                            { name: "Facility", count: 3, color: "bg-indigo-100 text-indigo-800" },
                                        ].map((category, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${category.color.split(" ")[0]}`}></div>
                                                    <span className="text-school-blue hover:text-school-gold transition-colors">
                                                        {category.name}
                                                    </span>
                                                </div>
                                                <Badge variant="outline" className="text-xs">
                                                    {category.count}
                                                </Badge>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                {/* Upcoming Deadlines */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-school-blue flex items-center gap-2">
                                            <Clock className="h-5 w-5" />
                                            Upcoming Deadlines
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            {
                                                title: "Final Exam Period",
                                                date: "March 25, 2025",
                                                daysLeft: 7,
                                                urgent: true,
                                            },
                                            {
                                                title: "Enrollment Deadline",
                                                date: "April 30, 2025",
                                                daysLeft: 43,
                                                urgent: false,
                                            },
                                            {
                                                title: "Graduation Ceremony",
                                                date: "April 5, 2025",
                                                daysLeft: 18,
                                                urgent: false,
                                            },
                                        ].map((deadline, index) => (
                                            <div
                                                key={index}
                                                className={`p-3 rounded-lg border ${deadline.urgent ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"
                                                    }`}
                                            >
                                                <h4 className="font-medium text-school-blue text-sm mb-1">{deadline.title}</h4>
                                                <p className="text-xs text-muted-foreground mb-2">{deadline.date}</p>
                                                <div className={`text-xs font-medium ${deadline.urgent ? "text-red-600" : "text-orange-600"}`}>
                                                    {deadline.daysLeft} days left
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                {/* Contact Info */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-school-blue">Need Help?</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="text-sm">
                                            <p className="font-medium text-school-blue mb-1">Registrar's Office</p>
                                            <p className="text-muted-foreground">Phone: (062) 123-4568</p>
                                            <p className="text-muted-foreground">Email: registrar@siaynhs.edu.ph</p>
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-medium text-school-blue mb-1">Student Affairs</p>
                                            <p className="text-muted-foreground">Phone: (062) 123-4569</p>
                                            <p className="text-muted-foreground">Email: studentaffairs@siaynhs.edu.ph</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-school-blue text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-school-gold to-yellow-300 shadow-md">
                                    <div className="absolute inset-0 flex items-center justify-center text-school-blue font-bold text-lg">
                                        SNHS
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-school-gold">Siay National High School</span>
                                    <span className="text-xs text-white/70">Committed to Excellence in Education</span>
                                </div>
                            </div>
                            <p className="mb-4 text-white/80">
                                Stay informed with official announcements and important updates from our school administration.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-school-gold">Quick Links</h3>
                            <ul className="space-y-2 text-white/80">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/#about" },
                                    { name: "Academics", href: "/#academics" },
                                    { name: "Blog", href: "/blog" },
                                    { name: "Contact", href: "/#contact" },
                                ].map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="hover:text-school-gold hover:underline transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
                        <p>&copy; {new Date().getFullYear()} Siay National High School. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

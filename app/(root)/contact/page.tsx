import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeft,
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Users,
    BookOpen,
    HelpCircle,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Globe,
    Building,
    Car,
    Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
    const departments = [
        {
            name: "Principal's Office",
            head: "Dr. Maria Santos",
            phone: "(062) 123-4567",
            email: "principal@siaynhs.edu.ph",
            location: "Administration Building, 2nd Floor",
            hours: "Monday-Friday, 8:00 AM - 5:00 PM",
            icon: <Building className="h-6 w-6 text-school-blue" />,
        },
        {
            name: "Registrar's Office",
            head: "Ms. Patricia Reyes",
            phone: "(062) 123-4568",
            email: "registrar@siaynhs.edu.ph",
            location: "Administration Building, 1st Floor",
            hours: "Monday-Friday, 8:00 AM - 5:00 PM",
            icon: <BookOpen className="h-6 w-6 text-school-blue" />,
        },
        {
            name: "Student Affairs Office",
            head: "Mr. Carlos Mendoza",
            phone: "(062) 123-4569",
            email: "studentaffairs@siaynhs.edu.ph",
            location: "Student Center Building",
            hours: "Monday-Friday, 7:30 AM - 5:30 PM",
            icon: <Users className="h-6 w-6 text-school-blue" />,
        },
        {
            name: "Academic Office",
            head: "Dr. Elena Cruz",
            phone: "(062) 123-4570",
            email: "academic@siaynhs.edu.ph",
            location: "Administration Building, 2nd Floor",
            hours: "Monday-Friday, 8:00 AM - 5:00 PM",
            icon: <BookOpen className="h-6 w-6 text-school-blue" />,
        },
        {
            name: "Finance Office",
            head: "Ms. Rosa Martinez",
            phone: "(062) 123-4571",
            email: "finance@siaynhs.edu.ph",
            location: "Administration Building, 1st Floor",
            hours: "Monday-Friday, 8:00 AM - 4:00 PM",
            icon: <Building className="h-6 w-6 text-school-blue" />,
        },
        {
            name: "Guidance Office",
            head: "Ms. Ana Gonzales",
            phone: "(062) 123-4572",
            email: "guidance@siaynhs.edu.ph",
            location: "Student Center Building",
            hours: "Monday-Friday, 7:30 AM - 5:30 PM",
            icon: <MessageCircle className="h-6 w-6 text-school-blue" />,
        },
    ]

    const faqs = [
        {
            category: "Enrollment & Admission",
            questions: [
                {
                    question: "When is the enrollment period for the next school year?",
                    answer:
                        "Enrollment for School Year 2025-2026 is from March 20 to April 30, 2025. Online registration is available through our student portal, while walk-in registration is from March 25 to April 25, 2025.",
                },
                {
                    question: "What are the requirements for enrollment?",
                    answer:
                        "Required documents include: Original and photocopy of Report Card (Form 138), Certificate of Good Moral Character, Birth Certificate (NSO/PSA), 2 pieces of 2x2 ID pictures, Medical Certificate, and Barangay Certificate of Residency.",
                },
                {
                    question: "Is there an entrance examination?",
                    answer:
                        "Yes, we conduct entrance examinations for incoming Grade 7 and Grade 11 students. The exam covers basic subjects and is used for proper class placement. Schedule will be announced during enrollment period.",
                },
                {
                    question: "What grade levels and tracks do you offer?",
                    answer:
                        "We offer Junior High School (Grades 7-10) with Regular, Special Science, SPED, and IPED programs. For Senior High School (Grades 11-12), we have STEM, HUMSS, ABM, and TVL tracks.",
                },
                {
                    question: "Can transferees enroll mid-year?",
                    answer:
                        "Yes, we accept transferees during the school year, subject to available slots and completion of requirements. Transfer credentials must be submitted within 30 days of enrollment.",
                },
            ],
        },
        {
            category: "Academic Programs",
            questions: [
                {
                    question: "What is the K to 12 curriculum?",
                    answer:
                        "The K to 12 program includes Kindergarten, 6 years of elementary, 4 years of junior high school, and 2 years of senior high school. It aims to provide sufficient time for mastery of concepts and skills.",
                },
                {
                    question: "What are the available Senior High School tracks?",
                    answer:
                        "We offer four tracks: STEM (Science, Technology, Engineering, Mathematics), HUMSS (Humanities and Social Sciences), ABM (Accountancy, Business and Management), and TVL (Technical-Vocational-Livelihood) with various specializations.",
                },
                {
                    question: "Do you offer special programs?",
                    answer:
                        "Yes, we have Special Science Program for academically gifted students, Special Education Program (SPED) for learners with special needs, and Indigenous Peoples Education (IPED) program.",
                },
                {
                    question: "What extracurricular activities are available?",
                    answer:
                        "We offer various clubs and organizations including Science Club, Math Club, English Club, Arts Club, Sports teams (basketball, volleyball, badminton), Student Government, and community service groups.",
                },
                {
                    question: "How is student performance evaluated?",
                    answer:
                        "We use a competency-based grading system with quarterly assessments, performance tasks, and written works. The grading scale ranges from 75-100, with 75 as the minimum passing grade.",
                },
            ],
        },
        {
            category: "School Policies",
            questions: [
                {
                    question: "What is the school uniform policy?",
                    answer:
                        "Students must wear the prescribed school uniform daily. The uniform consists of white polo shirt with school logo, navy blue pants/skirt, black leather shoes, and white socks. PE uniform is required during PE classes.",
                },
                {
                    question: "What are the school hours?",
                    answer:
                        "Regular classes are from 7:30 AM to 4:30 PM, Monday to Friday. Morning flag ceremony starts at 7:15 AM. Students should arrive at least 15 minutes before classes begin.",
                },
                {
                    question: "What is the attendance policy?",
                    answer:
                        "Students must maintain at least 80% attendance rate. Excessive absences may result in academic probation. Medical certificates are required for absences due to illness exceeding 3 consecutive days.",
                },
                {
                    question: "Are mobile phones allowed in school?",
                    answer:
                        "Mobile phones are allowed but must be turned off or on silent mode during class hours. Use is permitted only during break times and lunch. The school is not responsible for lost or damaged devices.",
                },
                {
                    question: "What is the disciplinary policy?",
                    answer:
                        "We follow a progressive discipline system focusing on correction rather than punishment. Minor offenses result in counseling, while major offenses may lead to suspension or other appropriate sanctions as outlined in the Student Handbook.",
                },
            ],
        },
        {
            category: "Facilities & Services",
            questions: [
                {
                    question: "What facilities are available for students?",
                    answer:
                        "Our facilities include air-conditioned classrooms, science laboratories, computer laboratory, library, gymnasium, covered court, canteen, clinic, and audio-visual rooms. We also have Wi-Fi connectivity throughout the campus.",
                },
                {
                    question: "Is there a school clinic?",
                    answer:
                        "Yes, we have a fully equipped clinic with a registered nurse on duty during school hours. Basic medical services, first aid, and health monitoring are provided. Emergency cases are referred to nearby hospitals.",
                },
                {
                    question: "Do you provide transportation services?",
                    answer:
                        "The school does not provide transportation services, but we have designated areas for student pickup and drop-off. Public transportation and tricycles are readily available near the school.",
                },
                {
                    question: "Is there a school canteen?",
                    answer:
                        "Yes, our canteen serves nutritious and affordable meals, snacks, and beverages. We ensure food safety and hygiene standards are maintained. Students may also bring packed lunches from home.",
                },
                {
                    question: "What library services are available?",
                    answer:
                        "Our library offers a wide collection of books, periodicals, and digital resources. Students can borrow books, use computers for research, and access online databases. Study areas and group discussion rooms are also available.",
                },
            ],
        },
        {
            category: "Financial Matters",
            questions: [
                {
                    question: "What are the school fees?",
                    answer:
                        "As a public school, we do not charge tuition fees. However, there are minimal fees for miscellaneous expenses, laboratory fees, and other school activities. Detailed fee structure is provided during enrollment.",
                },
                {
                    question: "Are there scholarship programs available?",
                    answer:
                        "Yes, we offer various scholarship programs including academic scholarships for honor students, need-based scholarships for indigent families, and special scholarships for student leaders and athletes.",
                },
                {
                    question: "What payment methods are accepted?",
                    answer:
                        "Payments can be made through cash at the Finance Office, bank deposits to our official account, or through authorized payment centers. Online payment options are being developed.",
                },
                {
                    question: "Is there a payment plan for school fees?",
                    answer:
                        "Yes, we offer flexible payment schemes. Fees can be paid quarterly or through installment plans. Please coordinate with the Finance Office for specific arrangements.",
                },
                {
                    question: "What happens if payments are delayed?",
                    answer:
                        "Late payments may incur penalty charges. Students with unpaid fees may be restricted from taking examinations or receiving report cards. We encourage early communication with the Finance Office for payment concerns.",
                },
            ],
        },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-school-blue via-school-blue-dark to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Floating elements - hidden on mobile for performance */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                        <div className="absolute top-20 left-10 w-32 h-32 bg-school-gold/10 rounded-full blur-xl animate-pulse-slow"></div>
                        <div className="absolute bottom-20 right-20 w-24 h-24 bg-school-gold/20 rounded-lg rotate-45 animate-pulse-slow animate-delay-300"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 sm:mb-6"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <Badge className="mb-3 sm:mb-4 mx-2 bg-school-gold/20 text-school-gold hover:bg-school-gold/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm border border-school-gold/30">
                                <span className="flex items-center gap-2">
                                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                    Get in Touch
                                </span>
                            </Badge>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6 px-2">
                                Contact{" "}
                                <span className="bg-gradient-to-r from-school-gold to-yellow-300 bg-clip-text text-transparent">
                                    Us
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                                We're here to help! Reach out to us for inquiries, support, or to learn more about our programs and
                                services.
                            </p>

                            {/* Quick Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-school-gold/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-school-gold" />
                                        </div>
                                        <h3 className="font-bold mb-2 text-sm sm:text-base">Call Us</h3>
                                        <p className="text-white/80 text-xs sm:text-sm">(062) 123-4567</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-school-gold/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-school-gold" />
                                        </div>
                                        <h3 className="font-bold mb-2 text-sm sm:text-base">Email Us</h3>
                                        <p className="text-white/80 text-xs sm:text-sm break-all">info@siaynhs.edu.ph</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white sm:col-span-2 md:col-span-1">
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-school-gold/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-school-gold" />
                                        </div>
                                        <h3 className="font-bold mb-2 text-sm sm:text-base">Visit Us</h3>
                                        <p className="text-white/80 text-xs sm:text-sm">123 School Street, Siay</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 sm:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Tabs defaultValue="contact" className="max-w-6xl mx-auto">
                            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-auto p-1">
                                <TabsTrigger 
                                    value="contact" 
                                    className="flex items-center gap-2 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium"
                                >
                                    <Info className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span className="hidden xs:inline">Contact Information</span>
                                    <span className="xs:hidden">Info</span>
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="message" 
                                    className="flex items-center gap-2 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium"
                                >
                                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span className="hidden xs:inline">Send Message</span>
                                    <span className="xs:hidden">Message</span>
                                </TabsTrigger>
                            </TabsList>

                            {/* Contact Information Tab */}
                            <TabsContent value="contact" className="space-y-6 sm:space-y-8">
                                {/* School Location & Map */}
                                <div className="grid gap-6 sm:gap-8">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-school-blue mb-4 sm:mb-6">School Location</h2>
                                        <Card>
                                            <CardContent className="p-4 sm:p-6">
                                                <div className="space-y-4 sm:space-y-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="h-5 w-5 text-school-blue mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h3 className="font-medium text-school-blue mb-1">Address</h3>
                                                            <p className="text-muted-foreground text-sm sm:text-base">
                                                                123 School Street, Barangay Centro
                                                                <br />
                                                                Siay, Zamboanga Sibugay
                                                                <br />
                                                                Philippines 7039
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <Clock className="h-5 w-5 text-school-blue mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h3 className="font-medium text-school-blue mb-1">Office Hours</h3>
                                                            <p className="text-muted-foreground text-sm sm:text-base">
                                                                Monday - Friday: 7:00 AM - 5:00 PM
                                                                <br />
                                                                Saturday: 8:00 AM - 12:00 PM
                                                                <br />
                                                                Sunday: Closed
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <Car className="h-5 w-5 text-school-blue mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h3 className="font-medium text-school-blue mb-1">How to Get Here</h3>
                                                            <p className="text-muted-foreground text-sm sm:text-base">
                                                                The school is accessible by public transportation. Jeepneys and tricycles regularly pass
                                                                by the area. For private vehicles, parking is available within the school premises.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Google Maps */}
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-school-blue mb-4 sm:mb-6">Find Us on Map</h2>
                                        <Card className="p-0">
                                            <CardContent className="p-0">
                                                <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                                                    <iframe 
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7979771321166!2d122.86254327359808!3d7.704816008312355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251584df489e61f%3A0xf24435ea86a5446d!2sSiay%20National%20High%20School!5e0!3m2!1sen!2sph!4v1755832752156!5m2!1sen!2sph" 
                                                        width="100%" 
                                                        height="100%"
                                                        style={{ border: 0 }}
                                                        allowFullScreen
                                                        loading="lazy" 
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        title="Siay National High School Location"
                                                        className="absolute inset-0 w-full h-full"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Department Contacts */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-school-blue mb-4 sm:mb-6">Department Contacts</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        {departments.map((dept, index) => (
                                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                                <CardHeader className="pb-3 sm:pb-4">
                                                    <CardTitle className="flex items-center gap-3 text-school-blue">
                                                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-school-blue/10 flex items-center justify-center flex-shrink-0">
                                                            {dept.icon}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h3 className="text-base sm:text-lg leading-tight">{dept.name}</h3>
                                                            <p className="text-xs sm:text-sm font-normal text-muted-foreground break-words">{dept.head}</p>
                                                        </div>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-3 pt-0">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Phone className="h-4 w-4 text-school-blue flex-shrink-0" />
                                                        <span className="break-all">{dept.phone}</span>
                                                    </div>
                                                    <div className="flex items-start gap-2 text-sm">
                                                        <Mail className="h-4 w-4 text-school-blue mt-0.5 flex-shrink-0" />
                                                        <span className="break-all">{dept.email}</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-school-blue mb-4 sm:mb-6">Follow Us</h2>
                                    <Card>
                                        <CardContent className="p-4 sm:p-6">
                                            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                                                Stay connected with us on social media for the latest updates, news, and announcements.
                                            </p>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                                                    <Facebook className="h-4 w-4 mr-1 sm:mr-2" />
                                                    <span className="hidden xs:inline">Facebook</span>
                                                    <span className="xs:hidden">FB</span>
                                                </Button>
                                                <Button className="bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                                                    <Twitter className="h-4 w-4 mr-1 sm:mr-2" />
                                                    <span className="hidden xs:inline">Twitter</span>
                                                    <span className="xs:hidden">TW</span>
                                                </Button>
                                                <Button className="bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                                                    <Instagram className="h-4 w-4 mr-1 sm:mr-2" />
                                                    <span className="hidden xs:inline">Instagram</span>
                                                    <span className="xs:hidden">IG</span>
                                                </Button>
                                                <Button className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                                                    <Youtube className="h-4 w-4 mr-1 sm:mr-2" />
                                                    <span className="hidden xs:inline">YouTube</span>
                                                    <span className="xs:hidden">YT</span>
                                                </Button>
                                                <Button variant="outline" className="bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2">
                                                    <Globe className="h-4 w-4 mr-1 sm:mr-2" />
                                                    <span className="hidden xs:inline">Website</span>
                                                    <span className="xs:hidden">Web</span>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* Send Message Tab */}
                            <TabsContent value="message" className="space-y-6 sm:space-y-8">
                                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                                    {/* Contact Form */}
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-school-blue mb-4 sm:mb-6">Send Us a Message</h2>
                                        <Card>
                                            <CardContent className="p-4 sm:p-6">
                                                <form className="space-y-4 sm:space-y-6">
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label htmlFor="firstName" className="block text-sm font-medium text-school-blue mb-2">
                                                                First Name *
                                                            </label>
                                                            <Input
                                                                id="firstName"
                                                                type="text"
                                                                placeholder="Your first name"
                                                                className="focus:ring-school-blue/20 focus:border-school-blue text-sm sm:text-base"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="lastName" className="block text-sm font-medium text-school-blue mb-2">
                                                                Last Name *
                                                            </label>
                                                            <Input
                                                                id="lastName"
                                                                type="text"
                                                                placeholder="Your last name"
                                                                className="focus:ring-school-blue/20 focus:border-school-blue text-sm sm:text-base"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-school-blue mb-2">
                                                            Email Address *
                                                        </label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            placeholder="your.email@example.com"
                                                            className="focus:ring-school-blue/20 focus:border-school-blue text-sm sm:text-base"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="phone" className="block text-sm font-medium text-school-blue mb-2">
                                                            Phone Number
                                                        </label>
                                                        <Input
                                                            id="phone"
                                                            type="tel"
                                                            placeholder="+63 912 345 6789"
                                                            className="focus:ring-school-blue/20 focus:border-school-blue text-sm sm:text-base"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="category" className="block text-sm font-medium text-school-blue mb-2">
                                                            Inquiry Category *
                                                        </label>
                                                        <select 
                                                            id="category"
                                                            className="w-full px-3 py-2 border border-input bg-background text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue/20 focus:border-school-blue"
                                                            required
                                                        >
                                                            <option value="">Select a category</option>
                                                            <option value="enrollment">Enrollment & Admission</option>
                                                            <option value="academic">Academic Programs</option>
                                                            <option value="student-affairs">Student Affairs</option>
                                                            <option value="finance">Financial Matters</option>
                                                            <option value="facilities">Facilities & Services</option>
                                                            <option value="general">General Inquiry</option>
                                                            <option value="complaint">Complaint/Concern</option>
                                                            <option value="suggestion">Suggestion/Feedback</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="subject" className="block text-sm font-medium text-school-blue mb-2">
                                                            Subject *
                                                        </label>
                                                        <Input
                                                            id="subject"
                                                            type="text"
                                                            placeholder="Brief subject of your message"
                                                            className="focus:ring-school-blue/20 focus:border-school-blue text-sm sm:text-base"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="message" className="block text-sm font-medium text-school-blue mb-2">
                                                            Message *
                                                        </label>
                                                        <Textarea
                                                            id="message"
                                                            rows={4}
                                                            placeholder="Please provide details about your inquiry..."
                                                            className="focus:ring-school-blue/20 focus:border-school-blue resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <input
                                                            type="checkbox"
                                                            id="privacy"
                                                            className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded flex-shrink-0"
                                                            required
                                                        />
                                                        <label htmlFor="privacy" className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            I agree to the processing of my personal data in accordance with the school's privacy
                                                            policy and consent to receive communications regarding my inquiry.
                                                        </label>
                                                    </div>

                                                    <Button className="w-full bg-school-blue hover:bg-school-blue-dark text-white py-3 sm:py-4 text-sm sm:text-base">
                                                        <Send className="h-4 w-4 mr-2" />
                                                        Send Message
                                                    </Button>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Contact Information Sidebar */}
                                    <div className="space-y-4 sm:space-y-6">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-school-blue mb-3 sm:mb-4">Get in Touch</h3>
                                            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                                                We're here to help! Whether you have questions about enrollment, academic programs, or any other
                                                concerns, don't hesitate to reach out to us.
                                            </p>
                                        </div>

                                        <Card>
                                            <CardHeader className="pb-3 sm:pb-4">
                                                <CardTitle className="text-school-blue text-base sm:text-lg">Response Time</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-3 pt-0">
                                                <div className="flex items-start gap-3">
                                                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-xs sm:text-sm">Email inquiries: Within 24 hours</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-xs sm:text-sm">Phone calls: Immediate during office hours</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-xs sm:text-sm">Complex inquiries: 2-3 business days</span>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader className="pb-3 sm:pb-4">
                                                <CardTitle className="text-school-blue text-base sm:text-lg">Emergency Contacts</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-3 pt-0">
                                                <div>
                                                    <h4 className="font-medium text-school-blue text-sm sm:text-base">School Emergency Hotline</h4>
                                                    <p className="text-xs sm:text-sm text-muted-foreground">(062) 123-4567 (24/7)</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-school-blue text-sm sm:text-base">Principal's Mobile</h4>
                                                    <p className="text-xs sm:text-sm text-muted-foreground">+63 912 345 6789</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-school-blue text-sm sm:text-base">Security Office</h4>
                                                    <p className="text-xs sm:text-sm text-muted-foreground">(062) 123-4580</p>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader className="pb-3 sm:pb-4">
                                                <CardTitle className="text-school-blue text-base sm:text-lg">Visit Our Office</CardTitle>
                                            </CardHeader>
                                            <CardContent className="pt-0">
                                                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                                                    For urgent matters or detailed discussions, we encourage you to visit our office during
                                                    regular hours.
                                                </p>
                                                <Button variant="outline" className="w-full bg-transparent text-sm sm:text-base py-2 sm:py-3">
                                                    <MapPin className="h-4 w-4 mr-2" />
                                                    Get Directions
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>
        </div>
    )
}

import Link from "next/link"
import {
    ArrowLeft,
    HelpCircle,
    Phone,
    BookOpen,
    Users,
    GraduationCap,
    Building,
    DollarSign,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
    const faqs = [
        {
            category: "Enrollment & Admission",
            icon: <GraduationCap className="h-6 w-6" />,
            color: "bg-blue-500",
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
            icon: <BookOpen className="h-6 w-6" />,
            color: "bg-green-500",
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
            icon: <Users className="h-6 w-6" />,
            color: "bg-purple-500",
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
            icon: <Building className="h-6 w-6" />,
            color: "bg-orange-500",
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
            icon: <DollarSign className="h-6 w-6" />,
            color: "bg-emerald-500",
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
                {/* Enhanced Hero Section */}
                <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-school-blue via-school-blue-dark to-slate-900 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                    </div>

                    {/* Animated Background Elements - Hide on mobile for performance */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                        <div className="absolute top-20 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-school-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute top-40 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse-slow animate-delay-300"></div>
                        <div className="absolute bottom-20 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-school-gold/20 rounded-lg rotate-45 animate-pulse-slow animate-delay-500"></div>
                        <div className="absolute bottom-40 right-1/3 w-24 sm:w-28 h-24 sm:h-28 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>
                        
                        {/* Question mark decorations */}
                        <div className="absolute top-32 left-1/4 text-school-gold/20 text-4xl sm:text-6xl font-bold animate-pulse-slow">?</div>
                        <div className="absolute bottom-32 right-1/4 text-white/10 text-3xl sm:text-4xl font-bold animate-pulse-slow animate-delay-300">?</div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-8 sm:mb-12">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 sm:mb-8 group"
                                >
                                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                    Back to Home
                                </Link>

                                <Badge className="mb-4 sm:mb-6 mx-2 bg-school-gold/20 text-school-gold hover:bg-school-gold/30 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium backdrop-blur-sm border border-school-gold/30">
                                    <span className="flex items-center gap-2">
                                        <HelpCircle className="h-4 w-4" />
                                        Help Center
                                    </span>
                                </Badge>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                                    Frequently Asked{" "}
                                    <span className="bg-gradient-to-r from-school-gold to-yellow-300 bg-clip-text text-transparent">
                                        Questions
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12 px-4">
                                    Find quick answers to common questions about Siay National High School. From enrollment 
                                    procedures to academic programs, we&apos;ve got you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="py-12 sm:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8 sm:space-y-12">
                                {faqs.map((category, categoryIndex) => (
                                    <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                                        <div className="flex flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${category.color} text-white flex items-center justify-center flex-shrink-0`}>
                                                {category.icon}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                                            </div>
                                        </div>
                                        
                                        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                                            {category.questions.map((faq, faqIndex) => (
                                                <AccordionItem
                                                    key={faqIndex}
                                                    value={`${categoryIndex}-${faqIndex}`}
                                                    className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <AccordionTrigger className="text-left hover:no-underline hover:text-school-gold transition-colors py-4 sm:py-6">
                                                        <span className="font-medium text-gray-900 dark:text-white pr-4 text-sm sm:text-base">{faq.question}</span>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Support Section */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-lg">
                                <HelpCircle className="h-12 w-12 sm:h-16 sm:w-16 text-school-blue mx-auto mb-4 sm:mb-6" />
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Still Need Help?</h3>
                                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                    Can&apos;t find the answer you&apos;re looking for? Our support team is ready to assist you with any questions or concerns.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                                    <Link href="/contact">
                                        <Button size="lg" variant="outline" className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 w-full sm:w-auto">
                                            <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                            <span className="text-sm sm:text-base">Contact Us Now</span>
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
                                    Response time: Usually within 24 hours
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

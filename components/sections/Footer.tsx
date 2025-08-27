import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#003366] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#FFCC00] to-[#FFA500] shadow-md">
                                <Image src="/images/snhs-logo.jfif"
                                    alt="Siay National High School Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#FFCC00]">Siay National High School</span>
                                <span className="text-xs text-white/70">Committed to Excellence in Education</span>
                            </div>
                        </div>
                        <p className="mb-4 text-white/80">
                            Providing quality education and holistic development to prepare students for future success and
                            meaningful contribution to society.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/80 hover:text-[#FFCC00] transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-[#FFCC00] transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-[#FFCC00] transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-[#FFCC00] transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-[#FFCC00]">Contact Us</h3>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FFCC00]" />
                                <span>123 School Street, Siay, Zamboanga Sibugay, Philippines</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 flex-shrink-0 text-[#FFCC00]" />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 flex-shrink-0 text-[#FFCC00]" />
                                <span>info@siaynhs.edu.ph</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-[#FFCC00] mb-2">Office Hours</h4>
                            <p className="text-sm text-white/80">Monday to Friday: 7:00 AM - 5:00 PM</p>
                            <p className="text-sm text-white/80">Saturday: 8:00 AM - 12:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-[#FFCC00]">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2 text-white/80">
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Admission
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Academic Calendar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Programs Offered
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Student Handbook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    Alumni Network
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    School Facilities
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#FFCC00] hover:underline transition-colors">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/20 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/60">
                            &copy; {new Date().getFullYear()} Siay National High School. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#" className="text-sm text-white/60 hover:text-[#FFCC00] hover:underline transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-white/60 hover:text-[#FFCC00] hover:underline transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-sm text-white/60 hover:text-[#FFCC00] hover:underline transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

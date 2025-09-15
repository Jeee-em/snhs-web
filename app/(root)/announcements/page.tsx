"use client"

import React, { useState } from "react"
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
    ChevronRight,
    Pin,
    Mail,
    Phone,
    Download,
    Share2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { client } from "@/sanity/lib/client"
import { PortableText, type PortableTextBlock } from '@portabletext/react'

// GROQ Queries
const ANNOUNCEMENTS_QUERY = `*[
    _type == "announcement" && 
    isActive == true &&
    (!defined(expiresAt) || expiresAt > now())
] | order(isPinned desc, priority desc, publishedAt desc) {
    _id,
    title,
    slug,
    priority,
    category,
    excerpt,
    content,
    targetAudience,
    publishedAt,
    expiresAt,
    isPinned,
    contactInfo,
    "attachments": attachments[]{
        "filename": asset->originalFilename,
        "url": asset->url,
        "size": asset->size,
        "mimeType": asset->mimeType
    }
}`

// Types
interface Attachment {
    filename: string
    url: string
    size: number
    mimeType: string
}

interface Announcement {
    _id: string
    title: string
    slug: { current: string }
    priority: 'low' | 'normal' | 'high' | 'urgent'
    category: string
    excerpt: string
    content: PortableTextBlock[] // PortableText content
    targetAudience: string[]
    publishedAt: string
    expiresAt?: string
    isPinned: boolean
    contactInfo?: {
        name: string
        email: string
        phone: string
    }
    attachments?: Attachment[]
}

export default function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([])
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Fetch announcements on component mount
    React.useEffect(() => {
        async function fetchAnnouncements() {
            try {
                const data = await client.fetch(ANNOUNCEMENTS_QUERY)
                setAnnouncements(data)
            } catch (error) {
                console.error('Error fetching announcements:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchAnnouncements()
    }, [])

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "urgent":
                return <AlertTriangle className="h-5 w-5 text-red-500" />
            case "high":
                return <Info className="h-5 w-5 text-orange-500" />
            case "normal":
                return <CheckCircle className="h-5 w-5 text-blue-500" />
            default:
                return <Bell className="h-5 w-5 text-gray-500" />
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case "urgent":
                return "bg-red-100 text-red-800 border-red-200"
            case "high":
                return "bg-orange-100 text-orange-800 border-orange-200"
            case "normal":
                return "bg-blue-100 text-blue-800 border-blue-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "academic":
                return <BookOpen className="h-6 w-6" />
            case "administrative":
                return <FileText className="h-6 w-6" />
            case "event":
                return <Award className="h-6 w-6" />
            case "emergency":
                return <AlertTriangle className="h-6 w-6" />
            default:
                return <Bell className="h-6 w-6" />
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    const formatTargetAudience = (audience: string[]) => {
        if (!audience || audience.length === 0) return ''
        return audience.map(item =>
            item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
        ).join(', ')
    }

    const renderAnnouncementCard = (announcement: Announcement, isPinned = false) => (
        <Card key={announcement._id} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm ${isPinned ? 'ring-2 ring-red-400/50 shadow-red-100' : 'hover:shadow-blue-100'}`}>
            <CardContent className="p-4 sm:p-6">
                {/* Priority Banner for Pinned/High Priority */}
                {(isPinned || announcement.priority === 'urgent') && (
                    <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white rounded-bl-lg ${
                        isPinned ? 'bg-red-500' : 'bg-orange-500'
                    }`}>
                        {isPinned ? 'PINNED' : 'URGENT'}
                    </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Icon and Priority Badge */}
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center transition-colors ${
                            announcement.priority === "urgent" ? "bg-red-100 text-red-600 group-hover:bg-red-200" :
                            announcement.priority === "high" ? "bg-orange-100 text-orange-600 group-hover:bg-orange-200" :
                            announcement.priority === "normal" ? "bg-blue-100 text-blue-600 group-hover:bg-blue-200" :
                            "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}>
                            {getCategoryIcon(announcement.category)}
                        </div>
                        
                        {/* Mobile-friendly badges */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:hidden">
                            <Badge className={`text-xs px-2 py-0.5 ${getTypeColor(announcement.priority)}`}>
                                {announcement.priority.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="text-xs px-2 py-0.5 bg-white/50">
                                {announcement.category}
                            </Badge>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        {/* Header with badges (desktop) */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                            <div className="flex-1">
                                {/* Desktop badges */}
                                <div className="hidden sm:flex items-center gap-2 mb-2">
                                    <Badge className={`text-xs px-2 py-1 ${getTypeColor(announcement.priority)}`}>
                                        {announcement.priority.toUpperCase()}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs px-2 py-1 bg-white/50">
                                        {announcement.category}
                                    </Badge>
                                    {isPinned && <Pin className="h-4 w-4 text-red-500" />}
                                </div>
                                
                                <h3 className="text-lg sm:text-xl font-bold text-school-blue mb-2 leading-tight line-clamp-2 group-hover:text-school-gold transition-colors">
                                    {announcement.title}
                                </h3>
                            </div>
                            
                            {/* Date/Time - Compact on mobile */}
                            <div className="flex sm:flex-col items-start gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground bg-gray-50 rounded-lg p-2 sm:p-3 min-w-fit">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span className="whitespace-nowrap">{formatDate(announcement.publishedAt)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span className="whitespace-nowrap">{formatTime(announcement.publishedAt)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
                            {announcement.excerpt}
                        </p>

                        {/* Target Audience - Compact */}
                        {announcement.targetAudience && announcement.targetAudience.length > 0 && (
                            <div className="mb-4">
                                <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    <Users className="h-3 w-3" />
                                    {formatTargetAudience(announcement.targetAudience)}
                                </div>
                            </div>
                        )}

                        {/* Footer */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                {announcement.contactInfo?.name && (
                                    <span className="bg-gray-100 px-2 py-1 rounded">
                                        By: {announcement.contactInfo.name}
                                    </span>
                                )}
                                {announcement.expiresAt && (
                                    <span className="bg-red-50 text-red-600 px-2 py-1 rounded">
                                        Deadline: {formatDate(announcement.expiresAt)}
                                    </span>
                                )}
                            </div>
                            
                            <Button
                                onClick={() => setSelectedAnnouncement(announcement)}
                                style={{ backgroundColor: 'rgb(7 89 133)', color: 'white' }}
                                className="inline-flex items-center justify-center sm:justify-start gap-1 hover:opacity-90 px-4 py-2 rounded-lg transition-all text-sm font-medium group/link shadow-md hover:shadow-lg border-0"
                            >
                                Read more
                                <ChevronRight className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    const renderAnnouncementsSection = (filteredAnnouncements: Announcement[], title?: string, showPinned = true) => {
        const pinnedAnnouncements = filteredAnnouncements.filter(a => a.isPinned)
        const regularAnnouncements = filteredAnnouncements.filter(a => !a.isPinned)

        if (filteredAnnouncements.length === 0) {
            return (
                <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-school-blue mb-2">No Announcements</h3>
                    <p className="text-muted-foreground">
                        {title ? `No ${title.toLowerCase()} announcements to display.` : 'No announcements found for this filter.'}
                    </p>
                </div>
            )
        }

        return (
            <div className="space-y-6 mt-8 sm:mt-6">
                {showPinned && pinnedAnnouncements.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-lg sm:text-xl font-bold text-school-blue flex items-center gap-2 mt-4 sm:mt-0">
                            <Pin className="h-4 w-4 sm:h-5 sm:w-5" />
                            Pinned {title || 'Announcements'}
                        </h2>
                        {pinnedAnnouncements.map(announcement => renderAnnouncementCard(announcement, true))}
                    </div>
                )}

                {regularAnnouncements.length > 0 && (
                    <div className={pinnedAnnouncements.length > 0 ? "border-t border-gray-200 pt-8" : ""}>
                        {pinnedAnnouncements.length > 0 && (
                            <h2 className="text-xl font-bold text-school-blue mb-6">
                                {title ? `All ${title}` : 'All Announcements'}
                            </h2>
                        )}
                        <div className="space-y-6">
                            {regularAnnouncements.map(announcement => renderAnnouncementCard(announcement, false))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    // Loading state
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-school-blue"></div>
                    <p className="mt-4 text-gray-600">Loading announcements...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Announcement Detail Modal */}
            <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
                <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[95vh] bg-white border-0 shadow-2xl p-0 overflow-hidden mx-4 sm:mx-auto">
                    {selectedAnnouncement && (
                        <div className="flex flex-col h-full max-h-[95vh]">
                            {/* Header - Fixed */}
                            <DialogHeader className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className={`flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                                        selectedAnnouncement.priority === "urgent" ? "bg-red-100 text-red-600" :
                                        selectedAnnouncement.priority === "high" ? "bg-orange-100 text-orange-600" :
                                        selectedAnnouncement.priority === "normal" ? "bg-blue-100 text-blue-600" :
                                        "bg-gray-100 text-gray-600"
                                    }`}>
                                        <div className="scale-100 sm:scale-125">
                                            {getCategoryIcon(selectedAnnouncement.category)}
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                            <Badge className={`text-xs px-2 sm:px-3 py-1 sm:py-1.5 font-semibold ${getTypeColor(selectedAnnouncement.priority)}`}>
                                                {getTypeIcon(selectedAnnouncement.priority)}
                                                <span className="ml-1">{selectedAnnouncement.priority.toUpperCase()}</span>
                                            </Badge>
                                            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white border-gray-300">
                                                {selectedAnnouncement.category}
                                            </Badge>
                                            {selectedAnnouncement.isPinned && (
                                                <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 sm:px-3 py-1 sm:py-1.5 font-semibold">
                                                    <Pin className="h-3 w-3 mr-1" />
                                                    PINNED
                                                </Badge>
                                            )}
                                        </div>
                                        
                                        <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight mb-1 sm:mb-2 pr-2">
                                            {selectedAnnouncement.title}
                                        </DialogTitle>
                                        
                                        {/* Short Description */}
                                        {selectedAnnouncement.excerpt && (
                                            <DialogDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {selectedAnnouncement.excerpt}
                                            </DialogDescription>
                                        )}
                                        
                                        {/* Metadata */}
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span>{formatDate(selectedAnnouncement.publishedAt)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span>{formatTime(selectedAnnouncement.publishedAt)}</span>
                                            </div>
                                            {selectedAnnouncement.targetAudience && selectedAnnouncement.targetAudience.length > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                                                    <span>{formatTargetAudience(selectedAnnouncement.targetAudience)}</span>
                                                </div>
                                            )}
                                            {selectedAnnouncement.expiresAt && (
                                                <div className="flex items-center gap-1 text-red-600">
                                                    <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                                                    <span className="hidden sm:inline">Expires </span>
                                                    <span className="sm:hidden">Exp </span>
                                                    <span>{formatDate(selectedAnnouncement.expiresAt)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            {/* Content Area - Scrollable with proper overflow handling */}
                            <div className="flex-1 overflow-y-auto min-h-0">
                                <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
                                    {/* Full Content */}
                                    <div className="space-y-3 sm:space-y-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-2">
                                            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                                            Full Details
                                        </h3>
                                        
                                        <div className="prose prose-sm sm:prose-base max-w-none">
                                            {selectedAnnouncement.content && selectedAnnouncement.content.length > 0 ? (
                                                <PortableText 
                                                    value={selectedAnnouncement.content}
                                                    components={{
                                                        block: {
                                                            normal: ({children}) => <p className="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">{children}</p>,
                                                            h1: ({children}) => <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4 sm:mt-6 mb-3 sm:mb-4 border-b border-gray-200 pb-2">{children}</h1>,
                                                            h2: ({children}) => <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4 sm:mt-5 mb-2 sm:mb-3">{children}</h2>,
                                                            h3: ({children}) => <h3 className="text-base sm:text-lg font-medium text-gray-900 mt-3 sm:mt-4 mb-2">{children}</h3>,
                                                            blockquote: ({children}) => (
                                                                <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-3 sm:pl-4 py-2 sm:py-3 my-3 sm:my-4 italic text-blue-900 rounded-r-lg text-sm sm:text-base">
                                                                    {children}
                                                                </blockquote>
                                                            ),
                                                        },
                                                        list: {
                                                            bullet: ({children}) => <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2">{children}</ul>,
                                                            number: ({children}) => <ol className="list-decimal pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2">{children}</ol>,
                                                        },
                                                        listItem: {
                                                            bullet: ({children}) => <li className="text-gray-700 text-sm sm:text-base">{children}</li>,
                                                            number: ({children}) => <li className="text-gray-700 text-sm sm:text-base">{children}</li>,
                                                        },
                                                        marks: {
                                                            strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                                            em: ({children}) => <em className="italic text-gray-800">{children}</em>,
                                                            link: ({children, value}) => (
                                                                <a 
                                                                    href={value.href} 
                                                                    className="text-blue-600 hover:text-blue-800 underline font-medium break-all"
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {children}
                                                                </a>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            ) : (
                                                <div className="text-center py-6 sm:py-8 text-gray-500">
                                                    <FileText className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3 text-gray-300" />
                                                    <p className="text-sm sm:text-base">No detailed content available.</p>
                                                    <p className="text-xs sm:text-sm mt-1">Please check the short description above.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    {selectedAnnouncement.contactInfo && (
                                        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-100">
                                            <h4 className="font-semibold text-blue-900 flex items-center gap-2 mb-3 text-sm sm:text-base">
                                                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                                                Contact Information
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                                                    <span className="font-medium break-words">{selectedAnnouncement.contactInfo.name}</span>
                                                </div>
                                                {selectedAnnouncement.contactInfo.email && (
                                                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                                                        <a 
                                                            href={`mailto:${selectedAnnouncement.contactInfo.email}`}
                                                            className="text-blue-700 hover:text-blue-900 hover:underline break-all"
                                                        >
                                                            {selectedAnnouncement.contactInfo.email}
                                                        </a>
                                                    </div>
                                                )}
                                                {selectedAnnouncement.contactInfo.phone && (
                                                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                                                        <a 
                                                            href={`tel:${selectedAnnouncement.contactInfo.phone}`}
                                                            className="text-blue-700 hover:text-blue-900 hover:underline"
                                                        >
                                                            {selectedAnnouncement.contactInfo.phone}
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Attachments */}
                                    {selectedAnnouncement.attachments && selectedAnnouncement.attachments.length > 0 && (
                                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3 text-sm sm:text-base">
                                                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                                                Attachments ({selectedAnnouncement.attachments.length})
                                            </h4>
                                            <div className="space-y-2">
                                                {selectedAnnouncement.attachments.map((attachment, index) => (
                                                    <a
                                                        key={index}
                                                        href={attachment.url}
                                                        download={attachment.filename || `Document_${index + 1}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                                                        onClick={(e) => {
                                                            // For cross-origin files, we need to handle download differently
                                                            e.preventDefault();
                                                            const link = document.createElement('a');
                                                            link.href = attachment.url;
                                                            link.download = attachment.filename || `Document_${index + 1}`;
                                                            link.target = '_blank';
                                                            document.body.appendChild(link);
                                                            link.click();
                                                            document.body.removeChild(link);
                                                        }}
                                                    >
                                                        <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0" />
                                                        <span className="flex-1 text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-700 truncate">
                                                            {attachment.filename || `Document ${index + 1}`}
                                                        </span>
                                                        <Download className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer - Fixed */}
                            <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-gray-50">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-gray-300 hover:bg-gray-100 text-xs sm:text-sm py-2 sm:py-2.5"
                                        onClick={() => {
                                            const url = `${window.location.origin}/announcements/${selectedAnnouncement.slug?.current || selectedAnnouncement._id}`
                                            navigator.clipboard.writeText(url)
                                        }}
                                    >
                                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                        Copy Link
                                    </Button>
                                    <Button
                                        className="flex-1 text-white text-xs sm:text-sm py-2 sm:py-2.5"
                                        style={{ backgroundColor: 'rgb(7 89 133)' }}
                                        onClick={() => setSelectedAnnouncement(null)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

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
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-8 sm:py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        {/* Filter Tabs */}
                        <Tabs defaultValue="all" className="mb-8">
                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full sm:w-auto gap-0.5 sm:gap-1">
                                        <TabsTrigger value="all" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
                                            All ({announcements.length})
                                        </TabsTrigger>
                                        <TabsTrigger value="low" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
                                            Low ({announcements.filter(a => a.priority === 'low').length})
                                        </TabsTrigger>
                                        <TabsTrigger value="normal" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
                                            Normal ({announcements.filter(a => a.priority === 'normal').length})
                                        </TabsTrigger>
                                        <TabsTrigger value="high" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
                                            High ({announcements.filter(a => a.priority === 'high').length})
                                        </TabsTrigger>
                                        <TabsTrigger value="urgent" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
                                            Urgent ({announcements.filter(a => a.priority === 'urgent').length})
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                            </div>

                            <TabsContent value="all" className="space-y-4 sm:space-y-6">
                                {renderAnnouncementsSection(announcements)}
                            </TabsContent>

                            <TabsContent value="low" className="space-y-4 sm:space-y-6">
                                {renderAnnouncementsSection(
                                    announcements.filter(a => a.priority === 'low'),
                                    'Low Priority Announcements'
                                )}
                            </TabsContent>

                            <TabsContent value="normal" className="space-y-4 sm:space-y-6">
                                {renderAnnouncementsSection(
                                    announcements.filter(a => a.priority === 'normal'),
                                    'Normal Priority Announcements'
                                )}
                            </TabsContent>

                            {/* High Priority Filter */}
                            <TabsContent value="high" className="space-y-4 sm:space-y-6">
                                {renderAnnouncementsSection(
                                    announcements.filter(a => a.priority === 'high'),
                                    'High Priority Announcements'
                                )}
                            </TabsContent>

                            {/* Urgent Priority Filter */}
                            <TabsContent value="urgent" className="space-y-4 sm:space-y-6">
                                {renderAnnouncementsSection(
                                    announcements.filter(a => a.priority === 'urgent'),
                                    'Urgent Announcements'
                                )}
                            </TabsContent>
                                </Tabs>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, GraduationCap, Users, AlertTriangle, Bell } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { ANNOUNCEMENTS_QUERY } from "@/lib/queries"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function AnnouncementsSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await client.fetch(ANNOUNCEMENTS_QUERY)
        setAnnouncements(data || [])
      } catch (error) {
        console.error('Error fetching announcements:', error)
        setAnnouncements([])
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  // Helper function to get appropriate icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]" />
      case 'administrative':
        return <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]" />
      case 'event':
        return <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]" />
      case 'emergency':
        return <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]" />
      default:
        return <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCC00]" />
    }
  }

  // Helper function to format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Helper function to format time
  const formatTime = (dateString: string | null) => {
    if (!dateString) return 'No time';
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  // Helper function to format target audience
  const formatTargetAudience = (audience: string[]) => {
    if (!audience || audience.length === 0) return '';
    
    // Format each audience item
    const formatted = audience.map(item => {
      // Remove any trailing commas and replace hyphens with spaces
      const cleanItem = item.replace(/,+$/, '').trim();
      return cleanItem
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    });
    
    // Return formatted string
    if (formatted.length === 1) {
      return formatted[0];
    } else if (formatted.length === 2) {
      return formatted.join(', ');
    } else {
      return `${formatted.slice(0, 2).join(', ')} +${formatted.length - 2} more`;
    }
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className={`w-full mx-auto ${
          announcements.length <= 2 
            ? 'max-w-sm sm:max-w-md' 
            : 'max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl'
        }`}>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-8 sm:h-10 w-1.5 bg-[#003366] rounded-full"></div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#003366]">Important Announcements</h2>
          </div>
          <Card className="bg-[#003366] text-white">
            <CardHeader className="px-4 py-0 sm:px-6 sm:py-0">
              <CardTitle className="text-base sm:text-lg text-[#FFCC00]">Upcoming Events</CardTitle>
              <CardDescription className="text-sm text-white/70">Stay updated with our school calendar</CardDescription>
            </CardHeader>
            <CardContent className={`space-y-3 sm:space-y-4 p-4 sm:px-6 pt-0 ${
              announcements.length <= 2 ? 'min-h-[200px]' : 'min-h-[300px]'
            }`}>
              {loading ? (
                <div className="text-center py-6 sm:py-8 text-white/70">
                  <Bell className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white/30" />
                  <p className="text-sm">Loading announcements...</p>
                </div>
              ) : announcements && announcements.length > 0 ? (
                announcements.map((announcement) => (
                  <div key={announcement._id} className="flex gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(announcement.category || 'general')}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-medium leading-tight pr-2">{announcement.title}</h4>
                        {announcement.isPinned && (
                          <Badge className="bg-[#FFCC00] text-[#003366] text-xs px-1.5 py-0.5 flex-shrink-0">
                            Pinned
                          </Badge>
                        )}
                      </div>
                      {announcement.excerpt && (
                        <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-tight">
                          {announcement.excerpt}
                        </p>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-white/70 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{formatDate(announcement.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{formatTime(announcement.publishedAt)}</span>
                        </div>
                      </div>
                      {announcement.targetAudience && announcement.targetAudience.length > 0 && (
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="h-3 w-3 text-white/50 flex-shrink-0" />
                          <span className="text-xs text-white/50 truncate">
                            {formatTargetAudience(announcement.targetAudience)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 sm:py-8 text-white/70">
                  <Bell className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white/30" />
                  <p className="text-sm">No announcements at this time.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-3 sm:pt-4 p-4 sm:px-6">
              <Button asChild className="w-full text-sm sm:text-base bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90 py-2 sm:py-3">
                <Link href="/announcements">View All Announcements</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

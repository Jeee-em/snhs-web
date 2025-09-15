'use client'

import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Calendar,
    Eye,
    Share2,
    User,
    ArrowRight,
    Star,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_POST_QUERY } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const FeaturedPost = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [featuredPost, setFeaturedPost] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFeaturedPost = async () => {
            try {
                const data = await client.fetch(FEATURED_POST_QUERY)
                setFeaturedPost(data)
            } catch (error) {
                console.error('Error fetching featured post:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFeaturedPost()
    }, [])

    // Helper function to format date
    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'No date'
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Helper function to format view count
    const formatViews = (views: number) => {
        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}k`
        }
        return views?.toString() || '0'
    }

    if (loading) {
        return (
            <div className="p-4 sm:p-6 md:p-8">
                <Card className="overflow-hidden animate-pulse h-full p-0 border-0">
                    <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] h-full w-full bg-gray-200"></div>
                </Card>
            </div>
        )
    }

    if (!featuredPost) {
        return null
    }
    return (
        <div className="p-4 sm:p-6 md:py-8 md:px-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full p-0 border-0">
                <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[400px] h-full w-full">
                    {featuredPost.mainImage && (
                        <Image
                            src={urlFor(featuredPost.mainImage)
                                .width(800)
                                .height(400)
                                .quality(90)
                                .format('webp')
                                .url()}
                            alt={featuredPost.mainImage.alt || featuredPost.title || 'Featured post image'}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <Badge className="bg-[#FFCC00] text-[#003366] font-semibold text-xs sm:text-sm">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Featured
                        </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3 flex-wrap">
                            {featuredPost.categories && featuredPost.categories.length > 0 && (
                                <Badge className="bg-[#003366] text-[#FFCC00] text-xs sm:text-sm">
                                    {featuredPost.categories[0].title}
                                </Badge>
                            )}
                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="hidden sm:inline">{featuredPost.author?.name || 'Anonymous'}</span>
                                <span className="sm:hidden">{(featuredPost.author?.name || 'Anonymous').split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="hidden sm:inline">{formatDate(featuredPost.publishedAt)}</span>
                                <span className="sm:hidden">
                                    {featuredPost.publishedAt 
                                        ? new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                                        : 'No date'
                                    }
                                </span>
                            </div>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                            {featuredPost.title}
                        </h2>
                        {featuredPost.body && featuredPost.body.length > 0 && (
                            <p className="text-white/80 mb-3 sm:mb-4 max-w-3xl line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                                {featuredPost.body
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .filter((block: any) => block._type === 'block' && block.children)
                                    .slice(0, 1)
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .map((block: any) =>
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        block.children?.map((child: any) => child.text || '').join('') || ''
                                    )
                                    .join(' ')
                                    .substring(0, 200)}...
                            </p>
                        )}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>{formatViews(featuredPost.views || 0)} views</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-white hover:text-[#FFCC00] p-0 h-auto text-xs sm:text-sm"
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                void (navigator.share?.({
                                                    title: featuredPost.title,
                                                    url: `${window.location.origin}/blog/${featuredPost.slug?.current}`
                                                }) || navigator.clipboard?.writeText(`${window.location.origin}/blog/${featuredPost.slug?.current}`))
                                            }
                                        }}
                                    >
                                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                        Share
                                    </Button>
                                </div>
                            </div>
                            <Button 
                                asChild
                                className="bg-[#FFCC00] text-[#003366] hover:bg-[#FFCC00]/90 text-xs sm:text-sm px-3 sm:px-4 py-2 w-full sm:w-auto"
                            >
                                <Link href={`/blog/${featuredPost.slug?.current || '#'}`} className="flex items-center justify-center gap-2">
                                    Read More
                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default FeaturedPost;

'use client'

import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { ArrowRight, Calendar, Eye, User, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { POSTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

const PostCard = (props: POSTS_QUERYResult[0]) => {
    const { title, author, mainImage, publishedAt, categories, views } = props

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'No date';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatViews = (viewCount: number | null | undefined) => {
        if (!viewCount) return '0';
        if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(1)}k`;
        }
        return viewCount.toString();
    };
    return (
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 p-0 relative">
            <div className="relative h-30 sm:h-40 overflow-hidden">
                {mainImage && (
                    <Image
                        src={urlFor(mainImage).width(800).height(400).quality(90).format('webp').url()}
                        alt={mainImage.alt || title || 'Post image'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={false}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-2">
                    {categories && categories.length > 0 && (
                        <Badge className="bg-[#003366] text-white text-xs px-2 py-1">
                            {categories[0]?.title || 'Uncategorized'}
                        </Badge>
                    )}
                </div>
            </div>
            <CardContent className="p-2 sm:p-3 flex flex-col pb-12 h-[200px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-muted-foreground mb-1">
                    <div className="flex items-center gap-1">
                        <User className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{author?.name || 'Anonymous'}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{formatDate(publishedAt)}</span>
                    </div>
                </div>
                <Link href={`/blog/${props.slug?.current || '#'}`} className="flex items-center gap-1">
                    <h3 className="text-sm font-bold text-[#003366] mb-2 line-clamp-2 group-hover:text-[#FFCC00] transition-colors">
                        {title || 'Untitled Post'}
                    </h3>
                </Link>
                <p className="text-xs text-muted-foreground mb-10 line-clamp-2">
                    {props.body && props.body.length > 0
                        ? props.body
                            .filter((block): block is Extract<typeof block, { _type: 'block' }> =>
                                block._type === 'block' && 'children' in block
                            )
                            .slice(0, 1)
                            .map(block =>
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                block.children?.map((child: any) => child.text).join('') || ''
                            ).join(' ').substring(0, 80) + '...'
                        : 'No content available...'
                    }
                </p>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
                        <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3 flex-shrink-0" />
                            <span>{formatViews(views)}</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-muted-foreground hover:text-[#003366] flex-shrink-0"
                            onClick={() => {
                                if (typeof window !== 'undefined') {
                                    void (navigator.share?.({
                                        title: title || 'Blog Post',
                                        url: `${window.location.origin}/blog/${props.slug?.current}`
                                    }) || navigator.clipboard?.writeText(`${window.location.origin}/blog/${props.slug?.current}`))
                                }
                            }}
                        >
                            <Share2 className="h-3 w-3" />
                        </Button>
                    </div>
                    <Button
                        variant="link"
                        className="p-0 h-auto text-xs text-[#003366] hover:text-[#FFCC00] flex-shrink-0"
                        asChild
                    >
                        <Link href={`/blog/${props.slug?.current || '#'}`} className="flex items-center gap-1">
                            <span className="hidden sm:inline">Read more</span>
                            <span className="sm:hidden">Read</span>
                            <ArrowRight className="h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default PostCard;

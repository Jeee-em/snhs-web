import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Eye, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './ui/badge'

const PopularPosts = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-school-blue flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Trending This Week
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                        {[
                        {
                            title: "SNHS Celebrates 58th Founding Anniversary",
                            views: 3456,
                            image: "/placeholder.svg?height=60&width=60&text=Anniversary",
                            category: "Events",
                        },
                        {
                            title: "New Scholarship Program Launched for Deserving Students",
                            views: 2834,
                            image: "/placeholder.svg?height=60&width=60&text=Scholarship",
                            category: "Academic",
                        },
                        {
                            title: "Basketball Team Wins Regional Championship",
                            views: 2623,
                            image: "/placeholder.svg?height=60&width=60&text=Basketball",
                            category: "Sports",
                        },
                        {
                            title: "Science Fair Winners Advance to Nationals",
                            views: 2156,
                            image: "/placeholder.svg?height=60&width=60&text=Science",
                            category: "Achievement",
                        },
                        ].map((post, index) => (
                        <div
                            key={index}
                            className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            </div>
                            <div className="flex-1">
                            <Badge className="mb-1 text-xs" variant="outline">
                                {post.category}
                            </Badge>
                            <h4 className="font-medium text-school-blue text-sm mb-1 line-clamp-2">{post.title}</h4>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Eye className="h-3 w-3" />
                                <span>{post.views.toLocaleString()} views</span>
                            </div>
                            </div>
                        </div>
                        ))}
            </CardContent>
        </Card>
    )
}

export default PopularPosts
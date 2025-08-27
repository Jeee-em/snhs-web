import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { sanityFetch } from "@/sanity/lib/live"
import { HIGHLIGHT_POSTS_QUERY } from "@/lib/queries"
import PostCard from "../PostCard"

export default async function HighlightsSection() {
    const { data: posts } = await sanityFetch({ query: HIGHLIGHT_POSTS_QUERY });
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-10 w-1.5 bg-[#003366] rounded-full"></div>
                    <h2 className="text-2xl font-bold text-[#003366]">School Highlights</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post._id} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

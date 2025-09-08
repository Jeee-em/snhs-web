'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
    TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination } from "@/components/ui/pagination"
import HeroBlog from "@/components/sections/HeroBlog"
import { 
    POSTS_PAGINATED_QUERY, 
    POSTS_BY_CATEGORY_PAGINATED_QUERY, 
    POSTS_COUNT_QUERY,
    POSTS_BY_CATEGORY_COUNT_QUERY,
    POPULAR_POSTS_QUERY,
    POPULAR_POSTS_BY_CATEGORY_QUERY,
    POPULAR_POSTS_COUNT_QUERY,
    POPULAR_POSTS_BY_CATEGORY_COUNT_QUERY,
    CATEGORIES_QUERY 
} from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import PostCard from "@/components/PostCard"
import FeaturedPost from "@/components/FeaturedPost"

const POSTS_PER_PAGE = 6

// Category mapping for tab values to Sanity category titles
const CATEGORY_MAPPING = {
    'all': null,
    'news': 'School News',
    'achievements': 'School Achievement',
    'events': 'School Event',
    'academic': 'School Academics'
} as const

type TabValue = keyof typeof CATEGORY_MAPPING

export default function BlogPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [posts, setPosts] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPosts, setTotalPosts] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)

    const currentTab = (searchParams.get('tab') as TabValue) || 'all'
    const page = parseInt(searchParams.get('page') || '1')
    const searchQuery = searchParams.get('search') || ''
    const sortBy = searchParams.get('sort') || 'recent' // 'recent' or 'popular'
    const categoryTitle = CATEGORY_MAPPING[currentTab]

    // Update current page when URL changes
    useEffect(() => {
        setCurrentPage(page)
    }, [page])

    // Fetch posts based on current tab, page, and search query
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                // If there's a search query, use search API
                if (searchQuery.trim()) {
                    const searchParams = new URLSearchParams({
                        q: searchQuery,
                        limit: POSTS_PER_PAGE.toString()
                    })
                    
                    if (categoryTitle) {
                        searchParams.append('category', categoryTitle)
                    }
                    
                    const response = await fetch(`/api/search?${searchParams}`)
                    const data = await response.json()
                    
                    if (response.ok) {
                        setPosts(data.results || [])
                        setTotalPosts(data.count || 0)
                        setTotalPages(Math.ceil((data.count || 0) / POSTS_PER_PAGE))
                    } else {
                        console.error('Search error:', data.error)
                        setPosts([])
                        setTotalPosts(0)
                        setTotalPages(0)
                    }
                } else {
                    // Regular pagination logic
                    const start = (currentPage - 1) * POSTS_PER_PAGE
                    const end = start + POSTS_PER_PAGE

                    // Determine which queries to use based on sort preference
                    const isPopularSort = sortBy === 'popular'
                    
                    if (categoryTitle) {
                        // Fetch posts by category with pagination and sorting
                        const postsQuery = isPopularSort ? POPULAR_POSTS_BY_CATEGORY_QUERY : POSTS_BY_CATEGORY_PAGINATED_QUERY
                        const countQuery = isPopularSort ? POPULAR_POSTS_BY_CATEGORY_COUNT_QUERY : POSTS_BY_CATEGORY_COUNT_QUERY
                        
                        const [postsData, totalCount] = await Promise.all([
                            client.fetch(postsQuery, { 
                                categoryTitle, 
                                start, 
                                end 
                            }),
                            client.fetch(countQuery, { categoryTitle })
                        ])
                        setPosts(postsData || [])
                        setTotalPosts(totalCount || 0)
                        setTotalPages(Math.ceil((totalCount || 0) / POSTS_PER_PAGE))
                    } else {
                        // Fetch all posts with pagination and sorting
                        const postsQuery = isPopularSort ? POPULAR_POSTS_QUERY : POSTS_PAGINATED_QUERY
                        const countQuery = isPopularSort ? POPULAR_POSTS_COUNT_QUERY : POSTS_COUNT_QUERY
                        
                        const [postsData, totalCount] = await Promise.all([
                            client.fetch(postsQuery, { start, end }),
                            client.fetch(countQuery)
                        ])
                        setPosts(postsData || [])
                        setTotalPosts(totalCount || 0)
                        setTotalPages(Math.ceil((totalCount || 0) / POSTS_PER_PAGE))
                    }
                }
            } catch (error) {
                console.error('Error fetching posts:', error)
                setPosts([])
                setTotalPosts(0)
                setTotalPages(0)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [categoryTitle, currentPage, searchQuery, sortBy])

    // Fetch categories on mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await client.fetch(CATEGORIES_QUERY)
                setCategories(data || [])
            } catch (error) {
                console.error('Error fetching categories:', error)
                setCategories([])
            }
        }

        fetchCategories()
    }, [])

    // Handle tab change
    const handleTabChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === 'all') {
            params.delete('tab')
        } else {
            params.set('tab', value)
        }
        params.set('page', '1') // Reset to page 1 when changing tabs
        router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`)
    }

    // Handle page change
    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        router.push(`/blog?${params.toString()}`)
    }

    // Handle sort change
    const handleSortChange = (sort: 'recent' | 'popular') => {
        const params = new URLSearchParams(searchParams.toString())
        if (sort === 'popular') {
            params.set('sort', 'popular')
        } else {
            params.delete('sort')
        }
        params.set('page', '1') // Reset to page 1 when changing sort
        router.push(`/blog?${params.toString()}`)
    }
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <HeroBlog />
                <FeaturedPost />         
                {/* Main Content */}
                <section className="py-4 sm:py-6 lg:py-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="w-full">
                            {/* Main Content Area */}
                            <div className="w-full">
                                {/* Filter Tabs */}
                                <Tabs value={currentTab} onValueChange={handleTabChange} className="mb-6 sm:mb-8">
                                    {/* Search Results Header */}
                                    {searchQuery && (
                                        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-blue-900">
                                                        Search Results for "{searchQuery}"
                                                    </h3>
                                                    <p className="text-sm text-blue-700">
                                                        Found {totalPosts} result{totalPosts !== 1 ? 's' : ''}
                                                        {categoryTitle && ` in ${categoryTitle}`}
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        const params = new URLSearchParams(searchParams.toString())
                                                        params.delete('search')
                                                        params.delete('page')
                                                        router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`)
                                                    }}
                                                    className="text-blue-700 border-blue-300 hover:bg-blue-100"
                                                >
                                                    Clear Search
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                                        {/* Mobile: Stacked tabs in 2 rows */}
                                        <div className="w-full sm:w-auto">
                                            <TabsList className="grid grid-cols-2 sm:hidden w-full gap-1 h-auto p-1">
                                                <TabsTrigger value="all" className="text-xs py-2">All Posts</TabsTrigger>
                                                <TabsTrigger value="news" className="text-xs py-2">News</TabsTrigger>
                                            </TabsList>
                                            <TabsList className="grid grid-cols-3 sm:hidden w-full gap-1 h-auto p-1 mt-2">
                                                <TabsTrigger value="achievements" className="text-xs py-2">Achievements</TabsTrigger>
                                                <TabsTrigger value="events" className="text-xs py-2">Events</TabsTrigger>
                                                <TabsTrigger value="academic" className="text-xs py-2">Academic</TabsTrigger>
                                            </TabsList>
                                            
                                            {/* Desktop: Single row */}
                                            <TabsList className="hidden sm:grid sm:grid-cols-5 w-full sm:w-auto gap-1">
                                                <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
                                                <TabsTrigger value="news" className="text-sm">News</TabsTrigger>
                                                <TabsTrigger value="achievements" className="text-sm">Achievements</TabsTrigger>
                                                <TabsTrigger value="events" className="text-sm">Events</TabsTrigger>
                                                <TabsTrigger value="academic" className="text-sm">Academic</TabsTrigger>
                                            </TabsList>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
                                            <Button 
                                                variant={sortBy === 'popular' ? "default" : "outline"} 
                                                size="sm" 
                                                className={`
                                                    transition-all duration-300 ease-in-out transform hover:scale-105
                                                    ${sortBy === 'popular' 
                                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl border-0' 
                                                        : 'bg-transparent hover:bg-gray-50 border-gray-200 hover:border-orange-300'
                                                    } 
                                                    flex-1 sm:flex-none text-xs sm:text-sm relative overflow-hidden
                                                `}
                                                onClick={() => handleSortChange(sortBy === 'popular' ? 'recent' : 'popular')}
                                            >
                                                <TrendingUp className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 transition-transform duration-300 ${sortBy === 'popular' ? 'animate-pulse' : ''}`} />
                                                <span className="hidden sm:inline font-medium">
                                                    {sortBy === 'popular' ? 'Most Popular' : 'Popular'}
                                                </span>
                                                <span className="sm:hidden font-medium">
                                                    {sortBy === 'popular' ? '🔥' : '📈'}
                                                </span>
                                                {sortBy === 'popular' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-30" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Posts Content - Always show content for current tab */}
                                    <div className="space-y-6 sm:space-y-8">
                                        {/* Loading State */}
                                        {loading ? (
                                            <div className="text-center py-8 sm:py-12">
                                                <h3 className="text-lg sm:text-xl font-semibold text-[#003366] mb-2">
                                                    Loading posts...
                                                </h3>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Posts Grid */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                                    {posts && posts.length > 0 ? (
                                                        posts.map((post: any) => (
                                                            <PostCard key={post._id} {...post} />
                                                        ))
                                                    ) : (
                                                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-8 sm:py-12">
                                                            <h3 className="text-lg sm:text-xl font-semibold text-[#003366] mb-2">
                                                                {searchQuery ? 'No search results found' : 'No posts found'}
                                                            </h3>
                                                            <p className="text-muted-foreground text-sm sm:text-base px-4">
                                                                {searchQuery 
                                                                    ? `No posts match "${searchQuery}". Try different keywords or browse categories.`
                                                                    : currentTab === 'all'
                                                                        ? 'No blog posts are available at the moment.'
                                                                        : `No posts found in the ${CATEGORY_MAPPING[currentTab] || currentTab} category.`
                                                                }
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Pagination */}
                                                {posts && posts.length > 0 && totalPages > 1 && (
                                                    <>
                                                        <Pagination
                                                            currentPage={currentPage}
                                                            totalPages={totalPages}
                                                            onPageChange={handlePageChange}
                                                        />
                                                        
                                                        <div className="text-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4 px-4">
                                                            Showing {((currentPage - 1) * POSTS_PER_PAGE) + 1}-{Math.min(currentPage * POSTS_PER_PAGE, totalPosts)} of {totalPosts} posts
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

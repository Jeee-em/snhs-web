"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ArrowLeft, FileText, Search } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import SearchResults from '../SearchResults'
import { useRouter } from 'next/navigation'

const HeroBlog = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const searchContainerRef = useRef<HTMLDivElement>(null)

    // Debounced search effect
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchQuery.trim().length >= 2) {
                performSearch(searchQuery.trim())
            } else {
                setSearchResults([])
                setShowResults(false)
            }
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchQuery])

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowResults(false)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowResults(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscapeKey)
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [])

    const performSearch = async (query: string) => {
        setIsSearching(true)
        setShowResults(true)
        
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=8`)
            const data = await response.json()
            
            if (response.ok) {
                setSearchResults(data.results || [])
                // Keep results showing even if empty, so user sees "no results" message
                setShowResults(true)
            } else {
                console.error('Search error:', data.error)
                setSearchResults([])
                setShowResults(false)
            }
        } catch (error) {
            console.error('Search failed:', error)
            setSearchResults([])
            setShowResults(false)
        } finally {
            setIsSearching(false)
        }
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Navigate to blog page with search query
            setShowResults(false)
            router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleInputFocus = () => {
        if (searchQuery.trim().length >= 2 && searchResults.length > 0) {
            setShowResults(true)
        }
    }

    const handleCloseResults = () => {
        setShowResults(false)
    }
    return (
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-school-blue via-school-blue-dark to-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-school-gold/10 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-school-gold/20 rounded-lg rotate-45 animate-pulse-slow animate-delay-300"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                    <Badge className="mb-3 mx-2 sm:mb-4 bg-school-gold/20 text-school-gold hover:bg-school-gold/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm border border-school-gold/30">
                        <span className="flex items-center gap-2">
                        <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                            News & Blog
                        </span>
                    </Badge>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6 px-2">
                        School{" "}
                        <span className="bg-gradient-to-r from-school-gold to-yellow-300 bg-clip-text text-transparent">
                        News & Updates
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Stay informed with the latest news, achievements, announcements, and stories from our vibrant school
                        community.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto px-4" ref={searchContainerRef}>
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-white/60" />
                            <Input
                                type="text"
                                placeholder="Search posts..."
                                value={searchQuery}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="w-full pl-10 sm:pl-12 pr-20 sm:pr-24 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:border-school-gold focus:ring-school-gold/20 rounded-xl text-sm sm:text-base"
                            />
                            <Button 
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-school-gold text-school-blue hover:bg-school-gold/90 px-3 sm:px-6 text-xs sm:text-sm"
                            >
                                Search
                            </Button>
                            
                            {/* Search Results Dropdown */}
                            {showResults && (
                                <SearchResults
                                    results={searchResults}
                                    query={searchQuery}
                                    isLoading={isSearching}
                                    onClose={handleCloseResults}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBlog
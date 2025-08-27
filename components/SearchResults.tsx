"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Eye, ArrowRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { urlFor } from '@/sanity/lib/image'

interface SearchResult {
  _id: string
  title?: string
  slug?: { current?: string }
  publishedAt?: string
  mainImage?: any
  excerpt?: string  // This will now be properly populated
  views?: number
  categories?: Array<{ title?: string }>
  author?: { name?: string }
  body?: any[]  // Raw portable text content
}

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  isLoading: boolean
  onClose: () => void
}

export function SearchResults({ results, query, isLoading, onClose }: SearchResultsProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No date'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    } catch (error) {
      return 'Invalid date'
    }
  }

  const formatViews = (views: number | undefined) => {
    if (!views || views === 0) return '0'
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`
    }
    return views.toString()
  }

  const highlightText = (text: string, query: string) => {
    if (!text || !query) return text || ''
    
    try {
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      const parts = text.split(regex)
      
      return parts.map((part, index) => 
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
            {part}
          </mark>
        ) : part
      )
    } catch (error) {
      // If regex fails, return original text
      return text
    }
  }

  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
        <div className="p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-school-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Searching...</p>
        </div>
      </div>
    )
  }

  if (results.length === 0 && query) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-2">No results found for "{query}"</p>
          <p className="text-sm text-gray-500">Try different keywords or check your spelling</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Subtle backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
        style={{ background: 'transparent' }}
      />
      
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </Button>
        </div>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {results.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug?.current || post._id}`}
            onClick={onClose}
            className="block p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          >
            <div className="flex gap-4">
              {/* Post Image */}
              {post.mainImage && (
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage)
                      .width(80)
                      .height(80)
                      .quality(80)
                      .format('webp')
                      .url()}
                    alt={post.title || 'Blog post image'}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              )}
              
              {/* Post Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {post.categories && post.categories.length > 0 && post.categories[0]?.title && (
                    <Badge className="bg-school-blue/10 text-school-blue text-xs">
                      {post.categories[0].title}
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 line-clamp-1 mb-2">
                  {highlightText(post.title || 'Untitled', query)}
                </h3>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {highlightText(post.excerpt || '', query)}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author?.name || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.views && post.views > 0 && (
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{formatViews(post.views)} views</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-shrink-0 flex items-center">
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {results.length >= 10 && (
        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onClose}
            className="text-school-blue border-school-blue hover:bg-school-blue hover:text-white"
          >
            View all results in blog
          </Button>
        </div>
      )}
      </div>
    </>
  )
}

export default SearchResults

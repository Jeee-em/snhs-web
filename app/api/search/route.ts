import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

// Type definitions for Sanity portable text
interface PortableTextSpan {
  _type: 'span';
  text?: string;
  marks?: string[];
  _key: string;
}

interface PortableTextBlock {
  _type: 'block';
  children?: PortableTextSpan[];
  style?: string;
  _key: string;
}

type PortableTextContent = PortableTextBlock | { _type: string; [key: string]: unknown };

// Helper function to extract plain text from Sanity portable text
function extractTextFromPortableText(portableText: PortableTextContent[]): string {
  if (!portableText || !Array.isArray(portableText)) {
    return ''
  }
  
  return portableText
    .filter((block): block is PortableTextBlock => block._type === 'block' && 'children' in block)
    .map((block) =>
      block.children
        ?.filter((child): child is PortableTextSpan => child._type === 'span')
        ?.map((child) => child.text || '')
        ?.join('') || ''
    )
    .join(' ')
    .trim()
}

// Helper function to create excerpt from text
function createExcerpt(text: string, maxLength: number = 150): string {
  if (!text) return ''
  
  if (text.length <= maxLength) {
    return text
  }
  
  // Find the last complete word within the limit
  const truncated = text.substring(0, maxLength)
  const lastSpaceIndex = truncated.lastIndexOf(' ')
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...'
  }
  
  return truncated + '...'
}

// GROQ query for searching posts
const SEARCH_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && (
  title match $searchTerm ||
  pt::text(body) match $searchTerm ||
  categories[]->title match $searchTerm ||
  author->name match $searchTerm
)] | order(publishedAt desc) [0...$limit] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  isFeatured,
  views,
  body,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        const category = searchParams.get('category')
        const limit = parseInt(searchParams.get('limit') || '10')

        // Validate search query
        if (!query || query.trim().length < 2) {
            return NextResponse.json(
                { error: 'Search query must be at least 2 characters long' },
                { status: 400 }
            )
        }

        // Prepare search term for GROQ (add wildcards for partial matching)
        const searchTerm = `${query.trim()}*`

        // Build GROQ query parameters
        const params: {
            searchTerm: string;
            limit: number;
            categoryTitle?: string;
        } = {
            searchTerm,
            limit
        }

        // If category filter is provided, modify the query
        let finalQuery = SEARCH_POSTS_QUERY
        if (category && category !== 'all') {
            finalQuery = `*[_type == "post" && defined(slug.current) && (
        title match $searchTerm ||
        pt::text(body) match $searchTerm ||
        categories[]->title match $searchTerm ||
        author->name match $searchTerm
      ) && $categoryTitle in categories[]->title] | order(publishedAt desc) [0...$limit] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage,
        isFeatured,
        views,
        body,
        "categories": coalesce(
          categories[]->{
            _id,
            slug,
            title
          },
          []
        ),
        author->{
          name,
          image
        }
      }`
            params.categoryTitle = category
        }

        // Execute search query
        const results = await client.fetch(finalQuery, params)

        // Process results to add excerpts
        const processedResults = results.map((post: {
            body: PortableTextContent[];
            [key: string]: unknown;
        }) => ({
            ...post,
            excerpt: createExcerpt(extractTextFromPortableText(post.body), 150)
        }))

        // Return results with metadata
        return NextResponse.json({
            results: processedResults,
            query: query.trim(),
            category: category || 'all',
            count: processedResults.length,
            hasMore: processedResults.length === limit
        })

    } catch (error) {
        console.error('Search API error:', error)
        return NextResponse.json(
            { error: 'Failed to perform search' },
            { status: 500 }
        )
    }
}

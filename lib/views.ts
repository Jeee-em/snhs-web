import { client } from '@/sanity/lib/client'

/**
 * Check if a view should be counted (simple client-side rate limiting)
 * This prevents rapid repeated views from the same session
 * @param postId - The post ID
 * @returns boolean - Whether the view should be counted
 */
export function shouldCountView(postId: string): boolean {
    if (typeof window === 'undefined') {
        console.log('shouldCountView: Server-side, not counting view')
        return false
    }

    const storageKey = `post_view_${postId}`
    const lastViewed = localStorage.getItem(storageKey)
    const now = Date.now()

    console.log('shouldCountView: Checking for postId:', postId)
    console.log('shouldCountView: Last viewed timestamp:', lastViewed)
    console.log('shouldCountView: Current timestamp:', now)

    // Only count view if it's been more than 30 minutes since last view
    if (lastViewed && now - parseInt(lastViewed) < 30 * 60 * 1000) {
        console.log('shouldCountView: Rate limited (last view too recent)')
        return false
    }

    return true
}

/**
 * Mark that we've viewed this post (store timestamp)
 * @param postId - The post ID
 */
function markAsViewed(postId: string): void {
    if (typeof window === 'undefined') return
    
    const storageKey = `post_view_${postId}`
    const now = Date.now()
    localStorage.setItem(storageKey, now.toString())
    console.log('markAsViewed: Stored new timestamp for', postId)
}

/**
 * Increment the view count for a specific post with enhanced security
 * @param postId - The _id of the post to increment views for
 * @returns Promise<boolean> - Whether the increment was successful
 */
export async function incrementPostViews(postId: string): Promise<boolean> {
    if (!postId || typeof postId !== 'string') {
        console.log('incrementPostViews: Invalid postId provided')
        return false
    }

    if (!shouldCountView(postId)) {
        console.log('incrementPostViews: View not counted due to rate limiting')
        return false
    }

    try {
        console.log('incrementPostViews: Starting for postId:', postId)

        const response = await fetch('/api/increment-views', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId }),
            // Add timeout to prevent hanging requests
            signal: AbortSignal.timeout(10000), // 10 seconds
        })

        const result = await response.json()

        if (!response.ok) {
            // Handle specific error cases
            if (response.status === 429) {
                console.log('incrementPostViews: Rate limited by server, marking as viewed anyway')
                markAsViewed(postId)
                return false
            }
            
            if (response.status === 404) {
                console.log('incrementPostViews: Post not found')
                return false
            }
            
            if (response.status === 400) {
                console.log('incrementPostViews: Bad request - invalid post ID')
                return false
            }
            
            throw new Error(result.error || `HTTP ${response.status}`)
        }

        if (result.success) {
            markAsViewed(postId)
            console.log('incrementPostViews: Success, views now:', result.views)
            return true
        }

        return false

    } catch (error) {
        // Handle different types of errors gracefully
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                console.log('incrementPostViews: Request timed out')
            } else if (error.message.includes('fetch') || error.message.includes('network')) {
                console.log('incrementPostViews: Network error, will retry later')
            } else {
                console.log('incrementPostViews: Error:', error.message)
            }
        }
        
        // Don't mark as viewed on error so it can retry later
        return false
    }
}

/**
 * Get the most viewed posts
 * @param limit - Number of posts to return (default: 5)
 * @returns Promise<any[]>
 */
export async function getMostViewedPosts(limit: number = 5): Promise<any[]> {
    try {
        // Validate limit parameter
        const safeLimit = Math.min(Math.max(1, Math.floor(limit)), 50) // Between 1 and 50
        
        const posts = await client.fetch(`
      *[_type == "post" && defined(slug.current) && views > 0]
      | order(views desc)[0...${safeLimit}]{
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        views,
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
      }
    `)

        return posts || []
    } catch (error) {
        console.error('Error fetching most viewed posts:', error)
        return []
    }
}

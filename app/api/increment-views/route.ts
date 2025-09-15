import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

// Simple in-memory rate limiting (for production, use Redis or database)
const viewCache = new Map<string, number>()
const RATE_LIMIT_WINDOW = 30 * 60 * 1000 // 30 minutes in milliseconds
const MAX_REQUESTS_PER_IP = 10 // Max 10 view increments per 30 minutes per IP

// Validate Sanity document ID format
function isValidSanityId(id: string): boolean {
    // Sanity IDs are typically alphanumeric with hyphens, 36 characters for UUIDs
    return /^[a-zA-Z0-9\-_]{1,200}$/.test(id)
}

// Get client IP address
function getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')

    if (forwarded) {
        return forwarded.split(',')[0].trim()
    }

    if (realIP) {
        return realIP
    }

    return 'unknown'
}

// Check rate limit for IP
function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const key = `${ip}_${Math.floor(now / RATE_LIMIT_WINDOW)}`

    const currentCount = viewCache.get(key) || 0
    if (currentCount >= MAX_REQUESTS_PER_IP) {
        return false
    }

    viewCache.set(key, currentCount + 1)

    // Clean up old entries (simple cleanup)
    if (viewCache.size > 1000) {
        const cutoff = Math.floor(now / RATE_LIMIT_WINDOW) - 1
        for (const [cacheKey] of viewCache) {
            if (cacheKey.endsWith(`_${cutoff}`) || cacheKey.endsWith(`_${cutoff - 1}`)) {
                viewCache.delete(cacheKey)
            }
        }
    }

    return true
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const clientIP = getClientIP(request)

        // Check rate limit
        if (!checkRateLimit(clientIP)) {
            console.log(`API: Rate limited IP ${clientIP}`)
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }

        const { postId } = await request.json()

        // Validate input
        if (!postId || typeof postId !== 'string') {
            return NextResponse.json({ error: 'Valid post ID is required' }, { status: 400 })
        }

        // Validate Sanity ID format
        if (!isValidSanityId(postId)) {
            return NextResponse.json({ error: 'Invalid post ID format' }, { status: 400 })
        }

        console.log(`API: incrementing views for postId: ${postId} from IP: ${clientIP}`)

        // Get current view count (with timeout)
        const post = await Promise.race([
            writeClient.fetch(
                `*[_type == "post" && _id == $postId][0]{ views }`,
                { postId }
            ),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Sanity query timeout')), 5000)
            )
        ])

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 })
        }

        const currentViews = post.views || 0
        const newViews = currentViews + 1

        // Sanity check: prevent unreasonably high view counts (potential abuse)
        if (newViews > 1000000) {
            console.log(`API: Suspicious view count for post ${postId}: ${newViews}`)
            return NextResponse.json({ error: 'View count limit reached' }, { status: 429 })
        }

        console.log(`API: Updating views from ${currentViews} to ${newViews}`)

        console.log('API: Successfully updated views')

        return NextResponse.json({
            success: true,
            views: newViews,
            // Don't expose internal postId in response for security
        })

    } catch (error) {
        console.error('API: Error incrementing post views:', error)

        // Don't expose internal error details
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// Only allow POST requests
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    // Apply security headers to API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
        const response = NextResponse.next()

        // Add security headers
        response.headers.set('X-Frame-Options', 'DENY')
        response.headers.set('X-Content-Type-Options', 'nosniff')
        response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
        response.headers.set('X-XSS-Protection', '1; mode=block')

        // Specific rate limiting headers for increment-views endpoint
        if (request.nextUrl.pathname === '/api/increment-views') {
            // Only allow POST requests
            if (request.method !== 'POST') {
                return new NextResponse('Method Not Allowed', { status: 405 })
            }

            // Add CORS headers (restrict to your domain in production)
            response.headers.set('Access-Control-Allow-Origin', '*') // Change to your domain
            response.headers.set('Access-Control-Allow-Methods', 'POST')
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
        }

        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/api/:path*'
    ]
}

'use client'

import { useEffect } from 'react'
import { incrementPostViews, shouldCountView } from '@/lib/views'

interface ViewTrackerProps {
    postId: string
}

export default function ViewTracker({ postId }: ViewTrackerProps) {
    useEffect(() => {
        const trackView = async () => {
            console.log('ViewTracker: Checking if should count view for post:', postId)

            // Only track view if conditions are met
            if (shouldCountView(postId)) {
                console.log('ViewTracker: Counting view for post:', postId)
                try {
                    const success = await incrementPostViews(postId)
                    if (success) {
                        console.log('ViewTracker: Successfully incremented view count')
                    } else {
                        console.log('ViewTracker: View increment failed or was blocked')
                    }
                } catch (error) {
                    console.error('ViewTracker: Error incrementing views:', error)
                }
            } else {
                console.log('ViewTracker: View not counted (rate limited)')
            }
        }

        // Validate postId before proceeding
        if (!postId || typeof postId !== 'string') {
            console.log('ViewTracker: Invalid postId provided')
            return
        }

        // Small delay to ensure the user actually viewed the post
        console.log('ViewTracker: Setting up view tracking with 2s delay')
        const timer = setTimeout(trackView, 2000)

        return () => clearTimeout(timer)
    }, [postId])

    // This component doesn't render anything
    return null
}

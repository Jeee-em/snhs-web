'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { incrementPostViews } from '@/lib/views'
import { client } from '@/sanity/lib/client'

export default function ViewTestComponent() {
    const [testResult, setTestResult] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [realPostId, setRealPostId] = useState<string>('')

    // Fetch a real post ID on component mount
    useEffect(() => {
        const fetchRealPostId = async () => {
            try {
                const posts = await client.fetch(`*[_type == "post"]{ _id, title, views }`)
                console.log('ViewTestComponent: All posts in database:', posts)

                if (posts && posts.length > 0) {
                    setRealPostId(posts[0]._id)
                    setTestResult(`Found ${posts.length} posts. Testing with: ${posts[0].title || 'Untitled'} (${posts[0]._id})`)
                } else {
                    setTestResult('❌ No posts found in database')
                }
            } catch (error) {
                console.error('ViewTestComponent: Error fetching posts:', error)
                setTestResult(`❌ Error fetching posts: ${error}`)
            }
        }

        fetchRealPostId()
    }, [])

    const testViewIncrement = async () => {
        if (!realPostId) {
            setTestResult('❌ No valid post ID available')
            return
        }

        setLoading(true)
        setTestResult('Testing with real post ID...')

        try {
            await incrementPostViews(realPostId)
            setTestResult(`✅ View increment attempted for post: ${realPostId}! Check browser console for details.`)
        } catch (error) {
            setTestResult(`❌ Error: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-4 border rounded-lg bg-yellow-50 m-4">
            <h3 className="font-bold mb-2">🧪 View Tracking Test</h3>
            <p className="text-sm mb-4">Test the view increment functionality with real post:</p>

            <Button
                onClick={testViewIncrement}
                disabled={loading || !realPostId}
                className="mb-2"
            >
                {loading ? 'Testing...' : realPostId ? 'Test View Increment' : 'Loading...'}
            </Button>

            {testResult && (
                <div className="text-sm p-2 bg-white rounded border">
                    {testResult}
                </div>
            )}

            <div className="text-xs mt-2 text-gray-600">
                💡 Check browser console (F12) for detailed logs
            </div>
        </div>
    )
}

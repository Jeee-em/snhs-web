'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

const DEBUG_QUERY = `*[_type == "post" && defined(slug.current)]{
  _id,
  title,
  "views": coalesce(views, 0),
  publishedAt
}|order(coalesce(views, 0) desc)[0...5]`

export default function DebugViews() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(DEBUG_QUERY)
        setPosts(data || [])
        console.log('Debug posts with views:', data)
      } catch (error) {
        console.error('Debug fetch error:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
      <h3 className="font-bold text-yellow-800 mb-2">Debug: Post Views</h3>
      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post._id} className="text-sm">
            <span className="font-medium">{post.title}</span> - 
            <span className="text-yellow-700"> Views: {post.views}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

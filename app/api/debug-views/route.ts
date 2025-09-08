import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

// This is a utility endpoint to add mock views to posts for testing
// Remove this in production
export async function POST() {
  try {
    // Fetch all posts
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{_id, title}`)
    
    const updates = posts.map((post: { _id: string; title: string }) => ({
      _id: post._id,
      _type: 'post',
      views: Math.floor(Math.random() * 1000) + 1 // Random views between 1-1000
    }))

    // Update posts with random views
    const transaction = client.transaction()
    updates.forEach((update: { _id: string; _type: string; views: number }) => {
      transaction.patch(update._id, { set: { views: update.views } })
    })
    
    await transaction.commit()

    return NextResponse.json({ 
      success: true, 
      message: `Updated ${updates.length} posts with mock view counts`,
      updates: updates.map((u: { _id: string; views: number }) => ({ id: u._id, views: u.views }))
    })
  } catch (error) {
    console.error('Error updating views:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update views' 
    }, { status: 500 })
  }
}

import { ArrowLeft, Twitter, Facebook, Linkedin, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/live';
import { PortableText } from 'next-sanity';
import { POST_QUERY } from '@/lib/queries';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';
import { portableTextComponents } from '@/components/PortableTextComponents';
import ViewTracker from '@/components/ViewTracker';

const BlogPost = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const {data: post} = await sanityFetch({query: POST_QUERY, params: await params})

    if (!post) {
        notFound()
    }

    // Format the date
    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'No date';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Format view count
    const formatViews = (views: number | null | undefined) => {
        if (!views) return '0';
        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}k`;
        }
        return views.toString();
    };

    return (
        <div className="min-h-screen bg-white">
            {/* View Tracker */}
            <ViewTracker postId={post._id} />
            
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Blog Page</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative">
                {post.mainImage && (
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                        <Image 
                            src={urlFor(post.mainImage).width(800).height(500).quality(90).format('webp').url()}
                            alt={post.mainImage.alt || post.title || 'Blog post image'}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                )}
                
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-6xl mx-auto px-6 pb-12 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-4 text-white/90">
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    {post.author.image && (
                                        <Image 
                                            src={urlFor(post.author.image).width(32).height(32).url()}
                                            alt={post.author.name || 'Author'}
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-white/20"
                                        />
                                    )}
                                    <span className="font-medium">{post.author.name}</span>
                                </div>
                            )}
                            
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{formatViews((post as any).views)} views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-3">
                        <div className="max-w-none">
                            {post.body && (
                                <PortableText 
                                    value={post.body} 
                                    components={portableTextComponents}
                                />
                            )}
                        </div>

                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-wrap gap-2">
                                    {post.categories.map((category: any) => (
                                        <span 
                                            key={category._id}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                        >
                                            {category.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Bio */}
                        {post.author && (
                            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                <div className="flex items-start gap-4">
                                    {post.author.image && (
                                        <Image 
                                            src={urlFor(post.author.image).width(64).height(64).url()}
                                            alt={post.author.name || 'Author'}
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">About {post.author.name}</h3>
                                        <p className="text-gray-600">
                                            Author of this blog post.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Share Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                                <div className="flex flex-col gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="justify-start"
                                        asChild
                                    >
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title || '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Twitter className="h-4 w-4 mr-2" />
                                            Twitter
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="justify-start"
                                        asChild
                                    >
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Facebook className="h-4 w-4 mr-2" />
                                            Facebook
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="justify-start"
                                        asChild
                                    >
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin className="h-4 w-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
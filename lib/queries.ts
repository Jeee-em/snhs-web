import { defineQuery } from 'next-sanity'

export const POSTS_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
    "views": coalesce(views, 0),
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
}`)

export const POSTS_PAGINATED_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
    "views": coalesce(views, 0),
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
}`)

export const POSTS_BY_CATEGORY_PAGINATED_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current) && $categoryTitle in categories[]->title]|order(publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
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
}`)

export const POSTS_COUNT_QUERY =
    defineQuery(`count(*[_type == "post" && defined(slug.current)])`)

export const POSTS_BY_CATEGORY_COUNT_QUERY =
    defineQuery(`count(*[_type == "post" && defined(slug.current) && $categoryTitle in categories[]->title])`)

export const POPULAR_POSTS_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]|order(coalesce(views, 0) desc, publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
    "views": coalesce(views, 0),
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
}`)

export const POPULAR_POSTS_BY_CATEGORY_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current) && $categoryTitle in categories[]->title]|order(coalesce(views, 0) desc, publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
    "views": coalesce(views, 0),
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
}`)

export const POPULAR_POSTS_COUNT_QUERY =
    defineQuery(`count(*[_type == "post" && defined(slug.current)])`)

export const POPULAR_POSTS_BY_CATEGORY_COUNT_QUERY =
    defineQuery(`count(*[_type == "post" && defined(slug.current) && $categoryTitle in categories[]->title])`)

export const POSTS_BY_CATEGORY_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current) && $categoryTitle in categories[]->title]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
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
}`)

export const FEATURED_POST_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current) && isFeatured == true]|order(publishedAt desc)[0]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
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
}`)

export const CATEGORIES_QUERY =
    defineQuery(`*[_type == "category"]|order(title asc){
    _id,
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)])
}`)

export const ALL_POSTS_WITH_CATEGORIES_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...50]{
    _id,
    title,
    slug,
    "categories": coalesce(
        categories[]->{
        _id,
        slug,
        title
        },
        []
    )
}`)

export const POSTS_SLUGS_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]{ 
    "slug": slug.current
}`)

export const POST_QUERY =
    defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    publishedAt,
    isFeatured,
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
}`)

export const HIGHLIGHT_POSTS_QUERY =
    defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...4]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    isFeatured,
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
}`)

export const ANNOUNCEMENTS_QUERY =
    defineQuery(`*[_type == "announcement" && isActive == true && (!defined(expiresAt) || expiresAt > now())]|order(isPinned desc, priority desc, publishedAt desc)[0...6]{
    _id,
    title,
    slug,
    excerpt,
    priority,
    category,
    publishedAt,
    isPinned,
    targetAudience,
    contactInfo
}`)
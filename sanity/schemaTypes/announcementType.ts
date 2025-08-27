import { BellIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const announcementType = defineType({
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    icon: BellIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'priority',
            type: 'string',
            title: 'Priority Level',
            options: {
                list: [
                    { title: 'Low', value: 'low' },
                    { title: 'Normal', value: 'normal' },
                    { title: 'High', value: 'high' },
                    { title: 'Urgent', value: 'urgent' }
                ],
                layout: 'radio'
            },
            initialValue: 'normal'
        }),
        defineField({
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
                list: [
                    { title: 'Academic', value: 'academic' },
                    { title: 'Administrative', value: 'administrative' },
                    { title: 'Event', value: 'event' },
                    { title: 'Holiday', value: 'holiday' },
                    { title: 'Emergency', value: 'emergency' },
                    { title: 'General', value: 'general' }
                ]
            },
            initialValue: 'general'
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
            title: 'Short Description',
            description: 'Brief summary of the announcement',
            rows: 3,
            validation: rule => rule.max(200)
        }),
        defineField({
            name: 'content',
            type: 'blockContent',
            title: 'Full Content',
            description: 'Detailed announcement content'
        }),
        defineField({
            name: 'targetAudience',
            type: 'array',
            title: 'Target Audience',
            of: [
                defineArrayMember({
                    type: 'string',
                    options: {
                        list: [
                            { title: 'All Students', value: 'all-students' },
                            { title: 'Grade 7', value: 'grade-7' },
                            { title: 'Grade 8', value: 'grade-8' },
                            { title: 'Grade 9', value: 'grade-9' },
                            { title: 'Grade 10', value: 'grade-10' },
                            { title: 'Grade 11', value: 'grade-11' },
                            { title: 'Grade 12', value: 'grade-12' },
                            { title: 'Parents', value: 'parents' },
                            { title: 'Faculty', value: 'faculty' },
                            { title: 'Staff', value: 'staff' },
                            { title: 'Public', value: 'public' }
                        ]
                    }
                })
            ]
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published Date',
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'expiresAt',
            type: 'datetime',
            title: 'Expires At',
            description: 'When this announcement should no longer be displayed'
        }),
        defineField({
            name: 'isPinned',
            type: 'boolean',
            title: 'Pin to Top',
            description: 'Pin this announcement to the top of the list',
            initialValue: false
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            description: 'Show this announcement on the website',
            initialValue: true
        }),
        defineField({
            name: 'attachments',
            type: 'array',
            title: 'Attachments',
            of: [
                defineArrayMember({
                    type: 'file',
                    options: {
                        storeOriginalFilename: true
                    }
                })
            ]
        }),
        defineField({
            name: 'contactInfo',
            type: 'object',
            title: 'Contact Information',
            fields: [
                defineField({
                    name: 'name',
                    type: 'string',
                    title: 'Contact Person'
                }),
                defineField({
                    name: 'email',
                    type: 'email',
                    title: 'Email'
                }),
                defineField({
                    name: 'phone',
                    type: 'string',
                    title: 'Phone Number'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            priority: 'priority',
            category: 'category',
            isActive: 'isActive'
        },
        prepare(selection) {
            const { title, priority, category, isActive } = selection
            const priorityEmoji = priority === 'urgent' ? '🚨 ' : priority === 'high' ? '⚠️ ' : ''
            const status = isActive ? '' : ' (Inactive)'

            return {
                title: `${priorityEmoji}${title}${status}`,
                subtitle: category ? `Category: ${category}` : undefined
            }
        },
    },
    orderings: [
        {
            title: 'Priority (Urgent first)',
            name: 'priorityDesc',
            by: [
                { field: 'priority', direction: 'desc' },
                { field: 'publishedAt', direction: 'desc' }
            ]
        },
        {
            title: 'Published Date (Newest first)',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        },
        {
            title: 'Title A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }]
        }
    ]
})

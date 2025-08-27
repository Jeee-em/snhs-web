import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableTextComponents } from 'next-sanity';

export const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
        if (!value?.asset?._ref) {
            return null;
        }
        
        return (
            <div className="my-8">
            <Image
                src={urlFor(value).width(800).height(600).url()}
                alt={value.alt || 'Blog post image'}
                width={800}
                height={600}
                className="rounded-lg w-full object-cover"
            />
            {value.alt && (
                <p className="text-sm text-gray-600 text-center mt-2 italic">
                {value.alt}
                </p>
            )}
            </div>
        );
        },
    },
    block: {
        h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
            {children}
        </h1>
        ),
        h2: ({ children }) => (
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            {children}
        </h2>
        ),
        h3: ({ children }) => (
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {children}
        </h3>
        ),
        h4: ({ children }) => (
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
            {children}
        </h4>
        ),
        normal: ({ children }) => (
        <p className="text-gray-700 leading-relaxed mb-6">
            {children}
        </p>
        ),
        blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-[#003366] bg-gray-50 py-4 px-6 my-6 not-italic font-medium text-gray-800">
            {children}
        </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            {children}
        </ul>
        ),
        number: ({ children }) => (
        <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            {children}
        </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
        <li className="mb-2">{children}</li>
        ),
        number: ({ children }) => (
        <li className="mb-2">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
        <em className="italic">{children}</em>
        ),
        link: ({ children, value }) => (
        <a
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#003366] hover:text-[#FFCC00] underline transition-colors"
        >
            {children}
        </a>
        ),
    },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// }

// module.exports = nextConfig

import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';


const isProd = process.env.NODE_ENV === 'production'
console.log(`isProd=${isProd} (${process.env.NODE_ENV})`)


const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm, remarkMath, remarkRehype],
        rehypePlugins: [rehypeStringify, rehypeKatex, rehypeHighlight],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    serverRuntimeConfig: {
        GOOGLE_SCHOLAR_URL: "https://scholar.google.com",
    },
    publicRuntimeConfig: {
        GOOGLE_SCHOLAR_URL: isProd ? "https://scholar.google.com" : "/api/google-scholar",
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: isProd ? './' : undefined,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    async rewrites() {
        return [
            {
            source: '/api/google-scholar/:path*',
            destination: 'https://scholar.google.com/:path*' // Proxy to Backend
            },
        ]
    },
};

export default withMDX(nextConfig);

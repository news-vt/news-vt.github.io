// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// }

// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default   nextConfig;

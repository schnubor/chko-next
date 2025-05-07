/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'media.graphassets.com'],
    },
    experimental: {
        reactCompiler: true,
    },
};

module.exports = nextConfig;

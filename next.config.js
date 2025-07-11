/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.graphassets.com',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        reactCompiler: true,
    },
};

module.exports = nextConfig;

import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // esse ** faz com que ele não ligue para a origem dos arquivos que coloco no projeto
            }, 
        ],
    },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['undoodargentina.com.ar'],
    },
    // Ignorar archivos que no son páginas/componentes de Next.js
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    webpack: (config, { isServer }) => {
        // Excluir archivos HTML de la carpeta emails del bundle
        config.module.rules.push({
            test: /\.html$/,
            exclude: /node_modules/,
            type: 'asset/source',
        });
        
        // Ignorar carpeta send_message durante el build
        config.plugins.push(
            new (require('webpack').IgnorePlugin)({
                resourceRegExp: /^\.\/send_message$/,
                contextRegExp: /app\/api$/,
            })
        );
        
        return config;
    },
    // Excluir rutas de API específicas del build
    experimental: {
        outputFileTracingExcludes: {
            '*': [
                'app/api/send_message/**/*',
            ],
        },
    },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['undoodargentina.com.ar'],
    },
    // Ignorar archivos que no son páginas/componentes de Next.js
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    webpack: (config) => {
        // Excluir archivos HTML de la carpeta emails del bundle
        config.module.rules.push({
            test: /\.html$/,
            exclude: /node_modules/,
            type: 'asset/source',
        });
        return config;
    },
};

export default nextConfig;

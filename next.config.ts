/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Adiciona o suporte para reescritas de rota
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy para todas as chamadas que começam com /api
        destination: "https://crescer-mong-api.vercel.app/api/:path*", // URL do backend
      },
    ];
  },
};

module.exports = nextConfig;

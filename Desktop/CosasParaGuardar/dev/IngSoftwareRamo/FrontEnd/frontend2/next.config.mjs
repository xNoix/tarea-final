const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/protected/:path*',
          destination: '/middleware', // Archivo del middleware
        },
      ];
    },
  };
  
  export default nextConfig;
  
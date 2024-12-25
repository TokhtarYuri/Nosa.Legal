/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ua', 'sk'], // Доступные языки
    defaultLocale: 'en',         // Язык по умолчанию
  },
  webpack: (config, { dev }) => {
    if (dev && config.devServer) {
      config.devServer.hot = false;  // Отключение HMR в разработке
    }
    return config;
  },
};

module.exports = nextConfig;



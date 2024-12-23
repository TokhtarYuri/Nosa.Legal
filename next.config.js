/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ua', 'sk'], // Доступные языки
    defaultLocale: 'en',         // Язык по умолчанию
  },
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'uk', 'sk'], // Доступные языки
    defaultLocale: 'en',         // Язык по умолчанию
  },
};

module.exports = nextConfig;


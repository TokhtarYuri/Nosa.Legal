import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Функция для получения языка из localStorage (если доступно)
const getLanguageFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('language');
  }
  return null; // Возвращаем null, если localStorage недоступен
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: getLanguageFromLocalStorage() || 'en', // Проверяем localStorage только в браузере
    resources: {
      en: { translations: require('./locales/en/translations.json') },
      ua: { translations: require('./locales/ua/translations.json') },
      sk: { translations: require('./locales/sk/translations.json') },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    react: { useSuspense: false }
  });

i18n.languages = ['en', 'ua', 'sk'];

export default i18n;

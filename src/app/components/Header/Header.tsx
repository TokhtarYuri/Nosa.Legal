'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedLang = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(storedLang).catch((err) =>
      console.error('[Header] Error changing language:', err)
    );
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem('language', lang); 
    });
  };

  const getClassName = (lang: string) =>
    i18n.language === lang ? styles.active : '';

  if (!isClient) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <a href="#main">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <nav>
            <ul className={styles.nav}>
              <li><a href="#about-us">{t('header.who_are_we')}</a></li>
              <li><a href="#why-us">{t('header.why_us')}</a></li>
              <li><a href="#services">{t('header.offer')}</a></li>
              <li><a href="#works">{t('header.works')}</a></li>
              <li><a href="#price">{t('header.price')}</a></li>
              <li><a href="#references">{t('header.references')}</a></li>
              <li><a href="#contact">{t('header.contacts')}</a></li>
            </ul>
          </nav>
          <div className={styles.languageSwitcher}>
            <button onClick={() => changeLanguage('en')} className={getClassName('en')}>EN</button>
            <button onClick={() => changeLanguage('ua')} className={getClassName('ua')}>UA</button>
            <button onClick={() => changeLanguage('sk')} className={getClassName('sk')}>SK</button>
          </div>
        </div>
      </div>
    </header>
  );
}

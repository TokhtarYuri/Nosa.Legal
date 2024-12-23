// Header.tsx
'use client';

import { useTranslation } from "react-i18next";
import styles from './Header.module.css';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang);
    }
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <li onClick={() => handleScroll('about-us')}>{t("header.who_are_we")}</li>
              <li onClick={() => handleScroll('why-us')}>{t("header.why_us")}</li>
              <li onClick={() => handleScroll('services')}>{t("header.offer")}</li>
              <li onClick={() => handleScroll('works')}>{t("header.works")}</li>
              <li onClick={() => handleScroll('price')}>{t("header.price")}</li>
              <li onClick={() => handleScroll('references')}>{t("header.references")}</li>
              <li onClick={() => handleScroll('contact')}>{t("header.contacts")}</li>
            </ul>
          </nav>
          <div className={styles.languageSwitcher}>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? styles.active : ''}>EN</button>
            <button onClick={() => changeLanguage('ua')} className={i18n.language === 'ua' ? styles.active : ''}>UA</button>
            <button onClick={() => changeLanguage('sk')} className={i18n.language === 'sk' ? styles.active : ''}>SK</button>
          </div>
        </div>
      </div>
    </header>
  );
}

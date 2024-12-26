'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null); // Ссылка на меню
  const menuButtonRef = useRef<HTMLDivElement>(null); // Ссылка на кнопку меню

  const getClassName = (lang: string) =>
    i18n.language === lang ? styles.active : '';
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const navBarItems = [
    <li key="about-us" onClick={toggleMenu}><a href="#about-us">{t('header.who_are_we')}</a></li>,
    <li key="why-us" onClick={toggleMenu}><a href="#why-us">{t('header.why_us')}</a></li>,
    <li key="services" onClick={toggleMenu}><a href="#services">{t('header.offer')}</a></li>,
    <li key="works" onClick={toggleMenu}><a href="#works">{t('header.works')}</a></li>,
    <li key="price" onClick={toggleMenu}><a href="#price">{t('header.price')}</a></li>,
    <li key="references" onClick={toggleMenu}><a href="#references">{t('header.references')}</a></li>,
    <li key="contact" onClick={toggleMenu}><a href="#contact">{t('header.contacts')}</a></li>,
  ];

  const languageBar = (
    <div className={styles.languageSwitcher}>
      <button onClick={() => changeLanguage('en')} className={getClassName('en')}>EN</button>
      <button onClick={() => changeLanguage('ua')} className={getClassName('ua')}>UA</button>
      <button onClick={() => changeLanguage('sk')} className={getClassName('sk')}>SK</button>
    </div>);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setIsClient(true);
    const storedLang = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(storedLang).catch((err) =>
      console.error('[Header] Error changing language:', err)
    );
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);

    // Закрытие меню при клике вне его
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem('language', lang);
    });
    toggleMenu();
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

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
          {screenWidth < 1280 && (
            <div
              ref={menuButtonRef}
              className={styles.burgerMenu}
              onClick={toggleMenu}
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </div>
          )}
          {screenWidth > 1024 && (<>
            {screenWidth >= 1280 && (
              <nav className={styles.nav}>
                <ul>
                  {navBarItems}
                </ul>
              </nav>
            )}
            {languageBar}
          </>)}
          {screenWidth < 1280 && (<>
            <nav ref={menuRef} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
              <ul>
                {screenWidth <= 1024 && (<>
                  <li>{languageBar}</li>
                  <hr />
                </>)}
                {navBarItems}
              </ul>
            </nav>
          </>
          )}
        </div>
      </div>
    </header>
  );
}

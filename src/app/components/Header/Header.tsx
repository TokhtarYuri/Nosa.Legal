// Header.tsx
'use client';

import { useTranslation } from "react-i18next";
import styles from './Header.module.css';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <ul className={styles.nav}>
            <li><a href="#main">{t("main.home")}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

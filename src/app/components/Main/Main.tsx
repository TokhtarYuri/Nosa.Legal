// Main.tsx
'use client';
import React from "react";
import { useTranslation } from "react-i18next";
import styles from './Main.module.css';


interface MainProps {
    id?: string;
  }


const Main: React.FC<MainProps> = ({ id }) => {
    const { t } = useTranslation();

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <section className={styles.main} id={id}>
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img src="/images/main-banner.jpg" alt="Main banner" className={styles.banner} />
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.textBlockСontainer}>
                        <p className={styles.subtitle}>{t("main.law_office")}</p>
                        <h1 className={styles.title}>{t("main.on_your_side")}</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.secondaryButton} onClick={() => handleScroll('contact')}>{t("main.contact_us")}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Main;

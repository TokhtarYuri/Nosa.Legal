// Main.tsx
'use client';
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styles from './Template.module.css';

interface TemplateProps {
    titleTemplate: string;
    bodyTemplate: ReactNode;
    footerTemplate: string;
}

export default function Template({ titleTemplate, bodyTemplate, footerTemplate }: TemplateProps) {
    const { t } = useTranslation();

    return (
        <section className={styles.main} id="main">
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img src="/images/main-banner.jpg" alt="Main banner" className={styles.banner} />
                </div>
                <div className={styles.textBlock}>
                </div>
                <div className={styles.bodyBlock}>
                    <div className={styles.titleTemplateContainer}>
                        <h2>{titleTemplate}</h2>
                        <img src="/images/logo.png" alt="Logo" />
                    </div>
                    <div className={styles.bodyTemplateContainer}>
                        {bodyTemplate}
                    </div>
                    <div className={styles.footerTemplateContainer}>
                        <h3>{footerTemplate}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

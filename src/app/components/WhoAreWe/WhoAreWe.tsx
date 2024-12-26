'use client';

import { useTranslation } from "react-i18next";
import styles from './WhoAreWe.module.css';
import Template from "../Template/Template";

interface WhoAreWeProps {
    id?: string;
}

const WhoAreWe: React.FC<WhoAreWeProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <div className={styles.leftColumn}>
                <p>{t("about_us.who_we_are")}</p>
                <p>{t("about_us.description")}</p>
            </div>
            <div className={styles.rightColumn}>
                <p>{t("about_us.international_ties")}</p>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("about_us.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("about_us.tagline")} />
        </>
    );
}

export default WhoAreWe;

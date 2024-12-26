'use client';

import { useTranslation } from "react-i18next";
import styles from './WhyUs.module.css';
import Template from "../Template/Template";

interface WhyUsProps {
    id?: string;
}

const WhyUs: React.FC<WhyUsProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <div className={styles.leftColumn}>
                <p>{t("why_us.description")}</p>
                <p>{t("why_us.commitment")}</p>
            </div>
            <div className={styles.rightColumn}>
                <p>{t("why_us.unique_approach")}</p>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("why_us.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("why_us.values")} />
        </>
    );
}

export default WhyUs;

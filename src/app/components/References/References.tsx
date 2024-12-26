'use client';

import { useTranslation } from "react-i18next";
import styles from './References.module.css';
import Template from "../Template/Template";

interface ReferencesProps {
    id?: string;
}

const References: React.FC<ReferencesProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <p>{t("references.description")}</p>
            <div className={styles.industriesArray}>
                <div className={styles.leftColumn}>
                    <ul>
                        {t("references.industries").split("\n").map((item, index) => (
                            <li key={`industry-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.rightColumn}>
                    <ul>
                        {t("references.industries_2").split("\n").map((item, index) => (
                            <li key={`industry2-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("references.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("references.values")} />
        </>
    );
}
export default References;

'use client';

import { useTranslation } from "react-i18next";
import styles from './HowItWorks.module.css';
import Template from "../Template/Template";

interface HowItWorksProps {
    id?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <div className={styles.leftColumn}>
                <div className={styles.numberColumn}>
                    1
                </div>
                <p>{t("working_method.process")}</p>
            </div>
            <div className={styles.centerColumn}>
                <div className={styles.numberColumn}>
                    2
                </div>
                <p>{t("working_method.offer")}</p>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.numberColumn}>
                    3
                </div>
                <p>{t("working_method.next_steps")}</p>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("working_method.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("working_method.values")} />
        </>
    );
}
export default HowItWorks;

'use client';

import { useTranslation } from "react-i18next";
import styles from './WhatsOnOffer.module.css';
import Template from "../Template/Template";

interface WhatsOnOfferProps {
    id?: string;
}

const WhatsOnOffer: React.FC<WhatsOnOfferProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <div className={styles.leftColumn}>
                <p>{t("services.description")}</p>
                <p>{t("services.expertise")}</p>
            </div>
            <div className={styles.rightColumn}>
                <p>{t("services.expertise_2")}</p>
                <p>{t("services.benefits")}</p>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("services.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("services.values")} />
        </>
    );
}

export default WhatsOnOffer;
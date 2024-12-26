'use client';

import { useTranslation } from "react-i18next";
import styles from './WhatThePrice.module.css';
import Template from "../Template/Template";

interface WhatThePriceProps {
    id?: string;
}

const WhatThePrice: React.FC<WhatThePriceProps> = ({ id }) => {
    const { t } = useTranslation();
    const bodyTemplate = (
        <div className={styles.bodyTemplate}>
            <p>{t("pricing.policy")}</p>
            <p>{t("pricing.flexibility")}</p>
            <p>{t("pricing.exception")}</p>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("pricing.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("pricing.values")} />
        </>
    );
}
export default WhatThePrice;

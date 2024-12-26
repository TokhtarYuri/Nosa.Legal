'use client';

import { useTranslation } from "react-i18next";
import styles from './Contacts.module.css';
import Template from "../Template/Template";

interface ContactsProps {
    id?: string;
}

const Contacts: React.FC<ContactsProps> = ({ id }) => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    const bodyTemplate = (
        <div className={`${styles.bodyTemplate} ${styles.uppercase}`}>
            <p className={`${styles.uppercase} ${styles.bold}`}>
                {t("contact.city")}
            </p>
            <div className={styles.industriesArray}>
                <p>{t("contact.address_title")}</p>
                <div className={styles.rightColumn}>
                    <ul>
                        {t("contact.address").split("\n").map((item, index) => (
                            <li key={`industry-${index}`}>
                                <a href="https://maps.app.goo.gl/rSvvan3r2rJ8UDWt8" target="_blank">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.industriesArray} ${styles.bold}`}>
                <p>{t("contact.phone_title")}</p>
                <a className={styles.link}
                    href={`tel:${t("contact.phone")}`}>
                    {t("contact.phone")}
                </a>
            </div>
            <div className={styles.industriesArray}>
                <p>{t("contact.email_title")}</p>
                <p>{t("contact.email")}</p>
            </div>
        </div>
    )

    return (
        <>
            <Template
                titleTemplate={t("contact.title")}
                bodyTemplate={bodyTemplate}
                footerTemplate={t("contact.values", { year: currentYear })} />
        </>
    );
}
export default Contacts;

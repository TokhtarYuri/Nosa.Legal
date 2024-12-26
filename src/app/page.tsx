'use client';

import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from './page.module.css';

const HowItWorks = React.lazy(() => import("./components/HowItWorks/HowItWorks"));
const References = React.lazy(() => import("./components/References/References"));
const WhatsOnOffer = React.lazy(() => import("./components/WhatsOnOffer/WhatsOnOffer"));
const WhatThePrice = React.lazy(() => import("./components/WhatThePrice/WhatThePrice"));
const WhoAreWe = React.lazy(() => import("./components/WhoAreWe/WhoAreWe"));
const WhyUs = React.lazy(() => import("./components/WhyUs/WhyUs"));
const Contacts = React.lazy(() => import("./components/Contacts/Contacts"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkContainer = () => {
      const container = document.querySelector('.main_container');
      console.log(container);
      if (container) {
        setIsLoaded(true);
      }
    };

    if (isLoaded) {
      checkContainer();
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#main";
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <section id="main">
            <Main />
          </section>
          <section id="about-us">
            <WhoAreWe />
          </section>
          <section id="why-us">
            <WhyUs />
          </section>
          <section id="services">
            <WhatsOnOffer />
          </section>
          <section id="works">
            <HowItWorks />
          </section>
          <section id="price">
            <WhatThePrice />
          </section>
          <section id="references">
            <References />
          </section>
          <section id="contact">
            <Contacts />
          </section> 
        </div>
      </main>
    </>
  );
}

"use client";
import React from "react";
import styles from "./page.module.css";

import Link from "next/link";

import Clouds from "./Clouds/Clouds";
import logo from "./assets/kingdom.png";

const page = () => {
  return (
    <div className={styles.apffgp}>
      <Clouds></Clouds>
      <img src={logo.src} className={styles.Applogo} alt="logo" />
      <div className={styles.subtitle}>
        <Link href="/tsarstvie/3" className={styles.afgp}>
          مملكة عيسو.
        </Link>
        <Link href="/tsarstvie/1">Царство Исава.</Link>
        <Link href="/tsarstvie/2">The Kingdom of Esau.</Link>
      </div>
    </div>
  );
};

export default page;

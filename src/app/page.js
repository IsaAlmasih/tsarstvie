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
      <Link href="/tsarstvie" className={styles.subtitle}>
        <h3 className={styles.afgp}>مملكة عيسو.</h3>
        <h3>Царство Исава.</h3>
        <h3>The Kingdom of Esau.</h3>
      </Link>
    </div>
  );
};

export default page;

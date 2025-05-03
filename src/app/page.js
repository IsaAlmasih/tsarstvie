"use client";
import React from "react";
import styles from "./page.module.css";

import Link from "next/link";

import Clouds from "./Clouds/Clouds"
import logo from "./assets/kingdom.png";

const page = () => {
  return (
    <div className={styles.app}>
      <Clouds></Clouds>
      <img src={logo.src} className={styles.Applogo} alt="logo" />
      <Link href="/tsarstvie" className={styles.subtitle}>Царствие.</Link>
    </div>
  );
};

export default page;


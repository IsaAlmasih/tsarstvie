"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.blok}> */}
      <Link href="/sentence">Страница с именами.</Link>
      <Link href="/sentenced">Назад.</Link>
    </div>
    // </div>
  );
};

export default page;

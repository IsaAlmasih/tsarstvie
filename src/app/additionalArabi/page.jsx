"use client";
import React from "react";

import styles from "../additional/styles.module.css";

import Link from "next/link";

export default function additionalArabi() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.textTsa}>
          <h1>
            مرحباً. يسعدني أن أرى أشخاصاً يشاركونني وجهات نظري، وكذلك أولئك
            الذين يسعون جاهدين للتواصل مع عالمنا
          </h1>
        </div>
      </div>
      <button className={styles.buеton}>
        <a href="/tsarstvie/law/lawOne">На главную. </a>
      </button>
    </div>
  );
}

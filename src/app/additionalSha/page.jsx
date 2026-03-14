"use client";
import React from "react";

import styles from "../additional/styles.module.css";

import Link from "next/link";

export default function additional() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.textTsa}>
          <h1>
            Здравствуйте. Рад видеть людей, которые разделяют мои взгляды, как и
            тех, кто стремиться прикоснутся к нашему миру.)))
          </h1>
        </div>
      </div>
      <button className={styles.buеton}>
        <a href="/tsarstvie/law/lawOne">На главную. </a>
      </button>
    </div>
  );
}

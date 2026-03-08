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
            Привет мастер. Как видишь я на шаг приблизился к твоему уровню.)))
          </h1>
        </div>
      </div>
      <button className={styles.buttonla}>
        <a href="/tsarstvie">На главную. </a>
      </button>
    </div>
  );
}

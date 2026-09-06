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
          <div className={styles.wrapp}>
            <Link href="/commandments/1">Первая</Link>
            <Link href="/tsarstvie/law">Вторая</Link>
            <Link href="/tsarstvie/almasih">Третья</Link>
            <Link href="/tsarstvie/churches">Четвёртая</Link>
            <Link href="https://www.supremesanhedrin.ru/">Пятая</Link>
            <Link href="/lights">Шестая</Link>
            <Link href="/tribesisrael/1">Седьмая</Link>
            <Link href="/verdict">Восьмая</Link>
          </div>
        </div>
      </div>
      <button className={styles.buеton}>
        <a href="/tsarstvie/law/lawOne">На главную. </a>
      </button>
    </div>
  );
}

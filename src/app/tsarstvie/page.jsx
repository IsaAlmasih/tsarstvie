"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <Link href="/commandments">Заповеди Иисуса Христа.</Link>
          <Link href="/tsarstvie/law">Закон Всевышнего Иисуса Христа.</Link>
          <Link href="/tsarstvie/almasih">Престол Давида.</Link>
          <Link href="/tsarstvie/churches">Церкви.</Link>
          <Link href="https://www.supremesanhedrin.ru/">Синедрион.</Link>
          <Link href="/lights">Светильники.</Link>
          <Link href="/tribesisrael">12 колен Израиля</Link>
          <Link href="/verdict">Вердикты.</Link>
          <Link href="/" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

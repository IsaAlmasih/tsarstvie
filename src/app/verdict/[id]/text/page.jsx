"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
const {id}=useParams()
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            5. Пятая книга. Вердикт пять. Фараоны. Цари. Князья. Прочие
            главенствующие. Президенты. Главы земель (Страны).
          </Link>
          <Link href={`/verdict/${id}`}>Вернуться назад.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

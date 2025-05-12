import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            5. Пятая книга. Вердикт пять. Фараоны. Цари. Князья. Прочие
            главенствующие. Президенты. Главы земель (Страны).
          </Link>
          <Link href="/sentence">.</Link>
          <Link href="/tsarstvie/churches">Книги вердикта.</Link>
          <Link href="/verdict">Вернуться назад.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

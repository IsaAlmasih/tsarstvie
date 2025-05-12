import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            1. Первая книга. Вердикт один. Убийству нет прощения. Противящийся
            злу, дополняет зло. Убийство во имя защиты, правды, отечества, есть
            нарушение. Убийство во Имя Моё, есть нарушение. Прощения за это нет
            и не будет. Простил убийство, стал убийцей. Самоубийство - тоже
            убийство. Пособничество в убийстве, убийство. Отправил убивать, стал
            убийцей. На земле нет того, кто простит убийство!
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

import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            10. Книга десять. Вердикт десять. Друзья разбойника. Жители города.
            Праведники. Сто сорок четыре тысячи девственников мужского пола,
            тех, кто согласились идти за Мной. Запечатлённые. Помилованные.
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

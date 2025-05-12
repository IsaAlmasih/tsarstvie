import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            6. Шестая книга. Вердикт шесть. Лжепророки. Иконы, ложные боги
            (Материальное). Лжеотцы: Опекунов и кровных отцов, можно называть
            отцами, отец. Лжеучителя: Дающие советы как жить людям.
            Лжесвященники: Патриархи, их замы, все нарушители в длинных одеждах.
            Раскольники: Все те, кто виновен в расколе.
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

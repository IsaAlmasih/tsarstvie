import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            3. Третья книга. Вердикт три. Нанесение рисунков под кожу
            (Татуировки или ещё, какое название выдумаете), запрещено. Пьющие
            спиртное, хоть самую малость, запрещено. Курящие, употребляющие
            всякое дурманящее, матершинники, сквернословящие, пререкающиеся,
            спорящие, туда-же, где и разведённые по вине прелюбодеяния.
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

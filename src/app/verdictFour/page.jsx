import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            4. Четвёртая книга. Вердикт четыре. Колдуны. Чародеи. Гадалки.
            Астрологи. Маги. Духовызыватели, все в гиену огненную к отцу своему.
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

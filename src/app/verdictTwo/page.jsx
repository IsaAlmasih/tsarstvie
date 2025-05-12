import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            2. Вторая книга. Вердикт два. Разводящиеся без вины прелюбодеяния.
            Разведённые, без вины прелюбодеяния в ад. Обручающиеся с
            разведёнными по вине прелюбодеяния, запрещено! Рукоблудники, всяк
            извращённый, извращенец и сменивший пол, горите там же где и убийцы.
            Священники освобождаются от прощений всяких грехов.
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

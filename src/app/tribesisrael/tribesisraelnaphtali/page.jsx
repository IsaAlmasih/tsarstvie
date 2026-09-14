import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <p>Израиль, имя народов планеты!</p>
        <Link href="/tribesisrael">Колено Неффалимова.</Link>
        <div className={styles.textTsar}>
          <p>
            6) Колено Неффалимово сыны и дочери, земли: России. Украины.
            Белоруссии. Молдавии. Эстонии. Латвии.
          </p>
        </div>
        <button className={styles.button}>
          <a href="/tribesisrael/1">Назад</a>
        </button>
      </div>
    </div>
  );
};

export default page;

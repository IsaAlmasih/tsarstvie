import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          {/* <Link href="/sentence">Ефесская церковь.</Link>
          <Link href="/sentence">Смирнская церковь.</Link>
          <Link href="/sentence">Пергамская церковь.</Link>
          <Link href="/sentence">Фиатирская церковь.</Link> */}
          <Link href="/sentence">Сардийская церковь.</Link>
          <Link href="/sentence">Адрес.</Link>
          {/* <Link href="/sentence">Лаодикийская церковь.</Link> */}
          <Link href="/tsarstvie/churches">Вернуться на главную.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            <p>
              С данной страницы вы можете ознакомиться о разделении планеты на
              12 колен.
            </p>
            <p>Израиль, имя народа планеты!</p>
          </div>
          <Link href="/">Колено Неффалимова.</Link>
          <Link href="/tribesisrael" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

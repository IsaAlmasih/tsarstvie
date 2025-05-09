import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence" className={styles.text}>
            Ефесская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Смирнская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Пергамская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Фиатирская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Сардийская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Филадельфийская церковь.
          </Link>
          <Link href="/sentence" className={styles.text}>
            Лаодикийская церковь.
          </Link>
          <Link href="/" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

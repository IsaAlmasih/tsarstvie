import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <Link href="/tsarstvie/churches">Церкви.</Link>
          <Link href="/">
            Светильники.
          </Link>
          <Link href="/">
            Закон Всевышнего Иисуса Христа.
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

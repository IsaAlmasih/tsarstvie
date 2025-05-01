import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerGroup}>
          <p className={styles.footerText}>1. Любой кто убил или послал убить, поподает в АД</p>
          <p className={styles.footerText}>2. Разведённые без вины прелюбодеяния как и те кто связал с ними узы браком, в ад. </p>
          <p className={styles.footerText}>3. </p>
          <p className={styles.footerText}>4. </p>
          <p className={styles.footerText}>5. </p>
          <p className={styles.footerText}>6. </p>
        </div>
        <Link href="/">Вернуться на главную.</Link>
      </div>
    </div>
  );
};

export default page;

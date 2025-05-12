import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            9. Книга девять. Вердикт девять. Мясоеды, людоеды. Убийцы флоры и
            фауны.
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

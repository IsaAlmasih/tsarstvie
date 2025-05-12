import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/sentence">
            8. Восьмая книга. Вердикт восемь. В эту книгу всех Николаитов.
            Производители спиртного и всякого дурманящего, делающих вещей для
            извращенцев. Напишите прочих несущих злодейства. По словам
            разбойника, банкиры, заводы, отравляющие природу, землю и детей
            Моих. Всех в эту книгу.
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

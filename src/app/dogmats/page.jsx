import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <p>1. Любой кто убил или послал убить, попадает в АД</p>
          <p>
            2. Разведённые без вины прелюбодеяния как и те кто связал с ними узы
            браком, в ад.
          </p>
          <p>
            3. Не питайте себя иллюзиями и сопративляйтесь фону которым вас
            напитывают
          </p>
          <p>4. </p>
          <Link href="/sentenced" className={styles.text}>
            5. Приговоры.
          </Link>
          <p>6. </p>
          <Link href="/">Вернуться на главную.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

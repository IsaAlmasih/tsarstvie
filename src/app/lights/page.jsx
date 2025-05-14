import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            С данной страницы вы можете ознакомиться с нашими компаниями.
          </div>
          <Link href="/lights/lightsone">Первая печать.</Link>
          <Link href={"/lights/lightstwo"}>Вторая печать.</Link>
          <Link href="/lights/lightsthree">Третья печать.</Link>
          <Link href="/lights/lightsfour">Четвёртая печать.</Link>
          <Link href="/lights/lightsfive">Пятая печать.</Link>
          <Link href="/lights/lightssix">Шестая печать.</Link>
          <Link href="/lights/lightsseven">Седьмая печать.</Link>
          <Link href="/tsarstvie" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

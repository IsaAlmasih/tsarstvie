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
          <Link href="/tribesisrael/tribesisraelreuben">Колено Рувимово.</Link>
          <Link href="/tribesisrael/tribesisraelsimeon">Колено Симеоново.</Link>
          <Link href="/tribesisrael/tribesisraellevi">Колено Левитов.</Link>
          <Link href="/tribesisrael/tribesisraeljudah">Колено Иудино.</Link>
          <Link href="/tribesisrael/tribesisraelnaphtali">
            Колено Неффалимова.
          </Link>
          <Link href="/tribesisrael/tribesisraelgad">Колено Гадово.</Link>
          <Link href="/tribesisrael/tribesisraelasher">Колено Асирово.</Link>
          <Link href="/tribesisrael/tribesisraelissachar">
            Колено Иссахарово.
          </Link>
          <Link href="/tribesisrael/tribesisraelzebulun">
            Колено Завулонову.
          </Link>
          <Link href="/tribesisrael/tribesisraeljoseph">Колено Иосифово.</Link>
          <Link href="/tribesisrael/tribesisraelbenjamin">
            Колено Вениаминово.
          </Link>
          <Link href="/tribesisrael/tribesisraeldan">Колено Даново.</Link>
          <Link href="/tsarstvie" className={styles.textTsar}>
            Вернуться на главную.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

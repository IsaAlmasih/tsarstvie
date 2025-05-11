import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/tsarstvie/churches/ephesus">Ефесская церковь.</Link>
          <Link href="/tsarstvie/churches/smyrna">Смирнская церковь.</Link>
          <Link href="/tsarstvie/churches/pergamon">Пергамская церковь.</Link>
          <Link href="/tsarstvie/churches/thyateira">Фиатирская церковь.</Link>
          <Link href="/tsarstvie/churches/sardis">Сардийская церковь.</Link>
          <Link href="/tsarstvie/churches/philadelphia">
            Филадельфийская церковь.
          </Link>
          <Link href="/tsarstvie/churches/laodicean">
            Лаодикийская церковь.
          </Link>
          <Link href="/churches">Вернуться на главную.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

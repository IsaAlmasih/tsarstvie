import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";


const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.gridSuxyz}>
          <div className={styles.progect}>
            <Link href="/">
              <h1 className={styles.progecLmpuy}>Проекты.</h1>
            </Link>
          </div>
          <div className={styles.tabernacle}>
            <Link href="/tabernacle">
              <h1 className={styles.tabernacleLmpuy}>Скиния.</h1>
            </Link>
          </div>
          <div>Документы</div>
          <div className={styles.cityCmorw}>
            <Link href="/">
              <h1 className={styles.cityLmpuy}>Город.</h1>
            </Link>
          </div>
          <div>Жилая часть</div>
          <div>Контакты</div>
          <div>Ковчег</div>
          <div>Вакансии</div>
          <div>Законы</div>
          <div>Сады</div>
          <div>Предложения</div>
          <div>12</div>
        </div>
      </div>
    </div>
  );
};

export default page;

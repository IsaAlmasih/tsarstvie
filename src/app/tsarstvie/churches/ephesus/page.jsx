import React from "react";

import styles from "../../../tsarstvie/churches/ephesus/styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <h1>Ефесская церковь.</h1>
          <a href="/sentence">Нужны вы Христу или нет, помогут книги по ссылке.</a>
          <a href="/tsarstvie/law">
            Для получения приглашения необходимо ответить на вопросы кликнув на
            читаемое предложение.
          </a>
        </div>
      </div>
      <button className={styles.buttonla}>
        <a href="/tsarstvie/churches">Назад.</a>
      </button>
    </div>
  );
};

export default page;

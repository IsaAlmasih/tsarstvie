import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <div className={styles.textTsar}>
            <h4>
              Здравствуйте. Прежде чем пройти дальше вам необходимо ответить на
              вопросы. Хотим понимать те ли вы на самом деле кем себя считаете.
              Вам давалось много времени на изучение и сейчас мы хотим убедиться
              в ваших знаниях чтобы вместе развивать планеты умножая любовь.
            </h4>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <a href="/tsarstvie/law/lawOne">К вопросам</a>
      </button>
    </div>
  );
};

export default page;

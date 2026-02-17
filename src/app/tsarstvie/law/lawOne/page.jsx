
import React from "react";

import { useNavigate } from "react";

import styles from "../lawOne/styles.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.text}>
          <p>Вопрос первый. Выберите верный вариант.</p>
          <p>1) Ии</p>
          <p>1) еи</p>
          <p>1) 8и</p>
        </div>
        <div className={styles.text}>
          <p>Вопрос первый. Выберите верный вариант.</p>
          <p>1) Ии</p>
          <p>1) еи</p>
          <p>1) 8и</p>
        </div>
        <div className={styles.text}>
          <p>Вопрос первый. Выберите верный вариант.</p>
          <p>1) Ии</p>
          <p>1) еи</p>
          <p>1) 8и</p>
        </div>
      </div>
      <button>
        <a href="/tsarstvie/law">На страницу назад</a>
      </button>
      {/* <button onClick={() => useNavigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
};

export default page;

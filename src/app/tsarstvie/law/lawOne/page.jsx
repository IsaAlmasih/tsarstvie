
import React from "react";

import { useNavigate } from "react";

import styles from "../lawOne/styles.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Страница с вопросами которая поможет понимать причины ваших трудностей.
      </h1>
      <div className={styles.blok}>
        <div className={styles.text}>
          <h2>
            Вопрос первый. Понимаете ли, вы, что патриотизм и вера как Дьявол и
            Христос. Два противоречия.
          </h2>
          <div className={styles.textQuestion}>
            <p>1) Да.</p>
            <p>1) Нет.</p>
            <p>1) Незнаю.</p>
          </div>
        </div>
        <div className={styles.text}>
          <h3>Вопрос второй. Понимаете ли вы, что матершинные слова, сигареты, наркотики, спиртное, дорога в плохое место?</h3>
          <div className={styles.textQuestion}>
            <p>1) Ии</p>
            <p>1) еи</p>
            <p>1) 8и</p>
            <p>4) Ии</p>
            <p>5) еи</p>
            <p>6) 8и</p>
            <p>7) Ии</p>
            <p>8) еи</p>
            <p>9) 8и</p>
          </div>
        </div>
        <div className={styles.text}>
          <h3>Вопрос третий. Выберите верный вариант.</h3>
          <div className={styles.textQuestion}>
            <p>1) Ии</p>
            <p>1) еи</p>
            <p>1) 8и</p>
            <p>4) Ии</p>
            <p>5) еи</p>
            <p>6) 8и</p>
            <p>7) Ии</p>
            <p>8) еи</p>
            <p>9) 8и</p>
          </div>
        </div>
        <div className={styles.text}>
          <h3>Вопрос четвёртый. Выберите верный вариант.</h3>
          <div className={styles.textQuestion}>
            <p>1) Ии</p>
            <p>1) еи</p>
            <p>1) 8и</p>
            <p>4) Ии</p>
            <p>5) еи</p>
            <p>6) 8и</p>
            <p>7) Ии</p>
            <p>8) еи</p>
            <p>9) 8и</p>
          </div>
        </div>
        <div className={styles.text}>
          <h3>Вопрос первый. Выберите верный вариант.</h3>
          <div className={styles.textQuestion}>
            <p>1) Ии</p>
            <p>1) еи</p>
            <p>1) 8и</p>
            <p>4) Ии</p>
            <p>5) еи</p>
            <p>6) 8и</p>
            <p>7) Ии</p>
            <p>8) еи</p>
            <p>9) 8и</p>
          </div>
        </div>
      </div>
      <button className={styles.buttonLaw}>
        <a href="/tsarstvie/law">Назад</a>
      </button>
      {/* <button onClick={() => useNavigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
};

export default page;

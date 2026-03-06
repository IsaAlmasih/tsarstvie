
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
        <div className={styles.blo}>
          <div className={styles.text}>
            <p2>
              Вопрос 1. Понимаете ли, вы, что патриотизм и вера как Дьявол и
              Христос. Два противоречия.
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Да.</p>
              <p>2) Нет.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос 2. Понимаете ли, вы, что нельзя священников называть отец?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Да.</p>
              <p>2) Нет.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>Вопрос 3. Есть ли причина убивать людей?</p2>
            <div className={styles.textQuestion}>
              <p>1) Нет причин.</p>
              <p>2) Да есть.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>Вопрос 4. Иисус Сын божий или сам Всевышний и есть?</p2>
            <div className={styles.textQuestion}>
              <p>1) Иисус Всевышний.</p>
              <p>2) Да Иисус Сын.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос 5. Богородица родила естественным путём или описанным в
              Новом Завете?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Естественным.</p>
              <p>2) Описаным.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос 6. История Адама и Евы буквальная история или
              завуалированная история миллионов лет эволюции?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Эволюция.</p>
              <p>2) Буквальная.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос седьмой. Понимаете ли, вы, что у обручившиеся с виновными
              по вине прелюбодеяния нет шансов на спасение?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Понимаю.</p>
              <p>2) Не согласен.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос восьмой. Понимаете ли, вы, что у разведённых без вины
              прелюбодеяния нет шансов на спасение?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Понимаю.</p>
              <p>2) Не согласен.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос 9. Понимаете ли, вы, что тот, кто соблазнил мужа или жену
              на изменy разделит награду с осуждёнными по вине прелюбодеяния?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Понимаю.</p>
              <p>2) Не согласен.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
          <div className={styles.text}>
            <p2>
              Вопрос 10. Понимаете ли, вы, что кесарь, патриарх, князь, царь, в
              нашем времени = дьявол?
            </p2>
            <div className={styles.textQuestion}>
              <p>1) Понимаю.</p>
              <p>2) Не согласен.</p>
              <p>3) Незнаю.</p>
            </div>
          </div>
        </div>
        <p3 className={styles.textQues}>
          На все представление вопросы ответ под номером один. И если вы не
          согласны, Христа вам не видать!
        </p3>
        {/* <button onClick={() => useNavigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
      </div>
      <button className={styles.buttonLaw}>
        <a href="/tsarstvie/law">Назад</a>
      </button>
    </div>
  );
};

export default page;

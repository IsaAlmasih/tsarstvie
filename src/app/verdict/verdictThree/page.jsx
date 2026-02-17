"use client";
import React from "react";
import styles from "../verdictThree/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div>
      <div>
        <div className={styles.wrapper}>
          <h4 className={styles.isava}>
            3. Третья книга. Вердикт три. Нанесение рисунков под кожу
            (Татуировки или ещё, какое название выдумаете), запрещено. Пьющие
            спиртное, хоть самую малость, запрещено. Курящие, употребляющие
            всякое дурманящее, матершинники, сквернословящие, пререкающиеся,
            спорящие, туда-же, где и разведённые по вине прелюбодеяния.
          </h4>
          <HTMLFlipBook width={900} height={700} className={styles.book}>
            <div className={styles.firstPage}>
              <table className={styles.iksweb}>
                <tr>
                  <td>Фамилия.</td>
                  <td>Имя</td>
                  <td>Отчество</td>
                  <td>Досье</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div className={styles.secondPage}></div>
            <div className={styles.thirdPage}></div>
            <div className={styles.secondPage}></div>
            <div className={styles.firstPage}></div>
            <div className={styles.secondPage}></div>
            <div className={styles.firstPage}></div>
            <div className={styles.secondPage}>
              <h4>"Привет привет привет привет"</h4>Page 8
            </div>
          </HTMLFlipBook>
        </div>
      </div>
      <button className={styles.button}>
        {" "}
        <a href="/verdict">Назад</a>
      </button>
    </div>
  );
};

export default page;

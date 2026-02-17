"use client";
import React from "react";
import styles from "../verdictSeven/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div>
      <div>
        <div className={styles.wrapper}>
          <h4 className={styles.isava}>
            7. Седьмая книга. Вердикт семь. Лжерелигии: Индуиская.
            Мусульманская. Иудейская. Католики. Православные. Старообрядцы. Всех
            напишите, кто потакал малейшему злу.
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

"use client";
import React from "react";
import styles from "../verdictEight/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.isava}>
        5. Пятая книга. Вердикт пять. Фараоны. Цари. Князья. Прочие
        главенствующие. Президенты. Главы земель (Страны).
      </h4>
      <HTMLFlipBook width={430} height={600} className={styles.book}>
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
        <div className={styles.secondPage}>
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
        <div className={styles.thirdPage}>
          <h4>"Это это. И это. привет"</h4>
        </div>
        <div className={styles.secondPage}>
          <h4>"Привет привет привет привет"</h4>
        </div>
        <div className={styles.firstPage}></div>
        <div className={styles.secondPage}></div>
        <div className={styles.firstPage}>Page 7</div>
        <div className={styles.secondPage}>Page 8</div>
      </HTMLFlipBook>
      <button className={styles.button}>
        <a href="/verdict">Назад</a>
      </button>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import styles from "../verdictTen/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.isava}>
        10. Книга десять. Вердикт десять. Друзья разбойника. Жители города.
        Праведники. Сто сорок четыре тысячи девственников мужского пола, тех,
        кто согласились идти за Мной. Запечатлённые. Помилованные.
      </h4>
      <HTMLFlipBook width={400} height={500} className={styles.book}>
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

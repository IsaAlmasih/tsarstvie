"use client";
import React from "react";
import styles from "./styles.module.css";
import HTMLFlipBook from "react-pageflip";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.isava}>
        1. Первая книга. Вердикт один. Убийству нет прощения. Противящийся злу,
        дополняет зло. Убийство во имя защиты, правды, отечества, есть
        нарушение. Убийство во Имя Моё, есть нарушение. Прощения за это нет и не
        будет. Простил убийство, стал убийцей. Самоубийство - тоже убийство.
        Пособничество в убийстве, убийство. Отправил убивать, стал убийцей. На
        земле нет того, кто простит убийство!
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
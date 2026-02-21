"use client";
import React from "react";
import styles from "../verdictSix/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappe}>
        <HTMLFlipBook width={1000} height={700} className={styles.book}>
          <div className={styles.firstPage}>
            {/* <h4>
              6. Шестая книга. Вердикт шесть. Лжепророки. Иконы, ложные боги
              (Материальное). Лжеотцы: Опекунов и кровных отцов, можно называть
              отцами, отец. Лжеучителя: Дающие советы как жить людям.
              Лжесвященники: Патриархи, их замы, все нарушители в длинных
              одеждах. Раскольники: Все те, кто виновен в расколе.
            </h4> */}
            <table className={styles.iksweb}>
              <tr>
                <td>Фамилия.</td>
                <td>Имя</td>
                <td>Отчество</td>
                <td>Досье</td>
              </tr>
              <tr>
                <td>Петров</td>
                <td>Андрей</td>
                <td>Владимирович</td>
                <td> Досье</td>
              </tr>
              <tr>
                <td>Маркевич</td>
                <td>Адам</td>
                <td>Иванович</td>
                <td>Досье</td>
              </tr>
              <tr>
                <td>Бевцик</td>
                <td>Иван Васильевич</td>
                <td>Васильевич</td>
                <td>Досье</td>
              </tr>
              <tr>
                <td>Дайнеко</td>
                <td>Андрей</td>
                <td>Михайлович</td>
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
      </div>
      <button className={styles.button}>
        <a href="/verdict">Назад</a>
      </button>
    </div>
  );
};

export default page;

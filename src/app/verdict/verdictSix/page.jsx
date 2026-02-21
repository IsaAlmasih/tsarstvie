"use client";
import React from "react";
import styles from "../verdictSix/styles.module.css";
import HTMLFlipBook from "react-pageflip";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappe}>
        <div className={styles.bookSex}>
          <div>
            <HTMLFlipBook width={1200} height={700}>
              <div className={styles.firstPage}>
                <h4 className={styles.isava}>
                  6. Шестая книга. Вердикт шесть. Лжепророки. Иконы, ложные боги
                  (Материальное). Лжеотцы: Опекунов и кровных отцов, можно
                  называть отцами, отец. Лжеучителя: Дающие советы как жить
                  людям. Лжесвященники: Патриархи, их замы, все нарушители в
                  длинных одеждах. Раскольники: Все те, кто виновен в расколе.
                </h4>
                <table className={styles.iksweb}>
                  <tr>
                    <td>Фамилия.</td>
                    <td>Имя</td>
                    <td>Отчество</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Николай</td>
                    <td>Васильевич</td>
                    <td>Кантарян</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Александр</td>
                    <td>Геннадиевич</td>
                    <td>Могилёв</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Бевцик</td>
                    <td>Иван</td>
                    <td>Васильевич</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Дайнеко</td>
                    <td>Андрей</td>
                    <td>Михайлович</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Владимир</td>
                    <td>Михайлович</td>
                    <td>Гундяев</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Орест</td>
                    <td>Владимирович</td>
                    <td>Березовский</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Виталий</td>
                    <td>Иванович</td>
                    <td>Тупеко</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Анатолий</td>
                    <td>Владимирович</td>
                    <td>Судаков</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Виктор</td>
                    <td>Александрович</td>
                    <td>Морарь</td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className={styles.secondPage}>
                <h4 className={styles.Xemnz}>
                  Видите, как бывает в жизни. Или вы хотите сказать, что не
                  ждали подобного? Думаю, ждали и понимаете, что ваши дела не
                  могут пройти бесследно. Я хочу, чтобы вы ушли из Дома Божьего
                  и не пачкали его своим присутствием. Более того, своими
                  убивающими решениями.
                </h4>
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
              <div className={styles.thirdPage}></div>
              <div className={styles.secondPage}>
                <h4>"Привет привет привет привет"</h4>
              </div>
              <div className={styles.firstPage}></div>
              <div className={styles.secondPage}></div>
              <div className={styles.firstPage}>Page 7</div>
              <div className={styles.secondPage}>Page 8</div>
            </HTMLFlipBook>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <a href="/verdict">Назад</a>
      </button>
    </div>
  );
};

export default page;

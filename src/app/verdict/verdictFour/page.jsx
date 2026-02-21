"use client";
import React from "react";
import styles from "../verdictFour/styles.module.css";
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
                  4. Четвёртая книга. Вердикт четыре. Колдуны. Чародеи. Гадалки.
                  Астрологи. Маги. Духовызыватели, все в гиену огненную к отцу
                  своему.
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a>Досье</a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className={styles.secondPage}>
                <h4 className={styles.Xemnz}>Видите</h4>
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
                <h4 className={styles.Xemop}>
                  Говорю вам. Если на момент остановки вашего сердца не
                  последует раскаяния вашей деятельности, определённо вам нет
                  спасения и как итог, отправитесь в ад. Нас не особо интересует
                  верите вы или нет, это ваши дела. Лично я передаю слова
                  Христа, а вы сами решайте, верить или нет. И поверьте, в мире
                  много всего что отвечает нашим добродетелям и как говорим
                  всем, нарожаем ещё, всё только начинается и продолжиться без
                  вас!
                </h4>
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

"use client";
import React from "react";
import styles from "../verdictTen/styles.module.css";
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
                  10. Книга десять. Вердикт десять. Друзья разбойника. Жители
                  города. Праведники. Сто сорок четыре тысячи девственников
                  мужского пола, тех, кто согласились идти за Мной.
                  Запечатлённые. Помилованные.
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
                <h4 className={styles.isava}>
                  Книга десять. Книга чистых сердцем. Эта книга, как и
                  строительство престола, является книгой первого воскрешения. А
                  это и жители города. Праведники. Сто сорок четыре тысячи
                  девственников мужского пола, тех, кто согласились идти за
                  Христом. Как я понимаю, самые близкие Христу люди. Разумеется,
                  они не обременены смертельно если через какое-то время решат
                  создать семью. Запечатлённые. Помилованные. На данном этапе
                  лично я могу ответить за внесение имён маленьких детей которых
                  Бог призвал в своё Царство. Возврат от рождения до пяти лет.
                  По остальным деткам я не компетентен и прошу вас, когда вы
                  пишите анкеты детей старше пяти лет, пишите больше информации,
                  для судей которым решать кого вы воспитывали в отведённое вам
                  время.
                </h4>
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

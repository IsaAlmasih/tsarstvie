"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../lawOne/styles.module.css";

export default function law() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
    q5: "1",
    q6: "1",
    q7: "1",
    q8: "1",
    q9: "1",
    q10: "1",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (answers.q1 === "1",
      answers.q2 === "1",
      answers.q3 === "1",
      answers.q4 === "1",
      answers.q5 === "1",
      answers.q6 === "1",
      answers.q7 === "1",
      answers.q8 === "1",
      answers.q9 === "1",
      answers.q10 === "1")
    ) {
      router.push("/additional");
    } else {
      alert("Некорректные ответы, попробуйте снова!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.blok}>
          <div className={styles.blo}>
            <div className={styles.text}>
              <label>Тама с вопросами первой Заповеди</label>
              <input
                name="q1"
                value={answers.q1}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 1"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>Тама с вопросами второй Заповеди</label>
              <input
                name="q2"
                value={answers.q2}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 2"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>Тама с вопросами третей Заповеди</label>
              <input
                name="q3"
                value={answers.q3}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 3"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>Тама с вопросами четвёртой Заповеди</label>
              <input
                name="q4"
                value={answers.q4}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 4"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 5. Богородица родила естественным путём или описанным в
                Новом Завете?
              </label>
              <input
                name="q5"
                value={answers.q5}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 5"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 6. История Адама и Евы буквальная история или
                завуалированная история миллионов лет эволюции?
              </label>
              <input
                name="q6"
                value={answers.q6}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 6"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 7. Понимаете ли, вы, что у обручившиеся с виновными по
                вине прелюбодеяния нет шансов на спасение?
              </label>
              <input
                name="q7"
                value={answers.q7}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 7"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 8. Понимаете ли, вы, что у разведённых без вины
                прелюбодеяния нет шансов на спасение?
              </label>
              <input
                name="q8"
                value={answers.q8}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 8"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 9. Понимаете ли, вы, что тот, кто соблазнил мужа или жену
                на изменy разделит награду с осуждёнными по вине прелюбодеяния?
              </label>
              <input
                name="q9"
                value={answers.q9}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 9"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 10. Понимаете ли, вы, что кесарь, патриарх, князь, царь,
                в нашем времени = дьявол?
              </label>
              <input
                name="q10"
                value={answers.q10}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 10"
              />
              <div className={styles.optuv}>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 1"
                    checked={answers.q1 === "вариант 1"}
                    onChange={handleChange}
                  />
                  Да нажмите 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="вариант 2"
                    checked={answers.q1 === "вариант 2"}
                    onChange={handleChange}
                  />
                  Нет нажмите 2
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.buttonLaw}>
          Отправить
        </button>
        <button className={styles.buttonla}>
          <a href="/tsarstvie">На главную. </a>
        </button>
      </div>
    </form>
  );
}

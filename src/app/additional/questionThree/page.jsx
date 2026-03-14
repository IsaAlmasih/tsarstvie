"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../../additional/questionThree/styles.module.css";

export default function Questions() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "Нет", // или "Нет", чтобы по умолчанию было выбрано что-то
    q2: "Нет",
    q3: "Нет",
    q4: "Нет",
    q5: "Нет",
    q6: "Нет",
    q7: "Нет",
    q8: "Нет",
    q9: "Нет",
    q10: "Нет",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      answers.q1 === "Нет" &&
      answers.q2 === "Нет" &&
      answers.q3 === "Да" &&
      answers.q4 === "Да" &&
      answers.q5 === "Да" &&
      answers.q6 === "Да" &&
      answers.q7 === "Да" &&
      answers.q8 === "Да" &&
      answers.q9 === "Да" &&
      answers.q10 === "Да"
    ) {
      // Правильный ответ - переходим на страницу
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
              <label>
                Вопрос 1. Вопросы третей заповеди заполни!
              </label>
              <input
                name="q1"
                value={answers.q1}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 1"
              />
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="Да"
                  checked={answers.q1 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="Нет"
                  checked={answers.q1 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 2. Как вы считаете, разведённые без вины прелюбодеяния,
                имеют шанс обрести Христа?
              </label>
              <input
                name="q2"
                value={answers.q2}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 2"
              />
              <label>
                <input
                  type="radio"
                  name="q2"
                  value="Да"
                  checked={answers.q2 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  value="Нет"
                  checked={answers.q2 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 3. Как вы считаете, участь ваших детей, зависит от
                тяжести ваших грехов?
              </label>
              <input
                name="q3"
                value={answers.q3}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 3"
              />
              <label>
                <input
                  type="radio"
                  name="q3"
                  value="Да"
                  checked={answers.q3 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q3"
                  value="Нет"
                  checked={answers.q3 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 4. Согласны ли с утверждением, что, занимаясь рукоблудием
                или мастурбацией идти против Христа?
              </label>
              <input
                name="q4"
                value={answers.q4}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 4"
              />
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Да"
                  checked={answers.q4 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Нет"
                  checked={answers.q4 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 5. Согласны ли вы, что история Адама и Евы,
                завуалированная история миллионов лет эволюции?
              </label>
              <input
                name="q5"
                value={answers.q5}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 5"
              />
              <label>
                <input
                  type="radio"
                  name="q5"
                  value="Да"
                  checked={answers.q5 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q5"
                  value="Нет"
                  checked={answers.q5 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 6. Понимаете ли, вы, что кесарь = князь = царь =
                президент = фараон = патриарх = дьявол?
              </label>
              <input
                name="q6"
                value={answers.q6}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 6"
              />
              <label>
                <input
                  type="radio"
                  name="q6"
                  value="Да"
                  checked={answers.q6 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q6"
                  value="Нет"
                  checked={answers.q6 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 7. Согласны ли вы что Всевышний и Иисус Одно Лицо?
              </label>
              <input
                name="q7"
                value={answers.q7}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 7"
              />
              <label>
                <input
                  type="radio"
                  name="q7"
                  value="Да"
                  checked={answers.q7 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q7"
                  value="Нет"
                  checked={answers.q7 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 8. Понимаете ли, вы, что на исповеди вино, не кровь, а
                алкоголь?
              </label>
              <input
                name="q8"
                value={answers.q8}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 8"
              />
              <label>
                <input
                  type="radio"
                  name="q8"
                  value="Да"
                  checked={answers.q8 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q8"
                  value="Нет"
                  checked={answers.q8 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 9. Есть ли нормы употребления алкоголя Христовым?
              </label>
              <input
                name="q9"
                value={answers.q9}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 9"
              />
              <label>
                <input
                  type="radio"
                  name="q9"
                  value="Да"
                  checked={answers.q9 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q9"
                  value="Нет"
                  checked={answers.q9 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
            <div className={styles.text}>
              <label>
                Вопрос 10. Понимаете ли, вы, что ваш мир итог вашего поведения?
              </label>
              <input
                name="q10"
                value={answers.q10}
                onChange={handleChange}
                placeholder="Ответьте на вопрос 10"
              />
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Да"
                  checked={answers.q10 === "Да"}
                  onChange={handleChange}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Нет"
                  checked={answers.q10 === "Нет"}
                  onChange={handleChange}
                />
                Нет
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.buttonLaw}>
          Отправить
        </button>
      </div>
    </form>
  );
}

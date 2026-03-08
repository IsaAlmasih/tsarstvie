"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../questions/styles.module.css";

export default function Questions() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "Нет", // или "Нет", чтобы по умолчанию было выбрано что-то
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.q1 === "Нет") {
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
              <label>Вопрос 1. Как вы считаете, можно курить сигареты или нет?</label>
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
          </div>
        </div>
        <button type="submit" className={styles.buttonLaw}>
          Отправить
        </button>
      </div>
    </form>
  );
}

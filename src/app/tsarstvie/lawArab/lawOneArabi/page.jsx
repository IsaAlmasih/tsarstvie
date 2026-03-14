"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../lawOneArabi/styles.module.css";
import Link from "next/link";

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
              <Link href="/additional/questionOne">
                تطرح تاما أسئلة حول الوصية الأولى.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionTwo">
                يتعلق السؤال بالوصية الثانية للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionThree">
                تاما لديها أسئلة حول الوصية الثالثة.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionFour">
                يتعلق السؤال بالوصية الرابعة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionFive">
                يتعلق السؤال بالوصية الخامسة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionSix">
                يتعلق السؤال بالوصية السادسة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionSeven">
                يتعلق السؤال بالوصية السابعة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionEight">
                يتعلق السؤال بالوصية الثامنة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionNine">
                يتعلق السؤال بالوصية التاسعة للمسيح.
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="/additional/questionTen">
                يتعلق السؤال بالوصية العاشرة للمسيح.
              </Link>
            </div>
          </div>
        </div>
        {/* <button type="submit" className={styles.buttonLaw}>
          Отправить
        </button> */}
        <button className={styles.buttonLaw}>
          <a href="/tsarstvie/3">منزل</a>
        </button>
      </div>
    </form>
  );
}

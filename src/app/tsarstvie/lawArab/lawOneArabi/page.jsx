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
            <div className={styles.textGrid}>
              <div className={styles.textGridOne}>
                <Link href="/additional/questionOne">
                  موضوع مع أسئلة حول الوصية الأولى.
                </Link>
              </div>
              <div className={styles.textGridTwo}>
                <Link href="/additional/questionTwo">
                  موضوع مع أسئلة حول الوصية الثانية.
                </Link>
              </div>
              <div className={styles.textGridThree}>
                <Link href="/additional/questionThree">
                  موضوع مع أسئلة حول الوصية الثالثة.
                </Link>
              </div>
              <div className={styles.textGridFour}>
                <Link href="/additional/questionFour">
                  موضوع مع أسئلة حول الوصية الرابعة.
                </Link>
              </div>
              <div className={styles.textGridFive}>
                <Link href="/additional/questionFive">
                  موضوع مع أسئلة حول الوصية الخامسة.
                </Link>
              </div>
              <div className={styles.textGridSix}>
                <Link href="/additional/questionSix">
                  موضوع مع أسئلة حول الوصية السادسة.
                </Link>
              </div>
              <div className={styles.textGridSeven}>
                <Link href="/additional/questionSeven">
                  موضوع مع أسئلة حول الوصية السابعة.
                </Link>
              </div>
              <div className={styles.textGridEight}>
                <Link href="/additional/questionEight">
                  موضوع مع أسئلة حول الوصية الثامنة.
                </Link>
              </div>
              <div className={styles.textGridNine}>
                <Link href="/additional/questionNine">
                  موضوع مع أسئلة حول الوصية التاسعة.
                </Link>
              </div>
              <div className={styles.textGridTen}>
                <Link href="/additional/questionTen">
                  موضوع مع أسئلة الوصية العاشرة.
                </Link>
              </div>
              {/* <div className={styles.textGridEleven}>
                <Link href="/additional/questionTen">
                  Тама с вопросами десятой Заповеди.
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <button className={styles.buttonLaw}>
          <a href="/tsarstvie/1">На главную. </a>
        </button>
      </div>
    </form>
  );
}

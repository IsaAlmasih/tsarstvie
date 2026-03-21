"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../../../tsarstvie/lawSha/lawOneSha/styles.module.css";
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
                  Tama asks questions about the first commandment.
                </Link>
              </div>
              <div className={styles.textGridTwo}>
                <Link href="/additional/questionTwo">
                  Tama asks questions about the second commandment.
                </Link>
              </div>
              <div className={styles.textGridThree}>
                <Link href="/additional/questionThree">
                  Tama asks questions about the third commandment.
                </Link>
              </div>
              <div className={styles.textGridFour}>
                <Link href="/additional/questionFour">
                  Tama asks questions about the fourth commandment.
                </Link>
              </div>
              <div className={styles.textGridFive}>
                <Link href="/additional/questionFive">
                  Tama asks questions about the fifth commandment.
                </Link>
              </div>
              <div className={styles.textGridSix}>
                <Link href="/additional/questionSix">
                  Tama asks questions about the sixth commandment.
                </Link>
              </div>
              <div className={styles.textGridSeven}>
                <Link href="/additional/questionSeven">
                  Tama asks questions about the seventh commandment.
                </Link>
              </div>
              <div className={styles.textGridEight}>
                <Link href="/additional/questionEight">
                  Tama asks questions about the eighth commandment.
                </Link>
              </div>
              <div className={styles.textGridNine}>
                <Link href="/additional/questionNine">
                  Tama asks questions about the ninth commandment.
                </Link>
              </div>
              <div className={styles.textGridTen}>
                <Link href="/additional/questionTen">
                  Tama asks questions about the tenth commandment.
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.buttonLaw}>
          <a href="/tsarstvie/2">To the main page.</a>
        </button>
      </div>
    </form>
  );
}

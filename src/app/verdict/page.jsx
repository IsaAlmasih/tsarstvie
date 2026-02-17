"use client";

import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappe}>
        <div>
          <h1>Вердикты.</h1>
        </div>
        <div>
          <a href="/verdict/verdictOne">Книга первого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictTwo">Книга второго вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictThree">Книга третьего вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictFour">Книга четвёртого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictFive">Книга пятого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdicSix">Книга шестого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictSeven">Книга седьмого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictEight">Книга восьмого вердикта</a>
        </div>
        <div>
          <a href="/verdict/verdictNine">Книга девятого вердикта</a>
        </div>
        <div className={styles.wrappTen}>
          <a href="/verdict/verdictTen">
            <h2>Книга десятого вердикта Книга Жизни. 
            Кига первого Воскрешения</h2>
          </a>
        </div>
      </div>
      <button className={styles.button}>
        <a href="/tsarstvie">Назад.</a>
      </button>
    </div>
  );
};

export default page;

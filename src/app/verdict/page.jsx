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
        <div>Книга третьего вердикта</div>
        <div>Книга четвёртого вердикта</div>
        <div>Книга пятого вердикта</div>
        <div>Книга шестого вердикта</div>
        <div>Книга седьмого вердикта</div>
        <div>Книга восьмого вердикта</div>
        <div>Книга девятого вердикта</div>
        <div>
          Книга десятого вердикта Книга Жизни. Книга первого Воскрешения
        </div>
      </div>
      <button className={styles.button}>
        <a href="/tsarstvie">Назад.</a>
      </button>
    </div>
  );
};

export default page;

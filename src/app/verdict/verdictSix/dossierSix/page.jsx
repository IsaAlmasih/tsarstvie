"use client";
import React from "react";
import styles from "../dossierSix/styles.module.css";
import HTMLFlipBook from "react-pageflip";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <HTMLFlipBook width={430} height={600} className={styles.book}>
        <div className={styles.firstPage}>
          <h4>"Привет привет привет привет"</h4>
        </div>
        <div className={styles.secondPage}>
          <h4>"Сам Привет Сам привет Сам привет Сам привет"</h4>
        </div>
        <div className={styles.thirdPage}>
          <h4>"Это это. И это. привет"</h4>
        </div>
        <div className={styles.secondPage}>
          <h4>"Привет привет привет привет"</h4>
        </div>
        <div className={styles.firstPage}></div>
        <div className={styles.secondPage}></div>
        <div className={styles.firstPage}>Page 7</div>
        <div className={styles.secondPage}>Page 8</div>
      </HTMLFlipBook>
      <button className={styles.button}>
        <a href="/verdict">Назад</a>
      </button>
    </div>
  );
};

export default page;

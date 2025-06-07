"use client"
import React from 'react'
import styles from "./styles.module.css"
import HTMLFlipBook from 'react-pageflip';
// import { useNavigate } from 'react-router';

const Book = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <HTMLFlipBook width={430} height={600} className={styles.book}>
        <div className={styles.firstPage}>
          <textarea name="" defaultValue="Привет привет привет привет"></textarea>
        </div>
        <div className={styles.secondPage}>
          <textarea name="" defaultValue="Привет привет привет привет"></textarea>
        </div>
        <div className={styles.thirdPage}>
          <textarea name="" defaultValue="Дима, это победа."></textarea>
        </div>
        <div className={styles.secondPage}>
          <textarea name="" defaultValue="Привет Дима, это победа."></textarea>
        </div>
        <div className={styles.firstPage}></div>
        <div className={styles.secondPage}></div>
        <div className={styles.firstPage}>Page 7</div>
        <div className={styles.secondPage}>Page 8</div>
      </HTMLFlipBook>
      {/* <button onClick={() => navigate(-1)} className={styles.button}>
        {"<--"}Назад
      </button> */}
    </div>
  );
}

export default Book
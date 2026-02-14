"use client"
import React from 'react'
import styles from "./styles.module.css"
import HTMLFlipBook from 'react-pageflip';
import { useNavigate } from 'react';

const Book = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className={styles.wrapper}>
          <HTMLFlipBook width={900} height={700} className={styles.book}>
            <div className={styles.firstPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.secondPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.thirdPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.secondPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.firstPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.secondPage}>
              <p>"Привет привет привет привет"</p>
            </div>
            <div className={styles.firstPage}>
              <p>"Привет привет привет привет"</p>Page 7
            </div>
            <div className={styles.secondPage}>
              <p>"Привет привет привет привет"</p>Page 8
            </div>
          </HTMLFlipBook>
        </div>
      </div>
      <button className={styles.button}>
        {" "}
        <a href="/tsarstvie/almasih">Назад</a>
      </button>
    </div>
  );
}

export default Book
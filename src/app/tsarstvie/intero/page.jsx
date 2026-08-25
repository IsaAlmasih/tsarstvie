"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../intero/styles.module.css";
import Link from "next/link";

export default function intero() {
  const router = useRouter();
      <div className={styles.wrapper}>
        <div className={styles.blok}>
          <div className={styles.blo}>
            <div className={styles.textGrid}>
              <div className={styles.textGridOne}>
                <Link href="/tsarstvie/educat/id">
                  Тама о тысячилетнем царстве.
                </Link>
              </div>
              <div className={styles.textGridTwo}>
                <Link href="/tsarstvie/educat/id">Тама о книгах Христа.</Link>
              </div>
              <div className={styles.textGridThree}>
                <Link href="/tsarstvie/educat/id">
                  Тама о принятии реальности к духовному.
                </Link>
              </div>
              <div className={styles.textGridFour}>
                <Link href="/tsarstvie/educat/id">Тама о питании.</Link>
              </div>
              <div className={styles.textGridFive}>
                <Link href="/tsarstvie/educat/id">Тама с.</Link>
              </div>
              <div className={styles.textGridSix}>
                <Link href="/tsarstvie/educat/id">Тама с .</Link>
              </div>
              <div className={styles.textGridSeven}>
                <Link href="/tsarstvie/educat/id">Тама с .</Link>
              </div>
              <div className={styles.textGridEight}>
                <Link href="/tsarstvie/educat/id">Тама с .</Link>
              </div>
              <div className={styles.textGridNine}>
                <Link href="/tsarstvie/educat/id">Тама с.</Link>
              </div>
              {/* <div className={styles.textGridTen}>
                <Link href="/additional/questionTen">
                  Тама с вопросами десятой Заповеди.
                </Link>
              </div> */}
              <div className={styles.textGridTen}>
                <Link href="//tsarstvie/progrs">Тама программирование.</Link>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.buttonLaw}>
          <a href="/tsarstvie/1">На главную. </a>
        </button>
      </div>
}

"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { verdicts } from "@/data/verdicts";

const page = () => {
  const { id } = useParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          {/* Тут обращаемся к масиву вердикта. Вызываем метод фаинд. В аргументы этого метода передаём функцию которой мы указывает по какому пораметру мы хотим найти результат. */}
          <P4>{verdicts.find((verdict) => verdict.id == id).text}</P4>
          <Link href="/sentence">Послание.</Link>
          <Link href={`/verdict/${id}/books`}>Книги вердикта.</Link>
          <Link href="/verdict">Вернуться назад.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

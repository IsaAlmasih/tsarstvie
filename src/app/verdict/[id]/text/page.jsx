"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { verdicts } from "@/data/verdicts";

const page = () => {
const {id}=useParams()
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <h1>{verdicts.find((verdict) => verdict.id == id).text}</h1>
          <Link href={`/verdict/${id}`}>Вернуться назад.</Link>
                        {/* Конкатенация строк. */}
        </div>
      </div>
    </div>
  );
};

export default page;

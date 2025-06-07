import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import { verdicts } from "@/data/verdicts";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          {verdicts.map((verdict) => (
            <Link href={`/verdict/${verdict.id.toString()}`}>{verdict.title}</Link>
          ))}
          <Link href="/tsarstvie">Вернуться назад.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

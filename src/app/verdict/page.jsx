import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.footerText}>
          <Link href="/verdict/textVerdictOne">Вердикт 1.</Link>
          <Link href="/verdict/textVerdictTwo">Вердикт 2.</Link>
          <Link href="/verdict/textVerdictThree">Вердикт 3.</Link>
          <Link href="/verdict/textVerdictFour">Вердикт 4.</Link>
          <Link href="/verdict/textVerdictFive">Вердикт 5.</Link>
          <Link href="/verdict/textVerdictSix">Вердикт 6.</Link>
          <Link href="/verdict/textVerdictSeven">Вердикт 7.</Link>
          <Link href="/verdict/textVerdictEight">Вердикт 8.</Link>
          <Link href="/verdict/textVerdictNine">Вердикт 9.</Link>
          <Link href="/verdict/textVerdictTen">Вердикт 10.</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

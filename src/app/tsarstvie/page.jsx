"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blok}>
        <div className={styles.textGrid}>
          <div className={styles.text}>
            <Link href="/commandments">Заповеди Иисуса Христа.</Link>
            <Link href="/tsarstvie/law">Закон Всевышнего Иисуса Христа.</Link>
            <Link href="/tsarstvie/almasih">Престол Давида.</Link>
            <Link href="/tsarstvie/churches">Церкви.</Link>
            <Link href="https://www.supremesanhedrin.ru/">Синедрион.</Link>
            <Link href="/lights">Светильники.</Link>
            <Link href="/tribesisrael">12 колен Израиля</Link>
            <Link href="/verdict">Вердикты.</Link>
            <Link href="/" className={styles.textTsar}>
              Вернуться на главную.
            </Link>
          </div>
          <div className={styles.text}>
            <Link href="/commandments">The Commandments of Jesus Christ.</Link>
            <Link href="/tsarstvie/law">
              The Law of the Most High Jesus Christ.
            </Link>
            <Link href="/tsarstvie/almasih">The Throne of David.</Link>
            <Link href="/tsarstvie/churches">Churches.</Link>
            <Link href="https://www.supremesanhedrin.ru/">The Sanhedrin.</Link>
            <Link href="/lights">Lampstands.</Link>
            <Link href="/tribesisrael">The 12 Tribes of Israel.</Link>
            <Link href="/verdict">Verdicts.</Link>
            <Link href="/" className={styles.textTsar}>
              Return to the main page.
            </Link>
          </div>
          <div className={styles.text}>
            <Link href="/commandments">وصايا يسوع المسيح.</Link>
            <Link href="/tsarstvie/law">شريعة يسوع المسيح العليّ.</Link>
            <Link href="/tsarstvie/isaAlmasih">عرش داود.</Link>
            <Link href="/tsarstvie/churches">الكنائس.</Link>
            <Link href="https://www.supremesanhedrin.ru/">السنهدريم.</Link>
            <Link href="/lights">المنائر.</Link>
            <Link href="/tribesisrael">أسباط إسرائيل الاثنا عشر.</Link>
            <Link href="/verdict">الأحكام.</Link>
            <Link href="/" className={styles.textTsar}>
              العودة إلى الصفحة الرئيسية.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
